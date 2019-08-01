const bcrypt = require('bcrypt-nodejs');
const TestUsers = [
    {
        name: {
            first: 'newton',
            middle: 'muthigani',
            last: 'muriithi',
        },
        email: 'newtonmuthigani123@gmail.com',
        password: bcrypt.hashSync('muthig123', bcrypt.genSaltSync(8), null),
        Occupation: 'businessman',
        gender: 'male',
    },
    {
        name: {
            first: 'ian',
            middle: 'kamau',
            last: 'muriithi',
        },
        email: 'kamaian@gmail.com',
        password: bcrypt.hashSync('kama123', bcrypt.genSaltSync(8), null),
        Occupation: 'businessman',
        gender: 'male',
    },
    {
        name: {
            first: 'adeline',
            middle: 'wambui',
            last: 'nutoui',
        },
        email: 'wamboade@gmail.com',
        password: bcrypt.hashSync('wambo123', bcrypt.genSaltSync(8), null),
        Occupation: 'teacher',
        gender: 'female',
    },
    {
        name: {
            first: 'nelson',
            middle: 'umtiti',
            last: 'semedo',
        },
        email: 'nelsonseme@gmail.com',
        password: bcrypt.hashSync('thigino123', bcrypt.genSaltSync(8), null),
        Occupation: 'businessman',
        gender: 'male',
    },
    {
        name: {
            first: 'ivy',
            middle: 'alumasa',
            last: 'nkaisona',
        },
        email: 'ivy@gmail.com',
        password: bcrypt.hashSync('rach101', bcrypt.genSaltSync(8), null),
        Occupation: 'chef',
        gender: 'female',
    },
    {
        name: {
            first: 'celine',
            middle: 'deone',
            last: 'muriithi',
        },
        email: 'celine@gmail.com',
        password: bcrypt.hashSync('shmrd123', bcrypt.genSaltSync(8), null),
        Occupation: 'artist',
        gender: 'female',
    },
];
module.exports = TestUsers;