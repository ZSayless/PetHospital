import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";


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
        Hospital XYZ {hospitalId} details
    </>
  )
}

export default HospitalDetails
