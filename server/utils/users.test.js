const expect = require('expect');
const {Users} = require('./users');


describe('Users', () => {
    var users;
    
    beforeEach (() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Hassan',
            room: 'Node'
        }, {
            id: '2',
            name: 'Areej',
            room: 'React'
        }, {
            id: '3',
            name: 'Rafi',
            room: 'Node'
        }]
    })
    
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Hassan',
            room: 'Node'
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userID ='2';
        var user =users.getUser(userID);

        expect(user.id).toBe(userID);
    });

    it('should not find user', () => {
        var userID ='99';
        var user =users.getUser(userID);

        expect(user).toNotExist();
    });



    it('should return names for node course', () => {
        var userList = users.getUserList('Node');

        expect(userList).toEqual(['Hassan', 'Rafi']);
    });
    it('should return names for react course', () => {
        var userList = users.getUserList('React');

        expect(userList).toEqual(['Areej']);
    });
});