// This will be our current time 
let currentDay = moment().format('MMMM Do YYYY');
let currentTime = moment().format('HH');
console.log(currentTime);

let time_slots = [];
let start_time = 6;
let end_time = 18;

console.log(currentTime);

$(document).ready(function(){
    $('.currentDay').text(currentDay);
    for( let i = start_time ; i <= end_time ; i++ ){
        console.log(localStorage.getItem('time-slot-' + i ));
        $('#time-slot-' + i + ' input').val(localStorage.getItem('time-slot-' + i ));
    }
});

// this is our html for the calendar just adjust start_time and/or end_time to change the times
for( let i = start_time ; i <= end_time ; i++ ){
	let suffix = 'AM';
    let hour = i;
    if( i >= 12 ){
        suffix = 'PM';
    } if( i >= 13 ){
        hour = i - 12;
    }
    time_slots[i] = hour + ':00 ' + suffix;   
}

time_slots.forEach( function( item, index){
    let bgClass = ' past';
    if (index==currentTime){
        bgClass = ' present';
    } 
    if (index>currentTime){
        bgClass = ' future';
    } 
	$( '#calendar').append('<li class="list-group-item' + bgClass +'" id="time-slot-' + index + '">' + item +': <input type="text" id="input"></input><button type="button" class="btn col-sm-1 col-md-1 col-lg-1 ml-1 btn-dark">Save</button></li>' );
   
   console.log(index)
});


// save to localserver
$('.btn').click(function(){
    // make these variables then add them to the inputText variable
    let grabID = $(this).parent().attr('id');
    let grabValue = $(this).siblings('input').val();
    localStorage.setItem(grabID, grabValue);
});


