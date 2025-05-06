import clsx from "clsx"
import { useState } from "react"
import { Link } from "react-router-dom"

const OrderIcon = () => {
  const [paused, setPaused] = useState(false)

  return (
    <div
      className="relative group self-end hidden md:block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Link to="/contact">
        <svg
          viewBox="0 0 100 100"
          width="125"
          height="125"
          className={clsx("animate-spin-slow hover:animation-paused", {
            "animation-paused": paused,
            "animation-running": !paused,
          })}
        >
          <circle cx="50" cy="50" r="50" fill="black" />
          <defs>
            <path
              id="circle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text
            fill="white"
            fontSize="9"
            fontFamily="'Segoe UI Emoji', 'Noto Color Emoji', Arial, sans-serif"
          >
            <textPath href="#circle" startOffset="0%">
              SİFARİŞ ET ⚡
            </textPath>
            <textPath href="#circle" startOffset="25%">
              SİFARİŞ ET ⚡
            </textPath>
            <textPath href="#circle" startOffset="50%">
              SİFARİŞ ET ⚡
            </textPath>
            <textPath href="#circle" startOffset="75%">
              SİFARİŞ ET ⚡
            </textPath>
          </text>
        </svg>
      </Link>
      <img
        src="https://birainy.com/_next/static/media/direction.e5fbef99.svg"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-30 group-hover:rotate-0 transition duration-300 cursor-pointer"
        alt="direction"
      />
    </div>
  )
}

export default OrderIcon
