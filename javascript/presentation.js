//not being used?, marked for deletion
function printEvents( events )
{
	console.log( events );
	
	document.write("<ul>");
	for( var e in events ){
		var event = events[e];
		//console.log(eventInstances[e]);
		
		document.write(
			"<li><a href=\"#\">"
			+event.eventDate
			+": "
			+event.eventName
			+" - "
			+event.eventLocation
			+"</a></li>");
		
	}
	document.write("</ul>");
	
}

//printing the list of attendess, div with id of attendeeList needs to exist on page, comment
function printAttendeesHTML(calendarName, eventid)
{
	var myDiv = jQuery('#attendeesList')[0];
	var attendeesArray = [];
	var attendeesList = '';
	
	attendeesArray = getEventAttendees(calendarName, eventid);
	
	if(attendeesArray)
		for(var i=0; i<attendeesArray.length; i++)
		{
			var attendeeObj = attendeesArray[i];
			attendeesList += "<ul>Attendee "+(i+1);
			attendeesList += "<ul>";
			//console.log( attendeeObj );
			attendeesList += "<li>Name: "+attendeeObj.firstName+" "+attendeeObj.lastName;
			attendeesList += "</ul></ul>";
		}
	myDiv.innerHTML = attendeesList;
}

// adding in the print event list 
//printing the list of all Calendar Events, div with id of events needs to exist on page
function printEventsHTML(calendarName)
{
	var myDiv = jQuery('#eventList')[0];
	console.log( myDiv );
	var eventarray = getEventid(calendarName, eventid,eventname);
	
	for(var i=0; i<eventarray.length; i++)
	{	
		var eventObj = eventArray[i];
		eventsList += "<ul>eventName "+i;
		eventList += "<ul>";
		console.log( eventObj );
		eventList += "<li>Name: "+eventObj.eventname+" "+eventObj.eventLocation+" " + eventObj.eventDate;
		eventList += "</ul></ul>";
	}
	eventList += "</ul>";
	console.log( eventList );
	myDiv.innerHTML = eventList;
}

function printEventDetailsHTML(calendarName, eventid)
{
	var myDiv = jQuery('#eventDetails');
	var myEvent = getEvent(calendarName, eventid);
	
	myDiv.append("<p>"+calendarName+" Calendar</p>");
	myDiv.append("<p><strong>Event id:</strong> <span id='currentEventid'>"+eventid+"</span></p>");
	myDiv.append("<p><strong>Event name:</strong> <span id='currentEventTitle'>"+myEvent.title+"</span></p>");
	if( myEvent.eventLocation )
		myDiv.append("<p><strong>Location:</strong> <span id='currentEventTitle'>"+myEvent.eventLocation+"</span></p>");
}

//phil's function
function printSingleEventData(myCalendarName, eventid)
{
	document.write( "<p>"+myCalendarName+ " Calendar</p>");
	document.write( "<p><strong>Event id:</strong> <span id='currentEventid'>"+eventid+"</span></p>" );

	if( getEvent( myCalendarName, eventid ).eventLocation )
	{
		document.write( "<p><strong>Location:</strong> <span id='currentEventTitle'>"+getEvent(myCalendarName,eventid) .eventLocation+"</span></p>" );
		document.write( "<p><strong>Start:</strong> <span id='currentEventTitle'>"+getEvent(myCalendarName,eventid).start+"</span></p>" );
		document.write( "<p><strong>Seats:</strong> <span id='currentEventTitle'>"+getEvent(myCalendarName,eventid).eventSeats+"</span></p>" );
		document.write( "<p><strong>Attendee Count:</strong> <span id='eventCurrentAttendees'>"+getEvent( myCalendarName,eventid).eventCurrentAttendees+"</span></p>" );
	}	
}



