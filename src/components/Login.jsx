/** @format */

import React from 'react';
import firebaseConfig from '../firebaseConfig';
import { Button, Form, Grid, Image, Segment, Header } from 'semantic-ui-react';

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		try {
			firebaseConfig
				.auth()
				.signInWithEmailAndPassword(email.value, password.value);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Form size='large' onSubmit={handleSubmit}>
					<Segment stacked>
						<Segment>
							<Image
								src={require('../assets/images/logoOriginal.svg').default}
							/>
						</Segment>
						<Header as='h1' color='brown'>
							Acorn English 管理系统
						</Header>
						<Form.Input
							fluid
							icon='user'
							iconPosition='left'
							placeholder='E-mail address'
							type='email'
							name='email'
						/>
						<Form.Input
							fluid
							icon='lock'
							iconPosition='left'
							placeholder='Password'
							type='password'
							name='password'
						/>
						<Button color='brown' fluid size='large' type='submit'>
							Login
						</Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default Login;
