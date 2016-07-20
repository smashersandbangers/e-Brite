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
	console.log( myDiv );
	var attendeesArray = getEventAttendees(calendarName, eventid);
	var attendeesList = '';
	
	for(var i=0; i<attendeesArray.length; i++)
	{
		
		var attendeeObj = attendeesArray[i];
		attendeesList += "<ul>Attendee "+i;
		attendeesList += "<ul>";
		console.log( attendeeObj );
		attendeesList += "<li>Name: "+attendeeObj.firstName+" "+attendeeObj.lastName;
		attendeesList += "</ul></ul>";
	}
	//attendeesList += "</ul>";
	console.log( attendeesList );
	myDiv.innerHTML = attendeesList;
}

// adding in the print event list 
//printing the list of all Calendar Events, div with id of events needs to exist on page
function printeventHTML(calendarName, eventname,eventid)
{
	var myDiv = jQuery('#eventList')[0];
	console.log( myDiv );
	var eventarray = getEventid(calendarName, eventid,eventname);
	var eventarray = '';
	
	for(var i=0; i<eventarray.length; i++)
	{
		
		var eventObj = eventArray[i];
		attendeesList += "<ul>eventName "+i;
		attendeesList += "<ul>";
		console.log( eventObj );
		attendeesList += "<li>Name: "+eventObj.eventname+" "+eventObj.eventLocation+" " + eventObj.eventDate;
		attendeesList += "</ul></ul>";
	}
	//attendeesList += "</ul>";
	console.log( eventList );
	myDiv.innerHTML = eventList;
}




