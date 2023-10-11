import React from 'react'
import { useMode } from '../Context/ThemeContext';
function Pic() {
    const mode = useMode();
  return (
    <div className="sm:py-32 md:py-0" data-aos="fade-up" data-aos-duration="1000">
    <img
      src=".\Images\me.webp"
      alt=""
      width={500}
      className="rounded-full border  border-slate-900 mx-auto items-center "
    />
    <div className="flex my-5 space-x-7 justify-center p-5">
      <a
        href="https://github.com/Asfaquekhan"
        id={mode ? "icons_dark" : "icon_light"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center rounded-full w-12 hover:w-14    transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 48 48"
          id="github"
        >
          <rect width="48" height="48" fill="#000" rx="24"></rect>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M31.4225 46.8287C29.0849 47.589 26.5901 48 24 48C21.4081 48 18.9118 47.5884 16.5728 46.8272C17.6533 46.9567 18.0525 46.2532 18.0525 45.6458C18.0525 45.3814 18.048 44.915 18.0419 44.2911C18.035 43.5692 18.0259 42.6364 18.0195 41.5615C11.343 43.0129 9.9345 38.3418 9.9345 38.3418C8.844 35.568 7.2705 34.8294 7.2705 34.8294C5.091 33.3388 7.4355 33.369 7.4355 33.369C9.843 33.5387 11.1105 35.8442 11.1105 35.8442C13.2525 39.5144 16.728 38.4547 18.096 37.8391C18.3135 36.2871 18.9345 35.2286 19.62 34.6283C14.2905 34.022 8.688 31.9625 8.688 22.7597C8.688 20.1373 9.6225 17.994 11.1585 16.3142C10.911 15.7065 10.0875 13.2657 11.3925 9.95888C11.3925 9.95888 13.4085 9.31336 17.9925 12.4206C19.908 11.8876 21.96 11.6222 24.0015 11.6114C26.04 11.6218 28.0935 11.8876 30.0105 12.4206C34.5915 9.31336 36.603 9.95888 36.603 9.95888C37.9125 13.2657 37.089 15.7065 36.8415 16.3142C38.3805 17.994 39.309 20.1373 39.309 22.7597C39.309 31.9849 33.6975 34.0161 28.3515 34.6104C29.2125 35.3519 29.9805 36.8168 29.9805 39.058C29.9805 41.2049 29.9671 43.0739 29.9582 44.3125C29.9538 44.9261 29.9505 45.385 29.9505 45.6462C29.9505 46.2564 30.3401 46.9613 31.4225 46.8287Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/asfaque-khan-359b39186/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEyfAlF%2B9RT2r9WAgMf2C4Q%3D%3D"
        className="text-center text-[#0A66C2] w-12 hover:w-14 transition-all "
        id={mode ? "icons_dark" : "icon_light"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 128 128"
          id="linkedin"
        >
          <circle cx="64" cy="64" r="64" fill="#0177b5"></circle>
          <path
            fill="#fff"
            d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"
          ></path>
        </svg>
      </a>
      <a
        href="https://twitter.com/Asfaquekhan76"
        className="text-center text-[#00acee]  w-12 hover:w-14 transition-all "
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 112.197 112.197"
          id="twitter"
        >
          <circle
            cx="56.099"
            cy="56.098"
            r="56.098"
            fill="#55acee"
          ></circle>
          <path
            fill="#f1f2f2"
            d="M90.461 40.316a26.753 26.753 0 0 1-7.702 2.109 13.445 13.445 0 0 0 5.897-7.417 26.843 26.843 0 0 1-8.515 3.253 13.396 13.396 0 0 0-9.79-4.233c-7.404 0-13.409 6.005-13.409 13.409 0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351 0 0 0-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314 0 0 1-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362 0 0 1-3.532.471c-.866 0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904 0 0 1-16.655 5.74c-1.08 0-2.15-.063-3.197-.188a37.929 37.929 0 0 0 20.553 6.025c24.664 0 38.152-20.432 38.152-38.153 0-.581-.013-1.16-.039-1.734a27.192 27.192 0 0 0 6.692-6.94z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
  )
}

export default Pic
