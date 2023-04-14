import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-burgundy-500 shadow h-1/6">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-beige-500 sm:text-center">
            © 2023{' '}
            <a href="/" className="hover:underline">
              ODAEATS
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="#"
                className="mr-4 text-beige-300 hover:underline md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-beige-300 hover:underline md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-beige-300 hover:underline md:mr-6"
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="text-beige-300 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
