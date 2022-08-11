export const SessionReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER_ID":
            return action.userId;
        default:
            return state;
    }
};
