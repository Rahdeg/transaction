import React,{createContext,useState,useContext} from 'react';
const StateContext=createContext();



export const ContextProvider = ({children})=>{
const [sortvalue, setsortvalue] = useState('');
const [data, setdata] = useState([]);
const [value, setvalue] = useState('');


  

    return(
        <StateContext.Provider value={{sortvalue, setsortvalue,data, setdata,value, setvalue}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext)