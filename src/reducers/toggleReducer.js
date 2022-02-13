import { types } from '../types/types';

const initialState = {
    toggleOn:false
}

export const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.toggle_on:
            return {
                ...state,
                toggleOn: true
            };
        case types.toggle_off:
            return {
                ...state,
                toggleOn: false
            };
        default:
            return state;
    }
}