/** @format */

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

const MainView = inject()(
	observer(
		class MainView extends Component {
			render() {
				return <h4>JOYCE is the best!
				<</h4>/h4>;
			}
		}
	)
);

export default MainView;
