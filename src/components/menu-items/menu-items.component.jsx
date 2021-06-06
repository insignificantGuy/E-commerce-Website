import React from 'react';

import './menu-items.style.scss';

const MenuItem = ({title}) => (
	<div className="menu-item">
		<div className="content"> 
			<h1 className="title">{title}</h1>
			<span className="subtitles">Shop Now</span>
		</div>
	</div>
);

export default MenuItem;