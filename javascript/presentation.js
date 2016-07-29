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
	
	if(jQuery('#calendarName')[0])
	{
		console.log("print event 1");
		jQuery('#currentEventTitle')[0].innerHTML( jQuery('#newTitle')[0].value );
		myDiv.append("<p><strong>Location:</strong> <span id='currentEventTitle'>"+myEvent.eventLocation+"</span></p>");
	}
	else
	{
		console.log("print event 2");
		myDiv.append("<p id='calendarName'>"+calendarName.replace(/_/g, ' ')+"</p>");
		myDiv.append("<p><strong>Event id:</strong> <span id='currentEventid'>"+eventid+"</span></p>");
		myDiv.append("<p><strong>Event name:</strong> <span id='currentEventTitle'>"+myEvent.title+"</span></p>");
		if( myEvent.eventLocation )
			myDiv.append("<p><strong>Location:</strong> <span id='currentEventLocation'>"+myEvent.eventLocation+"</span></p>");
	}
}

function printEventResults(calendarName)
{
	var searchTerm = jQuery('#searchTerm')[0].value;
	var myEvents = getCalendarEvents(calendarName);
	var myResults = '';

	for(var i=0; i<myEvents.length; i++)
	{
		if(myEvents[i].title.match(searchTerm))
			myResults += '<li><a href="single-event.html?calendarName='+calendarName+'&eventid='+myEvents[i].eventid+'">'+myEvents[i].title+'</a></li>';
	}
	
	if( myResults === '')
		myResults = '<li>No events found</li>';
	
	jQuery('#eventResults')[0].innerHTML = '<ul>'+myResults+'</ul>';
}

//phil's function
function printSingleEventData(myCalendarName, eventid)
{
	document.write( "<h3>"+myCalendarName.replace(/_/g, ' ')+"</h3>");
	document.write( "<section id='eventBlock'>" );
	document.write( "<p><strong>Event id:</strong> <span id='currentEventid'>"+eventid+"</span></p>" );
	document.write( "<p><strong>Location:</strong> <span id='currentEventTitle'>"+getEvent(myCalendarName,eventid).eventLocation+"</span></p>" );
	document.write( "<p><strong>Start:</strong> <span id='currentEventTitle'>"+getEvent(myCalendarName,eventid).start+"</span></p>" );
	document.write( "<p><strong>Seats:</strong> <span id='currentEventTitle'>"+getEvent(myCalendarName,eventid).eventSeats+"</span></p>" );
	document.write( "<p><strong>Attendee Count:</strong> <span id='eventCurrentAttendees'>"+getEvent(myCalendarName,eventid).eventCurrentAttendees+"</span></p>" );
	document.write( "<button type='button' class='btn btn-warning' onclick=\"location.href = 'modify-event.html?calendarName="+myCalendarName+"&eventid="+eventid+"'\">Modify Event</button>" );
	document.write( "</section>" );
}



