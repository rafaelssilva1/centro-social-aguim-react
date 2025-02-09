import { ComponentType } from "react";

import Cards from "../../sections/cards/Cards";
import Expertise from "../../sections/expertise/Expertise";
import Hero from "../../sections/hero/Hero";
import Image from "../../sections/image/Image";
import Posts from "../../sections/posts/Posts";
import Menu from "../../sections/menu/Menu";

import { PropTypes as HeroPropTypes } from "../../sections/hero/Hero.types";
import { PropTypes as ImagePropTypes } from "../../sections/image/Image.types";
import { PropTypes as ExpertisePropTypes } from "../../sections/expertise/Expertise.types";
import { PropTypes as CardsPropTypes } from "../../sections/cards/Cards.types";
import { PropTypes as PostsPropTypes } from "../../sections/posts/Posts.types";
import { PropTypes as MenuPropTypes } from "../../sections/menu/Menu.types";

type PropTypes = HeroPropTypes | ImagePropTypes | ExpertisePropTypes | CardsPropTypes | PostsPropTypes | MenuPropTypes;

export const componentMap: Record<string, ComponentType<PropTypes>> = {
    hero: Hero as ComponentType<PropTypes>,
    image: Image as ComponentType<PropTypes>,
    expertise: Expertise as ComponentType<PropTypes>,
    cards: Cards as ComponentType<PropTypes>,
    posts: Posts as ComponentType<PropTypes>,
    menu: Menu as ComponentType<PropTypes>
};