import _ from 'lodash';

const users = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 34 },
    { user: 'fred', age: 40 },
    { user: 'barney', age: 36 }
];

const sortedUsers = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
console.log(sortedUsers);
