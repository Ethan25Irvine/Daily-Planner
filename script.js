// This will be our current time 
let currentDay = moment().format('MMMM Do YYYY');
let currentTime = moment().format('h a');
console.log(currentTime);

$(document).ready(function(){
    $('.currentDay').text(currentDay);
});



function presentColor(){
    $('.list-group-item').css('background-color', 'rgb(176, 241, 255)').css('color', 'white');
}

function pastColor(){
    $('.list-group-item').css('background-color', '#bbbbbb').css('color', 'white');
}


// this is our html for the calendar just adjust start_time and/or end_time to change the times
let time_slots = [];
let start_time = 6;
let end_time = 18;

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
	$( '#calendar').append('<li class="list-group-item " id="time-slot-' + index + ' ">' + item +': <input type="text" id="input"></input><button type="button" class="btn col-lg-1 ml-1 btn-dark">Save</button></li>' );
    console.log ( "hour: " + index + ", pretty display: " + item );
   
});


// save to localserver
$('.btn').click(function(){
    // make these variables then add them to the inputText variable
    let grabID = $(this).parent().attr('id');
    let grabValue = $(this).siblings('input').val();

    localStorage.setItem(grabID, grabValue);
    
});


