import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext(); //creating the 'context' where the data layer lives

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); //allows us to pull info from data layer