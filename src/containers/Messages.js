import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './components/Message';
import * as messageActions from '../reducers/messageActions';
import {getChatMessages} from '../service';
import './Messages.css';

class Messages extends Component{
    constructor(props){
        super(props);
        this.state = {messages : []};
    }

    componentDidMount(){
        // getChatMessages().then(messages => {
        //     this.setState({messages});
        // })
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
    console.log('mapstatetoprops', state);
    return {
        isFetching : state.message.isFetching,
        messages: state.message.messages
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getMessages : () => dispatch(messageActions.getMessagesAsync())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages);