// This will be our current time 
let currentDay = moment().format('MMMM Do YYYY');
let currentTime = moment().format('h:mm:ss a');
console.log(currentTime);


$(document).ready(function(){
    $('.currentDay').text(currentDay);
});
