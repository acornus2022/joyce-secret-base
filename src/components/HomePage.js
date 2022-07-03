/** @format */

import React, { useState } from 'react';
import { Container, Button, Image } from 'semantic-ui-react';
import myImage from '../images/answer.png';

const HomePage = () => {
	const [showAnswer, setShowAnswer] = useState(false);
	return (
		<div>
			<Container text>
				<h1>Joyce!</h1>
				<h4>Riddle</h4>
				<Container text>
					<p>A bundle of <span style={{ color: "red" }}>Blubber</span></p>
					<p>a sight for <span style={{ color: "orange" }}>Landlubbers</span></p>
					<p>I wave with a slap-happy <span style={{ color: "yellow" }}>Tail</span></p>
					<p>A saltwater  <span style={{ color: "blue" }}>Fountain</span></p>
					<p>just sprayin' and spoutin'</p>
					<p>look out! Thar I blow! I'm a ...</p>
				</Container>
				<Button onClick={() => setShowAnswer(true)} style={{ color: "violet", backgroundColor: "black" }}>Show me the answer</Button>
				{showAnswer && <Image src={myImage} fluid />}
			</Container>
			{/* <Footer version={global.appVersion} /> */}
		</div>
	);
};

export default HomePage;
