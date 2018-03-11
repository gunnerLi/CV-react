require('styles/Projects.scss');

import React from 'react';

let jobs = [{
  time: '2015年12月 —— 2016年11月',
  company: '安歌信息技术有限公司（长沙）',
  projects: [{
    'name': '答魔科学问答平台',
    'link': 'http://www.damor.cn',
    'descript': '获开物百万投资的互联网创业项目，诣在打造科学家知识问答平台，团队核心创始人来自腾讯，搜狐，拓维等一线互联网公司。答魔针对高学历人群，通过构建问答平台，帮助他们解决科研项目中的各类难题',
    'duty': '负责整个项目WEB前端框架和UI界面的搭建，实现了弹窗组件，评论组件，以及提问组件。同时参与了项目的排序算法，推荐算法，以及标签系统的设计与实现',
    'technology': '使用gulp自动化工具管理前端文件,使用requireJS管理项目中的js加载和依赖关系',
  }]
}, {
  time: '2017年1月 —— 至今',
  company: '搜狐',
  projects: [{
    name: 'domeos运维平台',
    link: 'https://github.com/domeos',
    descript: '基于Docker的企业级应用编排运维管理系统。DomeOS覆盖了企业用户从代码编译打包，到部署运维的整个工作流程，具体功能包含关联代码仓库、持续集成、应用版本管理、升级回滚、扩容缩容、监控报警等。主要用户有搜狐集团,快手等',
    duty: '基础组件开发,负载均衡部分开发,部署部分的代码重构,历史遗留疑难bug的修复',
    technology: '项目基于angular,并封装了基础通用组件,如select组件,form组件等,并gulp打包编译'
  },{
    name: '有戏短视频app',
    descript:'搜狐短视频项目',
    duty: '负责有戏短视频内嵌H5页面开发,分享页开发,管理后台开发',
    technology: `
    有戏管理后台使用vue开发,基础组件基于elementUI,并在其基础上开发业务代码，在element的table基础上增加拖拽功能。H5页面项目基于nodejs,最初使用koa-grace为主要框架,后用采用thinkjs重构,在thinkjs中增加proxy扩展,并增加异常监控,mongodb存储前端异常。
    前端部分主要涉及与native交互,异常上报。分享页主要涉及短视频播放,native拉起等。
    整个项目采用gulp+webpack,gulp控制自动化流程,webpack则负责js的打包编译`
  },{
    name: 'compass数据统计平台',
    descript:'搜狐大数据统计平台,负责统计搜狐新闻,搜狐视频,搜狐网,搜狗等使用情况,供决策层参考',
    duty: '负责整个项目WEB前端框架和UI界面的搭建',
    technology:`项目使用vue开发,基础组件使用iview,并使用echarts绘制统计图。iview的table基础上增加单元格横向纵向合并功能,整个项目采用vue-cli搭建,webkack打包。`
  }]
}];

function _t(key) {
  let map = {
    name:'项目名称:',
    time: '时间:',
    company: '所在公司:',
    project: '主要项目:',
    link: '项目链接:',
    descript: '项目描述:',
    duty: '主要职责:',
    technology: '技术栈:'
  };
  return map[key]
}

class JobItem extends React.Component {
  render() {
    let list = (function (jobInfo) {
      let res = [], index = 0;
      for (let key in jobInfo) {
        index++
        let title,value;
        if(key === 'projects'){
          value = [];
          jobInfo.projects.forEach((project,index)=>{
            let res = [];
            for(let projectkey in project){
              let distClass = 'dist';
              if(projectkey == 'name'){
                distClass = 'dist project-title';
              }
              res.push(
                <div className="row">
                  <div className="title">{_t(projectkey)}</div>
                  <div className={distClass}>{project[projectkey]}</div>
                </div>
              )
            }
            value.push(
              <div className="project">
                {res}
              </div>
            );
          })
        } else{
          title = _t(key);
          value = jobInfo[key];
        }
        res.push(
          <div className="row" key={index}>
            <div className="title">
              {title}
            </div>
            <div className="dist">
              {value}
            </div>
          </div>
        )
      }
      return res;
    })(this.props.info)
    return (
      <section className="job">
        {list}
      </section>
    )
  }
}

class JobsComponent extends React.Component {
  render() {
    let list = [];
    jobs.forEach((val, index) => {
      list.push(<JobItem info={val} key={index} />)
    })
    return (
      <div className="content">
        {list}
      </div>
    )
  }
}

export default JobsComponent;