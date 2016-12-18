import React from 'react';

let skills =                ['七星级985名校出身，具有很强的学习能力，抗压能力，解决问题的能力；',
							'具有丰富的PC端页面、H5游戏以级web3D开发经验；',
							'对WEB标准有深刻的理解，精通前端页面的制作，了解ES6新标准；',
							'熟悉主流JavaScript框架和库，如jQuery、zepto、Angular、ionic、React等，并对jQuery，zepto，bootstrap源码有一定学习，可以阅读源码;',
							'熟练掌握原生JavaScript，熟悉常见JS的兼容性写法；',
							'熟练掌握Ajax,熟悉前后端交互流程并实际运用，理解RESTful架构；',
							'熟练掌握Photoshop软件的常规使用，能够配合UI设计师实现页面重构；',
							'熟练掌握弹性盒模型和响应式布局，实现PC，各型号手机，平板等多终端适配；',
							'掌握模块化开发，熟练使用RequireJS；',
							'熟练掌握sass，理解CSS模块化开发;',
							'熟练掌握JS面向对象，熟悉JS常用设计模式；',
							'熟悉前端常见的MVC、MVP以及MVVM模式;',
							'对前端工程化有所实践，用过grunt，玩过gulp，现在走上了webpack的不归路;',
							'熟悉nodejs的使用，对express，mongodb有一定实践经验，发布过一些npm包;',
							'github开源爱好者，linux脑残粉，熟悉linux基本操作，并使用linux进行常用开发;',
							'熟悉svn，git版本控制工具的基本操作，能参与进行团队协作开发;'
]

class SkillsListComponent extends React.Component{
    render(){
        let skillsItem = [];
        skills.forEach((val,index)=>{
            skillsItem.push(<li key={index}>{val}</li>)
        })
        return(
            <ul>
                {skillsItem}
            </ul>
        )
    }
}

export default SkillsListComponent;