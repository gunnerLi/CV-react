require('normalize.css/normalize.css');

// require('styles/LeftBar.css');

import React from 'react';
import QueueAnim from 'rc-queue-anim';

let mySkills = [{name:'Javascript',value:'90%'},
                {name:'Html',value:'85%'},
                {name:'CSS',value:'90%'},
                {name:'Node.js',value:'70%'},
                {name:'Python',value:'50%'},
                {name:'Linux',value:'60%'},
                {name:'PHP',value:'80%'}
];

class SkillItem extends React.Component{
  render(){
    let styleObj = {};
    styleObj.width = this.props.info.value;
    return(
      <li>
        <h3>{this.props.info.name}</h3>
        <div style={styleObj} className="process-bar"></div>
      </li>
    );
  }
}

class SkillsBarComponent extends React.Component {
  render() {
    let skillsList = [];
    mySkills.forEach((val,index)=>{
      skillsList.push(<SkillItem info={val} key={index}/>)
    });
    return (
    	<div className="skillsbar">
        <h2>擅长技能</h2> 
        <ul className="skills-list">
            <QueueAnim delay={7000}>{skillsList}</QueueAnim>
        </ul>
      </div>
    );
  }
}

SkillsBarComponent.defaultProps = {
  
};

export default SkillsBarComponent;
