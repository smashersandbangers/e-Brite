//let's get this started
function testMe()
{

	
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

//finding events from exisitng calendar
function findEvent(eventName)
{
	log(jQuery('#newTitle') );
	var newTitle = '"title":"'+jQuery('#newTitle')[0].value+'"';
	log( newTitle );
	log( calendarName );
	
	var myCalendar = getCalendarEvents( calendarName );

	//need to find the next available eventid, deleted events need to be accounted for
log("checking myCalendar");
log(myCalendar);
	var newEventid = 0;
	for(var i=0; i<myCalendar.length; i++)
	{
		if(newEventid < myCalendar[i].eventid)
			newEventid = myCalendar[i].eventid;
	}
	
}