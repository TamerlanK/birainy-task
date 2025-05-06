import type { ReactNode, ButtonHTMLAttributes } from "react"
import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  icon?: ReactNode
  iconPosition?: "start" | "end"
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  className?: string
  children?: ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconPosition = "start",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  onClick,
  children,
  ...props
}) => {
  const baseStyles =
    "font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"

  const variantStyles = {
    primary: "bg-brand text-gray-900 font-normal focus:ring-brand-500",
    secondary: "bg-gray-200 text-gray-800 focus:ring-gray-500",
  }[variant]

  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size]

  const paddingStyles = {
    sm: icon && !label && !children ? "p-1" : "px-3 py-1",
    md: icon && !label && !children ? "p-2" : "px-4 py-2",
    lg: icon && !label && !children ? "p-3" : "px-6 py-3",
  }[size]

  const iconStyles = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }[size]

  // Determine if the button is icon-only
  const isIconOnly = icon && !label && !children

  // Ensure aria-label is provided for icon-only buttons
  const buttonAriaLabel = isIconOnly
    ? props["aria-label"] || "Icon Button"
    : label || (typeof children === "string" ? children : "Button")

  const content = (
    <>
      {icon && iconPosition === "start" && (
        <span className={clsx(iconStyles, !isIconOnly && "mr-2")}>{icon}</span>
      )}
      {label || children}
      {icon && iconPosition === "end" && (
        <span className={clsx(iconStyles, !isIconOnly && "ml-2")}>{icon}</span>
      )}
    </>
  )

  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        baseStyles,
        variantStyles,
        sizeStyles,
        paddingStyles,
        className
      )}
      onClick={onClick}
      aria-label={buttonAriaLabel}
      {...props}
    >
      {content}
    </button>
  )
}

Button.displayName = "Button"

export default Button
