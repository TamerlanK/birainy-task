import { useEffect, useState } from "react"
import { FiMinus, FiPlus } from "react-icons/fi"
import { useLocation, useNavigate } from "react-router-dom"
import ServiceTabLayout from "../components/services/ServiceTabLayout"
import OrderIcon from "../components/ui/OrderIcon"
import StarIcon from "../components/ui/StarIcon"
import Wrapper from "../components/Wrapper"
import { servicesData } from "../constants"

type Service = {
  id: number
  title: string
  content?: string
  tabs?: Array<{
    id: number
    name: string
    content: string
  }>
}

const ServicesPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeService, setActiveService] = useState<number>(1)
  const [activeTab, setActiveTab] = useState<number>(1)
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const serviceId = params.get("id")
    const tabId = params.get("tab")

    if (serviceId) {
      const service = servicesData.find(
        (s: Service) => s.id === Number(serviceId)
      )
      if (service) {
        setActiveService(service.id)
        if (tabId && service.tabs) {
          const tab = service.tabs.find((t) => t.id === Number(tabId))
          setActiveTab(tab ? tab.id : 1)
        } else {
          setActiveTab(1)
        }
      }
    }
  }, [location.search])

  useEffect(() => {
    if (!hasUserInteracted) return

    const params = new URLSearchParams()
    params.set("id", activeService.toString())

    const selectedService = servicesData.find((s) => s.id === activeService)
    if (selectedService?.tabs && activeTab) {
      params.set("tab", activeTab.toString())
    }

    navigate({ search: params.toString() }, { replace: true })
  }, [activeService, activeTab, navigate, hasUserInteracted])

  const selectedService = servicesData.find(
    (s: Service) => s.id === activeService
  )

  const handleServiceClick = (id: number) => {
    setHasUserInteracted(true)
    setActiveService((prev) => (prev === id ? -1 : id))
  }

  const handleTabClick = (id: number) => {
    setHasUserInteracted(true)
    setActiveTab(id)
  }

  let dynamicContent = null
  let tabTitle = ""
  let tabContent = ""

  if (selectedService) {
    if (
      Array.isArray(selectedService.tabs) &&
      selectedService.tabs.length > 0
    ) {
      const selectedTab = selectedService.tabs.find(
        (tab) => tab.id === activeTab
      )
      if (selectedTab) {
        tabTitle = selectedTab.name
        tabContent = selectedTab.content
        dynamicContent = (
          // şəkil və videoları əvəzləmək üçün min-h-screen classını əlavə etdim
          <div className="min-h-screen">
            <h3 className="text-lg font-semibold mb-2">{selectedTab.name}</h3>
            <p>{selectedTab.content}</p>
          </div>
        )
      } else {
        tabTitle = selectedService.title
        tabContent = "Məlumat yoxdur"
        dynamicContent = (
          <div className="p-4 bg-gray-100 rounded-lg">
            <p>Məlumat yoxdur</p>
          </div>
        )
      }
    } else if (selectedService.content) {
      tabTitle = selectedService.title
      tabContent = selectedService.content
      dynamicContent = (
        <div className="p-4 bg-gray-100 rounded-lg">
          <p>{selectedService.content}</p>
        </div>
      )
    } else {
      tabTitle = selectedService.title
      tabContent = "Məlumat yoxdur"
      dynamicContent = (
        <div className="p-4 bg-gray-100 rounded-lg">
          <p>Məlumat yoxdur</p>
        </div>
      )
    }
  } else {
    tabTitle = "Xidmət tapılmadı"
    tabContent = "Məlumat yoxdur"
    dynamicContent = (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p>Məlumat yoxdur</p>
      </div>
    )
  }

  return (
    <section>
      <Wrapper>
        <StarIcon />
        <div className="flex justify-between items-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-source-code-pro mt-10 font-semibold">
              Xidmətlərimiz
            </h1>
            <p className="text-balance text-gray-500 font-space-grotesk mt-7">
              Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni
              avtomatlaşdırılmış şəkildə həyata keçirtmək və bazarda innovativ
              şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.
            </p>
          </div>
          <OrderIcon />
        </div>

        <div className="w-full grid grid-cols-3 py-10 gap-12 border-t mt-10">
          {/* SIDEBAR - Accordion */}
          <div className="col-span-3 md:col-span-1">
            <div className="space-y-4">
              {servicesData.map((service: Service) => {
                const isActive = activeService === service.id
                const hasTabs =
                  Array.isArray(service.tabs) && service.tabs.length > 0

                return (
                  <div
                    key={service.id}
                    className="bg-gray-100 rounded-lg overflow-hidden font-source-code-pro"
                  >
                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className={`w-full flex items-center p-6 justify-between text-xl font-medium text-left transition-colors duration-200 cursor-pointer ${
                        isActive && hasTabs ? "border-b" : ""
                      }`}
                    >
                      <span>{service.title}</span>
                      {hasTabs &&
                        (isActive ? (
                          <FiMinus size={18} />
                        ) : (
                          <FiPlus size={18} />
                        ))}
                    </button>

                    {isActive && hasTabs && (
                      <ul className="mt-2 space-y-1 px-6 py-3">
                        {service.tabs!.map((tab) => (
                          <li key={tab.id}>
                            <button
                              onClick={() => handleTabClick(tab.id)}
                              className={`w-full text-left py-2 rounded-md text-lg transition-colors duration-150 cursor-pointer ${
                                activeTab === tab.id
                                  ? "text-black"
                                  : "text-gray-500"
                              }`}
                            >
                              {tab.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="col-span- md:col-span-2">
            {selectedService && (
              <ServiceTabLayout title={tabTitle} content={tabContent}>
                {dynamicContent}
              </ServiceTabLayout>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ServicesPage
