var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', ...]
// console.log(date.getMonth());

// var date = moment();
// date.add(11,'year').subtract(12, 'months');
// console.log(date.format('MMM Do, YYYY LT'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
