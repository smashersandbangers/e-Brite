function testMe()
{
	console.log( "hi" );
	var myCalendar = $('#calendar').fullCalendar(
	{
        weekends: false,
		events:
		[
			{
				title: 'Failing Successfully',
				start: '2016-07-14',
				description: 'A presentation on the philosophy of how failing can change your life'
			}
		],
		dayClick: function()
		{
			//alert('a day has been clicked!');
		},
		eventRender: function(event, element) {
			console.log( element );
			element.qtip({
				content: event.description
			});
		}
    });
	
	console.log( myCalendar );
}