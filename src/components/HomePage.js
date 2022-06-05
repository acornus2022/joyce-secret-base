/** @format */

import React from 'react';
import { Container } from 'semantic-ui-react';
import Footer from './Footer';

const HomePage = () => {
	return (
		<div>
			<Container text>
				<h1>Hello World!</h1>
			</Container>
			{/* <Footer version={global.appVersion} /> */}
		</div>
	);
};

export default HomePage;
