import { FileType } from "../files/Files.types";

export type BudgetType = {
    id: number,
    title: string,
    files: FileType[]
}

export type PropTypes = {
    attributes: BudgetType[]
}