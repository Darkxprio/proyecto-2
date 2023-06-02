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
      } = action.payload;

      const id = uuidv4();

      const newDate = {
        id,
        name,
        age,
        phone,
        speciality,
        professional,
        atention,
        details,
        date,
        available: "Pendiente",
      };

      const newState = {
        order: [...state.order, id],
        info: {
          ...state.info,
          [id]: { id, name, age, phone, speciality },
        },
        dates: [...state.dates, newDate],
      };
      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
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
      } = action.payload;
      let id = "";

      for (const key in state.info) {
        const item = state.info[key];
        if (item.name === name && item.age === age && item.phone === phone) {
          id = item.id;
          break;
        }
      }

      const newDate = {
        id,
        name,
        age,
        phone,
        speciality,
        professional,
        atention,
        details,
        date,
        available: "Pendiente",
      };

      const newState = {
        order: [...state.order],
        info: { ...state.info },
        dates: [...state.dates, newDate],
      };
      console.log(newState);
      localStorage.setItem("consultory", JSON.stringify(newState));
      return newState;
    }
    case "unavilableDate": {
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
            available: "Cancelada",
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
      } = action.payload;

      const updatedDates = state.dates.map((item) => {
        if (
          item.id === id &&
          item.speciality === specialityBefore &&
          item.professional === professionalBefore &&
          item.date === dateBefore &&
          item.atention === atentionBefore &&
          item.details === detailsBefore
        ) {
          return {
            ...item,
            speciality,
            professional,
            atention,
            details,
            date,
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
