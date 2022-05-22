export const imageKitLoader = ({ src, width, quality }: any) => {
    if(src[0] === "/") src = src.slice(1);
    const params = [`w-${width > 500 ? width : 500}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");
    let urlEndpoint = "https://ik.imagekit.io/qipvcstsaar";
    if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`
};

export const lang = (locales: string | undefined) => {
    if (locales === undefined) {
        return "fr";
    }
    return locales.substring(0, 2);
};
