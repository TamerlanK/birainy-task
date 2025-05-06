import React from "react"
import clsx from "clsx"

interface WrapperProps {
  children: React.ReactNode
  className?: string
  width?: string
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1440px]",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Wrapper
