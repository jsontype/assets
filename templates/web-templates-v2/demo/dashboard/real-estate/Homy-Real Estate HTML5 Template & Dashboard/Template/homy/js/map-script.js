"use strict";

function gMapHome() {
    if ($('.google-map-home').length) {
        $('.google-map-home').each(function () {
            var Self = $(this);
            var mapName = Self.attr('id');
            var mapLat = Self.data('map-lat');
            var mapLng = Self.data('map-lng');
            var iconPath = Self.data('icon-path');
            var mapZoom = Self.data('map-zoom');
            var mapTitle = Self.data('map-title');

            var styles = [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#444444"
                        }
                    ]
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [
                        {
                            color: "#f2f2f2"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [
                        {
                            saturation: -100
                        },
                        {
                            lightness: 45
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [
                        {
                            visibility: "simplified"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [
                        {
                            color: "#cbf0ff"
                        },
                        {
                            visibility: "on"
                        }
                    ]
                }
            ];

            if (!mapZoom) {
                mapZoom = 12;
            }

            var map;
            map = new GMaps({
                div: '#' + mapName,
                scrollwheel: false,
                lat: mapLat,
                lng: mapLng,
                styles: styles,
                zoom: mapZoom
            });

            if (iconPath) {
                map.addMarker({
                    icon: 'images/map/map.svg',
                    lat: 40.925372,
                    lng: -74.276544,
                    title: 'Blueberry villa.',
                    infoWindow: {
                        content: '<img src="images/listing/img_39.jpg" width="280" class="border-20 mb-10" alt="..."> <h5>Blueberry villa.</h5> <p>Mirpur 10, Stadium dhaka 1208</p>'
                    }
                });
				map.addMarker({
			    	icon: 'images/map/map.svg',
			    	lat: 40.929399,
			      	lng: -74.430000,
			      	title: 'White House villa',
			      	infoWindow: {
						content: '<img src="images/listing/img_40.jpg" width="280" class="border-20 mb-10" alt="..."> <h5>White House villa</h5> <p>Mirpur 10, Stadium dhaka 1208</p>'
					}
				});
				map.addMarker({
			    	icon: 'images/map/map.svg',
			    	lat: 40.935654,
			      	lng: -74.186256,
			      	title: 'Orkit Villa',
			      	infoWindow: {
						content: '<img src="images/listing/img_41.jpg" width="280" class="border-20 mb-10" alt="..."> <h5>Orkit Villa</h5> <p>Mirpur 10, Stadium dhaka 1208</p>'
					}
				});
				map.addMarker({
			    	icon: 'images/map/map.svg',
			    	lat: 40.905099,
			      	lng: -74.209868,
			      	title: 'South Sun House',
			      	infoWindow: {
						content: '<img src="images/listing/img_42.jpg" width="280" class="border-20 mb-10" alt="..."> <h5>South Sun House</h5> <p>Mirpur 10, Stadium dhaka 1208</p>'
					}
				});
				

                // Add other markers in a similar fashion
            }
        });
    }
}

// Dom Ready Function
$(document).ready(function () {
    gMapHome();
});
