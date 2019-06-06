import React, { Component } from 'react';
import axios from 'axios';
import 'typeface-pt-sans';
import "../App.css"
import { PulseLoader } from 'react-spinners';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// Progress Bar args and details --> https://www.npmjs.com/package/react-scroll-progress-bar
import ProgressBar from "react-scroll-progress-bar"; //Add this line
const readingTime = require('reading-time');


class Article extends Component {
    state = { 
        body:'Loading',
        name:'Loading',
        date:'Loading',
        title:'Loading',
        ready: false
     }
     
     componentWillMount() {
         
        axios.get(`https://book-of-moons.appspot.com/posts/${this.props.match.params.slug}`)
          .then(res => {
            const article = res.data
            console.log(article)
            this.setState({body:article.body,name:article.author.name,date:article._createdAt,title:article.title});
            console.log(article)
          })
          setTimeout(() => this.setState({ ready: true }), 700);
      }
      transform(node) {
        // do not render any <span> tags
        if (node.type === 'tag' && node.name === 'img') {
          return <img class="img-pictures"></img>
        }
      }

    renderLoading = () => {
        return (
            <div style={{textAlign:"center",marginTop:100}}>
                <PulseLoader color='#FFFF00' loading={!this.state.ready}
                />
            </div>
        );
    };

    changeDate = (date) => {
        var newDate = date.substring(0, 10)
        return newDate
    }

    
      
    render() { 
        function transform(node) {
            // do not render any <span> tags
            if (node.type === 'tag' && node.name === 'img') {
              return <img class="img-pictures"></img>
            }
          }
        let styles = {
            root: {
              fontFamily: 'PT-Sans'
            },
            title:{
                textAlign:'center',
                fontWeight:600,
                fontSize:25,
                textIndent:'1em'
            },
            
            actualTitle:{
                paddingLeft:30,
                paddingRight:30,
            },
            belowTitle:{
                textAlign:'center',
                fontWeight:450,
                fontSize:15,
                paddingLeft:30,
                paddingRight:30,
            },
            bodyTitle:{
                display: 'flex',  
                justifyContent:'center', 
                alignItems:'center',
                lineHeight:2,
                marginLeft:'15%',
                marginRight:'15%',
                fontSize:20
            }
            
          }
        const stats = readingTime(this.state.body);
        

          
        return ( <div  >
            <ProgressBar bgcolor="#BDB76B	"/>
            {this.state.ready ? <div>
               <h1 style={styles.title}>
               <p style={styles.actualTitle}>{this.state.title}</p>
                </h1>
               <h3 style={styles.belowTitle}>By {this.state.name}  | {this.changeDate(this.state.date)} | {stats.text}</h3>
               <div style={styles.bodyTitle}>
               { ReactHtmlParser(this.state.body,this.transform) }
               </div>   
               </div>
               : this.renderLoading()}
           
        </div> );
    }
}


 
export default Article;