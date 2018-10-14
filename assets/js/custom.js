$(document).ready(function () {

	"use strict"; // Start of use strict

	/*=======================================================
			PRELOADER
    ========================================================*/

	$(window).load(function () { // makes sure the whole site is loaded
		$('.preloader-holder .loading').fadeOut(); // will first fade out the loading animation
		$('.preloader-holder').delay(350).fadeOut('slow');
		// will fade out the white DIV that covers the website.
		$('body').delay(350).css({
			'overflow': 'visible'
		});
	});

	/*=======================================================
			PAGE SCROLL
    ========================================================*/

	$('body').scrollspy({
		target: '.navbar'
	})

	$(function () {
		$('a.page-scroll').bind('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	/*=======================================================
			PORTFOLIO MIX IT UP
    ========================================================*/

	$(window).load(function () {
		$('#Container').mixItUp({
			animation: {
				effects: 'fade'
			}
		});

		// Active Stat
		var $portfolio_selectors = $('.portfolio-filters >li>a');
		$portfolio_selectors.on('click', function () {
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			return false;
		});
	});

	/*=======================================================
			FUN FACTS
    ========================================================*/

	$('#fun-facts').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({
					Counter: 0
				}).animate({
					Counter: $this.text()
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	/*=======================================================
			OWL CAROUSEL
    ========================================================*/

	$("#owl-testimonials").owlCarousel({

		navigation: false, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		transitionStyle: "fade"

	});

	/*=======================================================
			OWL BRANDS
    ========================================================*/

	$("#owl-brands").owlCarousel({

		autoPlay: 3000, //Set AutoPlay to 3 seconds

		items: 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3]

	});

	/*=======================================================
			WOW JS
    ========================================================*/

	new WOW().init();

	/*=======================================================
			GOOGLE MAP
    ========================================================*/

	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 15,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(36.1630958, -86.8044864, 13), // Casablanca

			// Disables the default Google Maps UI components
			disableDefaultUI: true,
			scrollwheel: false,

			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles: [
				{
					"featureType": "landscape.natural",
					"stylers": [
						{
							"color": "#bcddff"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#5fb3ff"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"stylers": [
						{
							"color": "#ebf4ff"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#ebf4ff"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#93c8ff"
						}
					]
				},
				{
					"featureType": "landscape.man_made",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#c7e2ff"
						}
					]
				},
				{
					"featureType": "transit.station.airport",
					"elementType": "geometry",
					"stylers": [
						{
							"saturation": 100
						},
						{
							"gamma": 0.82
						},
						{
							"hue": "#0088ff"
						}
					]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#1673cb"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.icon",
					"stylers": [
						{
							"saturation": 58
						},
						{
							"hue": "#006eff"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#4797e0"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#209ee1"
						},
						{
							"lightness": 49
						}
					]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#83befc"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#3ea3ff"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"saturation": 86
						},
						{
							"hue": "#0077ff"
						},
						{
							"weight": 0.8
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
						{
							"hue": "#0066ff"
						},
						{
							"weight": 1.9
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"hue": "#0077ff"
						},
						{
							"saturation": -7
						},
						{
							"lightness": 24
						}
					]
				}
			]
		};

		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using out element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);
		var myLatLng = new google.maps.LatLng(36.1630958, -86.8044864);
		// Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'Hello World!'
		});
	}
});