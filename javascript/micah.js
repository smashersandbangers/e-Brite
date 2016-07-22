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
	console.log( "addEventToCalendar (micah)" );
	var newTitle = '"title":"'+jQuery('#newTitle')[0].value+'"';
	var eventStart = '"start":"'+jQuery('#startDate')[0].value+'"';
	log( calendarName );
	log( newTitle );
	console.log( eventStart );
	
	var myCalendar = getCalendarEvents( calendarName );
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
	saveCalendarEvents( calendarName, myCalendar);
}

function addAttendeeToEventMicah(calendarName, eventid)
{
	console.log("begin add attendee")
	var myEvents = getCalendarEvents(calendarName);
	var firstName = jQuery('#addFirstName')[0].value;
	var lastName = jQuery('#addLastName')[0].value;
	var newAttendee = JSON.parse('{"firstName":"'+firstName+'","lastName":"'+lastName+'"}');
	var attendeesArray = [];
	//console.log( myEvents );
	
	for(var i=0; i<myEvents.length; i++)
	{
		if(myEvents[i].eventid === eventid)
		{
			myEvents[i].attendees.push(newAttendee);
		}
	}

	saveCalendarEvents(calendarName, myEvents);
}

function updateEventDetailsMicah(calendarName, eventid)
{
	console.log("begin update event details");
	jQuery('#currentEventTitle')[0].innerHTML = jQuery('#newTitle')[0].value;
	
	var myEvents = getCalendarEvents(calendarName);
	var newTitle = jQuery('#newTitle')[0].value;
	var startDate = jQuery('#startDate')[0].value;
	//console.log( myEvents );
	
	for(var i=0; i<myEvents.length; i++)
	{
		if(myEvents[i].eventid === eventid)
		{
			myEvents[i].title = newTitle;
			myEvents[i].start = moment(startDate);
		}
	}

	jQuery('#newTitle')[0].value = '';
	jQuery('#startDate')[0].value = '';
	saveCalendarEvents(calendarName, myEvents);
}