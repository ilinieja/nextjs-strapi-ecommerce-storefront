import {Location} from "@/lib/types";

export default function Location({ location }: { location: Location }) {
  return <div>{location.attributes.title.toString()}</div>;
}
