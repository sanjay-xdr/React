import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';






class App extends React.Component{

state={lat:null,errorMSg:''};

  

   
 

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (success)=> this.setState({lat: success.coords.latitude}),
       (error)=>{this.setState({errorMSg: error.message});
      }
    );

  }

renderContent(){
  if(!this.state.errorMSg && this.state.lat){
    return <SeasonDisplay lat={this.state.lat}/>
  }
  if(this.state.errorMSg && !this.state.lat){
    return <div>Error:{this.state.errorMSg}</div>
  }
  
  return <Spinner message="Please Accept the location request"/>

}
  render(){
    return(
      <div>{this.renderContent()}</div>
    )
    
    
   


 
     

  

  };
};




ReactDOM.render(<App/>,document.querySelector("#root"))