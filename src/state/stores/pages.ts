import axios from "axios";
import { flow, t } from "mobx-state-tree";

import { PageModel } from "../models/pages";

const PagesStore = t
    .model('PagesStore', {
        pages: t.array(PageModel),
    })
    .actions(self => ({
        getPage: flow(function* (id: number) {
            try {
                const isRepeated = self.pages.find(el => el.id === id);

                if (!!isRepeated) return;

                const { data } = yield axios.get(
                    `${import.meta.env.VITE_REQUEST_URL}/content/${id}`
                );

                self.pages.push(PageModel.create(data));
            } catch (e) {
                if (typeof e === "string") {
                    console.error(e.toUpperCase());
                }
            };
        })
    }))

export const pagesStore = PagesStore.create({pages: []})
