export const initState = "fr";

export const i18nReducer = (state: any, action: any) => {
    switch (action.type) {
    case "UPDATE_LANG":
        return action.payload;
    default:
        return initState
    }
}
