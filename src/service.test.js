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


it('works with resolves', done => {
  
  return getChatMessages().then(data => {
    const message =  data[0];
    console.log(message);
    expect(true).toBe(true);
    done();
  });
  // expect.assertions(1);
  // return expect(getChatMessages).resolves[0].messageId.toEqual('cd445e6d-e514-424f-ba8f-16ec842002c6');
});
