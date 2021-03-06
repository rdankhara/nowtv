import getChatLog, {getChatMessages} from './service';

// This is just a sample test to show you the desired format and fields, feel free to delete it.
describe('getChatMessages' , ()=> {

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

  it('returns messages with correct property and order', done => {
    return getChatMessages().then(data => {

      const message = data[0];
      expect(message.fullName).toBe('Amanda Baker');
      expect(message.messageId).toBe('fa0ca158-42ae-435d-8c32-13f4cb7b8de8');
      expect(message.userId).toEqual('73f30d93-f87b-45ea-bda5-60fa4b3716b5');
      expect(message.avatar).toBe(null);
      expect(message.email).toBe('abakera@craigslist.org');
      expect(message.timestamp.getDate()).toEqual(24);
      expect(message.timestamp.getMonth()).toEqual(1);
      expect(message.timestamp.getYear()).toEqual(116);
      done();
    });
  });
});
