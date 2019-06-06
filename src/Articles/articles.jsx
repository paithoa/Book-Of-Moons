import React, { Component } from 'react';
import axios from 'axios';
import Article from './article'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from '../components/Card';
import Swipeout from 'rc-swipeout';
import InfiniteScroll from 'react-infinite-scroller';
import { PulseLoader } from 'react-spinners';
import SwipeToDelete from 'react-swipe-to-delete-component';
import './article.css';
import ReactLoading from 'react-loading';
import Example from './Example'


class Articles extends Component {
    
    state = { 
        articles: [],
        articlesAdditional:[],
        start:5,
        end:10,
        ready:false,
        hasMore: true,
        
     }
     componentDidMount(){
         var a;
         // if this is called through categories this method is called
         if(typeof this.props.call === "string"){
             console.log("called")
            a = axios.get(`${this.props.call}`)

         }
         else{
        // link to api https://book-of-moons.appspot.com/posts?fbclid=IwAR3qIlOx7j8ACE2pFzINjPjQ90_SP6NyuwJsb-aovVaYYqqgv7IXEctf3oc
        a = axios.get(`https://book-of-moons.appspot.com/posts?fbclid=IwAR3qIlOx7j8ACE2pFzINjPjQ90_SP6NyuwJsb-aovVaYYqqgv7IXEctf3oc`)
         }
        a.then(res => {
        const articles = res.data;
        this.setState({ articles });
        setTimeout(() => this.setState({ ready: true }), 700);

      })
    }
    handleLoadMore = () => {
        
        axios.get(`https://book-of-moons.appspot.com/posts/?start=${this.state.start}&end=${this.state.end}`)
        
      .then(res => {
          
        const articlesAdditional = res.data;
        console.log(articlesAdditional.length);
        if(articlesAdditional.length != 5 ){
            console.log("end of line")
            this.setState({hasMore:false});
            return;
        }
        setTimeout(() => {
            
            this.setState({ articles: this.state.articles.concat(articlesAdditional),
            start:this.state.start+5,end:this.state.end+5 })
          }, 500);
          
      })
      
    }

    

    renderLoading = () => {
        
        return (
            <div style={{textAlign:"center",marginTop:100}}>
                <PulseLoader color='yellow' loading={!this.state.ready}
                />
            </div>
        );
    };
    
    
    render() { 
        
        return ( <div >
            {this.state.ready ? <InfiniteScroll
            dataLength={this.state.articles.length}
    loadMore={this.handleLoadMore}
    hasMore={this.state.hasMore}
    next={this.handleLoadMore}
    
    loader={<div style={{textAlign:"center",paddingTop:20,fontSize:30,fontWeight:40}}className="loader" key={0}>
    <Example></Example>
    </div>}
    endMessage={
        <p style={{textAlign: 'center'}}>
    
        </p>
      }
>

{ this.state.articles.map(article =>
                <div class="hover02" style={{textAlign:'center', verticalAlign: 'middle'}}>
                    <Link to = {`/articles/${article.slug.current}`} style={{ textDecoration: 'none' }}>
                    <Card  article={article} style={{ backgroundColor: 'white', marginTop: 16, marginLeft:30, marginRight:30 }}></Card>
                    </Link> 
       
                </div>   
                            

                    
            )}

            
           
           </InfiniteScroll>
           : this.renderLoading()}
            </div>
            
            );
    }
}
 //            <Article listofArticles= {article}>{this.props.listofArticles}</Article>

export default Articles;