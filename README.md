# e-Brite: The Event Manager App

## Contributors
* Wale Akintan (Developer, FullCalendar integration)
* Mathew Alexander (Project Manager)
* Micah Cooper (Architect)
* Phillip Manville (Developer, events)

##Purpose of the project
This project was intended to solve the problem of organizaing events from the viewpoint of an event manager.  The current state of the project allows for events to be created and modified.  Attendess can be added to events through a modify event action.  We have integrated the FullCalendar JavaScript library to help with calendar functions and calendar display.

###Details of project implementation
The event manager functionality relies on the integration of jQuery and LocalStorage.  We have expanded the application's features by connecting our landing page with and configuring the FullCalendar library.  We have designed event objects (JSON strings) that include the following fields: eventid, title, start, end, eventLocation, eventSeats, eventCurrentAttendees and the attendess object {firstname, lastname}.