//let's get this started
function testMe()
{
	storeEvents( "events", preLoadedEvents );
	
	var myCalendar = $('#calendar').fullCalendar(
	{
        header:
		{
			left: 'month,agendaWeek,agendaDay'
		},
		height: 500,
		editable: false,
		durationEditable: true,
		weekends: false,
		//referencing my preloaded events variable
		events: getEventsMicah("events"),
		dayClick: function()
		{
			//alert('a day has been clicked!');
			console.log("clicked");
			switchToDay();
		},
		eventResize: function(event, dayDelta, minuteDelta, revertFunc){
            updateEvent(event);
        },
		eventClick: function (event, jsEvent, view) {
			//set the values and open the modal
			console.log( jsEvent );
			$("#eventInfo").html(event.description);
			$("#eventStartTime").html("<p>"+moment(event.start).format()+"</p>");
			$("#eventAttendees").html("<p>"+event.attendees[0].firstName+"</p>");
			$("#eventLink").attr('href', 'modify-event-micah.html?id='+event.eventid);
			$("#eventContent").dialog({
				modal: false,
				title: event.title
			});
			return false;
		}
    });
	
	//console.log( myCalendar );
	
}

//no idea what this does yet
function updateEvent(the_event) {
    $.update(
      "/events/" + the_event.id,
      { event: { title: the_event.title,
                 starts_at: "" + the_event.start,
                 ends_at: "" + the_event.end,
                 description: the_event.description
               }
      },
      function (reponse) { console.log('successfully updated task.'); }
    );
};

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

function saveCalendarMicah(calendarName, eventsObject)
{
	localStorage.setItem(calendarName, JSON.stringify(eventsObject));
}
function getCalendarMicah(calendarName)
{
	console.log( JSON.parse(localStorage.getItem(calendarName)) );
	return JSON.parse( localStorage.getItem(calendarName));
}

//adding a new event to the existing event calendar
function addEventToCalendarMicah(calendarName)
{
	log( $('#newTitle') );
	var newTitle = '{"title":"'+$('#newTitle')[0].value+'"}';
	log( newTitle );
	
	var myCalendar = getCalendarEvents( calendarName );
	var newIndex = myCalendar.length;
	
	myCalendar[newIndex] = JSON.parse( newTitle );
	log( myCalendar );
}