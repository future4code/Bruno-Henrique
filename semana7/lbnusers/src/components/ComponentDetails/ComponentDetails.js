import React from 'react';
// import axios from 'axios'

class ComponentDetails extends React.Component{
   
    render(){
        const usuario = this.props.userInfo.map((info) => {
            return (
                <div>
                    <p>{info.name} : {info.email}</p>
                </div>
            )
        })
        return(
            <div>{usuario}</div>
        )
    }
};
export default ComponentDetails;