import { MdOutlinePhone, MdAdsClick } from "react-icons/md"

interface ServiceTabLayoutProps {
  title: string
  content: string
  children: React.ReactNode
}

const ServiceTabLayout = ({
  title,
  content,
  children,
}: ServiceTabLayoutProps) => {
  return (
    <div className="space-y-7">
      <h2 className="text-6xl font-source-code-pro font-semibold tracking-tighter">
        {title}
      </h2>
      <p className="text-gray-500 text-balance text-lg">{content}</p>
      <div className="flex gap-4 items-center font-semibold font-space-grotesk">
        <button className="px-7 py-3 bg-brand rounded-lg inline-flex items-center cursor-pointer">
          <MdOutlinePhone className="inline-block mr-5 size-5" />
          Bizimlə əlaqə saxlayın
        </button>
        <button className="px-7 py-3 bg-gray-200 rounded-lg inline-flex items-center cursor-pointer">
          <MdAdsClick className="inline-block mr-5 size-5" />
          İşlərimizə nəzər yetirin
        </button>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default ServiceTabLayout
