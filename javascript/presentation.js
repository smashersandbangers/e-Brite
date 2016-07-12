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