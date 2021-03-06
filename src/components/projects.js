require('styles/Projects.scss');

import React from 'react';

let projects = [
    {
    'name':'仪器设备管理系统',
    'descript':'15年毕业设计项目，通过设备管理系统实现自动化仪器设备管理。',
    'method':'用户信息管理，权限控制，设备信息管理，设备使用申报与审批，使用信息的统计分析。',
    'technology':'后台语言采用php，使用ThinkPHP作为开发框架。基于rbac进行权限控制，前端采用echarts绘图分析统计到的数据'    
},{
    'name':'3D放风筝展示',
    'demo':'https://lgl1993.github.io/3Dkite',
    'code':'https://github.com/lgl1993/3Dkite',
    'descript':'一个3D的放风筝展示',
    'method':'模拟真实的放风筝场景，使用户控制风筝活动，场景中加载了风筝，汽车，飞鸟等模型',
    'technology':'Three.js 3D框架'    
},{
    'name':'HTML5五子棋',
    'descript':'用canvas实现的五子棋游戏',
    'demo':'https://lgl1993.github.io/html5wuziqi',
    'code':'https://github.com/lgl1993/html5wuziqi',
    'method':'实现了AI逻辑，用户可以通过选择可以进行人机对战或人人对战',
    'technology':'canvas绘图，原生js'    
},{
    'name':'jsLibrary',
    'descript':'一个常用js函数库',
    'code':'https://github.com/lgl1993/jslibrary',
    'demo':'https://www.npmjs.com/package/jslibrary',
    'method':'封装了一些常用函数，包括正则判断、排序、类操作、通用事件、ajax等功能的，整理并发布在npm上',
    'technology':'原生js，类库封装'    
},{
    'name':'binaryTree',
    'descript':'JS二叉树结构扩展',
    'code':'https://github.com/lgl1993/binarytree',
    'demo':'https://www.npmjs.com/package/binarytrees',
    'method':'用js实现二叉树结构，并实现前中后序遍历，节点的插入查找与删除等操作，整理并发布在npm上',
    'technology':'原生js，二叉树结构基本知识'    
},{
    'name':'微信游戏开发',
    'demo':'https://lgl1993.github.io/Mid-autumn',
    'code':'https://github.com/lgl1993/Mid-autumn',
    'descript':'为某金融公司的端午活动开发的解救玉兔游戏，帮助该公司进行推广',
    'tool':'sublime',
    'method':'用户在一分钟内打击灰太狼，得到一定分数则可以成功解救玉兔',
    'technology':'原生js,CSS3'    
},{
    'name':'我的个人简历',
    'descript':'网页版个人简历',
    'demo':'https://lgl1993.github.io/CV-react',
    'code':'https://github.com/lgl1993/CV-react',
    'method':'用react实现的网页版简历，用canvas绘制网页背景，用Ant motion实现简历内部动画效果。',
    'technology':'webpack打包，react框架，ES6，SASS，Ant motion'    
}
,{
    'name':'React图片画廊',
    'descript':'用react封装的图片画廊组件',
    'demo':'https://lgl1993.github.io/gallery',
    'code':'https://github.com/lgl1993/gallery',
    'method':'响应用户点击事件，当用户点击某张图片时或相应导航时，图片自动居中展示，其他图片自动进行重新排布。',
    'technology':'webpack打包，yoman脚手架，react框架，ES6，SCSS'    
}
]


class ProjectItem extends React.Component{
    createLink(){
        if(this.props.info.demo&&this.props.info.code){
            return(
               <div className="demo">
                    <a href={this.props.info.demo} target="_blank"><span className="icon-demo"></span>demo</a>
                    <a href={this.props.info.code} target="_blank"><span className="icon-code"></span>code</a>
               </div> 
            )
        }
        else if(this.props.info.code){
            return(
               <div className="demo">
                    <a href={this.props.info.code} target="_blank"><span className="icon-code"></span>code</a>
               </div> 
            )
        }
    }
    render(){
        let projects = this.props.info;
        return(
            <section className="project">
               <header>
               <h3>{projects.name}</h3>
                {this.createLink()}
               </header>
               <div className="row">
                     <div className="title">项目描述:</div>
                     <div className="dist">{projects.descript}</div>
               </div> 
               <div className="row">
                     <div className="title">主要功能:</div>
                    <div className="dist">{projects.method}</div>
               </div> 
                <div className="row">
                     <div className="title">主要技术:</div>
                    <div className="dist">{projects.technology}</div>
               </div> 
            </section>
        )
    }
}

class ProjectsComponent extends React.Component{
    render(){
        let list = [];
        projects.forEach((val,index)=>{
            list.push(<ProjectItem info={val} key={index}/>)
        })
        return(
            <div className="content">
                {list}
            </div>
        )
    }
}

export default ProjectsComponent;