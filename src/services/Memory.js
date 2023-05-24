import React, { useReducer } from 'react'
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    order: [],
    info: {},
    dates: [],
    history: {}
}

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
                    [id] : {name, age, phone}
                },
                dates: [...state.dates, newDate],
                history: {...state.history}
            }
            
            console.log(newState)
            return newState;
        }
        case 'scheduleOld': {
            const {speciality, professional, atention, details, date, name, age, phone} = action.payload;
            let id = ''

            const newShedule = state.dates.map(item => {
                if(item.name === name && item.age === age && item.phone === phone) {
                    id = item.id;
                }
                return item;
            })
            
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