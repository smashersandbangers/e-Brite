//let's get this started
function testMe()
{

	
}

//no idea what this does yet
function updateEventMicah(the_event) {
    jQuery.update(
      "/events/" + the_event.id,
      { event: { title: the_event.title,
                 starts_at: "" + the_event.start,
                 ends_at: "" + the_event.end,
                 description: the_event.description
               }
      },
      function (reponse) { console.log('successfully updated task.'); }
    );
};

//adding a new event to the existing event calendar
function addEventToCalendarMicah(calendarName)
{
	console.log( "addEventToCalendar" );
	//log( jQuery('#newTitle') );
	var newTitle = '"title":"'+jQuery('#newTitle')[0].value+'"';
	var eventStart = '"start":"'+jQuery('#startDate')[0].value+'"';
	log( calendarName );
	log( newTitle );
	console.log( eventStart );
	
	var myCalendar = getCalendarEvents( calendarName );
	//need to find the next available eventid, deleted events need to be accounted for
//log("checking myCalendar");
//log(myCalendar);
	var newEventid = 0;
	for(var i=0; i<myCalendar.length; i++)
	{
		if(newEventid < myCalendar[i].eventid)
			newEventid = myCalendar[i].eventid;
	}
	//we now have the highest known eventid, so increment it by one
	newEventid++;

	var newIndex = myCalendar.length;
	
	myCalendar[newIndex] = JSON.parse( '{"eventid":"'+newEventid+'",'+newTitle+','+eventStart+'}' );
	//log( myCalendar[newIndex] );
	
	saveCalendarEvents( calendarName, myCalendar);
}

function addAttendeeToEventMicah()
{
	console.log("begin add attendee")
}

function updateEventDetailsMicah()
{
	console.log("begin update event details");
	jQuery('#currentEventTitle')[0].innerHTML = jQuery('#newTitle')[0].value;
}