/** @format */

import React from 'react';

const Footer = (props) => {
	return (
		<div
			style={{ paddingTop: '10px', paddingBottom: '10px', color: '#ffffff' }}>
			<h6>Version: {props.version}</h6>
		</div>
	);
};

export default Footer;
