import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { headerRoutes, RouteTypes } from "../../../utils/constants"

import logo from "/public/logo.svg"

const HeaderDefaultLayout = (props: any) => {
  return (
    <>
      <nav
        className={clsx(
          "absolute -translate-x-1/2 left-1/2 h-20 w-full flex items-center justify-between max-w-screen-main px-[120px] overflow-hidden",
          "xs:px-[60px]",
          "pl-5 pr-6",
        )}
      >
        <Link href="/">
          <a>
            <Image
              src={logo}
              width="192px"
              height="42px"
              layout="fixed"
              alt=""
            />
          </a>
        </Link>
        <div className={clsx("flex gap-5")}>
          {headerRoutes.map((item: RouteTypes, index: number) => (
            <Link key={index} href={item.uri}>
              <a target={item.target}>{item.label}</a>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default HeaderDefaultLayout
