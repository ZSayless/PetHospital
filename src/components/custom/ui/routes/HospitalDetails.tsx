import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { MdLocalPhone, MdAccessTime, MdLocationPin} from "react-icons/md";


function HospitalDetails() {
  const { hospitalId } = useParams();
  const navigate = useNavigate();

  const hospitalList = [1,2,3,4,5,6,7,8,9,10,11,12];

  useEffect(() => {
    if (!hospitalId || !hospitalList.find((element) => (element.toString().toLowerCase().localeCompare(hospitalId.toLowerCase()) === 0))) {
        navigate("/notfound", {state: {message: "Hospital Id Not Found."}})
    }
  }, [])

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
              className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
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

        <div className="my-10">
            <h2
              className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
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
              Our Doctors
            </h2>
        </div>

        <div className="my-10">
            <h2
              className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
            >
              Customer Testimonials
            </h2>
        </div>

        <div className="my-10">
            <h2
              className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
            >
              Hospital Facilities
            </h2>
        </div>

        <div className="my-10" id="customer_reviews">
            <h2
              className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
            >
              Customer Reviews
            </h2>
        </div>
      </div>
    </section>
    </>
  )
}

export default HospitalDetails
