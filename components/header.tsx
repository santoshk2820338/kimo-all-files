import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'


// Array for Header
const headerData = [
  { name: 'Home', href: '/', slug: '/' },
  { name: 'Surfing', href: '/activity/Surfing', slug: 'activity/Surfing' },
  { name: 'Traditional Festivals', href: '/activity/Traditional Festivals', slug: 'activity/Traditional Festivals' },
  { name: 'Vulcano', href: '/activity/Vulcano', slug: 'activity/Volcanoes', },
]

export default function Header() {

  // UseState's
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Note: PLeasea click on Book Online i have created a form for bookings.

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="p-5 lg:mt-6 lg:rounded-xl bg-white flex items-center justify-between  lg:px-8 lg:w-3/4 sm:w-1 m-auto " aria-label="Global">
        <div className="flex mr-24 items-center">
          <a href="#" className="-m-1.5 p-1.5">

            <Image
              className="h-8 w-auto"
              src="/logo.svg"
              alt=""
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {headerData.map((Data) => (
            <Link key={Data.name} href={`/${Data.slug}`} prefetch={false} className="text-sm font-normal leading-6 text-gray-900">
              {Data.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact" className="button font-semibold rounded-lg text-white text-sm">
            Book a trip
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-11/12 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">

              <Image
                className="h-8 w-auto"
                src="/logo.svg"
                alt=""
                width={20}
                height={20}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {headerData.map((Data) => (
                  <a
                    key={Data.name}
                    href={Data.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {Data.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="#" className="button font-semibold rounded-lg text-white text-sm">
                  Book a trip
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}