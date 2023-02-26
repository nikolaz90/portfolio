import React, {useEffect, useContext, useReducer} from 'react'
import reducer from './reducer';

const AppContext = React.createContext()

const initialState = {
    isDark:true,
    isLoading: true,
    repos: [],
}

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const setDarkTheme = ()=> {
        dispatch({type:'SET_THEME'})
    }
    const setRepos=(data)=>{
        dispatch({type:'SET_REPOS', payload:data})
    }

    useEffect(()=>{
        if(state.isDark === false){
            document.documentElement.className = 'dark-theme'
        } else if(state.isDark === true){
          document.documentElement.className = 'light-theme'  
        }
    }, [state.isDark])

    const url = 'https://api.github.com/users/nikolaz90/repos?per_page=100'

    const fetchData = async () => {
      try{
        const data = await fetch(url)
        const response = await data.json()
        setRepos(response);
      }catch(error){
        setRepos([{label:'javascript', count: 1},{label:'css', count:1},{label:'html', count:1}])
        console.log(error)
      }   
    }

    useEffect(()=>{
        fetchData()
    },[])
    
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