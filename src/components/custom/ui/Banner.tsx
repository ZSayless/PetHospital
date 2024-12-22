import Slider from "react-slick";


export default function Component() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
      };

    return (
        <div className="overflow-hidden py-6">
            <Slider {...settings}>
                <PlaceHolder />

                <PlaceHolder />

                <PlaceHolder />

                <PlaceHolder />

                <PlaceHolder />

                <PlaceHolder />
            </Slider>
        </div>
    )
}

function PlaceHolder () {
    return (
        <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600">
                <rect x="2" y="2" width="1196" height="596" style={{fill:"#DEDEDE", stroke:"#555555", strokeWidth: 2}}/>
                <text x="50%" y="50%" fontSize="18" textAnchor="middle" alignmentBaseline="middle" fontFamily="monospace, sans-serif" fill="#555555">1200×600</text>
            </svg>
        </div>
    )
}