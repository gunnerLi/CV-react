import React from 'react';

let evaluations = ['很强的吃苦意识，曾经三天武装20公斤徒步120公里',
 '勇于面对困难，善于分析和解决问题',
 '具有较强的抗压能力，创业公司的锻炼使我处理问题的能力大大提升',
 '良好的自我管理能力，诚恳踏实，敬业进取',
 '有较强的团队协作意识，有责任感和集体荣誉感']

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