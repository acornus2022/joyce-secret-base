/** @format */

import React, { Component } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

class SlideShow extends Component {
	render() {
		return (
			<div>
				<ImageGallery
					items={this.props.slideArray}
					showIndex={true}
					lazyLoad={true}
				/>
			</div>
		);
	}
}

export default SlideShow;
