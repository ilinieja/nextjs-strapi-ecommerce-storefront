import Location from "../Location/Location";
import { getLocations } from "@/lib/api";

export default async function LocationsList({className}: {className?: string}) {
  const locations = await getLocations();

  return (
    <div className={className}>
      {locations.map((location) => (
        <Location key={location.id} location={location} />
      ))}
    </div>
  );
}
