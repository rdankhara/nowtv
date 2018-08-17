import getChatLog, {getChatMessages} from './service';

// This is just a sample test to show you the desired format and fields, feel free to delete it.

it('returns the correct format', () => {
  return getChatLog().then(([firstMessage]) => {
    expect(typeof firstMessage.messageId).toBe('string');
    expect(typeof firstMessage.userId).toBe('string');
    expect(typeof firstMessage.fullName).toBe('string');
    expect(typeof firstMessage.timestamp).toBe('string');
    expect(typeof firstMessage.email).toBe('string');
    expect(typeof firstMessage.message).toBe('string');
    expect(firstMessage.avatar === null || typeof firstMessage === 'string').toBeTruthy();
  });
});

describe('getChatMessages' , ()=> {
  //   const messages = require('./messages.json').map(m => {
  //     return {...m, timestamp: new Date(m.timestamp)};
  //   }).sort((a, b) ;
  // const members = require('./members.json')
  it('returns messages with correct property and order', done => {
    return getChatMessages().then(data => {

      const message = data[0];
      expect(message.fullName).toBe('Amanda Baker');
      expect(message.messageId).toBe('fa0ca158-42ae-435d-8c32-13f4cb7b8de8');
      expect(message.userId).toEqual('73f30d93-f87b-45ea-bda5-60fa4b3716b5');
      expect(message.avatar).toBe(null);
      expect(message.email).toBe('abakera@craigslist.org');
      done();
    });
  });
});
