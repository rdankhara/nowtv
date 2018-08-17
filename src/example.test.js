import {users, blogs} from './example';

it('should join result', ()=> {
    const usersMap = new Map();
    users.forEach(u => usersMap.set(u.id, u));

    const output = blogs.map(b => {
        const user = usersMap.get(b.userId);
        return {
            ...b,
            name: user.name,
        }
    });

    output.forEach(o => console.log(o));
    expect(output[0].name).toEqual("name1");
});


it('should merge message', ()=> {
    const message = require('./messages.json');
    const members = require('./members.json');
    const membersMap = new Map();
    members.forEach(m => membersMap.set(m.id, m));

    const resultMessages = message.map(message => {
        const member = membersMap.get(message.userId);

        return {
            messageId: message.messageId,
            userId: message.userId,
            fullName: `${member.firstName} ${member.lastName}`,
            timestamp: message.timestamp,
            email: member.email,
            avatar: member.avatar
        };
    });

    console.log(resultMessages[0]);
    expect(resultMessages).toBeDefined();
})