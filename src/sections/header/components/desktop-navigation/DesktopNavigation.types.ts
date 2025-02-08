import { RefObject } from "react";
import { Instance } from "mobx-state-tree";

import { MenuModel } from "../../../../state/models/menus";

export type PropTypes = {
    headerMenu?: Instance<typeof MenuModel>;
    headerRef?: RefObject<HTMLElement>;
}