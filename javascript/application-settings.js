//the debug variable, turn off in production
var debug = true;
//pre-load our events, maybe this is a question on initial app launch
var preloadEvents = true;

//our preloaded events
var preLoadedEvents = [
	{
		'calendarName': 'demoEvents',
		'eventid': 1,
		'title': 'Success Through Failures',
		'eventLocation': 'Atlanta',
		'start': moment('2016-07-22'),
		'eventSeats': '12',
		'eventCurrentAttendees': '6',

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
		"eventid": 2,
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
		"eventid": 3,
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
