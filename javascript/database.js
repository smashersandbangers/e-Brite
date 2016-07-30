//Purpose of the file: Facilitate and abstract the transfer of information within the application.

//deprecated, don't use
function getEvents()
{
	//console.log( events );
	if(preloadEvents)
		return preLoadedEvents;
	else
		return NULL;
}

//returns a single event based on the eventid, depracated, don't use
function getEvent(eventid)
{
	var defaultTestEvent = {
		'eventid': '01',
		'title': 'Success Through Failures',
		'eventLocation': 'Atlanta',
		'start': moment('2016-07-22'),

		'attendees':[
			{
			'firstName': 'John',
			'lastName': 'Smitty'
			},
			{
			'firstName': 'Sue',
			'lastName': 'Mee'
			}
		]
	};
	
	//parses events to search for matching eventid
	var events = getEvents();
	for( var i=0; i<events.length; i++){
		if( events[i].eventid == eventid)
			return events[i];
	}
	
	return defaultTestEvent;
}

//returns a single event based on the eventid
function getEvent(calendarName, eventid)
{
	//for demo purposes we have created a default not-found event that gets returned
	var defaultTestEvent = {
		'eventid': '01',
		'title': 'No Event Found',
		'eventLocation': 'No Location Found',
		'start': moment('2016-07-22').format(),

		'attendees':[
			{
			'firstName': 'Attendees',
			'lastName': 'Not Found'
			}
		]
	};
	
	//parses events to search for matching eventid
	var events = getCalendarEvents( calendarName );
	for( var i=0; i<events.length; i++){
		if( events[i].eventid == eventid)
			return events[i];
	}

	return defaultTestEvent;
}

//method for retrieving attendees
function getEventAttendees(calendarName, eventid)
{	
	var myEvent = getEvent( calendarName, eventid );
	
	return myEvent.attendees;
}

//implementing the storing of events to the local storage
function saveCalendarEvents(calendarName, eventsObject)
{
	localStorage.setItem(calendarName, JSON.stringify(eventsObject));
}

//implementing the get events from storage method
function getCalendarEvents(calendarName)
{
	//check to see if the calendar exists
	if( !localStorage.getItem(calendarName) )
		localStorage.setItem( calendarName, '[]' );
	
	//console.log( calendarName );
	//console.log( JSON.parse(localStorage.getItem(calendarName)) );
	return JSON.parse( localStorage.getItem(calendarName));
}

//adding a new event to the existing event calendar
function addEventToCalendar(calendarName)
{
	console.log( "addEventToCalendar" );
	var newTitle = '"title":"'+jQuery('#newTitle')[0].value+'"';
	var eventStart = '"start":"'+jQuery('#startDate')[0].value+'"';
	var eventLocation = '"eventLocation":"'+jQuery('#newLocation')[0].value+'"';
	
	var myCalendar = getCalendarEvents( calendarName );
	//need to find the next available eventid, deleted events need to be accounted for
	var newEventid = 0;
	for(var i=0; i<myCalendar.length; i++)
	{
		if(newEventid < myCalendar[i].eventid)
			newEventid = myCalendar[i].eventid;
	}
	//we now have the highest known eventid, so increment it by one
	newEventid++;

	var newIndex = myCalendar.length;
	
	myCalendar[newIndex] = JSON.parse( '{"eventid":"'+newEventid+'",'+newTitle+','+eventStart+','+eventLocation+'}' );
	//log( myCalendar[newIndex] );
	
	saveCalendarEvents( calendarName, myCalendar);
}

//retrieves an array list of event titles based on the provided calendar name
function getCalendarEventTitles(calendarName)
{
	var myEvents = JSON.parse(localStorage.getItem(calendarName));
	var myTitles = [];
	
	if( !localStorage.getItem(calendarName) )
		localStorage.setItem( calendarName, '[]' );
	for(var i=0; i<myEvents.length; i++)
	{
		myTitles.push(myEvents[i].title);
	}
	
	return myTitles;
}

/*
because FullCalendar events are far more complex than e-Brite events, we have
created this function to take only what we want from a FullCalendar event.
*/
function saveFullCalendarEvents(calendarName, fullCalendarEvents)
{
	console.log('save full calendar');
	var myEvents = getCalendarEvents(calendarName);
	var newEventsLog = [];

console.log(JSON.stringify(myEvents[0]));
	for(var i=0; i<fullCalendarEvents.length; i++)
	{
		if(fullCalendarEvents[i].newEvent)
		{
			var myEvent = '{'
						+'"eventid":'+getNewEventid(calendarName)+','
						+'"title":"'+fullCalendarEvents[i].title+'",'
						+'"start":"'+moment(fullCalendarEvents[i].start).format()+'"'
			+'}';
			console.log(myEvent);
			myEvents[myEvents.length] = JSON.parse(myEvent);
			saveCalendarEvents(calendarName, myEvents);
			fullCalendarEvents[i].newEvent=false;
		}
		
	}
	
}

//returns the next available eventid for a specific calendar
function getNewEventid(calendarName)
{
	var myCalendar = getCalendarEvents( calendarName );
	//need to find the next available eventid, deleted events need to be accounted for
	var newEventid = 0;
	for(var i=0; i<myCalendar.length; i++)
	{
		if(newEventid < myCalendar[i].eventid)
			newEventid = myCalendar[i].eventid;
	}
	//we now have the highest known eventid, so increment it by one
	return ++newEventid;
}


//update function to take an event object... 
function updateEventDetails(calendarName, eventid)
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
		if(jQuery('#currentEventLocation')[0])
		{
			console.log('found currentEventLocation');
			jQuery('#currentEventLocation')[0].innerHTML = eventLocation;
		}
		else
		{
			console.log('did not find current event location');
			jQuery('#eventDetails').append("<p><strong>Location:</strong> <span id='currentEventTitle'>"+eventLocation+"</span></p>");
		}
		for(var i=0; i<myEvents.length; i++)
		{
			if(myEvents[i].eventid === parseInt(eventid))
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
		//printEventDetailsHTML(calendarName, eventid);
	}
	else
	{
		jQuery('#modifyEventMessage')[0].innerHTML = '<p><strong>Please enter a title and start date.</strong></p>';
	}
}

//add a new attendee to a e-Brite event
function addAttendeeToEvent(calendarName, eventid)
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