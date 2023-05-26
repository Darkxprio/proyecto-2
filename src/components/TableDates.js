import { useContext, useEffect, useState } from 'react';
import styles from './TableDates.module.css'
import { Context } from '../services/Memory';
import Url2 from './Url2';

function TableDates({data}) {

    const [, dispatch] = useContext(Context);
    const [tableData, setTableData] = useState(data);

    const handleDelete = (id, speciality, atention, details, name, date) => {
        dispatch({
            type: 'deleteDate',
            payload: {
                id: id,
                speciality: speciality,
                atention: atention,
                details: details,
                name: name,
                date: date
            }
        });
        setTableData(prevData => prevData.filter(item => item.id !== id));
    };

    useEffect(()=> {
        setTableData(data);
    }, [data])

  return (
    <div className='flex justify-center mt-7'>
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.thead}>
                    <th className={styles.rowhead}>ESPECIALIDAD</th>
                    <th className={styles.rowhead}>PROFESIONAL</th>
                    <th className={styles.rowhead}>ATENCION</th>
                    <th className={styles.rowhead}>FECHA</th>
                    <th className={styles.rowhead}>HORARIO</th>
                    <th className={styles.rowhead}>NOMBRE</th>
                    <th className={styles.rowhead}>EDAD</th>
                    <th className={styles.rowhead}>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
            {tableData.map((item, index) => (
            <tr key={index}>
              <td className={styles.row}>{item.speciality}</td>
              <td className={styles.row}>{item.professional}</td>
              <td className={styles.row}>{item.atention}</td>
              <td className={styles.row}>{item.date}</td>
              <td className={styles.row}>EN PROCESO</td>
              <td className={styles.row}>{item.name}</td>
              <td className={`${styles.row} text-center`}>{item.age}</td>
              <td className={`${styles.row} text-center`}>
              <Url2 to={`/check-dates/${item.id}/${item.details}/${item.atention}`}>
                <button>
                    <i className={`${styles.buttonedit} fa-regular fa-pen-to-square`}></i>
                </button>
                </Url2>
              <button 
              onClick={(e) => {
                handleDelete(item.id, item.speciality, item.atention, item.details, item.name, item.date);
                e.preventDefault();
              }}
              ><i className={`${styles.buttondelete} fa-solid fa-trash`}></i></button>
              </td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default TableDates