//takes a string username, string password and a boolean for is the password hashed
function authenticateUser(username, userpassword, hashed)
{
	return true;
}

//returns all events (for now, i would like to add after-date variable)
function getEvents()
{
	console.log( "getEvents2" );
	
	//console.log( events );
	if(preloadEvents)
		return preLoadedEvents;
	else
		return NULL;
}

//returns a single event based on the eventid
function getEvent(eventid)
{
	var defaultTestEvent = {
				"eventName": "Successfully Failing",
				"eventLocation": "Boston",
				"eventDate": "4/24/2017",
				"eventSeats": "10",
				"eventCurrentAttendees": "7"
			};
	
    //Mathews test code block
	//document.getElementById("liEn").innerHTML="Successfully Failing";
	//document.getElementById("liEl").innerHTML="Boston";
	//document.getElementById("liEd").innerHTML="4/24/2017";
	//document.getElementById("liEs").innerHTML="10";
	//document.getElementById("liCA").innerHTML="7";
	
	console.log( location.pathname );
	//parses events to search for matching eventid
	var events = getEvents();
	for( var i=0; i<events.length; i++){
		if( events[i].eventid == eventid)
			return events[i];
	}
	
	return defaultTestEvent;
}

//returns true or false, depening on age of user and number of available seats
function registerEvent(user, eventid)
{
	return true;
}