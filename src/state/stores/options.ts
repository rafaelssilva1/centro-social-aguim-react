import axios from "axios";
import { flow, t } from "mobx-state-tree";
import { OptionsModel } from "../models/options";

const OptionsStore = t
    .model('OptionsStore', {
        options: OptionsModel,
    })
    .actions(self => ({
        getOptions: flow(function* () {
            try {
                const { data } = yield axios.get(
                    `${import.meta.env.VITE_REQUEST_URL}/options/informacoes`
                );

                self.options = data;
            } catch (e) {
                if (typeof e === "string") {
                    console.error(e.toUpperCase());
                }
            };
        })
    }))

export const optionsStore = OptionsStore.create({
    options: {
        address: '',
        phone_secretary: '',
        phone_pavilion: '',
        message_landline: '',
        phone_mobile: '',
        phone_daycare: '',
        message_cell: '',
        email: '',
        facebook: '',
        instagram: '',
        option_id: '',
        logo: '',
    },
});