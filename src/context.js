import React, {useEffect, useContext, useReducer} from 'react'
import reducer from './reducer';

const AppContext = React.createContext()

const initialState = {
    isDark:true,
    isLoading: true,
    repos: [],
    articlesData: [],
    isArticlesLoading: true
}

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const setDarkTheme = ()=> {
        dispatch({type:'SET_THEME'})
    }
    const setRepos=(data)=>{
        dispatch({type:'SET_REPOS', payload:data})
    }
    const setArticlesData = (data) => {
        dispatch({type:'SET_ARTICLES_DATA', payload:data})
    }

    useEffect(()=>{
        if(state.isDark === false){
            document.documentElement.className = 'dark-theme'
        } else if(state.isDark === true){
          document.documentElement.className = 'light-theme'  
        }
    }, [state.isDark])

    const urlForRepos = 'https://api.github.com/users/nikolaz90/repos?per_page=100'
    const urlForArticles = 'https://papatoo.herokuapp.com/api/v1/portfolio_articles'

    const fetchData = async () => {
      try{
        const data = await fetch(urlForRepos)
        const response = await data.json()
        setRepos(response);
      }catch(error){
        setRepos([{label:'javascript', count: 1},{label:'css', count:1},{label:'html', count:1}])
        console.log(error)
      }   
    }

    const fetchArticles = () => {
        fetch(urlForArticles)
          .then(response => response.json())
          .then(data => setArticlesData(data.articles))
          .catch(error => console.log(error))
      };

    useEffect(()=>{
        fetchData()
        fetchArticles()
    }, []);

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