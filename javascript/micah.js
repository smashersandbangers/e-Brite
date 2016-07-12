function testMe()
{
	console.log( "hi" );
	var myCalendar = $('#calendar').fullCalendar(
	{
        // put your options and callbacks here
		events:
		[
			{
				title: 'Failing Successfully',
				start: '2016-07-14',
				description: 'A presentation on the philosophy of how failing can change your life'
			}
		]
    });
	
	console.log( myCalendar );
}