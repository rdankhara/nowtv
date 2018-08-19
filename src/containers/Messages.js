import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './components/Message';
import {getMessageAction} from '../reducers/actions';
import {getChatMessages} from '../service';
import './Messages.css';

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
    return {
        messages: state.messages
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getMessages : () => dispatch(getMessageAction())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages);