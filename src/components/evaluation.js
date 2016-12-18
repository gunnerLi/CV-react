import React from 'react';

let evaluations = ['很强的吃苦意识，曾经三天武装20公斤徒步120公里',
 '勇于面对困难，善于分析和解决问题',
 '能承受较高的工作压力，创业公司的锻炼使我处理问题的能力大大提升',
 '有责任感和集体荣誉感',
 '酷爱github，经常沉迷于别人的源码而无法自拔',
 '爱好：听歌，源码，看书，跑步']

class EvaluationComponent extends React.Component{
    render(){
        let eva = [];
        evaluations.forEach((val,index)=>{
            eva.push(<li key={index}>{val}</li>)
        })
        return(
            <ul>
                {eva}
            </ul>
        )
    }
}

export default EvaluationComponent;