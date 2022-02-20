import { types } from '../types/types';

const initialState = {
    toggleOn:false,
    chatOn:false,
    menuOn:false
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
        case types.menu_on:
            return {
                ...state,
                menuOn: true
            };
        case types.menu_off:
            return {
                ...state,
                menuOn: false
            };
        case types.chat_on:
            return {
                ...state,
                chatOn: true
            };
        case types.chat_off:
            return {
                ...state,
                chatOn: false
            };
        default:
            return state;
    }
}