import {getMembers, getMessages} from './data';
import {toMap} from './core/arrayExtensions';

export default function getChatLog() {
  return Promise.resolve([{
    messageId: '12356',
    userId: '613651251',
    fullName: 'Robin Balmforth',
    timestamp: new Date().toISOString(),
    email: 'robin@example.com',
    message: 'Hello, World!',
    avatar: null
  }]);
};

const extractChatMessages = (members, messages) => {
    const membersMap = toMap(members, "id");
    const resultMessages = messages.map(message => {
    const member = membersMap.get(message.userId);

      return {
          messageId: message.id,
          userId: message.userId,
          fullName: `${member.firstName} ${member.lastName}`,
          timestamp: new Date(message.timestamp),
          email: member.email,
          avatar: member.avatar
      };
  });
  return resultMessages;
}

export const getChatMessages = () => {
    return new Promise(resolve => {
        Promise.all([getMembers(), getMessages()])
        .then(asyncResult => {
          var result = extractChatMessages(...asyncResult)
            .sort((a, b) => a.timestamp.valueOf() - b.timestamp.valueOf());
          resolve(result);
        });
    });
}
