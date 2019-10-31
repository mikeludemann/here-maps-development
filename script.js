var platform = new H.service.Platform({
	'apikey': 'XXXXXXXXXXXXXXXXXXXX'
});

var maptypes = platform.createDefaultLayers();

var map = new H.Map(
	document.getElementById('my--maps'),
	maptypes.vector.normal.map,
	{
		zoom: 10,
		center: { lng: 6.95, lat: 50.93333 }
	}
);
