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
			attendeesList += "<ul>Attendee "+i;
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




