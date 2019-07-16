import React,{ Component} from "react";
import Body from "./Body";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Articles from "./Articles/articles"
import Article from "./Articles/article"
import SideBar from "./sidebar"
import {Helmet} from "react-helmet";
import Categories from "./Categories"

//statless functional component
class App extends Component {
    // change state if load doesnt work ( Pulse )
    state = {  }
    render() { 
        return ( <React.Fragment>
            <Router>
            <Helmet>
            <title>Book Of Moons - Compilations, Analysis, Summaries, Knowledge, Opinions and Reviews</title>
        <meta name="description" content="Book of Moons seeks to celebrate and encourage a love for all things books, film and television - basically any type of story-telling which excites and inspires us." />
        <meta name="keywords" content="book,review,content,library,reviews,books" />
        <meta name ="robots" content ="index"></meta>
        <meta property="og:description" content="Book of Moons seeks to celebrate and encourage a love for all things books, film and television - basically any type of story-telling which excites and inspires us."></meta>
        <meta property="og:url" content="https://bookofmoons.com"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:site_name" content="Book Of Moons | Australia"></meta>
        <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" />

                </Helmet>
            <SideBar/>
            <Route exact path="/" component={Body} />
            <Route path="/about" component={About} />
            <Route path="/post/articles/:slug" component={Article} />
        
            <Route path ="/categories/:category" component = {Categories}/>



            

            
            </Router>
        </React.Fragment> );
    }
}

function Home() {
    return <h2>Home</h2>;
  }

  function About(){
      return <div class="a" style={{  
        position: 'absolute', left: '50%', top: '57.5%',lineHeight:1.3,
    transform: 'translate(-50%, -50%)'}}>   
        Book of Moons seeks to celebrate and encourage a love for all things books, 
        film and television - basically any type of story-telling which excites and inspires us. 
        As a platform for writers and bookworms, we aim to provide content to help guide you with your next 
        book or movie purchase - regardless of whether you’re a hardcore paperback lover or just a casual 
        theatre-goer.
        <hr></hr>
        If you would like to be a writer or contribute in any way please email bookofmoons@yahoo.com
        with your name, and favorite genre.
        <hr></hr>
        Design and Developed by Handy Hasan and Team.
        <hr></hr>
        <a href="https://www.linkedin.com/in/handy-hasan-a6aa73176/">Linkedin Profile</a>
        <hr></hr>
        <a href="https://medium.com/handy-hasan-blog">Medium Profile</a>
        

        </div>
        
        
       
  }

  function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
  }
  
  
  
  
 
export default App;

