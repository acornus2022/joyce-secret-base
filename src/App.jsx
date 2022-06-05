/** @format */

import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Container } from 'semantic-ui-react';
import Login from './components/Login';
import CacheBuster from './utils/CacheBuster';
import firebaseConfig from './firebaseConfig';
import HomePage from './components/HomePage';

const App = inject('appStore')(
	observer(
		class App extends Component {
			constructor(props) {
				super(props);
				this.state = {
					isLoggedIn: false,
				};
			}

			componentDidMount() {
				firebaseConfig.auth().onAuthStateChanged((user) => {
					if (user) {
						this.setState({ isLoggedIn: true });
						this.props.appStore.setUser(user.email);
					} else {
						this.props.appStore.setUser(undefined);
						this.setState({ isLoggedIn: false });
					}
				});
				<Redirect to='/' />;
			}

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
												<Route
													exact
													path='/'
													render={() =>
														this.state.isLoggedIn ? <HomePage /> : <Login />
													}
												/>
											</Switch>
										</Container>
									</Router>
								</div>
							);
						}}
					</CacheBuster>
				);
			}
		}
	)
);

export default App;
