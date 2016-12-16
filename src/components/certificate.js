import React from 'react';

let certificates = ['两届学院优秀学员','校网络安全竞赛三等奖','CET4','计算机二级']

class CertificateComponent extends React.Component{
    render(){
        let certis = [];
        certificates.forEach((val,index)=>{
            certis.push(<li key={index}>{val}</li>)
        })
        return(
            <ul>
                {certis}
            </ul>
        )
    }
}

export default CertificateComponent;