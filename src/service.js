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
  const resultMessages = messages.map(({userId, id, message, timestamp}) => {
      const {firstName, lastName, email, avatar} = membersMap.get(userId);
        return {
            messageId: id,
            userId: userId,
            message :message,
            fullName: `${firstName} ${lastName}`,
            timestamp: new Date(timestamp),
            email: email,
            avatar: avatar
        };
  });
return resultMessages;
}

export const getChatMessagesPromise = () => {
  return new Promise(resolve => {
      Promise.all([getMembers(), getMessages()])
      .then(asyncResult => {
        var result = extractChatMessages(...asyncResult)
          .sort((a, b) => a.timestamp.valueOf() - b.timestamp.valueOf());
        resolve(result);
      });
  });
}

export const getChatMessages = async () => {
  const result = extractChatMessages(...await Promise.all([getMembers(), getMessages()]))
      .sort((a, b) => a.timestamp.valueOf() - b.timestamp.valueOf());
      return result;
}
