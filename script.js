// This will be our current time 
let currentDay = moment().format('MMMM Do YYYY');
let currentTime = moment().format('h:mm:ss a');
console.log(currentTime);

$(document).ready(function(){
    $('.currentDay').text(currentDay);
});

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
	$( '#calendar').append( '<li class="list-group-item time-slot" id="time-slot-' + index + '">' + item +': <input type="text" id="input time-slot-appt-' + index + '"></input></li>' );
	console.log ( "hour: " + index + ", pretty display: " + item );
} );
