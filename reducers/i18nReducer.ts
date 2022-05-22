export const initState = "fr";

export function i18nReducer(state: any, action: any) {
    switch (action.type) {
        case "UPDATE_LANG":
            return action.payload;
        default:
            return initState;
    };
};
