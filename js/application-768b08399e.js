"use strict";function initMap(){var e=new google.maps.Map(document.getElementById("map"),{center:{lat:37.899167,lng:-4.780665},zoom:17,disableDefaultUI:!0,zoomControl:!1,draggable:!1,scrollwheel:!1,disableDoubleClickZoom:!0,keyboardShortcuts:!1,panControl:!1,clear:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]}]}),t=new google.maps.InfoWindow({content:"<div style='width:250px; margin-top: 5px;'><h5 class='grey-text text-darken-3'><strong>Centro Cívico Norte</strong></h5></div><div><div class='grey-text text-darken-3' style='font-size: 1.2em; line-height: 1.3em; margin-top: 10px;'>Av. Cruz de Juárez, s/n, 14006<br/>Córdoba, Córdoba, España</div><!-- <p class='grey-text text-darken-3' style='font-size: 1.2em; line-height: 1.3em; margin-top: 10px;'>957 34 01 40 <br/></p> --></div>"}),o=new google.maps.Marker({position:{lat:37.899167,lng:-4.780665},map:e});o.addListener("click",function(i){t.open(e,o)}),t.open(e,o)}function isOutsideView(e){var t=$(e),o=$(window),i=o.scrollTop(),n=t.offset().top;return n<i}$(document).ready(function(){$("[data-scroll]").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$("[data-section='"+$(this).attr("data-scroll")+"']").offset().top-64},1e3)})}),$(document).ready(function(){initMap()}),$(window).resize(function(){"none"!=$("#mobile_cheat").css("display")&&initMap()}),$(document).ready(function(){$(".wow").each(function(){isOutsideView(this)&&$(this).removeClass("wow")}),new WOW({mobile:!1}).init()}),$(document).ready(function(){$(".button-collapse").sideNav({closeOnClick:!0})});
