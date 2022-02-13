import { types } from "../types/types";

export const onToggle = () => ({
    type:types.toggle_on,
});

export const offToggle = () => ({
    type:types.toggle_off,
});