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