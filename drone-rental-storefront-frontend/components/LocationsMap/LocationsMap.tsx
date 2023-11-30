'use client';

import Map from "react-map-gl";

export default function LocationsMap({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYjI3MDlmMWIiLCJhIjoiY2o4cDFvb2c4MDl5NDMzdW04eTVscjRqNiJ9.DGbog65KEUEh1cKLXAJlgA"
        initialViewState={{
          longitude: 13.4,
          latitude: 52.52,
          zoom: 10,
        }}
        mapStyle="mapbox://styles/b2709f1b/clph7pxxt00ks01pga774gwzm"
        attributionControl={false}
      />
    </div>
  );
}
