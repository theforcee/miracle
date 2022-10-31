import { Autoplay, Lazy, Navigation, Pagination } from "swiper"
import "swiper/css"
import { Swiper } from "swiper/react"

type BaseSwiperProps = {
  children: JSX.Element[]
  showNavigation?: boolean
  showPagination?: boolean
  handleSlideChange: (data: any) => void
}

const BaseSwiper = (props: BaseSwiperProps) => {
  const {
    children,
    showPagination = false,
    showNavigation = false,
    handleSlideChange,
  } = props
  const pagination = showPagination
    ? {
        clickable: true,
      }
    : false
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 100,
        disableOnInteraction: false,
      }}
      loop
      lazy
      pagination={pagination}
      navigation={showNavigation}
      modules={[Lazy, Autoplay, Pagination, Navigation]}
      onSlideChangeTransitionEnd={handleSlideChange}
    >
      {children}
    </Swiper>
  )
}

export default BaseSwiper
