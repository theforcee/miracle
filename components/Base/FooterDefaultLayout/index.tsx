import clsx from "clsx"

const FooterDefaultLayout = () => {
  return (
    <div className="bg-black text-white w-full">
      <div
        className={clsx(
          "flex flex-col relative max-w-screen-main mx-auto px-7 text-center pt-[60px] mb-3 box-border",
          "md:px-40 md:pt-24 md:text-left",
        )}
      >
        <p className="text-center md:mt-16 mt-3">Copyright © 2022 . All rights reserved.</p>
      </div>
    </div>
  )
}

export default FooterDefaultLayout
