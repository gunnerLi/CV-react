

import React from 'react';

let myImage = require('../images/myphoto.jpg');

class UserImageComponent extends React.Component {
  render() {
    return (
      <figure>
        <img src={myImage} alt='lgl'/>
      </figure>
    );
  }
}

UserImageComponent.defaultProps = {
};

export default UserImageComponent;
