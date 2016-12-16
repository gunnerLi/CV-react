// require('../styles/UserInfo')
import React from 'react'
import QueueAnim from 'rc-queue-anim';
let myInfo = [{'text':'北京市丰台区','className':'','icon':'icon-location','link':''},
{'text':'党员','className':'','icon':'icon-flag','link':''},
{'text':'13716095743','className':'','icon':'icon-phone','link':''},
{'text':'ericlgl@sina.com','className':'','icon':'icon-envelop','link':''},
{'text':'lgl1993','className':'','icon':'icon-github','link':'https://github.com/lgl1993'},
{'text':'lgl1993','className':'','icon':'icon-npm','link':'https://github.com/lgl1993'},
{'text':'lgl','className':'','icon':'icon-blogger','link':'https://github.com/lgl1993'}]


class UserInfoItem extends React.Component{
	render(){
		if(this.props.info.link){
			return(
				<div className="row">
				<div className="info-icon"><span className={this.props.info.icon}></span></div>
				<div className="info-text"> <a href={this.props.info.link} target="_blank">{this.props.info.text}</a></div>
				</div>
				)
		}
		else{
			return(
				<div className="row">
				<div className="info-icon"><span className={this.props.info.icon}></span></div>
				<div className="info-text"> <span>{this.props.info.text}</span></div>
				</div>
				)
		}
	}
} 

class UserInfoComponent extends React.Component{
	render(){
		var infos = [];
		myInfo.forEach((val,index)=>{
			infos.push(<UserInfoItem info={val} key={index} />);
		})
		return(
				<div className="userinfo">
					<h2>个人信息</h2>
					<div className="user-info-list">
					<QueueAnim delay={6000}>
					{infos}
					</QueueAnim>
					</div>
				</div>
			);
	}
}



export default UserInfoComponent;