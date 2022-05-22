import { useState, useEffect } from "react";

function useLazyLoading(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        );
        if (ref.current) {
           observer.observe(ref.current);
        }
    }, []);

    return isIntersecting;
}

export default useLazyLoading;
