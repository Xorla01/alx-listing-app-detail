import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";


export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if(!property) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg text-gray-600 font-medium">
                Property not found!
            </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <PropertyDetail property={property}  />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col gap-4 lg:cols-span-1">
                    <BookingSection price={property.price}/>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-2">
                    <ReviewSection reviews={property.reviews}/>
                </div>
            </div>
        </div>
    );
}
