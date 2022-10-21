import clsx from "clsx"
import Image from "next/image"
import logoMiracle from "/public/images/logo-full.svg"
import iconTelegram from "/public/images/social/icon-telegram.svg"
import iconTwitter from "/public/images/social/icon-twitter.svg"
import iconLinkedin from "/public/images/social/icon-linkedin.svg"
import iconFacebook from "/public/images/social/icon-facebook.svg"
import Link from "next/link"

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
          "flex flex-col relative max-w-[1110px] mx-auto pb-20 text-center pt-[60px] box-border",
          "md:pt-[120px] md:text-left",
        )}
      >
        <div className="flex justify-between items-center">
          <div>
            <Image src={logoMiracle} alt="" />
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-4 items-center">
              {socials.map((item: any) => (
                <Link key={item.title} href="">
                  <div className="relative w-7">
                    <Image src={item.icon} alt={item.name} />
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-center mt-2">
              © Icetea Labs 2022. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterDefaultLayout
