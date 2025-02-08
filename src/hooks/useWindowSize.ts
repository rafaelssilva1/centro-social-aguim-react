import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const belowMobile = width < 768;
    const belowTablet = width < 1024;

    return {
        windowSize: width,
        belowMobile,
        belowTablet
    }
}

export default useWindowSize;