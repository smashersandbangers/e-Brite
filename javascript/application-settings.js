//the debug variable, turn off in production
var debug = true;

//our preloaded events
var preLoadedEvents = [
	{
		'eventid': '01',
		'title': 'Success Through Failures',
		'eventLocation': 'Atlanta',
		'start': moment('2016-07-22'),

		'attendees':[
			{
			'firstName': 'John',
			'lastName': 'Smitty'
			},
			{
			'firstName': 'Sue',
			'lastName': 'Mee'
			}
		]
	},
	{
		"eventid": "02",
		'title': 'Successfully Failing',
		'eventLocation': 'Boston',
		'start': moment('2016-07-15'),
		'eventSeats': '10',
		'eventCurrentAttendees': '7',
		'attendees':[
			{
			'firstName': 'John',
			'lastName': 'Smitty'
			},
			{
			'firstName': 'Sue',
			'lastName': 'Mee'
			}
		]
	},
	{
		"eventid": "03",
		'title': 'To Fail or Not to Fail',
		'eventLocation': 'Boston',
		'start': moment('2016-07-27'),
		'eventSeats': '10',
		'eventCurrentAttendees': '33',
		'attendees':[
			{
			'firstName': 'John',
			'lastName': 'Smitty'
			},
			{
			'firstName': 'Sue',
			'lastName': 'Mee'
			}
		]
	}
];