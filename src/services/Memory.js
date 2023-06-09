import React, { useReducer } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

// localStorage.clear();

const memory = localStorage.getItem("consultory");
const initialState = memory
  ? JSON.parse(memory)
  : {
      order: [],
      info: {},
      dates: [],
      time: [],
    };

function reductor(state, action) {
  switch (action.type) {
    case "scheduleNew": {
      const {
        speciality,
        professional,
        atention,
        details,
        date,
        name,
        age,
        phone,
        times,
      } = action.payload;

      const id = uuidv4();
      const idTime = (speciality + professional + date)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toUpperCase();

      const firstTime = times[0];
      const lastTime = times[times.length - 1];
      const timeRange = `${firstTime} - ${lastTime}`.replace(/"/g, "");

      const timesObject = {};
      times.forEach((time) => {
        timesObject[time] = time;
      });

      const isNewTime = state.time.some((item) => item.idTime === idTime);

      if (isNewTime) {
        const updatedTime = state.time.map((item) => {
          if (item.idTime === idTime) {
            return {
              ...item,
              ...timesObject,
            };
          }
          return item;
        });

        const newDate = {
          ...timesObject,
          id,
          name,
          age,
          phone,
          speciality,
          professional,
          atention,
          details,
          date,
          timeRange,
          available: "Pendiente",
        };

        const newState = {
          order: [...state.order, id],
          info: {
            ...state.info,
            [id]: { id, name, age, phone, speciality },
          },
          dates: [...state.dates, newDate],
          time: updatedTime,
        };
        console.log(newState);
        localStorage.setItem("consultory", JSON.stringify(newState));
        return newState;
      } else {
        const newTimes = {
          ...timesObject,
          idTime,
        };

        const newDate = {
          ...timesObject,
          id,
          name,
          age,
          phone,
          speciality,
          professional,
          atention,
          details,
          date,
          timeRange,
          available: "Pendiente",
        };

        const newState = {
          order: [...state.order, id],
          info: {
            ...state.info,
            [id]: { id, name, age, phone, speciality },
          },
          dates: [...state.dates, newDate],
          time: [...state.time, newTimes],
        };
        console.log(newState);
        localStorage.setItem("consultory", JSON.stringify(newState));
        return newState;
      }
    }
    case "scheduleOld": {
      const {
        speciality,
        professional,
        atention,
        details,
        date,
        name,
        age,
        phone,
        times,
      } = action.payload;
      let id = "";
      const idTime = (speciality + professional + date)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toUpperCase();

      const firstTime = times[0];
      const lastTime = times[times.length - 1];
      const timeRange = `${firstTime} - ${lastTime}`.replace(/"/g, "");

      const timesObject = {};
      times.forEach((time) => {
        timesObject[time] = time;
      });

      const isNewTime = state.time.some((item) => item.idTime === idTime);

      for (const key in state.info) {
        const item = state.info[key];
        if (item.name === name && item.age === age && item.phone === phone) {
          id = item.id;
          break;
        }
      }

      if (isNewTime) {
        const updatedTime = state.time.map((item) => {
          if (item.idTime === idTime) {
            return {
              ...item,
              ...timesObject,
            };
          }
          return item;
        });

        const newDate = {
          ...timesObject,
          id,
          name,
          age,
          phone,
          speciality,
          professional,
          atention,
          details,
          date,
          timeRange,
          available: "Pendiente",
        };

        const newState = {
          order: [...state.order],
          info: { ...state.info },
          dates: [...state.dates, newDate],
          time: updatedTime,
        };
        console.log(newState);
        localStorage.setItem("consultory", JSON.stringify(newState));
        return newState;
      } else {
        const newTimes = {
          ...timesObject,
          idTime,
        };

        const newDate = {
          ...timesObject,
          id,
          name,
          age,
          phone,
          speciality,
          professional,
          atention,
          details,
          date,
          timeRange,
          available: "Pendiente",
        };

        const newState = {
          order: [...state.order],
          info: { ...state.info },
          dates: [...state.dates, newDate],
          time: [...state.time, newTimes],
        };
        console.log(newState);
        localStorage.setItem("consultory", JSON.stringify(newState));
        return newState;
      }
    }
    case "unavilableDate": {
      const {
        id,
        speciality,
        atention,
        details,
        name,
        date,
        timeRange,
        professional,
      } = action.payload;

      const updatedDates = state.dates.map((item) => {
        if (
          item.id === id &&
          item.speciality === speciality &&
          item.atention === atention &&
          item.details === details &&
          item.name === name &&
          item.date === date
        ) {
          return {
            ...item,
            available: "Cancelada",
          };
        }
        return item;
      });

      const idTime = (speciality + professional + date)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toUpperCase();

      const isNewTime = state.time.filter((item) => item.idTime === idTime);
      const findDate = state.dates.filter(
        (item) =>
          item.id === id && item.timeRange === timeRange && item.date === date
      );

      const propiedadesNumericas = {};

      for (const objeto of findDate) {
        for (const clave in objeto) {
          const valor = objeto[clave];
          if (
            typeof clave === "string" &&
            (clave.includes("AM") || clave.includes("PM"))
          ) {
            propiedadesNumericas[clave] = valor;
          }
        }
      }

      for (const objeto of isNewTime) {
        for (const clave in objeto) {
          if (propiedadesNumericas.hasOwnProperty(clave)) {
            delete objeto[clave];
          }
        }
      }

      const newState = {
        ...state,
        dates: updatedDates,
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "completeDate": {
      const { id, speciality, atention, details, name, date } = action.payload;

      const updatedDates = state.dates.map((item) => {
        if (
          item.id === id &&
          item.speciality === speciality &&
          item.atention === atention &&
          item.details === details &&
          item.name === name &&
          item.date === date
        ) {
          return {
            ...item,
            available: "Asistió",
          };
        }
        return item;
      });

      const newState = {
        ...state,
        dates: updatedDates,
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "updateDate": {
      const {
        id,
        speciality,
        professional,
        atention,
        details,
        date,
        specialityBefore,
        professionalBefore,
        dateBefore,
        atentionBefore,
        detailsBefore,
        times,
        timesBeforeGot,
      } = action.payload;

      const firstTime = times[0];
      const lastTime = times[times.length - 1];
      const timeRange = `${firstTime} - ${lastTime}`.replace(/"/g, "");

      const idTimeBefore = (specialityBefore + professionalBefore + dateBefore)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toUpperCase();

      const idTime = (speciality + professional + date)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toUpperCase();

      const timesBeforeObject = {};
      timesBeforeGot.forEach((time) => {
        timesBeforeObject[time] = time;
      });

      const timesObject = {};
      times.forEach((time) => {
        timesObject[time] = time;
      });

      if (idTime === idTimeBefore) {
        const updatedOldTime = state.time.map((item) => {
          if (item.idTime === idTimeBefore) {
            const filteredItem = Object.keys(item)
              .filter((key) => !timesBeforeObject.hasOwnProperty(key))
              .reduce((obj, key) => {
                obj[key] = item[key];
                return {
                  ...obj,
                  ...timesObject,
                };
              }, {});
            return {
              ...filteredItem,
            };
          }
          return item;
        });

        const updatedDates = state.dates.map((item) => {
          if (
            item.id === id &&
            item.speciality === specialityBefore &&
            item.professional === professionalBefore &&
            item.date === dateBefore &&
            item.atention === atentionBefore &&
            item.details === detailsBefore
          ) {
            const filteredItem = Object.keys(item)
              .filter((key) => !timesBeforeObject.hasOwnProperty(key))
              .reduce((obj, key) => {
                obj[key] = item[key];
                return obj;
              }, {});
            return {
              ...filteredItem,
              speciality,
              professional,
              atention,
              details,
              date,
              ...timesObject,
              timeRange,
            };
          }
          return item;
        });

        const newState = {
          ...state,
          dates: updatedDates,
          time: updatedOldTime,
        };
        console.log(newState);
        localStorage.setItem("consultory", JSON.stringify(newState));
        return newState;
      } else {
        // SOLO FALTA EL ELSE, EN EL QUE idTime e idTimeBefore son otros. Tengo que ingresar idTimeBefore y borrar todos los datos respecto a ese y en crear uno nuevo o analizar si es que existe uno igual o parecido también para añadirme a ese otro existente o crear uno completamente nuevo desde cero.
        // else if (item.idTime === idTimeBefore) {
        //   const filteredItem = Object.keys(item)
        //   .filter((key) => !timesBeforeObject.hasOwnProperty(key))
        //   .reduce((obj, key) => {
        //     obj[key] = item[key];
        //     return obj;
        //   }, {});
        // return {
        //   ...filteredItem,
        // };
        // }
        // const newTime = state.time.map((item) => {
        //   if (item.idTime === idTimeBefore) {
        //     return {
        //       ...item,
        //       ...timesObject,
        //     };
        //   } else {
        //     return {
        //       ...timesObject,
        //       idTime,
        //     };
        //   }
        // });
      }
    }
    case "uploadRecipe": {
      const {
        id,
        speciality,
        professional,
        atention,
        date,
        treatment,
        prescription,
      } = action.payload;

      const updatedDates = state.dates.map((item) => {
        if (
          item.id === id &&
          item.speciality === speciality &&
          item.professional === professional &&
          item.atention === atention &&
          item.date === date
        ) {
          return {
            ...item,
            treatment: treatment,
            prescription: prescription,
          };
        }
        return item;
      });

      const newState = {
        ...state,
        dates: updatedDates,
      };
      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addHistory": {
      const { name, age, phone, gender, address, weight, height, blood } =
        action.payload;

      const history = Object.values(state.info).find(
        (item) => item.name === name && item.age === age && item.phone === phone
      );

      const newHistory = {
        ...history,
        gender: gender,
        address: address,
        weight: weight,
        height: height,
        blood: blood,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addPathology": {
      const {
        diabetes,
        artritis,
        sida,
        piepsoriasico,
        artrosis,
        lepra,
        pieartrosico,
        cardiopata,
        hemofilia,
        piediabetico,
        piegeriatrico,
        hipertenso,
        tuberculosis,
        piesifilitico,
        pieatleta,
        epileptico,
        hepatitis,
        pieleproso,
        asma,
        sifilis,
        piesidoso,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        diabetes: diabetes,
        artritis: artritis,
        sida: sida,
        piepsoriasico: piepsoriasico,
        artrosis: artrosis,
        lepra: lepra,
        pieartrosico: pieartrosico,
        cardiopata: cardiopata,
        hemofilia: hemofilia,
        piediabetico: piediabetico,
        piegeriatrico: piegeriatrico,
        hipertenso: hipertenso,
        tuberculosis: tuberculosis,
        piesifilitico: piesifilitico,
        pieatleta: pieatleta,
        epileptico: epileptico,
        hepatitis: hepatitis,
        pieleproso: pieleproso,
        asma: asma,
        sifilis: sifilis,
        piesidoso: piesidoso,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addDermatological": {
      const {
        anhodrosisd,
        anhodrosisi,
        hiperhidrosisd,
        hiperhidrosisi,
        bromhidrosisd,
        bromhidrosisi,
        epidromofitosisd,
        epidromofitosisi,
        ulcerasd,
        ulcerasi,
        grietasd,
        grietasi,
        onicomicosisd,
        onicomicosisi,
        onicogrifosisd,
        onicogrifosisi,
        onicocriptosisd,
        onicocriptosisi,
        verrugaplantard,
        verrugaplantari,
        nevosd,
        nevosi,
        lepsd,
        lepsi,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        anhodrosisd: anhodrosisd,
        anhodrosisi: anhodrosisi,
        hiperhidrosisd: hiperhidrosisd,
        hiperhidrosisi: hiperhidrosisi,
        bromhidrosisd: bromhidrosisd,
        bromhidrosisi: bromhidrosisi,
        epidromofitosisd: epidromofitosisd,
        epidromofitosisi: epidromofitosisi,
        ulcerasd: ulcerasd,
        ulcerasi: ulcerasi,
        grietasd: grietasd,
        grietasi: grietasi,
        onicomicosisd: onicomicosisd,
        onicomicosisi: onicomicosisi,
        onicogrifosisd: onicogrifosisd,
        onicogrifosisi: onicogrifosisi,
        onicocriptosisd: onicocriptosisd,
        onicocriptosisi: onicocriptosisi,
        verrugaplantard: verrugaplantard,
        verrugaplantari: verrugaplantari,
        nevosd: nevosd,
        nevosi: nevosi,
        lepsd: lepsd,
        lepsi: lepsi,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addAngiol": {
      const {
        insufcronicad,
        insufcronicai,
        insufagudad,
        insufagudai,
        varicesd,
        varicesi,
        microvaricesd,
        microvaricesi,
        linfangitisd,
        linfangitisi,
        linfedemad,
        linfedemai,
        malperfd,
        malperfi,
        flebitisd,
        flebitisi,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        insufcronicad: insufcronicad,
        insufcronicai: insufcronicai,
        insufagudad: insufagudad,
        insufagudai: insufagudai,
        varicesd: varicesd,
        varicesi: varicesi,
        microvaricesd: microvaricesd,
        microvaricesi: microvaricesi,
        linfangitisd: linfangitisd,
        linfangitisi: linfangitisi,
        linfedemad: linfedemad,
        linfedemai: linfedemai,
        malperfd: malperfd,
        malperfi: malperfi,
        flebitisd: flebitisd,
        flebitisi: flebitisi,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addDactyloplasties": {
      const {
        sindacfiliad,
        sindacfiliai,
        polidactiliad,
        polidactiliai,
        dedogarrad,
        dedogarrai,
        dedomartillod,
        dedomartilloi,
        dedomasod,
        dedomasoi,
        espolond,
        espoloni,
        exostosispostsupd,
        exostosispostsupi,
        flebitexostosispostinfdisd,
        exostosispostinfi,
        quintod,
        quintoi,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        sindacfiliad: sindacfiliad,
        sindacfiliai: sindacfiliai,
        polidactiliad: polidactiliad,
        polidactiliai: polidactiliai,
        dedogarrad: dedogarrad,
        dedogarrai: dedogarrai,
        dedomartillod: dedomartillod,
        dedomartilloi: dedomartilloi,
        dedomasod: dedomasod,
        dedomasoi: dedomasoi,
        espolond: espolond,
        espoloni: espoloni,
        exostosispostsupd: exostosispostsupd,
        exostosispostsupi: exostosispostsupi,
        flebitexostosispostinfdisd: flebitexostosispostinfdisd,
        exostosispostinfi: exostosispostinfi,
        quintod: quintod,
        quintoi: quintoi,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }

    case "addDeformity": {
      const {
        varoantepied,
        varoantepiei,
        varotalond,
        varotaloni,
        valgoantepied,
        valgoantepiei,
        valgotalond,
        valgotaloni,
        equinod,
        equinoi,
        mecedorad,
        mecedorai,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        varoantepied: varoantepied,
        varoantepiei: varoantepiei,
        varotalond: varotalond,
        varotaloni: varotaloni,
        valgoantepied: valgoantepied,
        valgoantepiei: valgoantepiei,
        valgotalond: valgotalond,
        valgotaloni: valgotaloni,
        equinod: equinod,
        equinoi: equinoi,
        mecedorad: mecedorad,
        mecedorai: mecedorai,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addFemoral": {
      const {
        fuertelentod,
        fuertelentoi,
        fuerterapidod,
        fuerterapidoi,
        debillentod,
        debillentoi,
        debilrapidod,
        debilrapidoi,
        normald,
        normali,
        disminuidad,
        disminuidai,
        nulad,
        nulai,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        fuertelentod: fuertelentod,
        fuertelentoi: fuertelentoi,
        fuerterapidod: fuerterapidod,
        fuerterapidoi: fuerterapidoi,
        debillentod: debillentod,
        debillentoi: debillentoi,
        debilrapidod: debilrapidod,
        debilrapidoi: debilrapidoi,
        normald: normald,
        normali: normali,
        disminuidad: disminuidad,
        disminuidai: disminuidai,
        nulad: nulad,
        nulai: nulai,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addFingers": {
      const {
        infraductusd,
        infraductusi,
        halluxvalgusd,
        halluxvalgusi,
        halluxvarusd,
        halluxvarusi,
        halluxsaparatusd,
        halluxsaparatusi,
        halluxrigidusd,
        halluxrigidusi,
        halluxflexusd,
        halluxflexusi,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        infraductusd: infraductusd,
        infraductusi: infraductusi,
        halluxvalgusd: halluxvalgusd,
        halluxvalgusi: halluxvalgusi,
        halluxvarusd: halluxvarusd,
        halluxvarusi: halluxvarusi,
        halluxsaparatusd: halluxsaparatusd,
        halluxsaparatusi: halluxsaparatusi,
        halluxrigidusd: halluxrigidusd,
        halluxrigidusi: halluxrigidusi,
        halluxflexusd: halluxflexusd,
        halluxflexusi: halluxflexusi,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addOrthopedic": {
      const {
        pieplanod,
        pieplanoi,
        piecavod,
        piecavoi,
        pievalgod,
        pievalgoi,
        piequinod,
        piequinoi,
        pietalusd,
        pietalusi,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        pieplanod: pieplanod,
        pieplanoi: pieplanoi,
        piecavod: piecavod,
        piecavoi: piecavoi,
        pievalgod: pievalgod,
        pievalgoi: pievalgoi,
        piequinod: piequinod,
        piequinoi: piequinoi,
        pietalusd: pietalusd,
        pietalusi: pietalusi,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addNeurological": {
      const {
        reflaquileanod,
        reflaquileanoi,
        reflrotulianod,
        reflrotulianoi,
        anestesiad,
        anestesiai,
        parestesiad,
        parestesiai,
        hipoestesiad,
        hipoestesiai,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        reflaquileanod: reflaquileanod,
        reflaquileanoi: reflaquileanoi,
        reflrotulianod: reflrotulianod,
        reflrotulianoi: reflrotulianoi,
        anestesiad: anestesiad,
        anestesiai: anestesiai,
        parestesiad: parestesiad,
        parestesiai: parestesiai,
        hipoestesiad: hipoestesiad,
        hipoestesiai: hipoestesiai,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addOrthopodologic": {
      const {
        cuadradod,
        cuadradoi,
        egipciod,
        egipcioi,
        griegod,
        griegoi,
        normald,
        normali,
        patológicasd,
        patológicasi,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        cuadradod: cuadradod,
        cuadradoi: cuadradoi,
        egipciod: egipciod,
        egipcioi: egipcioi,
        griegod: griegod,
        griegoi: griegoi,
        normald: normald,
        normali: normali,
        patológicasd: patológicasd,
        patológicasi: patológicasi,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addPodiatry": {
      const {
        hsinnucled,
        hsinnuclei,
        hsncompld,
        hsncompli,
        hconnucleod,
        hconnucleoi,
        hcncompld,
        hcncompli,
        queratodermiad,
        queratodermiai,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        hsinnucled: hsinnucled,
        hsinnuclei: hsinnuclei,
        hsncompld: hsncompld,
        hsncompli: hsncompli,
        hconnucleod: hconnucleod,
        hconnucleoi: hconnucleoi,
        hcncompld: hcncompld,
        hcncompli: hcncompli,
        queratodermiad: queratodermiad,
        queratodermiai: queratodermiai,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addPulses": {
      const { pediod, pedioi, tibialpostd, tibialposti, popliteod, popliteoi } =
        action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        pediod: pediod,
        pedioi: pedioi,
        tibialpostd: tibialpostd,
        tibialposti: tibialposti,
        popliteod: popliteod,
        popliteoi: popliteoi,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addShoe": {
      const {
        deportivod,
        deportivoi,
        altod,
        altoi,
        estrechod,
        estrechoi,
        puntafinad,
        puntafinai,
        botasd,
        botasi,
        sandaliasd,
        sandaliasi,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        deportivod: deportivod,
        deportivoi: deportivoi,
        altod: altod,
        altoi: altoi,
        estrechod: estrechod,
        estrechoi: estrechoi,
        puntafinad: puntafinad,
        puntafinai: puntafinai,
        botasd: botasd,
        botasi: botasi,
        sandaliasd: sandaliasd,
        sandaliasi: sandaliasi,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addTreatment": {
      const treatment = action.payload.treatment;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        treatment: `${treatment}`,
      };

      console.log(treatment);

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addHealthQuestionnaire": {
      const {
        penicilina,
        hemorragias,
        cardiaca,
        renal,
        hepatica,
        arterial,
        reumatica,
        diabetes,
        anemia,
      } = action.payload.checkboxValues;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const newHistory = {
        ...history,
        penicilina: penicilina,
        hemorragias: hemorragias,
        cardiaca: cardiaca,
        renal: renal,
        hepatica: hepatica,
        arterial: arterial,
        reumatica: reumatica,
        diabetes: diabetes,
        anemia: anemia,
      };

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: newHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "addDentalExam": {
      const items = action.payload.items;

      const { id } = action.payload.data[0];

      const history = Object.values(state.info).find((item) => item.id === id);

      const updatedHistory = { ...history };

      items.forEach((item) => {
        updatedHistory[item.item] = item.values;
      });

      const newState = {
        ...state,
        info: { ...state.info, [history.id]: updatedHistory },
      };

      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    default: {
      throw new Error();
    }
  }
}

export const Context = createContext(null);

function Memory({ children }) {
  const [state, dispatch] = useReducer(reductor, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Memory;
