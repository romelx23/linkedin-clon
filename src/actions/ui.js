import { types } from "../types/types";

//toggle dark mode action 
export const toggleTheme = (theme='') => (
    {
        type:types.themePage,
        payload:theme,
    }
)

export const handleTheme=(theme='')=>{
    return (dispatch)=>{
        switch (theme) {
            case theme='blue':
                dispatch(toggleTheme(''))
                localStorage.setItem('theme','');
                break;
            case theme='red':
                dispatch(toggleTheme('theme-red'))
                localStorage.setItem('theme','theme-red')
                break;
            case theme='green':
                dispatch(toggleTheme('theme-green'))
                localStorage.setItem('theme','theme-green')
                break;
            case theme='purple':
                dispatch(toggleTheme('theme-purple'))
                localStorage.setItem('theme','theme-purple')
                break;
            case theme='dark':
                dispatch(toggleTheme('theme-dark'))
                localStorage.setItem('theme','theme-dark')
                break;
        
            default:
                return;
        }
    }
}