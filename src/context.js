import React, {useState, useEffect, useContext, useReducer} from 'react'
import reducer from './reducer';


const AppContext = React.createContext()

const initialState = {
    isDark:true,
    isLoading: false,
}

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const setDarkTheme = ()=> {
        dispatch({type:'SET_THEME'})
    }

    useEffect(()=>{
        if(state.isDark === true){
            document.documentElement.className = 'dark-theme'
        } else if(state.isDark === false){
          document.documentElement.className = 'light-theme'  
        }
    }, [state.isDark])



    //console.log(state)
    
    return <AppContext.Provider value={{
        ...state,
        setDarkTheme,
    }}>
    {children}
    </AppContext.Provider>
}


export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}