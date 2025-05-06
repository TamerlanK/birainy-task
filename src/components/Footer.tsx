import Wrapper from "./Wrapper"
import { PiSealCheckFill } from "react-icons/pi"

import { addresses, contact, navItems, socialMediaLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white font-space-grotesk">
      <Wrapper>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
            <div className="text-center md:text-left">
              <p className="text-balance max-w-lg text-4xl md:text-5xl font-source-code-pro tracking-tighter mx-auto md:mx-0">
                Bizimlə indi əlaqəyə keçin
              </p>
              <ul className="flex flex-wrap gap-y-1 gap-x-6 justify-center md:justify-start items-center md:gap-x-10 md:gap-y-0 md:flex-row mt-7 font-semibold">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="text-md">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg mb-6">Bizi izləyin</p>
              <ul className="flex justify-center md:justify-end items-center gap-x-7">
                {socialMediaLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 transition-colors duration-300 p-3 md:p-5 rounded-full border-white border"
                  >
                    <item.icon className="size-5 text-white" />
                  </a>
                ))}
              </ul>
            </div>
          </div>

          {/* COUNTRIES */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 py-16">
            {addresses.map((address) => (
              <div key={address.country}>
                <p className="font-semibold text-xl mb-4">{address.country}</p>
                <p className="text-neutral-500 text-balance">
                  {address.address}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-7 border-t border-white flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-center md:flex-row md:items-center gap-y-4 gap-x-4 text-center md:text-left">
              <PiSealCheckFill className="text-brand size-10" />
              <span>Partner with</span>
              <img
                src="https://birainy.com/_next/static/media/microsoft.9f8da16c.svg"
                alt="Microsoft Logo"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-y-3 gap-x-10 text-center md:text-left">
              {contact.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-lg font-semibold"
                >
                  {item.type === "phone" ? (
                    <a href={`tel:${item.value}`}>{item.value}</a>
                  ) : (
                    <a href={`mailto:${item.value}`}>{item.value}</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
