import React from 'react';

let evaluations = ['两届学院优秀学员','校网络安全竞赛三等奖','CET4','计算机二级']

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