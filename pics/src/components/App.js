import React from "react";

import Imagelist from './Imagelist'

import unsplash from "../api/unsplash"
import SearchBar from './SearchBar'




class App extends React.Component{

    state={image:[]};

     onSearchSubmit= async (term)=>{
        const response = await unsplash.get('/search/photos',{
            params: {query: term},

        });
        this.setState({image:response.data.results});
    }



    render(){
    return (<div className="ui container" style={{marginTop:"10px"}}>
            <SearchBar onSubmit={this.onSearchSubmit}/><Imagelist images={this.state.image}/></div>)
    }
    
}


export default App;