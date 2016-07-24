function loadCalendar( jQuery ) {
	            var date = new Date();
				var d = date.getDate();
				var m = date.getMonth();
				var y = date.getFullYear()

	            var calendar = $('#calendar').fullCalendar({
	                editable: true,
					weekMode: 'liquid',
					url: '#',
	                header:
					{
						left: 'prev,next today',
						center: 'title',
						right: 'month,agendaWeek,agendaDay'
					},
	selectable: true,
					selectHelper: true,
	                select: function(start, end, allDay)
					{

						var title = prompt('Event Title:');

						if (title)
						{
							calendar.fullCalendar('renderEvent',
								{
									title: title,
									start: start,
									end: end,
									allDay: false})

								true // make the event "stick"

						}
						calendar.fullCalendar('unselect');

					},
	                eventClick:  function(event, jsEvent, view) {
	                    $('#modalTitle').html(event.title);
	                    $('#modalBody').html(event.description);
	                    $('#eventUrl').attr('href',event.url);
	                    $('#fullCalModal').modal();
	                    return false;
	                },
	                events:
	                [
	                   {
	                      "title":"Your Success Story",
	                      "allday":"false",
	                      "description":"<p>Learn the secrets to success from inspirational leaders</p>",
	                      "start":moment().subtract('days',14),
	                      "end":moment().subtract('days',14),
	                      "url":"http://www.ecosysit.com"
	                   },
	                   {
	                      "title":"Equal Work, Equal Pay",
	                      "allday":"false",
	                      "description":"<p>Join the fight for equal pay!</p><p>You earned it!</p>",
	                      "start":moment().subtract('days',2),
	                      "end":moment().subtract('days',2),
	                      "url":"https://nwlc.org/issue/equal-pay-and-the-wage-gap/"
	                   },
	                   {
	                      "title":"ATL Job Fair",
	                      "allday":"false",
	                      "description":"<p>You are just one step away from your next job!!.</p>",
	                      "start":moment().subtract('days',6),
	                      "end":moment().subtract('days',6),
	                      "url":"http://www.monster.com"
	                   }

	                ]
	            });
	        }
