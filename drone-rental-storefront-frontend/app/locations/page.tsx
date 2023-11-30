import LocationsList from "@/components/LocationsList/LocationsList";
import LocationsMap from "@/components/LocationsMap/LocationsMap";

export default function Locations() {
  return (
    <div className="flex w-full h-full">
      <LocationsMap className="absolute top-0 left-0 w-screen h-screen overflow-hidden" />
      <LocationsList className="z-10 h-full overflow-y-auto"/>
    </div>
  );
}
