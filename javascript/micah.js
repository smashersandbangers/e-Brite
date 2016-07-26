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
	console.log("begin add attendee (micah)")
	var myEvents = getCalendarEvents(calendarName);
	var firstName = jQuery('#addFirstName')[0].value;
	var lastName = jQuery('#addLastName')[0].value;

	//console.log( myEvents );
	if( firstName && lastName)
	{
		var newAttendee = JSON.parse('{"firstName":"'+firstName+'","lastName":"'+lastName+'"}');
		var attendeesArray = [];
		
		//loop through events to find the correct eventid
		for(var i=0; i<myEvents.length; i++)
		{
			console.log('myevents: '+myEvents[i].eventid+', looking for: '+eventid);
			if(myEvents[i].eventid === parseInt(eventid))
			{
				console.log("match found");
				//if attendees does not exist we need to create an array
				if(!myEvents[i].attendees)
					myEvents[i].attendees = [];
				myEvents[i].attendees.push(newAttendee);
			}
		}
	
		jQuery('#addFirstName')[0].value = '';
		jQuery('#addLastName')[0].value = '';
		saveCalendarEvents(calendarName, myEvents);
		printAttendeesHTML(calendarName, eventid);
	}
	else
	{
		jQuery('#addAttendeeMessage')[0].innerHTML = '<p><strong>Please enter a first and last name.</strong></p>';
	}
}

//update function to take an event object... 
function updateEventDetailsMicah(calendarName, eventid)
{
	console.log("begin update event details");
	
	var myEvents = getCalendarEvents(calendarName);
	var newTitle = jQuery('#newTitle')[0].value;
	var startDate = jQuery('#startDate')[0].value;
	var eventLocation = jQuery('#eventLocation')[0].value;
	//console.log( myEvents );
	
	if(newTitle && startDate)
	{
		jQuery('#currentEventTitle')[0].innerHTML = jQuery('#newTitle')[0].value;
		for(var i=0; i<myEvents.length; i++)
		{
			if(myEvents[i].eventid === eventid)
			{
				myEvents[i].title = newTitle;
				myEvents[i].start = moment(startDate);
				myEvents[i].eventLocation = eventLocation;
			}
		}

		jQuery('#newTitle')[0].value = '';
		jQuery('#startDate')[0].value = '';
		jQuery('#eventLocation')[0].value = '';
		saveCalendarEvents(calendarName, myEvents);
	}
	else
	{
		jQuery('#modifyEventMessage')[0].innerHTML = '<p><strong>Please enter a title and start date.</strong></p>';
	}
}