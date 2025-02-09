import axios from "axios";
import { flow, t } from "mobx-state-tree";

import { MenuModel } from "../models/menus";

const MenusStore = t
    .model('MenusStore', {
        menus: t.array(MenuModel),
    })
    .actions(self => ({
        getMenu: flow(function* (id: string) {
            try {
                const isRepeated = self.menus.find(el => el.menu === id);

                if (isRepeated) return;

                const { data } = yield axios.get(
                    `${import.meta.env.VITE_REQUEST_URL}/menus/${id}`
                );

                self.menus.push(MenuModel.create(data));
            } catch (e) {
                if (typeof e === "string") {
                    console.error(e.toUpperCase());
                }
            };
        })
    }))

export const menusStore = MenusStore.create({menus: []})
