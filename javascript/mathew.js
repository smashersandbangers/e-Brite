//finding events from exisitng calendar
function findEvent(calendarName)
{
	console.log(calendarName);
	var eventTitlesArray = getCalendarEventTitles(calendarName);
	
	console.log(eventTitlesArray);
	$( "#searchTerm" ).autocomplete(
	{
      source: eventTitlesArray
    });

}


