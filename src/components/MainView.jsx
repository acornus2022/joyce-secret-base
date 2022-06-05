/** @format */

import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import Scheduler from '../components/scheduler/Scheduler';
import Finance from '../components/finance/Finance';
import EnrollGrid from '../components/enrollment/EnrollGrid';
import { ENROLLMENT, FINANCE, CALENDAR, SUMMARY } from '../constants/constants';
import PartnerGrid from './summary/PartnerGrid';

const MainView = inject('appStore')(
	observer(
		class MainView extends Component {
			constructor(props) {
				super(props);
				this.state = { completed: false };
			}

			render() {
				if (this.props.appStore.content === ENROLLMENT) {
					return (
						<Segment
							style={{
								margin: '1em -16em 0 -16em',
								backgroundColor: '#000000',
							}}>
							<EnrollGrid />
						</Segment>
					);
				} else if (this.props.appStore.content === FINANCE) {
					return (
						<Segment
							style={{
								margin: '1em -16em 0 -16em',
								backgroundColor: '#000000',
							}}>
							<div>
								<Finance />
							</div>
						</Segment>
					);
				} else if (this.props.appStore.content === CALENDAR) {
					return (
						<Segment
							style={{
								margin: '1em -16em 0 -16em',
								backgroundColor: '#000000',
							}}>
							<Scheduler />
						</Segment>
					);
				} else if (this.props.appStore.content === SUMMARY) {
					return (
						<Segment
							style={{
								margin: '1em -16em 0 -16em',
								backgroundColor: '#000000',
							}}>
							<PartnerGrid />
						</Segment>
					);
				}
			}
		}
	)
);

export default MainView;
