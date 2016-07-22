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


