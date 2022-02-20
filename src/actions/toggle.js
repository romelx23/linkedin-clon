import { types } from "../types/types";

export const onToggle = () => ({
    type:types.toggle_on,
});

export const offToggle = () => ({
    type:types.toggle_off,
});

export const showChat = () => ({
    type:types.chat_on,
});

export const offChat = () => ({
    type:types.chat_off,
});

export const showMenu = () => ({
    type:types.menu_on,
});

export const offMenu = () => ({
    type:types.menu_off,
});