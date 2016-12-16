require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import UserImage from './userimage';
import SkillsBar from './skillsbar';
import UserInfo from './userinfo';
import Title from './title';
import SkillsList from './skillslist';
import Projects from './projects';
import Jobs from './jobs';
import Certificate from './certificate';
import Evaluation from './evaluation';
import Canvas from './canvas'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
let yeomanImage = require('../images/yeoman.png');
let TweenOneGroup = TweenOne.TweenOneGroup;
let titleImages = ['Image 1.png','Image 2.png','Image 3.png','Image 4.png','Image 5.png']

titleImages = (function(images){
		let imgs = [];
		images.forEach(function(val,index){
			let a =	require('../images/'+val);
			imgs.push(a);
		})
		return imgs;
})(titleImages)


class AppComponent extends React.Component {

  render() {
    return (
	<div className="root">
	 <Canvas/>
	 <TweenOneGroup enter={{ y: 4000, opacity: 0, type: 'from',duration:3000,ease:'easeOutBack',delay:2000 }} >
      <div className="container" key="container">
      	<div className="left-bar">
      		<UserImage />
      		<UserInfo />
      		<SkillsBar />
      	</div>
      	<div className="right-bar">
					<header>
						<h1>李国梁</h1>
						<p>求职意向：前端工程师</p>
					</header>

					<div className="education" key="key1">
							<Title info={{'image':titleImages[0],'text':'教育背景','alt':'教育背景'}} />
							<section className='content'>
								<p>2011年9月 —— 2015年7月    国防科学技术大学   （信息工程专业）</p>
								<p>
										主修课程：大学计算机基础，计算机程序设计，信号与系统基础，数据结构基础，数据库技术基础，计算机硬件技术基础，图形图像处理，模式识别基础，信息论与编码基础，密码学与网络安全，地理信息系统与遥感技术。
								</p>
								<p>具备扎实的计算机基础，以及很强的学习能力，平均成绩排名前15%。</p>
							</section>
					</div>

					<div className="skills" key="key2">
							<Title info={{'image':titleImages[1],'text':'IT技能','alt':'IT技能'}} />
							<div className="content">
									<SkillsList />
							</div>
					</div>

					<div className="experience" key="key3">
							<Title info={{'image':titleImages[2],'text':'项目及工作经验','alt':'项目及工作经验'}} />
							<div className="content">
								<div className="projects">
										<h2>个人项目</h2>
										<Projects />
								</div>
								<div className="jobs">
										<h2>工作经验</h2>
										<Jobs />
								</div> 
							</div>
					</div>

					<div className="certificate" key="key4">
							<Title info={{'image':titleImages[4],'text':'所获证书','alt':'所获证书'}} />
							<div className="content">
								<Certificate />
							</div>
					</div>

					<div className="evaluation" key="key5">
							<Title info={{'image':titleImages[3],'text':'自我评价','alt':'自我评价'}} />
							<div className="content">
								<Evaluation />
							</div>
					</div>
					

      	</div>
      </div>
	  </TweenOneGroup>
	  </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
