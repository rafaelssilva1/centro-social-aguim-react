import { t } from 'mobx-state-tree';

export const PageModel = t.model({
    id: t.identifierNumber,
    page: t.string,
    data: t.array(t.model({
        block: t.string,
        attributes: t.frozen(),
    }))
})