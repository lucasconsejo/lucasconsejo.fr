function lang(locales: string | undefined) {
    if (locales === undefined) {
        return "fr";
    }
    return locales.substring(0, 2);
};

export default lang;
