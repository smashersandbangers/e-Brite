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
				start: '2016-07-14 08:00',
				description: '<p>A presentation on the philosophy of how failing can change your life.</p>'
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