import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { landingPageStyles } from "../../Pages/LandingPage/styles"
import styles from "./footer.module.scss"
import logoMiracle from "/public/images/logo-full.svg"

const socials = [
  { name: "Telegram", className: styles.iconTelegram },
  { name: "Twitter", className: styles.iconTwitter },
  { name: "Linkedin", className: styles.iconLinkedIn },
  { name: "Facebook", className: styles.iconFacebook },
]

const FooterDefaultLayout = () => {
  return (
    <div className="text-white w-full">
      <div
        className={clsx(
          "flex flex-col relative max-w-[1110px] mx-auto pt-[120px] pb-10 text-center box-border",
          "xs:pb-15",
          "md:pb-20 md:text-left",
        )}
      >
        <div
          className={clsx(
            "flex justify-between items-center",
            landingPageStyles.paddingX,
          )}
        >
          <div className="w-[150px] relative xs:w-[221px]">
            <Image src={logoMiracle} alt="" layout="responsive" />
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-4 items-center">
              {socials.map((item: any) => (
                <Link key={item.name} href="">
                  <div
                    className={clsx(
                      "relative w-6 h-6 cursor-pointer xs:w-7 xs:h-7",
                      item.className,
                    )}
                  ></div>
                </Link>
              ))}
            </div>
            <p className="text-sm xs:text-16/22 text-center mt-2">
              © Icetea Labs 2022. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterDefaultLayout
