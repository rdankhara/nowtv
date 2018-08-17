import {getMembers, getMessages} from './data';

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

export const getChatMessages = () => {
    return new Promise(resolve => {
        Promise.all([getMembers(), getMessages()])
        .then(asyncResult => {
          console.log(asyncResult);
          var result = extractChatMessages(...asyncResult);
          resolve(result);
        });
    });
}

const extractChatMessages = (members, messages) => {
    console.log(members, messages);
  const membersMap = new Map();
  console.log(members[0], messages[0]);
  members.forEach(m => membersMap.set(m.id, m));

  const resultMessages = messages.map(message => {
      const member = membersMap.get(message.userId);

      return {
          messageId: message.id,
          userId: message.userId,
          fullName: `${member.firstName} ${member.lastName}`,
          timestamp: message.timestamp,
          email: member.email,
          avatar: member.avatar
      };
  });
  return resultMessages;
}