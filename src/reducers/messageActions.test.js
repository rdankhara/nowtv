import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as services from '../service';
import * as messageActions from './messageActions';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({messages: [{messageId: 'mid', userId: 'uid', email: 'em'}]});
const mockResponse = [{
    "messageId": "12356",
    "userId": "613651251",
    "fullName": "Robin Balmforth",
    "timestamp": "2017-02-23T14:57:20.629Z",
    "email": "robin@example.com",
    "message": "Hello, World!",
    "avatar": 'http://avatar.com/i'
  }];

  it('creates an async action to getMessages', ()=>{
    const expectedActions = actions.getMessageSuccess(mockResponse);

    services.getChatMessages = jest.fn();
    
    services.getChatMessages.mockImplementation(() => Promise.resolve(mockResponse));
    return store.dispatch(messageActions.getMessagesAsync()).then(()=>{
        expect(store.getActions()[1]).toEqual(expectedActions);
    });
  });
