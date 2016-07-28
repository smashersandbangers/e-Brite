//simple utility function to reduce the amount of typing and introduce a debug variable
function log( logItem ){
	if( debug )
		console.log( logItem );
}

//add the calendar names to the drop down list
function loadApplication()
{
	//new calendar for demo moving forward
	saveCalendarEvents( "Demo_Calendar", preLoadedEvents );

	if(jQuery('#calendarList')[0].length === 0)
		addCalendarsToNavBar();
	
	var myCalendar = $('#calendar').fullCalendar(
	{
		editable: true,
		weekMode: 'liquid',
		url: '#',
		header:
		{
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		selectable: true,
		selectHelper: true,
		select: function(start, end, allDay)
		{
			var title = prompt('Event Title:');

			if (title)
			{
				myCalendar.fullCalendar('renderEvent',
				{
					title: title,
					start: start,
					end: end,
					eventid: getNewEventid(getCurrentCalendar()),
					allDay: false,
					newEvent: true,
					attendees: []
				},
				false // make the event "stick"
				);
				//saveCalendarEvents(getCurrentCalendar(), JSON.parse(myCalendar.fullCalendar('clientEvents')));
				saveFullCalendarEvents(getCurrentCalendar(), myCalendar.fullCalendar('clientEvents'));
				console.log
			}
			myCalendar.fullCalendar('unselect');
			
		},
		eventClick: function(event, jsEvent, view)
		{
			jQuery("#eventIcon").html('<p><i class="fa fa-calendar-o" aria-hidden="true"></i></p>');
			jQuery("#eventInfo").html(event.description);
			jQuery("#eventStartTime").html("<p>Date: "+moment(event.start).format()+"</p>");
			if(event.eventLocation)
				jQuery("#eventLocation").html("<p>Location: "+event.eventLocation+"</p>");
			jQuery("#modifyEvent").attr('href', 'modify-event.html?id='+event.eventid+'&calendarName='+getCurrentCalendar());
			jQuery("#eventLink").attr('href', 'single-event.html?id='+event.eventid+'&calendarName='+getCurrentCalendar());
			jQuery("#eventContent").dialog({modal: false,title: event.title});
			return false;
		},
		events: getCalendarEvents( getCurrentCalendar() ),
	});


}

//grabs the id selector for calendarList and appends the list of calendars
function addCalendarsToNavBar()
{
	log("cal nav bar");
	log( jQuery('#calendarList') );
	
	jQuery('#calendarList').append( new Option('My Calendar','My_Calendar') );
	jQuery('#calendarList').append( new Option('Demo Calendar','Demo_Calendar') );
	
}

//returns the text for the current selected calendar, does a validation check to make sure calendars exist
function getCurrentCalendar()
{
	
	var calendarList = $('#calendarList');
	//console.log( jQuery('#calendarList option:selected') );
	
	if( calendarList.length == 1 )
		return jQuery('#calendarList option:selected')[0].value;
	else
		return "demoEvents";
}

function changeSelectedCalendar()
{
	//localStorage.clear();
	console.log( "change the current calendar" );
	var events =  getCalendarEvents( getCurrentCalendar() );

	jQuery('#calendar').fullCalendar( 'removeEventSource', jQuery('#calendar').fullCalendar( 'getEventSources' )[0] );
	jQuery('#calendar').fullCalendar( 'addEventSource', events);
	
	var calendarNameHTML = '<i class="fa fa-calendar-check-o" aria-hidden="true"></i> '+getCurrentCalendar();
	if(jQuery('#calendarPageTitle')[0])
		jQuery('#calendarPageTitle')[0].innerHTML = calendarNameHTML.replace(/_/g, ' ');
	
	//console.log( jQuery('#calendarPageTitle') );
}

//send the name of the parameter to get it's value
function getParamValue(paramName)
{
	//log( window.location.search );
	var params={};
	
	//this regex was stolen from stack overflow http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
	window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
		function(str,key,value)
		{
			params[key] = value;
		}
	);
	//log( params[paramName] );
	
	return params[paramName];
}