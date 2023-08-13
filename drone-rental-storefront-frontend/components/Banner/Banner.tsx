import Image from "next/image";

import avataPicture from "@/public/avata.png";
import clsx from "clsx";

export default function Banner({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        className,
        "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
      )}
    >
      <div className="md:col-start-2 lg:col-start-2 xl:col-start-2 col-span-4 lg:col-span-5 xl:col-span-4">
        <div className="flex flex-col">
          <h2 className="text-lg ml-1">A new way to fly</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Rent a drone
          </h1>
          <p className="text-lg">
            Select your dream drone from our stock of ready-to-fly models,
            choose a duration and we'll take care of the rest.
          </p>
        </div>
      </div>
      <div className="hidden md:block md:col-start-6 lg:col-start-7 xl:col-start-6 col-span-3 lg:col-span-4 xl:col-span-7 overflow-visible relative">
        <Image
          className="absolute -top-36 xl:right-10 max-w-none max-h-none"
          src={avataPicture}
          alt="DJI Avata drone"
          width={600}
        />
      </div>
    </section>
  );
}
