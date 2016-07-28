//the debug variable, turn off in production
var debug = true;
//pre-load our events, maybe this is a question on initial app launch
var preloadEvents = true;

//our preloaded events
var preLoadedEvents = [
	{
		'calendarName': 'demoEvents',
		'eventid': 1,
		'title': 'Forum on Sinking Ships',
		'eventLocation': 'Atlanta',
		'start': moment('2016-07-05T11:00:00Z'),
		'eventSeats': '12',
		'eventCurrentAttendees': '6',

		'attendees':[
			{
			'firstName': 'John',
			'lastName': 'Adams'
			}
		]
	},
	{
		'calendarName': 'demoEvents',
		'eventid': 2,
		'title': 'Independence Day',
		'eventLocation': 'Atlanta',
		'start': moment('2016-07-04T08:00:00Z'),
		'eventSeats': '12',
		'eventCurrentAttendees': '6',

		'attendees':[
			{
			'firstName': 'John',
			'lastName': 'Adams'
			}
		]
	},
	{
		'calendarName': 'demoEvents',
		'eventid': 3,
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
		"eventid": 4,
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
		"eventid": 5,
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
	},
	{
		"eventid": 6,
		'title': 'Overcoming Success and Embracing Failure',
		'eventLocation': 'Boston',
		'start': moment('2016-07-07T10:00:00Z'),
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
	},
	{
		"eventid": 7,
		'title': 'Meeting Failures Head On',
		'eventLocation': 'Boston',
		'start': moment('2016-07-13T9:00:00Z'),
		'eventSeats': '10',
		'eventCurrentAttendees': '33',
		'attendees':[
			{
			'firstName': 'John',
			'lastName': 'Wayne'
			}
		]
	},
	{
		"eventid": 8,
		'title': 'Soccer',
		'eventLocation': 'Miami',
		'start': moment('2016-07-09T14:00:00Z'),
		'eventSeats': '10',
		'eventCurrentAttendees': '33',
		'attendees':[
			{
			'firstName': 'Lionel',
			'lastName': 'Messi'
			}
		]
	},
	{
		"eventid": 9,
		'title': 'Cricket',
		'eventLocation': 'Miami',
		'start': moment('2016-07-16T13:00:00Z'),
		'eventSeats': '10',
		'eventCurrentAttendees': '33',
		'attendees':[
			{
			'firstName': 'Rahul',
			'lastName': 'Dravid'
			}
		]
	},
	{
		"eventid": 10,
		'title': 'Football',
		'eventLocation': 'San Diego',
		'start': moment('2016-06-27T13:00:00Z'),
		'eventSeats': '10',
		'eventCurrentAttendees': '33',
		'attendees':[
			{
			'firstName': 'Phillip',
			'lastName': 'Rivers'
			}
		]
	},
	{
		"eventid": 11,
		'title': 'MIST7571 Presentation',
		'eventLocation': 'San Diego',
		'start': moment('2016-07-28T20:00:00Z'),
		'eventSeats': '10',
		'eventCurrentAttendees': '10',
		'attendees':[
			{
			'firstName': 'Mathew',
			'lastName': 'Alexander'
			},
			{
			'firstName': 'Wale',
			'lastName': 'Akintan'
			},
			{
			'firstName': 'Micah',
			'lastName': 'Cooper'
			},
			{
			'firstName': 'Phillip',
			'lastName': 'Manville'
			}
		]
	}
];
