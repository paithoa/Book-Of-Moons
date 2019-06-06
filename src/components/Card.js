import React, { Component } from 'react';
import cardStyle from './cardStyle.css'
import { Link } from 'react-router-dom';
import Image from '../static/images/contemplative-reptile.jpg'

class Card extends Component {

    complimentColor = () => {
        return 'lightbrown';
    }

   

    renderContent = () => {
        return (
            <div class="cards"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textDecoration:'none',
                    backgroundImage: `url(${this.props.article.mainImage})`,
                    backgroundHeight:'100%',
                    backgroundWidth:200,

                    objectFit: 'contain',
                    backgroundSize: 'cover', 
                    backgroundColor:'black',
                    padding: '8px 16px',
                    borderRadius: 10,
                    height:200,
                    ...this.props.style
                }}
            >
                <h2 id="articlecard"
                    style={{
                        color: 'white',
                        paddingRight: 8
                    }}
                >
                    {this.props.article.title}
                </h2>
            </div>
        );
    }
    render() {
        if (this.props.to) {
            return (
                <div>
                    {this.renderContent()}
               </div>
            );
        }
        return this.renderContent();
    }
}

export default Card;
