/** @format */

import React from 'react';
import { Container } from 'semantic-ui-react';
import MainView from './MainView';
import Footer from './Footer';

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<Container text>
				<div style={{ paddingTop: '1em' }}>
					<MainView />
				</div>
			</Container>
			<Footer version={global.appVersion} />
		</div>
	);
};

export default HomePage;
