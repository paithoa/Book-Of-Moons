import React, { Component } from 'react';
import axios from 'axios';
import Articles from './Articles/articles'
import { PulseLoader } from 'react-spinners';
class Body extends Component {
    
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

    render() { 
        return ( <div>
                    
                  <Articles call={false}/>
         
                
            
        
        </div> );
    }
}
//Body Before Artice
//Trending Articles
//Body After Article
//        { this.state.articles.map(article => <li>{article.title}</li>)}
/*
{ this.state.articles.map(article =>
                        <Article listofArticles= {article}></Article>
                        )}
*/
export default Body;