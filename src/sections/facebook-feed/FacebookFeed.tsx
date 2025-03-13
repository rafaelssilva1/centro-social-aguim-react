import { optionsStore } from "../../state/stores/options";

import Heading from "../../components/heading/Heading";

import { Container } from "./FacebookFeed.styles";

import { PropTypes } from "./FacebookFeed.types";
import { useEffect } from "react";

const FacebookFeed: React.FC<PropTypes> = ({ attributes, ...props }) => {
	const { options } = optionsStore;
	const { title } = attributes;

	useEffect(() => {
		const script = document.createElement('script');

		script.src = "https://connect.facebook.net/pt_PT/sdk.js#xfbml=1&version=v22.0&appId=134325557409603";
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		}
	}, []);

	return (
		<Container {...props}>
			{title ? <Heading level="2">{title}</Heading> : null}
			<div id="fb-root"></div>
			<div
				className="fb-page"
				data-href={options.facebook}
				data-tabs="timeline"
				data-width="500"
				data-height=""
				data-small-header="false"
				data-adapt-container-width="true"
				data-hide-cover="false"
				data-show-facepile="true">
				<blockquote cite={options.facebook} className="fb-xfbml-parse-ignore">
					<a href={options.facebook}>Centro Social e Cultural Nª Srª do Ó de Aguim</a>
				</blockquote>
			</div>
		</Container>
	)
}

export default FacebookFeed;