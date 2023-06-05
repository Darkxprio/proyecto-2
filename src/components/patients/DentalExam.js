import React, { useEffect, useState } from "react";
import { ReactComponent as SVGTooth } from "../../img/Mapa-dental.svg";
import styles from "./DentalExam.module.css";
import DentalExamTable from "./tables/DentalExamTable";

function DentalExam({ data }) {
  const [selectedTooth, setSelectedTooth] = useState([]);

  const updateSelectedTooth = (newSelectedTooth) => {
    setSelectedTooth(newSelectedTooth);
  };

  const handleDisable = (number) => {
    return selectedTooth.includes(number);
  };

  useEffect(() => {
    const numericProperties = [];
    for (let propiedad in data[0]) {
      if (!isNaN(Number(propiedad))) {
        numericProperties.push(propiedad);
      }
    }
    setSelectedTooth(numericProperties);
  }, [data]);

  return (
    <div className={styles.card}>
      <h1 className="text-center">EXAMEN CLÍNICO DENTAL</h1>
      <div className="flex justify-evenly my-3">
        <div className="flex">
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 18])
            }
            disabled={handleDisable(18)}
          >
            <h2 className={styles.h2}>18</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 17])
            }
            disabled={handleDisable(17)}
          >
            <h2 className={styles.h2}>17</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 16])
            }
            disabled={handleDisable(16)}
          >
            <h2 className={styles.h2}>16</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 15])
            }
            disabled={handleDisable(15)}
          >
            <h2 className={styles.h2}>15</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 14])
            }
            disabled={handleDisable(14)}
          >
            <h2 className={styles.h2}>14</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 13])
            }
            disabled={handleDisable(13)}
          >
            <h2 className={styles.h2}>13</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 12])
            }
            disabled={handleDisable(12)}
          >
            <h2 className={styles.h2}>12</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 11])
            }
            disabled={handleDisable(11)}
          >
            <h2 className={styles.h2}>11</h2>
            <SVGTooth className={styles.tooth} />
          </button>
        </div>
        <div className="flex">
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 21])
            }
            disabled={handleDisable(21)}
          >
            <h2 className={styles.h2}>21</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 22])
            }
            disabled={handleDisable(22)}
          >
            <h2 className={styles.h2}>22</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 23])
            }
            disabled={handleDisable(23)}
          >
            <h2 className={styles.h2}>23</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 24])
            }
            disabled={handleDisable(24)}
          >
            <h2 className={styles.h2}>24</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 25])
            }
            disabled={handleDisable(25)}
          >
            <h2 className={styles.h2}>25</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 26])
            }
            disabled={handleDisable(26)}
          >
            <h2 className={styles.h2}>26</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 27])
            }
            disabled={handleDisable(27)}
          >
            <h2 className={styles.h2}>27</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 28])
            }
            disabled={handleDisable(28)}
          >
            <h2 className={styles.h2}>28</h2>
            <SVGTooth className={styles.tooth} />
          </button>
        </div>
      </div>
      <div className="flex justify-evenly my-3">
        <div className="flex">
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 55])
            }
            disabled={handleDisable(55)}
          >
            <h2 className={styles.h2}>55</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 54])
            }
            disabled={handleDisable(54)}
          >
            <h2 className={styles.h2}>54</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 53])
            }
            disabled={handleDisable(53)}
          >
            <h2 className={styles.h2}>53</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 52])
            }
            disabled={handleDisable(52)}
          >
            <h2 className={styles.h2}>52</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 51])
            }
            disabled={handleDisable(51)}
          >
            <h2 className={styles.h2}>51</h2>
            <SVGTooth className={styles.tooth} />
          </button>
        </div>
        <div className="flex">
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 61])
            }
            disabled={handleDisable(61)}
          >
            <h2 className={styles.h2}>61</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 62])
            }
            disabled={handleDisable(62)}
          >
            <h2 className={styles.h2}>62</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 63])
            }
            disabled={handleDisable(63)}
          >
            <h2 className={styles.h2}>63</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 64])
            }
            disabled={handleDisable(64)}
          >
            <h2 className={styles.h2}>64</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 65])
            }
            disabled={handleDisable(65)}
          >
            <h2 className={styles.h2}>65</h2>
            <SVGTooth className={styles.tooth} />
          </button>
        </div>
      </div>
      <div className="flex justify-evenly my-3">
        <div className="flex">
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 85])
            }
            disabled={handleDisable(85)}
          >
            <h2 className={styles.h2}>85</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 84])
            }
            disabled={handleDisable(84)}
          >
            <h2 className={styles.h2}>84</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 83])
            }
            disabled={handleDisable(83)}
          >
            <h2 className={styles.h2}>83</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 82])
            }
            disabled={handleDisable(82)}
          >
            <h2 className={styles.h2}>82</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 81])
            }
            disabled={handleDisable(81)}
          >
            <h2 className={styles.h2}>81</h2>
            <SVGTooth className={styles.tooth} />
          </button>
        </div>
        <div className="flex">
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 71])
            }
            disabled={handleDisable(71)}
          >
            <h2 className={styles.h2}>71</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 72])
            }
            disabled={handleDisable(72)}
          >
            <h2 className={styles.h2}>72</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 73])
            }
            disabled={handleDisable(73)}
          >
            <h2 className={styles.h2}>73</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 74])
            }
            disabled={handleDisable(74)}
          >
            <h2 className={styles.h2}>74</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 75])
            }
            disabled={handleDisable(75)}
          >
            <h2 className={styles.h2}>75</h2>
            <SVGTooth className={styles.tooth} />
          </button>
        </div>
      </div>
      <div className="flex justify-evenly my-3">
        <div className="flex">
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 48])
            }
            disabled={handleDisable(48)}
          >
            <h2 className={styles.h2}>48</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 47])
            }
            disabled={handleDisable(47)}
          >
            <h2 className={styles.h2}>47</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 46])
            }
            disabled={handleDisable(46)}
          >
            <h2 className={styles.h2}>46</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 45])
            }
            disabled={handleDisable(45)}
          >
            <h2 className={styles.h2}>45</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 44])
            }
            disabled={handleDisable(44)}
          >
            <h2 className={styles.h2}>44</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 43])
            }
            disabled={handleDisable(43)}
          >
            <h2 className={styles.h2}>43</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 42])
            }
            disabled={handleDisable(42)}
          >
            <h2 className={styles.h2}>42</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 41])
            }
            disabled={handleDisable(41)}
          >
            <h2 className={styles.h2}>41</h2>
            <SVGTooth className={styles.tooth} />
          </button>
        </div>
        <div className="flex">
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 31])
            }
            disabled={handleDisable(31)}
          >
            <h2 className={styles.h2}>31</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 32])
            }
            disabled={handleDisable(32)}
          >
            <h2 className={styles.h2}>32</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 33])
            }
            disabled={handleDisable(33)}
          >
            <h2 className={styles.h2}>33</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 34])
            }
            disabled={handleDisable(34)}
          >
            <h2 className={styles.h2}>34</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 35])
            }
            disabled={handleDisable(35)}
          >
            <h2 className={styles.h2}>35</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 36])
            }
            disabled={handleDisable(36)}
          >
            <h2 className={styles.h2}>36</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 37])
            }
            disabled={handleDisable(37)}
          >
            <h2 className={styles.h2}>37</h2>
            <SVGTooth className={styles.tooth} />
          </button>
          <button
            onClick={() =>
              setSelectedTooth((prevSelected) => [...prevSelected, 38])
            }
            disabled={handleDisable(38)}
          >
            <h2 className={styles.h2}>38</h2>
            <SVGTooth className={styles.tooth} />
          </button>
        </div>
      </div>
      <DentalExamTable
        data={data}
        selectedTooth={selectedTooth}
        updateSelectedTooth={updateSelectedTooth}
      />
    </div>
  );
}

export default DentalExam;
