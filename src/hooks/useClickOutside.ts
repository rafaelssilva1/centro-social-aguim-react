import { useEffect } from "react";

type PropTypes = {
    ref: React.RefObject<HTMLElement>,
    additionalRefs?: React.RefObject<HTMLElement>[],
    callback: () => void
}

const useClickOutside = ({
    ref,
    additionalRefs,
    callback
}: PropTypes) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!ref.current || ref.current.contains(e.target as Node)) {
                return;
            }

            if (additionalRefs?.some((additionalRef) => additionalRef.current?.contains(e.target as Node))) {
                return;
            }

            callback();
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, additionalRefs, callback]);
};

export default useClickOutside;
