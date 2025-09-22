import type { NextPage } from "next";
import Image from "next/image";
import { HERO_BACKGROUND } from "@/constants";
import { PROPERTYLISTINGSAMPLE } from "@/constants"
import FilterSection from "@/components/filters/FilterSection";
import PropertyCard from "@/components/common/Card";

const Home: NextPage = () => {
    return (
        <main className="relative w-full min-h-screen">
            <div className="absolute inset-0 -z-10">
            <Image 
            src={HERO_BACKGROUND}
            alt="Hero Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            />

            <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Find your favorite place here!
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
                    The best prices for over 2 million properties worldwide.
                </p>
            </div>

            <FilterSection />

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
                {PROPERTYLISTINGSAMPLE.map((property) => (
                <PropertyCard
                    key={property.name} 
                    name={property.name}
                    price={property.price}
                    rating={property.rating}
                    image={property.image}
                />
                ))}
            </section>
        </main>
    );
};

export default Home;