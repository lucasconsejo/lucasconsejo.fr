import { useState, useEffect } from "react";

function useWindowSize() {
    if (typeof window !== 'undefined') { 
        const [width, setWidth] = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);

        const updateWidthAndHeight = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener("resize", updateWidthAndHeight);

        useEffect(() => {
            window.removeEventListener("resize", updateWidthAndHeight);
        }, []);

        return { width, height };
    }
    else {
        return { width: 0, height: 0 };
    }
};

export default useWindowSize;
