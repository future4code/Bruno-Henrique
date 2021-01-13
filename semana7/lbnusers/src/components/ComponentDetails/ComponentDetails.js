import React from 'react';
// import axios from 'axios'

class ComponentDetails extends React.Component{
   
    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
            </div>
        )
    }
};
export default ComponentDetails;