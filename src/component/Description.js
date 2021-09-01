import React from 'react'
class Description extends React.Component{
    render(){
        return(
            <h2>
            <p>{this.props.text}</p>
            </h2>
        )
    }
}

export default Description;