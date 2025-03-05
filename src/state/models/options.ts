import { t } from 'mobx-state-tree';

export const OptionsModel = t.model({
    address: t.string,
    phone_secretary: t.string,
    phone_pavilion: t.string,
    message_landline: t.string,
    phone_mobile: t.string,
    phone_daycare: t.string,
    message_cell: t.string,
    email: t.string,
    facebook: t.string,
    instagram: t.string,
    option_id: t.string,
    logo: t.string,
})