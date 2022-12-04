import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";

import { selectDestination, selectOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_API_KEY } from "@env";

const Map = () => {
	const origin = useSelector(selectOrigin);
	const destination = useSelector(selectDestination);
	// Reference (pointer) to a particular component
	const mapRef = React.useRef(null);

	React.useEffect(() => {
		if (!origin || !destination) return;

		// Zoom and fit to markers. Use "fitToCoordinates"
		// if fitToSuppliedMarkers no longer works
		mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
			edgePadding: {
				right: 50,
				bottom: 50,
				left: 50,
				top: 50
			}
		});
	}, [origin, destination]);

	return (
		<MapView
			ref={mapRef}
			className="flex-1"
			mapType="mutedStandard"
			initialRegion={{
				latitude: origin?.location?.lat,
				longitude: origin?.location?.lng,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005
			}}
		>
			{origin?.location && (
				<Marker
					title="Origin"
					description={origin?.description}
					identifier="origin"
					coordinate={{
						latitude: origin.location?.lat,
						longitude: origin.location?.lng
					}}
				/>
			)}

			{destination?.location && (
				<Marker
					title="Origin"
					description={destination?.description}
					identifier="destination"
					coordinate={{
						latitude: destination.location?.lat,
						longitude: destination.location?.lng
					}}
				/>
			)}

			{origin && destination && (
				<MapViewDirections
					origin={origin.description}
					destination={destination.description}
					apikey={GOOGLE_MAPS_API_KEY}
					strokeColor="black"
					strokeWidth={8}
				/>
			)}
		</MapView>
	);
};

export default Map;
