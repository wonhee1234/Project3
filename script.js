var map;
function initMap()
{
var latlang={lat:4.710859,lng:-74.074955};
mapa=new google.maps.Map(
		document.getElementById('gmaps'),
		{center: new google.maps.LatLng(41.835668, -87.624221), zoom:15});

var marker= new google.maps.Marker({position:latlang,map:map});

marker= new google.maps.Marker({
	map:map,
	draggable:true,
	animation:google.maps.Animation.BOUNCE,
	position:new google.maps.LatLng(6.219131, -75.566329),
//icon:'images/house6.jpg'
});
}
