import React from 'react';
import ReactDOM from 'react-dom';






class App extends React.Component{
  constructor(props){
    super(props);

    this.state={lat:null,errorMSg:''};

    window.navigator.geolocation.getCurrentPosition(
      (success)=>{ this.setState({lat: success.coords.latitude});
      
      
      
      
      }, (error)=>{
        this.setState({errorMSg: error.message});
      }
    );

   
  }
  render(){

    
    
    if(!this.state.errorMSg && this.state.lat){
      return <div>Lat:{this.state.lat}</div>
    }
    if(this.state.errorMSg && !this.state.lat){
      return <div>Error:{this.state.errorMSg}</div>
    }
    
    return <div>LOADING</div>


 
     

  

  };
};




ReactDOM.render(<App/>,document.querySelector("#root"))