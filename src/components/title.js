require('styles/Title.scss');

import React from 'react';

class TitleComponent extends React.Component{
    render(){
        return(
            <header className="model-title">
                <img src={this.props.info.image} alt={this.props.info.alt}/>
                <h2>{this.props.info.text}</h2>
            </header>
        )
    }
}

export default TitleComponent;