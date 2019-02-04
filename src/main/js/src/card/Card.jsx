import React, {Component} from 'react';

class Card extends Component{

    constructor(props){
        super(props);
        this.state = { data : [] , isLoading:false };
    }

    getCards = () => {
        
        this.setState({isLoading:true});

        fetch('/api/cards')
            .then(response => response.json())
            .then(message => {
                console.log(message._embedded.cards);
                this.setState({ data:message._embedded.cards, isLoading: false });
            });
    }

    render(){
        const { data, isLoading } = this.state;
        if(isLoading){
            return 'Loading...';
        }

        return (
            <div>
                <button onClick={this.getCards}>GET DATA</button>
                {
                    data.length > 0 ? <ol> { data.map( d => <li id={d.cardDate}> { d.dayNumber } </li> ) } </ol> : "No found"
                }
                {/* <p>this card number { data.dayNumber }</p> */}
            </div>
        );
    }
}

export default Card;