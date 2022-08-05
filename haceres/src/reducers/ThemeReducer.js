export const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return action.isDarkTheme;
        default:
            return state;
    }
};
