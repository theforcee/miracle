import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { landingPageStyles } from "../../Pages/LandingPage/styles"
import logoMiracle from "/public/images/logo-full.svg"
import iconFacebook from "/public/images/social/icon-facebook.svg"
import iconLinkedin from "/public/images/social/icon-linkedin.svg"
import iconTelegram from "/public/images/social/icon-telegram.svg"
import iconTwitter from "/public/images/social/icon-twitter.svg"

const socials = [
  { icon: iconTelegram, name: "Telegram" },
  { icon: iconTwitter, name: "Twitter" },
  { icon: iconLinkedin, name: "Linkedin" },
  { icon: iconFacebook, name: "Facebook" },
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
                  <div className="relative w-6 cursor-pointer xs:w-7">
                    <Image src={item.icon} alt={item.name} />
                  </div>
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
