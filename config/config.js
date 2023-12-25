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
	address: "0.0.0.0",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: [],	// Set [] to allow all IP addresses
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
			module: "MMM-OnSpotify",
			position: "top_center",
			config: {
				clientID: "b7b89b3b6dd845aa86946c9125162738",
				clientSecret: "ca45bdb663cf4096bb9bdd0b27ffa316",
				accessToken: "BQCrU-V3ba4SOKHFrI-V0bjuhWuT2QAxEomEeNn-7YjChn2sDzCBJatstrxHJJMb1B3FDQAtBaHQQu1VYGoUoZElTJoaaRd4I3BlDVnoR8bAMe1rLwtz2kCKzeYRjD3SWt33CFov08NjhfZfyiyLOaiCplePCGJnQ8XABB0EPcmEZ9uL5iymnYEwyX7NNmEY5WvLrmZmkw",
				refreshToken: "AQAxy9zR2i5kNmxfmT0NOnO4EYKEzx_vgqVMVsoDhvb1LDvIlsXgJalNA9EBCICXdhB8qxcfcLqEWOOJCmbX2Rw-89AuiAMnKfRX_cryGICK4hoy4ylyUi3X7aImYXrF24o"
				/* Add here your theming and behaviour configurations */
			}
		},
		{
			  module: "MMM-LiveLyrics",
			  position: "fullscreen_below", // Do not change position
			  config: {
				  	accessToken: "sIDyDi9oiEfztTSbIVlD7zajbTmAwz1_QamYr0GZT3S6uvFn17_JSXTdrwW6XmtM",
					// Module behaviour [See below]
					showConnectionQrOnLoad: false,
					startHidden: false,
					sideBySideOnLandscape:true,
					// Lyrics style [See below]
					lyricsFillType: "container",
					lyricsContainerBackdropStyle: "black",
					lyricsStyleTheme: "dynamicColors",
					lyricsTextAlign:"center",
			}
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
            module: 'MMM-GoogleTasks',
            header: "Google Tasks",
            position: "top_left",
            config: {
                listID: "MDMxNzI2ODA2MDE0MDE3NDI2ODk6MDow",
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
		{
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			// position: 'bottom_left',
			// you can hide this module afterwards from the remote control itself
			config: {
				apiKey: 'e64ae7c9a6ef4b54873d3e194f66d871'
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
