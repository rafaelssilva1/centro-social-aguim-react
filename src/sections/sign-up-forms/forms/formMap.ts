import { schema as atl } from "../../../schemas/atl";
import { schema as dayCareSchema } from "../../../schemas/day-care";
import { schema as atlSummerVacation } from "../../../schemas/atl-summer-vacation";
import { schema as daycare} from "../../../schemas/daycare";
import { schema as kindergarten} from "../../../schemas/kindergarten";
import { schema as erpi} from "../../../schemas/erpi";
import { schema as homeCareService} from "../../../schemas/home-care-service";
import { schema as gymSchema} from "../../../schemas/gym";

type FormMapFieldType = {
    name: string,
    type: {
        id: string
    },
    columns: {
        value: string
    },
    required?: boolean,
    validationRule?: string | null,
    min?: number | null,
    max?: number | null,
}

export type FormMapType = {
    [key: string]: ({
        fields?: FormMapFieldType[];
    } & FormMapFieldType)[];
}

export const formMap: FormMapType = {
    atl,
    'day-care': dayCareSchema,
    'atl-summer-vacation': atlSummerVacation,
    daycare,
    kindergarten,
    erpi,
    'home-care-service': homeCareService,
    gym: gymSchema
}