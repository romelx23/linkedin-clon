import { types } from '../types/types';

const theme=localStorage.getItem('theme')

const initialState = {
    theme:theme?theme:''
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.themePage:
            return {
                ...state,
                theme:action.payload
            };
        
        default:
            return state;
    }
}