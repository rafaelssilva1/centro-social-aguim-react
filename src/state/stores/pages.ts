import axios from "axios";
import { flow, t } from "mobx-state-tree";

import { PageModel } from "../models/pages";

const PagesStore = t
    .model('PagesStore', {
        homepageId: t.string,
        pages: t.array(PageModel),
    })
    .actions(self => ({
        getPage: flow(function* (id: number) {
            try {
                const isRepeated = self.pages.find(el => el.id === id);

                if (isRepeated) return;

                const { data } = yield axios.get(
                    `${import.meta.env.VITE_REQUEST_URL}/content/${id}`
                );

                self.pages.push(PageModel.create(data));
            } catch (e) {
                if (typeof e === "string") {
                    console.error(e.toUpperCase());
                }
            };
        }),
        getHomePage: flow(function* () {
            try {
                const homepageIsKnown = !!self.homepageId;

                if (homepageIsKnown) return;

                const { data } = yield axios.get(
                    `${import.meta.env.VITE_REQUEST_URL}/homepage`
                );

                self.homepageId = data.id;
            } catch (e) {
                if (typeof e === "string") {
                    console.error(e.toUpperCase());
                }
            };
        }),
    }))

export const pagesStore = PagesStore.create({pages: [], homepageId: ''})
