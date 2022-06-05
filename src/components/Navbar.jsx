/** @format */

import React from 'react';
import { Container, Menu, Image, Dropdown } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { ENROLLMENT, FINANCE, CALENDAR, SUMMARY } from '../constants/constants';
import firebaseConfig from '../firebaseConfig';

const Navbar = inject('appStore')(
	observer((props) => {
		const handleSignout = (e) => {
			firebaseConfig
				.auth()
				.signOut()
				.then(() => {
					alert('You have signed out.');
					props.appStore.setUser(undefined);
				})
				.catch((error) => {
					alert(error);
				});
		};

		return (
			<div>
				<Menu size='massive' pointing inverted fixed='top' widths={6}>
					<Container>
						<Menu.Item>
							<div style={{ paddingLeft: '-20px' }}>
								<Image
									className='img-responsive'
									src={require('../assets/images/logoGold.png').default}
									alt='cannot find logo'
									as='a'
									href='https://www.acornus.net/'
								/>
							</div>
						</Menu.Item>
						<Menu.Item
							id='enrollment'
							active={props.appStore.content === 'enrollment'}
							onClick={() => props.appStore.setContent(ENROLLMENT)}>
							<div>学生报名</div>
						</Menu.Item>
						<Menu.Item
							id='calendar'
							active={props.appStore.content === 'calendar'}
							onClick={() => props.appStore.setContent(CALENDAR)}>
							<div>课程计划</div>
						</Menu.Item>
						<Menu.Item
							id='finance'
							active={props.appStore.content === 'finance'}
							onClick={() => props.appStore.setContent(FINANCE)}>
							<div>学生账户</div>
						</Menu.Item>
						<Menu.Item
							id='summary'
							active={props.appStore.content === 'summary'}
							onClick={() => props.appStore.setContent(SUMMARY)}>
							<div>合作结算</div>
						</Menu.Item>
						<Dropdown item className='menu-item' text='链接'>
							<Dropdown.Menu>
								<Dropdown.Item
									id='homepage'
									onClick={() =>
										(window.location.href = 'https://acornus.net')
									}>
									公司官网
								</Dropdown.Item>
								<Dropdown.Item
									id='platform'
									onClick={() =>
										(window.location.href = 'https://acornus.com')
									}>
									教学平台
								</Dropdown.Item>
								<Dropdown.Item
									id='evaluation'
									onClick={() =>
										(window.location.href =
											'https://acornus-evaluation.web.app/')
									}>
									评估平台
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Menu.Item
							id='logout-button'
							onClick={(e) => handleSignout(e)}
							position='right'>
							<div>登出</div>
						</Menu.Item>
					</Container>
				</Menu>
			</div>
		);
	})
);

export default Navbar;
