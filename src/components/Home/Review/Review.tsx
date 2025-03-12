"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { review } from "../../../../public/data/review";
import "./Review.css";

const Review = () => {
  return (
    <section className="my-20 text-center md:my-40">
      <h1 className="pb-16 text-5xl font-semibold">People Say us</h1>
      <div className="bg-black py-28 lg:px-20 bg-opacity-15 image_container say-us">
        <div className="text-white capitalize ">
          <Splide
            options={{
              arrows: true,
              perPage: 2,
              padding: "1rem",
              pagination: false,
              autoplay: true,
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
            }}
            aria-label="My Favorite Images"
          >
            {review.map((r, i) => (
              <SplideSlide className="" key={i}>
                <div className="relative flex-col items-center justify-center gap-4 m-4 mt-10 bg-white border shadow-lg  rounded-tl-[80px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[80px] lex border-black/5">
                  <Image
                    className="absolute rounded-full -top-10 left-[35%] md:left-[40%] size-20 md:size-28"
                    width={500}
                    height={500}
                    src={r.image}
                    alt="user"
                  />
                  <div className="text-black min-h-[260px] max-w-[300px]  xl:max-w-[400px] mx-auto  pt-28">
                    <p className="text-justify line-clamp-5"> {r.message}</p>
                  </div>
                  <div className="pb-6 text-black">
                    <p className="font-semibold">{r.name}</p>
                    <p>{r.description}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  )
}

export default Review
