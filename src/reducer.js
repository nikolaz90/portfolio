function reducer (state, action){
    if(action.type === 'SET_THEME'){
        let newTheme = !state.isDark;
        return {...state, isDark:newTheme}
    }

    return state
}


export default reducer