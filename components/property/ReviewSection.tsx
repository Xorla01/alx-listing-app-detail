import React from "react";
import Image from "next/image";
import { ReviewProps } from "@/interfaces";

export const ReviewSection: React.FC<ReviewProps> = ({ reviews }) => {
    return(
        <div className="mt-8">
            <h3 className="text-2xl font-semibold">Reviews</h3>
            {reviews.map((review, i) => (
                <div key={i} className="border-b pb-4 mb-4">
                    <div className="flex items-center">
                        <Image src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />

                        <div>
                            <p className="font-bold">{review.name}</p>
                            <p className="">{review.rating}</p>
                        </div>
                    </div>

                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    )
}

export default ReviewSection;