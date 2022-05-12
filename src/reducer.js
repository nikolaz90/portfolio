function reducer (state, action){
    if(action.type === 'SET_THEME'){
        let newTheme = !state.isDark;
        return {...state, isDark:newTheme}
    }
    if(action.type === 'SET_REPOS'){
        return {...state, isLoading:false,repos:action.payload}
    }

    return state
}


export default reducer