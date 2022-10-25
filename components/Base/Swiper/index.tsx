import { Autoplay, Lazy, Navigation, Pagination } from "swiper"
import "swiper/css"
import { Swiper } from "swiper/react"

const BaseSwiper = (props: any) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      lazy
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Lazy, Autoplay, Pagination, Navigation]}
    >
      {props.children}
    </Swiper>
  )
}

export default BaseSwiper
