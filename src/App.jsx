/** @format */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import CacheBuster from './utils/CacheBuster';
import HomePage from './components/HomePage';

const App = class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
		};
	}

	componentDidMount() {}

	render() {
		return (
			<CacheBuster>
				{({ loading, isLatestVersion, refreshCacheAndReload }) => {
					if (loading) return null;
					if (!loading && !isLatestVersion) {
						refreshCacheAndReload();
					}
					return (
						<div>
							<Router>
								<Container text>
									<Switch>
										<Route exact path='/' render={() => <HomePage />} />
									</Switch>
								</Container>
							</Router>
						</div>
					);
				}}
			</CacheBuster>
		);
	}
};

export default App;
