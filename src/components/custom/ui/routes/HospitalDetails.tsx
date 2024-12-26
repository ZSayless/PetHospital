import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { MdLocalPhone, MdAccessTime, MdLocationPin, MdFacebook} from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Slider from "react-slick";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


function HospitalDetails() {
  const { hospitalId } = useParams();
  const navigate = useNavigate();

  const hospitalList = [1,2,3,4,5,6,7,8,9,10,11,12];

  const teams = Array.from({length: 8}).map((_, i, a) => (
    <div key={a.length - i} className="group hover:shadow-lg select-none transition ease-out duration-500 bg-white rounded-lg shadow-md p-6 my-6 text-center">
        <img src="/vite.svg" alt="Team Member 1" className="w-full rounded-full group-hover:scale-110 transition ease-out duration-500 mb-4"/>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">John Doe</h3>
        <p className="text-base text-gray-700">Role: Doctor</p>
        <div className="flex flex-row gap-8 justify-center mt-4">
          <a href="#"><MdFacebook size={24} className="hover:scale-125 transition ease-out duration-350" /></a>
          <a href="#"><BsTwitterX size={24} className="hover:scale-125 transition ease-out duration-350" /></a>
          <a href="#"><FaInstagram size={24} className="hover:scale-125 transition ease-out duration-350" /></a>
        </div>
    </div>
  ));

  useEffect(() => {
    if (!hospitalId || !hospitalList.find((element) => (element.toString().toLowerCase().localeCompare(hospitalId.toLowerCase()) === 0))) {
        navigate("/notfound", {state: {message: "Hospital Id Not Found."}})
    }
  }, [])

  const slider_settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <>
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
            <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1
              className="text-3xl font-medium title-font text-gray-900"
            >
              Hospital XYZ {hospitalId}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  {Array.from({length: 5}).map((_, i, a) => (
                    <img key={a.length - i} src="/star_02.svg" alt="star" width={14} height={14} />
                  ))}
                </div>
                <p
                  className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                >
                  (5.0)
                </p>
                <a
                  href="#customer_reviews"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  345 Reviews
                </a>
              </div>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed sodales eros. Aliquam eu leo et libero faucibus commodo. Nam aliquam pellentesque facilisis. Sed nec rhoncus libero. Maecenas feugiat dolor augue, et interdum sem venenatis ut. In congue turpis nec ornare congue. Pellentesque laoreet ultrices velit sed posuere. Nunc sed lorem ipsum. Vestibulum ac ligula mattis, tristique mi sed, pellentesque metus.
            </p>

            <div className="lg:grid lg:grid-cols-2 items-start">
              <div className="lg:mb-0 mb-6">
                <div className="flex flex-row items-center flex-nowrap gap-2">
                  <MdLocalPhone size={18} />
                  <h3 className="text-base font-semibold text-gray-800 sm:text-xl dark:text-white">Contact</h3>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                    <p className="text-sm"><span className="min-w-[60px] inline-block">Email:</span><span className="text-gray-500 dark:text-gray-400">hospital@example.com</span></p>
                    <p className="text-sm"><span className="min-w-[60px] inline-block">Phone:</span><span className="text-gray-500 dark:text-gray-400">(012) 345 6789</span></p>
                </div>
              </div>


              <div>
                <div className="flex flex-row items-center flex-nowrap gap-2">
                  <MdAccessTime size={18}/>
                  <h3 className="text-base font-semibold text-gray-800 sm:text-xl dark:text-white">Operating Hours</h3>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                    <p className="text-sm"><span className="min-w-[80px] inline-block">Morning:</span><span className="text-gray-500 dark:text-gray-400">7h - 11h</span></p>
                    <p className="text-sm"><span className="min-w-[80px] inline-block">Afternoon:</span><span className="text-gray-500 dark:text-gray-400">1h - 5h</span></p>
                    {/* <p className="text-sm"><span className="min-w-[80px] inline-block">Evening:</span><span className="text-gray-500 dark:text-gray-400">6h - 10h</span></p> */}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="my-24">
            <h2
              className="text-3xl font-medium title-font text-gray-900"
            >
              Hospital Location
            </h2>

            <div className="mt-4">
              <div className="flex flex-row items-center flex-nowrap gap-2 mb-2">
                <MdLocationPin size={18} />
                <p className="text-base"><span className="min-w-[80px] inline-block">Address:</span><span className="text-gray-500 dark:text-gray-400">Langone Medical Center. 550 1st Ave, New York, NY 10016, USA</span></p>
              </div>

              <iframe
                  width="100%"
                  height="768"
                  frameBorder="0" style={{border:0}}
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS"
                  allowFullScreen>
              </iframe>
            </div>
        </div>

        <div className="my-10">
            <h2
              className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
            >
              <section id="our-team" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Meet Our Team</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
                        {teams.map((team, i , a) => (<div key={a.length - i}>{team}</div>))}
                    </div>
                </div>
            </section>
            </h2>
        </div>

        <div className="my-10">
          <section className="text-gray-600 body-font"> 
            <div className="container px-5 py-24 mx-auto">
              <h2 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h2>
              <Slider {...slider_settings}>
                <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque semper elit non pellentesque. Curabitur neque arcu, efficitur facilisis porta at, feugiat ut est. Vivamus sed dui in dui vehicula congue. Phasellus sed pellentesque nisi. Phasellus tempus bibendum massa ut tincidunt. Nam hendrerit ut tortor eget rutrum. Suspendisse facilisis ante eget fringilla auctor. Nam a odio orci. Pellentesque imperdiet quis sem</p>
                      <a className="inline-flex items-center">
                        <img alt="testimonial" src="https://dummyimage.com/110x110" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900">Jon doe</span>
                          <span className="text-gray-500 text-sm">DESIGNER</span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-100 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6">Fusce pharetra eget augue ac condimentum. Fusce dictum ex mauris, porta semper mi malesuada dictum. Donec congue ipsum diam. Donec eu tellus laoreet, iaculis mi sit amet, ultricies nulla. Maecenas orci metus, gravida et sodales eget, varius nec nibh. Suspendisse eget lorem blandit, sodales est eget, efficitur erat. Pellentesque feugiat velit in ante tincidunt, sed fringilla dui dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sit amet ipsum viverra, bibendum odio vel, tempus arcu.</p>
                    <a className="inline-flex items-center">
                      <img alt="testimonial" src="https://dummyimage.com/110x110" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">Jane Doe</span>
                        <span className="text-gray-500 text-sm">DESIGNER</span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-100 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6">Testimonial 03.</p>
                    <a className="inline-flex items-center">
                      <img alt="testimonial" src="https://dummyimage.com/110x110" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">Jane Doe</span>
                        <span className="text-gray-500 text-sm">DESIGNER</span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-100 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6">Testimonial 04</p>
                    <a className="inline-flex items-center">
                      <img alt="testimonial" src="https://dummyimage.com/110x110" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">Jane Doe</span>
                        <span className="text-gray-500 text-sm">DESIGNER</span>
                      </span>
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </section>
        </div>

        <div className="my-10 py-24">
            <h2
              className="text-3xl font-medium title-font text-gray-900 mb-12 text-center"
            >
              Hospital Facilities
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 place-items-center">
                <img className="hover:opacity-75 transition ease-out duration-250 w-full" src="/400x400.svg" alt="hospital_pic_01"/>
                <img className="hover:opacity-75 transition ease-out duration-250 w-full" src="/400x400.svg" alt="hospital_pic_02"/>
                <img className="hover:opacity-75 transition ease-out duration-250 w-full" src="/400x400.svg" alt="hospital_pic_03"/>
                <img className="hover:opacity-75 transition ease-out duration-250 w-full" src="/400x400.svg" alt="hospital_pic_04"/>
                <img className="hover:opacity-75 transition ease-out duration-250 w-full" src="/400x400.svg" alt="hospital_pic_05"/>
                <img className="hover:opacity-75 transition ease-out duration-250 w-full" src="/400x400.svg" alt="hospital_pic_06"/>
                <img className="hover:opacity-75 transition ease-out duration-250 w-full" src="/400x400.svg" alt="hospital_pic_06"/>
                <img className="hover:opacity-75 transition ease-out duration-250 w-full" src="/400x400.svg" alt="hospital_pic_06"/>
                <div className="md:h-full w-full h-fit md:flex md:justify-center md:items-center">
                  <a href="#" className="hover:underline">
                    <h3 className="after:content-['...'] md:text-3xl text-2xl font-medium title-font text-gray-900 md:text-center">More</h3>
                  </a>
                </div>
            </div>
        </div>

        <div className="my-10" id="customer_reviews">
            <h2
              className="text-3xl font-medium title-font text-gray-900 mb-12 text-center"
            >
              Customer Reviews
            </h2>
            
            {/* Customer Review */}
            <div className="flex items-start my-12">
              <div className="flex-shrink-0">
                <div className="inline-block relative">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="/vite.svg" alt="Profile picture"/>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                  </div>
                  <svg className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/>
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <p className="flex items-baseline">
                  <span className="text-gray-600 font-bold">Customer A.</span>
                  <span className="ml-2 text-green-600 text-xs">Verified Patient</span>
                </p>
                <div className="flex items-center mt-1">
                  <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                </div>
                {/* <div className="flex items-center mt-4 text-gray-600">
                  <div className="flex items-center">
                    <span className="text-sm">Product Quality</span>
                    <div className="flex items-center ml-2">
                      <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      <svg className="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    <span className="text-sm">Purchasing Experience</span>
                    <div className="flex items-center ml-2">
                      <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      <svg className="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      <svg className="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    </div>
                  </div>
                </div> */}
                <div className="mt-3">
                  <span className="font-bold text-gray-900 dark:text-white">Good Hospital!</span>
                  <p className="mt-1 leading-6 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                  <Button variant='outline' className="flex items-center">
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z"/></svg>
                    <span className="ml-2">Share</span>
                  </Button>
                  <div className="flex items-center">
                    <span>Was this review helplful?</span>
                    <Button variant="ghost" className="flex items-center ml-6">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"/></svg>
                      <span className="ml-2">56</span>
                    </Button>
                    <Button variant="ghost" className="flex items-center ml-4">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z"/></svg>
                      <span className="ml-2">10</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>


            {/* Post Review */}
            <div className="p-4 mx-auto bg-white rounded-lg shadow-md max-w-4xl sm:p-6 grid grid-cols-1 lg:grid-cols-6 gap-6 my-12">
              <div className="lg:col-span-4 col-span-1">
                <form action="" method="POST" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Write a review
                  </h2>
                  <div className="flex justify-start items-center space-x-1 mb-4">
                    <input type="radio" id="5-stars" name="rating" value="5" className="hidden"/>
                    <label htmlFor="5-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                    <input type="radio" id="4-stars" name="rating" value="4" className="hidden"/>
                    <label htmlFor="4-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                    <input type="radio" id="3-stars" name="rating" value="3" className="hidden"/>
                    <label htmlFor="3-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                    <input type="radio" id="2-stars" name="rating" value="2" className="hidden"/>
                    <label htmlFor="2-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                    <input type="radio" id="1-star" name="rating" value="1" className="hidden"/>
                    <label htmlFor="1-star" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                  </div>
                  {/* <textarea id="review" name="review" rows={4} required={true} className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your review"></textarea> */}
                  <Textarea id="review" name="review" required={true} rows={4} placeholder="Type your message here." disabled />
                  <div className="text-right py-4">
                      <a href="#"><Button type="button" variant="default" className="focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-3">Login
                      to Post Review</Button></a>
                      {/* <Button type="submit" variant="default" className="focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-3">Submit</Button> */}
                  </div>
                </form>
              </div>
              <div className="lg:col-span-2 hidden lg:flex flex-col space-y-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                  <p className="ml-2 text-sm font-medium text-gray-900">0 out of 0</p>
                </div>
                <p className="text-sm font-medium text-gray-500">0 global ratings</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium hover:underline shrink-0">5 star</span>
                  <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                    <div className="h-4 bg-yellow-400 rounded" style={{width: "50%"}}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">0%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium hover:underline shrink-0">4 star</span>
                  <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                    <div className="h-4 bg-yellow-400 rounded" style={{width: "25%"}}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">0%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium hover:underline shrink-0">3 star</span>
                  <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                    <div className="h-4 bg-yellow-400 rounded" style={{width: "10%"}}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">0%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium hover:underline shrink-0">2 star</span>
                  <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                    <div className="h-4 bg-yellow-400 rounded" style={{width: "5%"}}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">0%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium hover:underline shrink-0">2 star</span>
                  <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                    <div className="h-4 bg-yellow-400 rounded" style={{width: "10%"}}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">0%</span>
                </div>
              </div>
            </div>



        </div>
      </div>
    </section>
    </>
  )
}

export default HospitalDetails
