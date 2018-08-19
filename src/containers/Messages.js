import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './components/Message';
import * as messageActions from '../reducers/messageActions';
import './Messages.css';

export class Messages extends Component{
    constructor(props){
        super(props);
        this.state = {messages : []};
    }

    componentDidMount(){
        this.props.getMessages();
    }

    render(){
        const result = this.props.messages.map(m => {
            return <Message key={m.messageId} {...m}/>});
        return(
            <div className="container">
                <ul className="Messages">
                {result}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.message;
}

const mapDispatchToProps = dispatch => {
    return {
        getMessages : () => dispatch(messageActions.getMessagesAsync())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages);