import React from 'react';


class Imagecard extends React.Component{



    render(){
        return (<div>
            
            <img alt={this.props.image.descriptio} src={this.props.image.urls.regular} />
            
            
            </div>)
    }
}


export default Imagecard;