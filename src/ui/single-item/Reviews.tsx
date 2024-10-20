import { useState } from "react";
import StarRating from "../general/StarRating";

export default function Reviews({reviews}: {reviews: any}){

const totalRating = reviews.reduce((sum: number, review: any) => sum + review.rating, 0);
const averageRating = Number((totalRating / reviews.length).toFixed(1));

// Calculate counts for each star (1 to 5)
const starCounts = [1, 2, 3, 4, 5].reduce((acc, star) => {
  acc[star] = reviews.filter((review: any) => Math.round(review.rating) === star).length;
  return acc;
}, {} as Record<number, number>); // Initial accumulator as an object {1: 0, 2: 0, ...}

  return(
      <div className="w-full px-2 sm:px-16 md:px-20 lg:px-28 gap-10 flex-col mt-0 md:mt-8 py-4">
          <h2 style={{fontFamily: 'Playfair'}} className="text-xl text-gray-900 font-semibold text-center">Ratings & Reviews</h2>
          <div className="w-full flex items-center justify-center my-2"><p className="w-[60vw] h-[0.15rem] bg-gray-400"></p></div>
          <RatingSummary reviews={reviews} averageRating={averageRating} starCounts={starCounts} />
          <ReviewList reviews={reviews} />
      </div>
  )
}

function ReviewList({reviews}: {reviews: any}){
        return (
            <div className="w-full">
              {reviews.map((review: any, index: number) => (
                <ReviewListItem review={review} key={index} />
              ))}
            </div>
    )
}

function ReviewListItem({review}: {review: any}){
    const [readMore, setReadMore] = useState<boolean>(false); 
    
    function handleToggleReadMore(){
        setReadMore(!readMore)
    }
    return(
        <div className="flex gap-4 items-start mb-6 mt-10">
                  <img
                    className="rounded-full object-contain"
                    height={64}
                    width={64}
                    src={review.userimg}
                    alt={`${review.username}'s profile`}
                  />
                  <div>
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <p className="text-lg font-semibold text-gray-800">
                          {review.username}
                        </p>
                        <StarRating
                          rating={review.rating}
                          size="normal"
                          fillColor="var(--rating-yellow)"
                        />
                      </div>
                      
                    </div>
                    <p className="text-justify text-gray-800 mt-2">
          {readMore || review.text.length <= 500 
            ? review.text 
            : `${review.text.slice(0, 500)}...`}
        </p>
        {review.text.length > 500 && (
          <button
            className="text-[var(--theme-brown)]"
            onClick={handleToggleReadMore}
          >
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        )}
                    {review.imgUrl && <img src={review.imgUrl} height={200} width={300} alt="review image" />}
                    <span className="font-semibold text-gray-500">
                        Posted on {new Date(review.createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                  </div>
                </div>
    )
}

function RatingSummary({averageRating, starCounts, reviews}: {averageRating: number, starCounts: Record<number, number>, reviews: any}){
    return(
        <div className="md:flex ">
            {/* left side */}
            <div className="w-full md:w-[60%]">
            <div className="mt-6 w-full md:w-[80%]">
        {[5, 4, 3, 2, 1].map(star => {
          const percentage = ((starCounts[star] || 0) / reviews.length) * 100;

          return (
            <div key={star} className="flex items-center gap-2 my-2">
              <p className="text-md w-12">{star} Star{star > 1 && "s"}</p>
              <div className="outerRound rounded-full w-[80%] h-3 bg-gray-300">
                <div
                  className="innerRound rounded-full h-full bg-[var(--theme-brown)]"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <p className="text-lg font-semibold w-10 text-right">
                {(percentage.toFixed(1)  || 0 )+ "%"}
              </p>
            </div>
          );
        })}
      </div>
            </div>

            {/* right side  */}
            <div className=" w-full md:w-[40%] flex items-center justify-center md:justify-normal">
                <div>
                    <StarRating rating={averageRating} size="large" fillColor="var(--theme-brown)" />
                    <span className="text-2xl my-1">{averageRating} out of 5</span>
                    <p>99% users recomment this product</p>
                    <span>{reviews.length} reviews</span> <button className="text-md bg-gray-300 rounded-lg p-2 mx-8">+ Add a review</button>
                </div>
            </div>
        </div>
    )
}