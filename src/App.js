import React,{ Component} from "react";
import Body from "./Body";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Articles from "./Articles/articles"
import Article from "./Articles/article"
import SideBar from "./sidebar"

import Categories from "./Categories"

//statless functional component
class App extends Component {
    // change state if load doesnt work ( Pulse )
    state = {  }
    render() { 
        return ( <React.Fragment>
            <Router>
            
            <SideBar/>
            <Route exact path="/" component={Body} />
            <Route path="/about" component={About} />
            <Route path="/articles/:slug" component={Article} />
        
            <Route path ="/categories/:category" component = {Categories}/>



            

            
            </Router>
        </React.Fragment> );
    }
}

function Home() {
    return <h2>Home</h2>;
  }

  function About(){
      return <div style={{ position: 'absolute', left: '50%', top: '50%',lineHeight:1.3,
    transform: 'translate(-50%, -50%)'}}>   
        Book of Moons seeks to celebrate and encourage a love for all things books, film and television - basically any type of story-telling which excites and inspires us. As a platform for student writers and bookworms, we aim to provide content to help guide you with your next book or movie purchase - regardless of whether you’re a hardcore paperback lover or just a casual theatre-goer.
        </div>
  }

  function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
  }
  
  
  
  
 
export default App;

