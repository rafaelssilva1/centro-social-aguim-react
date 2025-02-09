export type RoleType = {
    position: string,
    name: string
};

export type PropTypes = {
    attributes: {
        title: {
            id: number,
            label: string,
        },
        data: RoleType[],
        extras?: string
    }
}