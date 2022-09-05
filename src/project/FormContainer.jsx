import { useEffect, useState } from "react";
import PageTwo from "./Page/PageTwo";
import PageOne from "./Page/PageOne";


function FormContainer() {

  // regex checking characters only in input field only which type is text
  const reg = /^([^0-9$%]*)$/;

  // progress bar useState
  const [progressPercentage, setProgressPercentage] = useState(0);

  // set page value after page last radio option
  const [page, setPage] = useState(0);

  // form data type
  const [formData, setFormData] = useState({
    fname: "",
    drivingNature: "",
    licenseType: "",
    place: "",
    licenseIssuedYear: "",
    licenseExpiryYear: ""
  });

  // checking valid inputs or not
  const checkFormInput = () => {

    // define variable and intilaize default value
    let count = 0;
    let totalInputs = 0;
    let totalInputPercentage = 0;

    Object.keys(formData).map((data) => {
      if (reg.test(formData[data]) && formData[data].length >= 3) {
        count++;
        // move to next page ofter last page is field
        if (+formData.licenseType > 0 && +formData.drivingNature > 0) {
          setPage(1)
        }
      } else {
        if (formData[data] !== "" && data !== "place" && data !== "fname") {
          count++;
        }
      }
      return totalInputs++;
    })

    // logic divided total inputs to 100 in from
    totalInputPercentage = 100 / totalInputs;

    // set progress percentage
    setProgressPercentage(totalInputPercentage * count);
  };

  // useEffect render every time after changing form input value
  useEffect(() => {

    // call checkforminput function
    checkFormInput();

  }, [formData]);

  return (
    <>
      <div className="progessDiv">
        {/* progressbar value */}
        <div
          className="progessValue"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <h4 className="form-heading">Let's get started!</h4>
      <p className="form-desc">Add your details [As per your registerd records]</p>
      {page > 0 ? (
        // second page
        <PageTwo formData={formData} setFormData={setFormData} checkFormInput={checkFormInput} setPage={setPage} page={page} progressPercentage={progressPercentage} setProgressPercentage={setProgressPercentage} />
      ) :
        // first page
        (<PageOne formData={formData} setFormData={setFormData} />)}
    </>
  );
}


export default FormContainer;