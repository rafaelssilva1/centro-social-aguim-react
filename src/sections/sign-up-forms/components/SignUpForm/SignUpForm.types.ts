export type PropTypes = {
    callback: Function,
    title: string,
    schema: {
        [x: string]: any;
        fields?: { [x: string]: any }[];
    }[];
}