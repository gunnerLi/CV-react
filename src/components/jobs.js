require('styles/Projects.scss');

import React from 'react';

let jobs = [{
    time:'2015年12月 —— 2016年11月',
    company:'安歌信息技术有限公司（长沙）',
    project:'答魔科学问答平台',
    link:'http://www.damor.cn',
    descript:'获开物百万投资的互联网创业项目，诣在打造科学家知识问答平台，团队核心创始人来自腾讯，搜狐，拓维等一线互联网公司。答魔针对高学历人群，通过构建问答平台，帮助他们解决科研项目中的各类难题',
    duty:'负责整个项目WEB前端框架和UI界面的搭建，实现了弹窗组件，评论组件，以及提问组件。同时参与了项目的排序算法，推荐算法，以及标签系统的设计与实现',
    technology:'使用gulp自动化工具管理前端文件，使用sass编写css文件，使用requireJS管理项目中的js加载和依赖关系',
    reason:'考虑到家庭因素，亲友希望我能够来京发展。同时自己希望能够在北京学到更多的知识，认识更多的朋友，找到更具有挑战性的工作'
}]

class JobItem extends React.Component{
    render(){
        let jobs = this.props.info;
        return(
            <section className="job">
               <div className="row">
                     <div className="col-1 col-sm-2">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间:</div>
                     <div className="col-11 col-sm-10">{jobs.time}</div>
               </div> 
               <div className="row">
                     <div className="col-1 col-sm-2">所在公司:</div>
                    <div className="col-11 col-sm-10">{jobs.company}</div>
               </div> 
               <div className="row">
                     <div className="col-1 col-sm-2">项目名称:</div>
                    <div className="col-11 col-sm-10">{jobs.project}</div>
               </div>  
               <div className="row"> 
                     <div className="col-1 col-sm-2">项目主页:</div>
                    <div className="col-11 col-sm-10"><a href={jobs.link} target="_blank">{jobs.link.slice(7)}</a></div>
               </div> 
                <div className="row"> 
                     <div className="col-1 col-sm-2">项目简介:</div>
                    <div className="col-11 col-sm-10">{jobs.descript}</div>
               </div> 
                <div className="row"> 
                     <div className="col-1 col-sm-2">职责描述:</div>
                    <div className="col-11 col-sm-10">{jobs.duty}</div>
               </div> 
               <div className="row"> 
                     <div className="col-1 col-sm-2">主要技术:</div>
                    <div className="col-11 col-sm-10">{jobs.technology}</div>
               </div> 
               <div className="row"> 
                     <div className="col-1 col-sm-2">离职原因:</div>
                    <div className="col-11 col-sm-10">{jobs.reason}</div>
               </div>  
            </section>
        )
    }
}

class JobsComponent extends React.Component{
    render(){
        let list = [];
        jobs.forEach((val,index)=>{
            list.push(<JobItem info={val} key={index}/>)
        })
        return(
            <div className="content">
                {list}
            </div>
        )
    }
}

export default JobsComponent;