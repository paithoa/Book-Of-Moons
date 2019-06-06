import React, { Component } from 'react';
import Articles from "./Articles/articles";
import { PulseLoader } from 'react-spinners';

class Categories extends Component{
    state = { 
        articles: [],
        visible:2,
        error:false,
        
     }

     
    
      renderLoading = () => {
        return (
            <div style={{textAlign:"center",marginTop:100}}>
                <PulseLoader color='#FFFF00' loading={!this.state.ready}
                />
            </div>
        );
    };
         render(){
             return (
                 <div>
            <Articles call={`https://book-of-moons.appspot.com/categories/${this.props.match.params.category}`}></Articles>
                </div>
         )
      }
    }
        export default Categories;