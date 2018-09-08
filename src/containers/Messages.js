import React, {Component} from 'react';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Message from './components/Message';
import * as messageActions from '../reducers/messageActions';
import './Messages.css';

export class Messages extends Component{
    constructor(props){
        super(props);
        const {dispatch} = props;
        this.boundActionCreators = bindActionCreators(messageActions, dispatch);
        this.state = {messages : []};
    }

    componentDidMount(){
        let {dispatch} = this.props;
        dispatch(messageActions.getMessagesAsync());
    }

    render(){
        const result = this.props.messages.map(m => {
            return <Message key={m.messageId} {...m} {...this.boundActionCreators}/>});
        return(
            <div className="container">
                <ul className="Messages">
                {result}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({message}) => {
    return message;
}

export default connect(mapStateToProps)(Messages);