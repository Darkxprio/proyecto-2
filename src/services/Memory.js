import React, { useReducer } from 'react'
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

const memory = localStorage.getItem('consultory');
const initialState = memory
    ?JSON.parse(memory)
    : {
        order: [],
        info: {},
        dates: [],
        history: {}
    };

function reductor(state, action){
    switch(action.type){
        case 'scheduleNew': {
            const {speciality, professional, atention, details, date, name, age, phone} = action.payload;

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
            }

            const newState = {
                order: [...state.order, id],
                info: {
                    ...state.info,
                    [id] : {id, name, age, phone, speciality}
                },
                dates: [...state.dates, newDate],
                history: {...state.history}
            }
            console.log(newState)
            localStorage.setItem('consultory', JSON.stringify(newState))
            return newState;
        }
        case 'scheduleOld': {
            const {speciality, professional, atention, details, date, name, age, phone} = action.payload;
            let id = ''

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
                date
            }
            
            const newState = {
                order: [...state.order],
                info: {...state.info},
                dates: [...state.dates, newDate],
                history: {...state.history}
            }
            console.log(newState)
            localStorage.setItem('consultory', JSON.stringify(newState))
            return newState;
        }
        case 'deleteDate': {
            const {id, speciality, atention, details, name, date} = action.payload;
            
            const index = state.dates.findIndex(item => (
                item.id === id && item.speciality === speciality && item.atention === atention && item.details === details && item.name === name && item.date === date
            ))

            if (index !== -1) {
                console.log(index)
                const newDates = [...state.dates];
                newDates.splice(index, 1);            

                const newState = {
                    ...state,
                    dates: newDates
                }
                console.log(newState)
                localStorage.setItem('consultory', JSON.stringify(newState))
                return newState;
            }
            return state;
        }
        case 'updateDate': {
            const {id, speciality, professional, atention, details, date, specialityBefore, professionalBefore, dateBefore, atentionBefore, detailsBefore } = action.payload;

            const updatedDates = state.dates.map(item => {
                if(item.id === id && item.speciality === specialityBefore && item.professional === professionalBefore && item.date === dateBefore && item.atention === atentionBefore && item.details === detailsBefore){
                    return {
                        ...item,
                        speciality,
                        professional,
                        atention,
                        details,
                        date
                      };
                }
                return item;
            })

            const newState = {
                ...state,
                dates: updatedDates
            }
            console.log(newState)
            localStorage.setItem('consultory', JSON.stringify(newState))
            return newState;
        }
        default: {
            throw new Error();
        }
    }
}

export const Context = createContext(null);

function Memory({children}) {
    const [state, dispatch] = useReducer(reductor, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
        {children}
    </Context.Provider>
  )
}

export default Memory