import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import OrderIcon from "../components/ui/OrderIcon"
import StarIcon from "../components/ui/StarIcon"
import Wrapper from "../components/Wrapper"
import { servicesData } from "../constants"
import ServiceTabLayout from "../components/services/ServiceTabLayout"

// Define the Service type
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

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const serviceId = params.get("id")
    const tabId = params.get("tab")

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
    } else {
      setActiveService(servicesData[0]?.id || 1)
      setActiveTab(1)
    }
  }, [location.search])

  const selectedService = servicesData.find(
    (service: Service) => service.id === activeService
  )

  useEffect(() => {
    const params = new URLSearchParams()
    params.set("id", activeService.toString())
    if (selectedService?.tabs && activeTab) {
      params.set("tab", activeTab.toString())
    }
    navigate({ search: params.toString() }, { replace: true })
  }, [activeService, activeTab, navigate, selectedService?.tabs])

  let dynamicContent = null
  let tabTitle = ""
  let tabContent = ""

  if (selectedService) {
    if (selectedService.tabs && selectedService.tabs.length > 0) {
      const selectedTab = selectedService.tabs.find(
        (tab) => tab.id === activeTab
      )
      if (selectedTab) {
        tabTitle = selectedTab.name
        tabContent = selectedTab.content
        dynamicContent = (
          <div className="p-4 bg-gray-100 rounded-lg">
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
          {/* ACCORDION */}
          <div className="col-span-3 md:col-span-1">
            <div className="space-y-4">
              {servicesData.map((service: Service) => (
                <div key={service.id}>
                  <button
                    onClick={() => {
                      setActiveService(service.id)
                      setActiveTab(1)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-md font-medium ${
                      activeService === service.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    } transition-colors duration-200`}
                  >
                    {service.title}
                  </button>
                  {activeService === service.id && service.tabs && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {service.tabs.map((tab) => (
                        <li key={tab.id}>
                          <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                              activeTab === tab.id
                                ? "bg-blue-100 text-blue-800"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                          >
                            {tab.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* MAIN CONTENT */}
          <div className="col-span-3 md:col-span-2">
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
