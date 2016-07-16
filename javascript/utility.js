//simple utility function to reduce the amount of typing and introduce a debug variable
function log( logItem ){
	if( debug )
		console.log( logItem );
}

//add the calendar names to the drop down list
function loadApplication()
{
	saveCalendarEvents( "events", preLoadedEvents );
	
	addCalendarsToNavBar();
	
	var myCalendar = jQuery('#calendar').fullCalendar(
	{
        header:
		{
			left: 'month,agendaWeek,agendaDay'
		},
		height: 500,
		editable: false,
		durationEditable: true,
		weekends: false,
		events: getCalendarEvents("events"),
		dayClick: function()
		{
			log("clicked");
			switchToDay();
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

function addCalendarsToNavBar()
{
	log("cal nav bar");
	log( jQuery('#calendarList') );
	
	jQuery('#calendarList').append( new Option('demo events','events') );
}