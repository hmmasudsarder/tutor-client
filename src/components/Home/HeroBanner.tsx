import Image from 'next/image'
import React from 'react'
import himage from "@/assets/hero-banner.png"
import Container from '../ui/Container'

const HeroBanner = () => {
  return (
    <div>
      <div className="relative">
          <Image
            width={1000}
            height={1000}
            alt=""
            src={himage}
            className="w-[calc(100vw-0px)] h-2/4 md:h-[calc(88vh)]"
          />
          <Container>
            <div className="absolute inset-0 flex items-center justify-center text-center w-full h-full lg:px-[300px] px-2 py-3">
              <div className='text-white'>
                <h2
                  className={`lg:text-[40px] text-[24px] font-[600] text-white mb-3`}
                >
                  Master Any Subject. Learn from the Best
                </h2>
                <p
                  className={`leading-[28px]`}
                >
                  Our experienced tutors provide in-depth knowledge and personalized guidance to help you excel in your studies.  Start your journey to academic success today.
                </p>
              </div>
            </div>
          </Container>
        </div>
    </div>
  )
}

export default HeroBanner
