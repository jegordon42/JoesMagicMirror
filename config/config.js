/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Austin",
				locationID: "4671654", //Find your ID in config/city_list.json
				apiKey: "94a25d353878d6e783adbfab2d4e13fe"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Hourly Weather For Austin",
			config: {
				tableClass: "hourly",
				weatherProvider: "openweathermap",
				weatherEndpoint: "/onecall",
				type: "hourly",
				showPrecipitationProbability: true,
				appendLocationNameToHeader: false,
				maxEntries: 12,
				lon: -97.743057,
            	lat: 30.267151,
				apiKey: "94a25d353878d6e783adbfab2d4e13fe"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Austin",
				locationID: "4671654", //Find your ID in config/city_list.json
				apiKey: "94a25d353878d6e783adbfab2d4e13fe"
			}
		},
		{
			module: 'MMM-GoogleCalendar',
			header: "Google Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
					  symbol: "calendar-week",
					  calendarID: "jegordon42@gmail.com"
					},
				],
			}
		},
		{
			module: 'MMM-GoogleCalendar',
			header: "Holidays & Events",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "birthdays",
						calendarID: "addressbook#contacts@group.v.calendar.google.com"
					},
					{
						symbol: "events",
						calendarID: "b320f2a46858b1c0b23dd8844afc29a48d2b06fd048024fa19a8a048572d1a11@group.calendar.google.com"
					},
					{
						symbol: "jewish holidays",
						calendarID: "en.judaism#holiday@group.v.calendar.google.com"
					},
					{
						symbol: "holidays",
						calendarID: "en.usa#holiday@group.v.calendar.google.com"
					},
				],
			}
		},
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true,
		// 		broadcastNewsFeeds: true,
		// 		broadcastNewsUpdates: true
		// 	}
		// },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
