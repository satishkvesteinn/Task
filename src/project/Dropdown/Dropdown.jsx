import React, { useState } from 'react';
import './dropdown.css'

const Dropdown = ({selected, setSelected, initialValue}) => {

    // set dropdwon status in boolean
    const [isActive, setIsActive] = useState(false)

    // stattic dropdown data 
    const data = [
        "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"
    ]
    return (
        <div className='dropdown'>
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
                {selected || initialValue}
                <i class="bi bi-chevron-down"></i>
            </div>
            {
                isActive && (
                    <div className="dropdown-content">
                        {
                            data.map((option, index) => {
                                return (
                                    <div key={index} className="dropdown-item" onClick={() => {
                                        setSelected(option)

                                        // set dropdwon status false 
                                        setIsActive(false)
                                    }
                                    }
                                    >{option}</div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Dropdown