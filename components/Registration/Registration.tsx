import React from 'react'

const Registration = () => {
  return (
    <div>
      <div className="max-w-[85rem] lg:mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black font-body text-white">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-left">
              <h2 className="font-body font-bold text-2xl hover:text-orange md:text-3xl">
                Register Now for e-volve!
              </h2>
              <p className="mt-1 text-sm font-body text-gray-300">
                {/* Replace with description of e-volve event */}
                Join us for e-volve, a unique event exploring the cutting edge of technology and innovation. Collaborate with fellow enthusiasts, learn from industry experts, and push the boundaries of what's possible.
              </p>
              <div className="mt-6 gap-3 flex">
                <a
                  href="https://registrations.ieeesrmist.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 inline-flex items-center gap-x-2 text-md font-bold rounded-full border border-transparent bg-orange text-white hover:bg-white hover:text-orange transform transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
                >
                  REGISTER
                </a>
              </div>
            </div>
            <div className="mt-8 animated-cube"></div>
          </div>
          {/* Remove the image sections */}
        </div>
      </div>
    </div>
  )
}

export default Registration