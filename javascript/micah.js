function testMe()
{
	console.log( "hi" );
	var myCalendar = $('#calendar').fullCalendar(
	{
        header:
		{
			left: 'month,agendaWeek,agendaDay'
		},
		height: 500,
		editable: true,
		durationEditable: true,
		weekends: false,
		events:
		[
			{
				title: 'Failing Successfully',
				start: moment(),
				description: '<p>A presentation on the philosophy of how failing can change your life.</p>',
				attendees: [{firstName:'John',lastName: 'Smitty'}]
			}
		],
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
			console.log( event );
			$("#eventInfo").html(event.description);
			$("#eventStartTime").html("<p>"+moment(event.start).format()+"</p>");
			$("#eventAttendees").html("<p>"+event.attendees[0].firstName+"</p>");
			$("#eventLink").attr('href', 'modify-event-micah.html?id='+event._id);
			$("#eventContent").dialog({
				modal: false,
				title: event.title
			});
			return false;
		}
    });
	
	console.log( myCalendar );
}

function switchToDay()
{
	
}

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

function getParamValue(paramName)
{
	log( window.location.search );
	var params={};
	window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
		function(str,key,value)
		{
			params[key] = value;
		}
	);
	//log( params[paramName] );
	
	return params[paramName];
}

