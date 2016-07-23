//finding events from exisitng calendar
function addFindEventAutoComplete(calendarName)
{
	console.log(calendarName);
	var eventTitlesArray = getCalendarEventTitles(calendarName);
	
	console.log(eventTitlesArray);
	jQuery( "#searchTerm" ).autocomplete(
	{
		source: eventTitlesArray
	});

}

function findEvents(calendarName)
{
	var searchTerm = jQuery('#searchTerm')[0].value;
	var myEvents = getCalendarEvents(calendarName);
	var myResults = '';
console.log(searchTerm);
	for(var i=0; i<myEvents.length; i++)
	{
		if(myEvents[i].title.match(searchTerm))
			myResults += '<li><a href="single-event-phil.html?calendarName='+calendarName+'&eventid='+myEvents[i].eventid+'">'+myEvents[i].title+'</a></li>';
	}
	
	if( myResults === '')
		myResults = '<li>No events found</li>';
	
	jQuery('#eventResults')[0].innerHTML = '<ul>'+myResults+'</ul>';
}


