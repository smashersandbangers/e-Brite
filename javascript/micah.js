//let's get this started
function testMe()
{

	
}

//no idea what this does yet
function updateEvent(the_event) {
    jQuery.update(
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
	log( jQuery('#newTitle') );
	var newTitle = '{"title":"'+jQuery('#newTitle')[0].value+'"}';
	log( newTitle );
	log( calendarName );
	
	var myCalendar = getCalendarEvents( calendarName );
	var newIndex = myCalendar.length;
	
	myCalendar[newIndex] = JSON.parse( newTitle );
	log( myCalendar );
	
	saveCalendarEvents( calendarName, myCalendar);
}

function attachNewEventid()
{
	jQuery('#newEventid')[0].value '';
}