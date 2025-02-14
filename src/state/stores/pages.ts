import axios from "axios";
import { flow, t } from "mobx-state-tree";

import { PageModel } from "../models/pages";

const PagesStore = t
    .model('PagesStore', {
        homepageId: t.string,
        loading: t.boolean,
        pages: t.array(PageModel),
    })
    .actions(self => ({
        getPage: flow(function* (id: number) {
            self.loading = true;

            try {
                const isRepeated = self.pages.find(el => el.id === id);

                if (isRepeated) {
                    self.loading = false;
                    return;
                };

                const { data } = yield axios.get(
                    `${import.meta.env.VITE_REQUEST_URL}/content/${id}`
                );

                if(data.status === 404) {
                    self.loading = false;
                    return;
                };

                self.pages.push(PageModel.create(data));
            } catch (e) {
                if (typeof e === "string") {
                    console.error(e.toUpperCase());
                }
            } finally {
                self.loading = false;
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

export const pagesStore = PagesStore.create({pages: [], loading: false, homepageId: ''})
