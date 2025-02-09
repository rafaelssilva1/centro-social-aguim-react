import { ComponentType } from "react";

import Cards from "../../sections/cards/Cards";
import Expertise from "../../sections/expertise/Expertise";
import Hero from "../../sections/hero/Hero";
import Image from "../../sections/image/Image";
import Posts from "../../sections/posts/Posts";
import Menu from "../../sections/menu/Menu";
import Map from "../../sections/map/Map";
import Content from "../../sections/content/Content";
import TextImages from "../../sections/text-images/TextImages";
import Hierarchy from "../../sections/hierarchy/Hierarchy";
import Files from "../../sections/files/Files";
import Budgets from "../../sections/budgets/Budgets";

import { PropTypes as HeroPropTypes } from "../../sections/hero/Hero.types";
import { PropTypes as ImagePropTypes } from "../../sections/image/Image.types";
import { PropTypes as ExpertisePropTypes } from "../../sections/expertise/Expertise.types";
import { PropTypes as CardsPropTypes } from "../../sections/cards/Cards.types";
import { PropTypes as PostsPropTypes } from "../../sections/posts/Posts.types";
import { PropTypes as MenuPropTypes } from "../../sections/menu/Menu.types";
import { PropTypes as MapPropTypes } from "../../sections/map/Map.types";
import { PropTypes as ContentPropTypes } from "../../sections/content/Content.types";
import { PropTypes as TextImagesPropTypes } from "../../sections/text-images/TextImages.types";
import { PropTypes as HierarchyPropTypes } from "../../sections/hierarchy/Hierarchy.types";
import { PropTypes as FilesPropTypes } from "../../sections/files/Files.types";
import { PropTypes as BudgetsPropTypes } from "../../sections/budgets/Budgets.types";

export type PropTypes =
    HeroPropTypes |
    ImagePropTypes |
    ExpertisePropTypes |
    CardsPropTypes |
    PostsPropTypes |
    MenuPropTypes |
    MapPropTypes |
    ContentPropTypes |
    TextImagesPropTypes |
    HierarchyPropTypes |
    FilesPropTypes |
    BudgetsPropTypes;

export const componentMap: Record<string, ComponentType<PropTypes>> = {
    hero: Hero as ComponentType<PropTypes>,
    image: Image as ComponentType<PropTypes>,
    expertise: Expertise as ComponentType<PropTypes>,
    cards: Cards as ComponentType<PropTypes>,
    posts: Posts as ComponentType<PropTypes>,
    menu: Menu as ComponentType<PropTypes>,
    map: Map as ComponentType<PropTypes>,
    content: Content as ComponentType<PropTypes>,
    'text-images': TextImages as ComponentType<PropTypes>,
    hierarchy: Hierarchy as ComponentType<PropTypes>,
    files: Files as ComponentType<PropTypes>,
    budgets: Budgets as ComponentType<PropTypes>,
};