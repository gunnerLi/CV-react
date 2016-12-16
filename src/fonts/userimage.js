// require('styles/UserImage.css');

import React from 'react';

let myimage = require('../images/info.png');

class UserImageComponent extends React.Component{
	render(){
		return (
			<img src={myimage} alt='my picture'/>
		)
	}
}



export default UserImageComponent; 