import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

const Image: React.FC<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({src, alt = '', width, height, ...props}) => {
    return <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...props}
    />
};

export default Image;