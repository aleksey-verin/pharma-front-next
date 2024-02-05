'use client'
import Image from 'next/image'
import './article-recommendations.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import {Navigation} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

const ArticleRecommendation = () => {
  return (
    <section className='article-recommendation' id='article-recommendation'>
      <div className='article-recommendation__container container'>
        <div className='article-recommendation__header'>
          <h2 className='article-recommendation__title'>Вам может быть интересно</h2>
          <div className='article-recommendation__wrapper-arrow'>
            <div className='article-recommendation__arrow-prev'>
              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9.25 17L1.25 9L9.25 1' stroke='#2D1448' />
              </svg>
            </div>
            <div className='article-recommendation__arrow-next'>
              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0.5 1L8.5 9L0.499999 17' stroke='#2D1448' />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          className='article-recommendation__swiper'
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            prevEl: '.article-recommendation__arrow-prev',
            nextEl: '.article-recommendation__arrow-next',

          }}
        >
          <SwiperSlide className='article-recommendation__slide'>
            <h3 className='article-recommendation__caption'>Название статьи</h3>
            <p className='article-recommendation__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='article-recommendation__image'>
              <Image src='/assets/img/article-page/slider-1.jpg' alt='' width={301} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='article-recommendation__slide'>
            <h3 className='article-recommendation__caption'>Название статьи</h3>
            <p className='article-recommendation__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='article-recommendation__image'>
              <Image src='/assets/img/article-page/slider-1.jpg' alt='' width={301} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='article-recommendation__slide'>
            <h3 className='article-recommendation__caption'>Название статьи</h3>
            <p className='article-recommendation__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='article-recommendation__image'>
              <Image src='/assets/img/article-page/slider-1.jpg' alt='' width={301} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='article-recommendation__slide'>
            <h3 className='article-recommendation__caption'>Название статьи</h3>
            <p className='article-recommendation__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='article-recommendation__image'>
              <Image src='/assets/img/article-page/slider-1.jpg' alt='' width={301} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='article-recommendation__slide'>
            <h3 className='article-recommendation__caption'>Название статьи</h3>
            <p className='article-recommendation__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='article-recommendation__image'>
              <Image src='/assets/img/article-page/slider-1.jpg' alt='' width={301} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='article-recommendation__slide'>
            <h3 className='article-recommendation__caption'>Название статьи</h3>
            <p className='article-recommendation__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='article-recommendation__image'>
              <Image src='/assets/img/article-page/slider-1.jpg' alt='' width={301} height={300} />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className='swiper article-recommendation__swiper'>
          <div className='swiper-wrapper  article-recommendation__wrapper'>
            <div className='swiper-slide article-recommendation__slide'>
              <h3 className='article-recommendation__caption'>Название статьи</h3>
              <p className='article-recommendation__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='article-recommendation__image'>
                <Image
                  src='/assets/img/article-page/slider-1.jpg'
                  alt=''
                  width={301}
                  height={300}
                />
              </div>
            </div>
            <div className='swiper-slide article-recommendation__slide'>
              <h3 className='article-recommendation__caption'>Название статьи</h3>
              <p className='article-recommendation__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='article-recommendation__image'>
                <Image
                  src='/assets/img/article-page/slider-2.jpg'
                  alt=''
                  width={301}
                  height={300}
                />
              </div>
            </div>
            <div className='swiper-slide article-recommendation__slide'>
              <h3 className='article-recommendation__caption'>Название статьи</h3>
              <p className='article-recommendation__description'>
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='article-recommendation__image'>
                <Image
                  src='/assets/img/article-page/slider-3.jpg'
                  alt=''
                  width={301}
                  height={300}
                />
              </div>
            </div>
            <div className='swiper-slide article-recommendation__slide'>
              <h3 className='article-recommendation__caption'>Название статьи</h3>
              <p className='article-recommendation__description'>
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='article-recommendation__image'>
                <Image
                  src='/assets/img/article-page/slider-3.jpg'
                  alt=''
                  width={301}
                  height={300}
                />
              </div>
            </div>
            <div className='swiper-slide article-recommendation__slide'>
              <h3 className='article-recommendation__caption'>Название статьи</h3>
              <p className='article-recommendation__description'>
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='article-recommendation__image'>
                <Image
                  src='/assets/img/article-page/slider-3.jpg'
                  alt=''
                  width={301}
                  height={300}
                />
              </div>
            </div>
            <div className='swiper-slide article-recommendation__slide'>
              <h3 className='article-recommendation__caption'>Название статьи</h3>
              <p className='article-recommendation__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='article-recommendation__image'>
                <Image
                  src='/assets/img/article-page/slider-1.jpg'
                  alt=''
                  width={301}
                  height={300}
                />
              </div>
            </div>
          </div>
          
        </div> */}
      </div>
    </section>
  )
}

export default ArticleRecommendation
