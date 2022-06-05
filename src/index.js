/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './utils/polyfills';
import App from './App';
import './css/index.css';
import './css/App.css';
import './css/carousel.css';
import registerServiceWorker from './utils/registerServiceWorker';
import appStore from './stores/appStore';
import { Provider } from 'mobx-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

// the setTimeout simulates the time it takes react to load, and is not part of the solution
setTimeout(
	() =>
		// the show/hide functions are passed as props
		ReactDOM.render(
			<Provider
				{...{
					appStore,
				}}>
				<App />
			</Provider>,
			document.getElementById('root')
		),
	1000
);

registerServiceWorker();
