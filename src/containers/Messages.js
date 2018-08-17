import React, {Component} from 'react';
import Message from './components/Message';
import {getChatMessages} from '../service';

class Messages extends Component{
    constructor(props){
        super(props);
        this.state = {messages : []};
    }

    componentDidMount(){
        getChatMessages().then(messages => {
            this.setState({messages});
        })
    }
    render(){
        const result = this.state.messages.map(m => {
            return <Message key={m.id} {...m}/>});
        return(
            <div>
                {result}
            </div>
        )
    }
}

export default Messages;