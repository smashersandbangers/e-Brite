//simple utility function to reduce the amount of typing and introduce a debug variable
function log( logItem ){
	if( debug )
		console.log( logItem );
}

//add the calendar names to the drop down list
function loadApplication()
{
	//legacy calendar
	saveCalendarEvents( "events", preLoadedEvents );
	//new calendar for demo moving forward
	saveCalendarEvents( "demoEvents", preLoadedEvents );
console.log(jQuery('#calendarList'))
	if(jQuery('#calendarList')[0].length === 0)
		addCalendarsToNavBar();
	
	var myFullCalendar = jQuery('#calendar').fullCalendar(
	{
        header:
		{
			left: 'month,agendaWeek,agendaDay'
		},
		height: 500,
		editable: false,
		durationEditable: true,
		weekends: false,
		events: getCalendarEvents( getCurrentCalendar() ),
		dayClick: function()
		{
			log("clicked");
			//switchToDay();
		},
		eventResize: function(event, dayDelta, minuteDelta, revertFunc){
            updateEvent(event);
        },
		eventClick: function (event, jsEvent, view) {
			//set the values and open the modal
			console.log( jsEvent );
			jQuery("#eventInfo").html(event.description);
			jQuery("#eventStartTime").html("<p>"+moment(event.start).format()+"</p>");
			jQuery("#eventAttendees").html("<p>"+event.attendees[0].firstName+"</p>");
			jQuery("#eventLink").attr('href', 'modify-event-micah.html?id='+event.eventid);
			jQuery("#eventContent").dialog({
				modal: false,
				title: event.title
			});
			return false;
		}
    });
}

//grabs the id selector for calendarList and appends the list of calendars
function addCalendarsToNavBar()
{
	log("cal nav bar");
	log( jQuery('#calendarList') );
	
	jQuery('#calendarList').append( new Option('demo events','demoEvents') );
	jQuery('#calendarList').append( new Option('save events','testSave') );
}

//returns the text for the current selected calendar, does a validation check to make sure calednars exist
function getCurrentCalendar()
{
	
	var calendarList = $('#calendarList');
	//console.log( jQuery('#calendarList option:selected') );
	
	if( calendarList.length == 1 )
		return jQuery('#calendarList option:selected')[0].value;
	else
		return "demoEvents";
}

function changeSelectedCalendar(oldCalendar)
{
	//localStorage.clear();
	console.log( "change the current calendar" );
	log( oldCalendar );
	//jQuery('#calendar').fullCalendar( 'destroy' );
	//loadApplication();
	var events =  getCalendarEvents( getCurrentCalendar() );

	jQuery('#calendar').fullCalendar( 'removeEventSource', jQuery('#calendar').fullCalendar( 'getEventSources' )[0] );

	//jQuery('#calendar').fullCalendar( 'rerenderEvents' );
	$('#calendar').fullCalendar( 'addEventSource', events);
	console.log( events );
}