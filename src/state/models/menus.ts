import { t } from 'mobx-state-tree';

export const MenuModel = t.model({
    menu: t.identifier,
    data: t.array(t.model({
        id: t.identifierNumber,
        title: t.string,
        slug: t.string,
        children: t.optional(t.array(t.model({
            id: t.number,
            title: t.string,
            slug: t.string,
            children: t.optional(t.array(t.frozen()), [])
        })), [])
    }))
})