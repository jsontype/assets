/*
 * Copyright (c) 2017 Frenify
 * Author: Frenify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	directify_fn_leaflet();
	directify_fn_listing_height_regul();
	
	jQuery(window).on('resize',function(e){
		e.preventDefault();
		directify_fn_listing_height_regul();
	});
	
	setTimeout(function(){
		directify_fn_listing_height_regul();
	}, 1000);
	
	setTimeout(function(){
		directify_fn_listing_height_regul();
	}, 3000);
	
	setTimeout(function(){
		directify_fn_listing_height_regul();
	}, 5000);
});
// -----------------------------------------------------
// --------------------    LEAFLET    ------------------
// -----------------------------------------------------
function directify_fn_leaflet(){
	"use strict";
	
	var markers = {},
		wa = {},
		customIcon,
		arrayOfLatLngs = [];
	

	
	if ( typeof mapMarkers !== "undefined" && jQuery("#map").length) {
		
		// L is defined in leaflet itself.
		// MAP ITSELF
		var mymap = L.map('map').setView([50.5, 30.51], 13);


		// MAP LAYER
		L.tileLayer('http://tile.jawg.io/sunny/{z}/{x}/{y}.png?api-key=community', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(mymap);
		
				
		// ALL MAP MARKERS
		for(var i=0; i<mapMarkers.length; i++){
			
			
			mapMarkers[i].id = "_" + Math.random().toString(36).substr(3, 9), 
			wa[mapMarkers[i].id] = mapMarkers[i];
			
			var Ea, 
				Item = wa[mapMarkers[i].id],
				Da = new L.LatLng(Item.lat, Item.lng);
			
			//CUSTOM ICON
			customIcon = L.divIcon({
				iconSize: new L.Point(50, 50),
				html: '<div class="fl-location-icon"><i class="'+ Item.icon +'"></i><img class="svg" src="'+Item.svg+'" alt="" /></div>'
			}),
			
			//ADD MARKER
			markers[Item.id] = L.marker(Da, {
				icon: customIcon
			}).addTo(mymap);

			arrayOfLatLngs[i] = [Item.lat, Item.lng]; 	// all latitudes and longtitudes 
			markers[Item.id]._icon.id = Item.id; 		// adds custom id to each custom icon wrapper
			
			
			// SIDE LIST
			var itemlist = jQuery(".itemlist");
			if(itemlist.length){
				itemlist.append('<li class="fl-item fl-current-item">'+ Item.title +'</li>');
				itemlist.find('.fl-current-item').addClass(Item.id).attr('data-id', Item.id);
				itemlist.find('.fl-item').removeClass('fl-current-item');
			}
			
			//CREATING LISTS
			var resultlist = jQuery(".result_ul");
			if(resultlist.length){
				resultlist.append(
					'<li class="fl-item directify_fn_masonry_in fl-current-item">'+
						'<div class="featured_box_wrap">'+
							'<div class="featured_box">'+
								'<div class="featured_box_img">'+
									'<img src="' + Item.img + '" alt="" />'+
								'</div>'+
								'<div class="featured_box_price">'+
									'<span class="text">'+Item.price+'</span>'+
									'<span class="after"></span>'+
								'</div>'+
								'<div class="featured_box_info_wrap">'+
									'<div class="featured_box_info">'+
										'<div class="featured_box_like">'+
											'<a href="#">'+
												'<img class="svg" src="img/svg/bookmark.svg" alt="" />'+
											'</a>'+
											'<div class="featured_box_tooltip">'+
												'<span>Bookmark</span>'+
											'</div>'+
										'</div>'+
										'<div class="featured_box_title">'+
											'<h3><a href="#">'+Item.title+'</a></h3>'+
										'</div>'+
										'<div class="directify_fn_rating" data-rating="'+Item.rating+'">'+
											'<div class="behind">'+
												'<img class="svg" src="img/svg/review.svg" alt="" />'+
											'</div>'+
											'<div class="up">'+
												'<img class="svg" src="img/svg/review.svg" alt="" />'+
											'</div>'+
											'<div class="featured_box_preview">'+
												'<a href="'+Item.link+'"><span>Preview</span></a>'+
											'</div>'+
										'</div>'+
										'<div class="featured_box_address">'+
											'<img class="svg" src="img/svg/placeholder.svg" alt="" />'+
											'<span>'+Item.address+'</span>'+
										'</div>'+
										'<div class="featured_box_author_img">'+
											'<div class="author_img">'+
												'<img src="'+Item.author+'" alt="" />'+
												'<img class="svg" src="img/svg/checked.svg" alt="" />'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</li>'
				);
				resultlist.find('.fl-current-item').addClass(Item.id).attr('data-id', Item.id);
				resultlist.find('.fl-item').removeClass('fl-current-item');
			}
				
			
			
		}
				
		// DISPLAY CENTER OF MARKERS
		var bounds = new L.LatLngBounds(arrayOfLatLngs);
		mymap.fitBounds(bounds);
		
		// USER LOCATION
		//mymap.locate({setView: true});
		
		// POPUP DETAILS
		jQuery('.leaflet-div-icon').on('click', function(){
			var element = jQuery(this),
				elId	= element.attr('id'),
				html;
			// experiment
			var $myExperimentVar = 
				'<div class="leaflet-mypopup-wrapper">'+
					'<div class="img">'+
						'<img src="' + wa[elId].img +'"/>'+
						'<div class="price">'+
							'<span class="text">'+
								wa[elId].price+
							'</span>'+
							'<span class="after"></span>'+
					'</div>'+
					'<div class="content">'+
						'<div class="title">'+
							'<h3>' + wa[elId].title + '</h3>'+
						'</div>'+
						'<div class="rating">'+
							'<span class="rating">'+
								wa[elId].rating +
							'</span>'+
							'<span class="preview">'+
								'<a href="' + wa[elId].link + '">Preivew</a>' +
							'</span>'+
					'</div>'+
				'</div>';
			
			var position = markers[elId].getLatLng();
			mymap.setView(position);
			
			//markers[elId].closePopup();
			markers[elId].bindPopup(
				//'<b>'+ wa[elId].title +'</b><br>I am a' + elId + '<br><img src="' + wa[elId].img +'"/>'
				$myExperimentVar
			);
		});
		
		jQuery('.itemlist_wrap ul li').on('mouseenter',function(){
			var element = jQuery(this);
			var elId	= element.data('id');
			
			// experiment
			var $myExperimentVar = 
				'<div class="leaflet-mypopup-wrapper">'+
					'<div class="img">'+
						'<img src="' + wa[elId].img +'"/>'+
						'<div class="price">'+
							'<span class="text">'+
								wa[elId].price+
							'</span>'+
							'<span class="after"></span>'+
					'</div>'+
					'<div class="content">'+
						'<div class="title">'+
							'<h3><a href="' + wa[elId].link +'">' + wa[elId].title + '</a></h3>'+
						'</div>'+
						'<div class="rating">'+
							'<span class="rating">'+
								wa[elId].rating +
							'</span>'+
							'<span class="preview">'+
								'<a href="' + wa[elId].link + '">Preivew</a>' +
							'</span>'+
					'</div>'+
				'</div>';
			// experiment
			
			var position = markers[elId].getLatLng();
			mymap.setView(position);
			markers[elId].bindPopup($myExperimentVar).openPopup();
		});
		
		jQuery('.result_ul li').on('mouseenter',function(){
			var element = jQuery(this);
			var elId	= element.data('id');
			
			// experiment
			var $myExperimentVar = 
				'<div class="leaflet-mypopup-wrapper">'+
					'<div class="img">'+
						'<img src="' + wa[elId].img +'"/>'+
						'<div class="price">'+
							'<span class="text">'+
								wa[elId].price+
							'</span>'+
							'<span class="after"></span>'+
					'</div>'+
					'<div class="content">'+
						'<div class="title">'+
							'<h3><a href="' + wa[elId].link +'">' + wa[elId].title + '</a></h3>'+
						'</div>'+
						'<div class="rating">'+
							'<span class="rating">'+
								wa[elId].rating +
							'</span>'+
							'<span class="preview">'+
								'<a href="' + wa[elId].link + '">Preivew</a>' +
							'</span>'+
					'</div>'+
				'</div>';
			// experiment
			
			var position = markers[elId].getLatLng();
			mymap.setView(position);
			markers[elId].bindPopup($myExperimentVar).openPopup();
		});
		
	}
	/*
	
	1. http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
	2. http://{s}.tile.osm.org/{z}/{x}/{y}.png
	3. http://tile.jawg.io/sunny/{z}/{x}/{y}.png?api-key=community
	*/
}
// -----------------------------------------------------
// -----------    LISTING HEIGHT REGUL    --------------
// -----------------------------------------------------
function directify_fn_listing_height_regul(){
	"use strict";
	
	var wrapper				= jQuery('.directify_fn_listing_map_wrapper');
	var listingOuterHeight 	= jQuery('.directify_fn_listing_map_wrapper .directify_fn_listing .listing').outerHeight();
	//var listingOuterWidth 	= jQuery('.directify_fn_listing_map_wrapper .directify_fn_listing .listing').outerWidth();
	var map					= jQuery('.directify_fn_listing_map_wrapper .directify_fn_lea_map .map');
	
	var header				= jQuery('.directify_fn_header_wrap');
	var content				= jQuery('.directify_fn_content');
	
	var H					= jQuery(window).height();
	var W					= jQuery(window).width();
	
	var headerOuterHeight	= jQuery('.directify_fn_header').outerHeight();
	
	wrapper.css({minHeight:listingOuterHeight});
	map.css({minHeight:H});
	map.css({width:W-870});
	map.parent().css({width:W-870});
	map.parent().parent().css({width:W-870});
	if(header.hasClass('fixed')){content.css({marginTop:headerOuterHeight});}
	var mapp				= jQuery('.directify_fn_map_wrap .map'); 
	var rc 					= jQuery('.directify_fn_right_content');
	
	mapp.css({minHeight:H-headerOuterHeight});
	mapp.css({height:H-headerOuterHeight});
	rc.css({minHeight:H-headerOuterHeight});
	rc.css({height:H-headerOuterHeight});
}