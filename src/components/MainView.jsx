/** @format */

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

const MainView = inject()(
	observer(
		class MainView extends Component {
			render() {
				return <h4>Hello World!</h4>;
			}
		}
	)
);

export default MainView;
