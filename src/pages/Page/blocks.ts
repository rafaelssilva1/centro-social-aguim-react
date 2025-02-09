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
import Gallery from "../../sections/gallery/Gallery";
import SignUpForms from "../../sections/sign-up-forms/SignUpForms";
import Columns from "../../components/columns/Columns";
import ContactInformation from "../../sections/contact-information/ContactInformation";

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
import { PropTypes as GalleryPropTypes } from "../../sections/gallery/Gallery.types";
import { PropTypes as SignUpFormsPropTypes } from "../../sections/sign-up-forms/SignUpForms.types";
import { PropTypes as ColumnsPropTypes } from "../../components/columns/Columns.types";

export type BaseComponentProps = {
    block?: string
}

export type ComponentsPropTypes = BaseComponentProps & (
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
    BudgetsPropTypes |
    GalleryPropTypes |
    SignUpFormsPropTypes |
    ColumnsPropTypes
)

export const componentMap: Record<string, ComponentType<ComponentsPropTypes>> = {
    hero: Hero as ComponentType<ComponentsPropTypes>,
    image: Image as ComponentType<ComponentsPropTypes>,
    expertise: Expertise as ComponentType<ComponentsPropTypes>,
    cards: Cards as ComponentType<ComponentsPropTypes>,
    posts: Posts as ComponentType<ComponentsPropTypes>,
    menu: Menu as ComponentType<ComponentsPropTypes>,
    map: Map as ComponentType<ComponentsPropTypes>,
    content: Content as ComponentType<ComponentsPropTypes>,
    'text-images': TextImages as ComponentType<ComponentsPropTypes>,
    hierarchy: Hierarchy as ComponentType<ComponentsPropTypes>,
    files: Files as ComponentType<ComponentsPropTypes>,
    budgets: Budgets as ComponentType<ComponentsPropTypes>,
    gallery: Gallery as ComponentType<ComponentsPropTypes>,
    'sign-up-forms': SignUpForms as ComponentType<ComponentsPropTypes>,
    columns: Columns as ComponentType<ComponentsPropTypes>,
    'contact-information': ContactInformation
};