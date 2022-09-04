import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './page.css'

const PageTwo = ({ formData, setFormData, checkFormInput, setPage, progressPercentage, setProgressPercentage }) => {

  const [issuedYear, setIssuedYear] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  // onchange function
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };


  useEffect(() => {

    checkFormInput();

  }, [issuedYear, expiryYear])


  // form sumbit function
  const submitHandle = () => {
    setFormData({
      fname: "",
      drivingNature: "",
      licenseType: "",
      place: "",
      licenseIssuedYear: "",
      licenseExpiryYear: ""
    })

    // alert from after click sumbit bitton
    alert("Form is successfully Submitted");

    // redirect home page
    setPage(0)

    // reset progress bar percentage
    setProgressPercentage(0)
  }


  return (
    <>
      <div className="pageContainer">
        <div className="pageWrapper">
          <p>Place Where Driving Licence was Issued</p>
          <div className="inputWrapper">
            <input
              name="place"
              placeholder='Enter Place Name'
              type="text"
              value={formData.place}
              onChange={handleChange}
            />
          </div>

          <p>Issued year of License</p>
          <div className='radioWapper'>
            <div className="inputWrapper" id="licenseIssuedYear"
              name="licenseIssuedYear"
              onChange={handleChange}
              value={formData.licenseIssuedYear = issuedYear}>
              <Dropdown selected={issuedYear} setSelected={setIssuedYear} initialValue={"Choose Issued Year of License"} />
            </div>
          </div>

          <p>Expired year of License</p>
          <div className='radioWapper'>
            <div className="inputWrapper"
              id="licenseExpiryYear"
              name="licenseExpiryYear"
              value={formData.licenseExpiryYear = expiryYear}
              onChange={handleChange}
            >
              <Dropdown selected={expiryYear} setSelected={setExpiryYear} initialValue={"Choose Expired Year of License"} />
            </div>
          </div>

        </div>
        <div className="button">
          <button onClick={() => setPage(0)}>Go back</button>
          {progressPercentage === 100 && <button onClick={submitHandle}>Submit</button>}
        </div>
      </div>
    </>
  );
};

export default PageTwo;
