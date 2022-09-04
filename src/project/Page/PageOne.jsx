import './page.css'

const PageOne = ({ formData, setFormData }) => {
    
    // onchange function
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((values) => ({ ...values, [name]: value }));
    };

    return (
        <>


            <div className="pageContainer">
                <div className="pageWrapper">
                    <p>Name</p>
                    <div className="inputWrapper">
                        <input
                            name="fname"
                            type="text"
                            placeholder='Enter Your Name'
                            value={formData.fname}
                            onChange={handleChange}
                        />
                    </div>

                    <p>Nature of Driving Licence</p>
                    <div className='radioWapper'>
                        <div className="inputWrapper">
                            <input
                                type="radio"
                                id="private"
                                name="drivingNature"
                                value="1"
                                checked={+formData.drivingNature === 1}
                                onChange={handleChange}
                            />
                            <label htmlFor="private">Private</label>
                        </div>
                        <div className="inputWrapper">
                            <input
                                type="radio"
                                id="commercial"
                                name="drivingNature"
                                checked={+formData.drivingNature === 2}
                                value="2"
                                onChange={handleChange}
                            />
                            <label htmlFor="commercial">Commercial</label>
                        </div>
                    </div>




                    <p>Type of Previous Driving Licence</p>
                    <div className='radioWapper'>
                        <div className="inputWrapper">
                            <input
                                type="radio"
                                id="paper"
                                name="licenseType"
                                value="1"
                                checked={+formData.licenseType === 1}
                                onChange={handleChange}
                            />
                            <label htmlFor="paper">Paper Driving License</label>
                        </div>
                        <div className='inputWrapper'>
                            <input
                                checked={+formData.licenseType === 2}
                                type="radio"
                                id="smart"
                                name="licenseType"
                                value="2"
                                onChange={handleChange}
                            />
                            <label htmlFor="smart">Smart Driving License</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageOne;
