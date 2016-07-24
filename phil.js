function getData(myCalendarName, eventid){
	
	
				document.write( "<p>"+myCalendarName+ " Calendar</p>");
							document.write( "<p><strong>Event id:</strong> <span id='currentEventid'>"+eventid+"</span></p>" );
				
				
				
				
							if( getEvent( myCalendarName, eventid ).eventLocation )
								
							document.write( "<p><strong>Location:</strong> <span id='currentEventTitle'>"+getEvent(myCalendarName,eventid) .eventLocation+"</span></p>" );
					
							document.write( "<p><strong>Start:</strong> <span id='currentEventTitle'>"+getEvent(myCalendarName,eventid)
										   .start+"</span></p>" );
	
							document.write( "<p><strong>Seats:</strong> <span id='currentEventTitle'>"+getEvent(myCalendarName,eventid).eventSeats+"</span></p>" );
				
							document.write( "<p><strong>Attendee Count:</strong> <span id='eventCurrentAttendees'>"+getEvent( myCalendarName,eventid).eventCurrentAttendees+"</span></p>" );
				
				
				
						/*var myAttendees = getEvent( getParamValue('calendarName'),getParamValue('eventid') ).attendees;
				
							for(i = 0; i < myAttendees.length; i++){
								
								document.write("<li>"+myAttendees[i].lastName+", "+myAttendees[i].firstName+"</li>");
								
							}*/
							
							
					
			
	
}