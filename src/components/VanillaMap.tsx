import React from 'react';
import { Phone } from 'lucide-react';

export default function VanillaMap({ city }: { city?: string }) {
    const targetKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY : "AIzaSyA729Oa7Bt6VZjx-PLdXIGMn-WuSaxpqu4";

    const scriptCode = `
        window.initVanillaMap = function() {
            var mapContainer = document.getElementById('vanilla-map-container');
            if (!mapContainer || !window.google || !window.google.maps) return;

            var currentCity = "${city ? city : 'Green Bay'}";

            // HARD-CODED FALLBACK DICTIONARY
            var fallbackCoords = {
                "Fish Creek": { lat: 45.1292, lng: -87.2468 },
                "Sherwood": { lat: 44.1755, lng: -88.2869 },
                "Door County": { lat: 44.8340, lng: -87.3770 },
                "Appleton": { lat: 44.2619, lng: -88.4154 },
                "De Pere": { lat: 44.4489, lng: -88.0604 },
                "Howard": { lat: 44.5714, lng: -88.0795 },
                "Suamico": { lat: 44.6339, lng: -88.0382 },
                "Manitowoc": { lat: 44.0886, lng: -87.6576 },
                "Oshkosh": { lat: 44.0247, lng: -88.5426 },
                "Neenah": { lat: 44.1858, lng: -88.4626 },
                "Kaukauna": { lat: 44.2780, lng: -88.2720 },
                "Little Chute": { lat: 44.2805, lng: -88.3184 },
                "Kimberly": { lat: 44.2711, lng: -88.3340 },
                "Menasha": { lat: 44.2022, lng: -88.4446 },
                "Greenville": { lat: 44.2989, lng: -88.5390 },
                "Grand Chute": { lat: 44.2778, lng: -88.4593 },
                "Ashwaubenon": { lat: 44.4842, lng: -88.0668 },
                "Allouez": { lat: 44.4816, lng: -88.0263 },
                "Bellevue": { lat: 44.4646, lng: -87.9547 },
                "Hobart": { lat: 44.4870, lng: -88.1362 },
                "Green Bay": { lat: 44.5192, lng: -88.0198 },
                "Shawano": { lat: 44.7822, lng: -88.6062 },
                "Ledgeview": { lat: 44.4317, lng: -88.0065 }
            };

            var initialCenter = fallbackCoords[currentCity] || { lat: 44.5192, lng: -88.0198 };
            
            var map = new window.google.maps.Map(mapContainer, {
                center: initialCenter,
                zoom: 14,
                styles: [
                    { featureType: "poi", stylers: [{ visibility: "off" }] }
                ]
            });

            // Always drop the main HQ marker at Green Bay
            new window.google.maps.Marker({
                map: map,
                place: {
                    placeId: "ChIJo7p-S_6EA04R9fUe8V78-D0",
                    location: { lat: 44.5192, lng: -88.0198 }
                }
            });

            function applyFallbackCenter() {
                var geocoder = new window.google.maps.Geocoder();
                geocoder.geocode({ address: currentCity + ", WI" }, function(results, status) {
                    if (status === 'OK' && results[0]) {
                        if (results[0].geometry.bounds) {
                            map.fitBounds(results[0].geometry.bounds);
                        } else {
                            map.setCenter(results[0].geometry.location);
                            map.setZoom(14);
                        }
                    } else {
                        map.setCenter(initialCenter);
                        map.setZoom(14);
                    }
                });
            }

            // 1. Dotted City Boundary via Nominatim Data Layer injection
            var nominatimUrl = "https://nominatim.openstreetmap.org/search?q=" + encodeURIComponent(currentCity + ", WI") + "&polygon_geojson=1&format=json&limit=1";
            
            fetch(nominatimUrl, { headers: { 'User-Agent': 'ValleyWindowCareSEO' } })
                .then(response => response.json())
                .then(data => {
                    if (data && data.length > 0) {
                        var geometry = data[0].geojson;
                        
                        // Synthetic Boundary Fallback for unincorporated towns (e.g., Fish Creek)
                        if (geometry && geometry.type === 'Point' && data[0].boundingbox) {
                            var bbox = data[0].boundingbox; // [latMin, latMax, lonMin, lonMax]
                            geometry = {
                                type: "Polygon",
                                coordinates: [[
                                    [parseFloat(bbox[2]), parseFloat(bbox[0])], // SW
                                    [parseFloat(bbox[3]), parseFloat(bbox[0])], // SE
                                    [parseFloat(bbox[3]), parseFloat(bbox[1])], // NE
                                    [parseFloat(bbox[2]), parseFloat(bbox[1])], // NW
                                    [parseFloat(bbox[2]), parseFloat(bbox[0])]  // Close loop
                                ]]
                            };
                        }
                        
                        if(geometry && (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon')) {
                            var geoJsonFeature = {
                                type: "Feature",
                                properties: { name: currentCity },
                                geometry: geometry
                            };
                            
                            map.data.addGeoJson(geoJsonFeature);

                            // Mandatory Style Override
                            map.data.setStyle({
                                strokeColor: '#FF0000',
                                strokeWeight: 3,
                                strokeOpacity: 1.0,
                                fillColor: '#FF0000',
                                fillOpacity: 0.1,
                                strokeDasharray: "10, 10",
                                icons: [{
                                    icon: {
                                        path: 'M 0,-1 0,1',
                                        strokeOpacity: 1,
                                        scale: 4
                                    },
                                    offset: '0',
                                    repeat: '20px'
                                }]
                            });

                            // DYNAMIC VIEWPORT ADJUSTMENT (Auto-Fit Bounds)
                            var bounds = new window.google.maps.LatLngBounds();
                            
                            // Helper to process arrays of coordinates
                            function processCoordinates(coordsArray) {
                                for (var i = 0; i < coordsArray.length; i++) {
                                    if (Array.isArray(coordsArray[i][0])) {
                                        processCoordinates(coordsArray[i]); // Recurse for MultiPolygon/Holes
                                    } else {
                                        bounds.extend(new window.google.maps.LatLng(coordsArray[i][1], coordsArray[i][0]));
                                    }
                                }
                            }
                            
                            if (geometry.coordinates) {
                                processCoordinates(geometry.coordinates);
                                map.fitBounds(bounds);
                                
                                // Adjust zoom slightly backward to ensure 80% container fit (not 100% edge kissing)
                                var listener = window.google.maps.event.addListener(map, "idle", function() { 
                                    if (map.getZoom() > 16) map.setZoom(16); 
                                    window.google.maps.event.removeListener(listener); 
                                });
                            }
                        } else if (data[0].boundingbox) {
                            // Nominatim found the city but no geometry polygon. Use its Bounding Box to center.
                            var bbox = data[0].boundingbox;
                            var fbBounds = new window.google.maps.LatLngBounds();
                            fbBounds.extend(new window.google.maps.LatLng(parseFloat(bbox[0]), parseFloat(bbox[2]))); // SW: min_lat, min_lon
                            fbBounds.extend(new window.google.maps.LatLng(parseFloat(bbox[1]), parseFloat(bbox[3]))); // NE: max_lat, max_lon
                            map.fitBounds(fbBounds);
                        } else {
                            applyFallbackCenter();
                        }
                    } else {
                        console.warn("No GeoJSON found for city: " + currentCity);
                        applyFallbackCenter();
                    }
                })
                .catch(err => {
                    console.error("Error fetching city boundary:", err);
                    applyFallbackCenter();
                });

        };

        // If google maps is already loaded in the window cache, init immediately
        if (typeof window !== 'undefined' && window.google && window.google.maps) {
            setTimeout(window.initVanillaMap, 100);
        }
    `;

    return (
        <div className="bg-slate-50 py-16 border-t border-gray-200">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center bg-navy text-white p-8 rounded-3xl shadow-xl overflow-hidden">
                    <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold tracking-tight mb-2">Service Area Hub</h3>
                            <p className="text-gold font-semibold uppercase tracking-wider text-sm">
                                Serving {city ? `${city} & Surrounding Areas` : 'Northeast Wisconsin'}
                            </p>
                        </div>
                        <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                            <p className="font-bold text-lg text-gold">Valley Window Care and Exterior Cleaning</p>
                            <p className="font-bold text-lg text-white">Serving {city || 'Northeast'}, WI</p>
                            <a href="tel:920-609-7085" className="font-bold text-xl inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors w-full justify-center">
                                <Phone size={20} /> (920) 609-7085
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 h-[450px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-900 border-none">
                        <div id="vanilla-map-container" style={{ height: '450px', width: '100%' }}></div>
                    </div>
                </div>
            </div>

            {/* Inject the vanilla script definitions */}
            <script dangerouslySetInnerHTML={{ __html: scriptCode }} />
            {/* Inject the Google API script */}
            <script
                async
                defer
                src={`https://maps.googleapis.com/maps/api/js?key=${targetKey}&v=weekly&libraries=places,geometry&callback=initVanillaMap`}
            ></script>
        </div >
    );
}
