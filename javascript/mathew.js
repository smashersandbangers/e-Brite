//let's get this started
function testMe()
{

	
}


//send the name of the parameter to get it's value
//function getParamValue(paramName)
{
	//log( window.location.search );
	//var params={};
	
	//this regex was stolen from stack overflow http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
	//window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
		//function(str,key,value)
		//{
			//params[key] = value;
		//}
	//);
	//log( params[paramName] );
	
	//return params[paramName];
}

//finding events from exisitng calendar
function findEvent(calendarName,eventid)
{
	var myDiv = jQuery('#eventList')[0];
	console.log( myDiv );
	var eventsArray = getCalendarEvents(calendarName);
	var eventsList = '';
	
	console.log(eventList);
	for(var i=0; i<eventsArray.length; i++)
	{
		
		var eventsObj = eventsArray[i];
		eventsList += "<ul>Event Name "+i;
		eventList += "<ul>";
		console.log( eventObj );
		eventsList += "<li>Name: "+eventObj.title+" "+eventObj.location+""+eventObj.start+""+eventObj.end;
		eventsList += "</ul></ul>";
	}
	//attendeesList += "</ul>";
	console.log( eventsList );
	myDiv.innerHTML = eventsList;
}
Contact GitHub API Training Shop Blog About
