import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const Form = () => {
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(true)
  const [isContactDetailsOpen, setIsContactDetailsOpen] = useState(true)
  const [isNatDetailsOpen, setIsNatDetailsOpen] = useState(true)
  const [isEmpDetOpen, setIsEmpDetOpen] = useState(true)
  const [isResAddOpen, setIsResAddOpen] = useState(true)

  const handlePersonalInfo = currIsOpen => setIsPersonalInfoOpen(!currIsOpen)
  const handleContactDetails = currIsOpen =>
    setIsContactDetailsOpen(!currIsOpen)
  const handleNatDet = currIsOpen => setIsNatDetailsOpen(!currIsOpen)
  const handleEmpDet = currIsOpen => setIsEmpDetOpen(!currIsOpen)
  const handleResDet = currIsOpen => setIsResAddOpen(!currIsOpen)

  return (
    <>
      <Topbar />

      <main>
        <div className='main'>
          <Sidebar />

          <div className='form'>
            <div className='form-title'>Contact Details</div>

            {/* personal info */}
            <div className='personal-info form-el'>
              <form action='' className='personal-info-form form-component'>
                <h2
                  className='form-title'
                  onClick={() => handlePersonalInfo(isPersonalInfoOpen)}
                >
                  <i
                    className={`fa-solid fa-chevron-up dropdown-btn ${
                      isPersonalInfoOpen && 'rotate'
                    }`}
                  ></i>{' '}
                  Personal Info
                </h2>
                <div
                  className={`form-content ${
                    isPersonalInfoOpen ? 'show' : 'hidden'
                  }`}
                >
                  <p className='form-element'>
                    <label htmlFor='salutation'>Salutation *</label>
                    <br />
                    <select name='salutation' id='salutation'>
                      <option value='mr'>Mr.</option>
                      <option value='mr'>Miss.</option>
                      <option value='mr'>Mrs.</option>
                    </select>
                  </p>
                  <p className='form-element radio-element'>
                    <label htmlFor=''>Gender *</label>
                    <br />
                    <span className='radio'>
                      <input
                        type='radio'
                        name='gender'
                        id='male'
                        className='radio-input'
                      />
                      <label htmlFor='male' className='radio-label'>
                        Male
                      </label>
                      <input
                        type='radio'
                        name='gender'
                        id='female'
                        className='radio-input'
                      />
                      <label htmlFor='female' className='radio-label'>
                        Female
                      </label>
                    </span>
                  </p>

                  <p className='form-element'>
                    <label htmlFor='surname'>Surname *</label>
                    <input type='text' id='surname' />
                  </p>
                  <p className='form-element'>
                    <label htmlFor='givenName'>Given Name *</label>
                    <input type='text' id='givenName' />
                  </p>
                  <p className='form-element radio-element'>
                    <label htmlFor=''>Smoker *</label>
                    <br />
                    <span className='radio'>
                      <input
                        type='radio'
                        name='smoker'
                        id='yes'
                        className='radio-input'
                      />
                      <label htmlFor='yes' className='radio-label'>
                        Yes
                      </label>
                      <input
                        type='radio'
                        name='smoker'
                        id='no'
                        className='radio-input'
                      />
                      <label htmlFor='no' className='radio-label'>
                        No
                      </label>
                    </span>
                  </p>

                  {/* Need Help !!!  */}
                  {/* Create a divclass use flexbox */}
                  <p className='form-element dobanb'>
                    <div className='dob'>
                      <label htmlFor='dob'>Date of birth *</label>
                      <input type='date' id='dob' />
                    </div>
                    <div className='anb'>
                      <label htmlFor='and'>ANB *</label>
                      <input type='number' name='' id='' />
                    </div>
                  </p>
                </div>
              </form>
              <div className='border'></div>
            </div>

            {/* contact details */}
            <div className='contact-details form-el'>
              <form action='' className='contact-details-form form-component'>
                <h2
                  className='form-title'
                  onClick={() => handleContactDetails(isContactDetailsOpen)}
                >
                  <i
                    className={`fa-solid fa-chevron-up dropdown-btn ${
                      isContactDetailsOpen && 'rotate'
                    }`}
                  ></i>{' '}
                  Contact Details
                </h2>
                <div
                  className={`form-content ${
                    isContactDetailsOpen ? 'show' : 'hidden'
                  }`}
                >
                  <p className='form-element'>
                    <label htmlFor='email'>Email *</label>
                    <input type='email' id='email' />
                  </p>
                  <p className='form-element'>
                    <label htmlFor='home-number'>Home Number *</label>
                    <span className='phone-number'>
                      <select name='country-code' id='country-code'>
                        <option value='+65'>+65</option>
                      </select>

                      <input type='number' name='' id='' />
                    </span>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='mobile-number'>Mobile Number *</label>
                    <span className='phone-number'>
                      <select name='country-code' id='country-code'>
                        <option value='+65'>+65</option>
                      </select>

                      <input type='number' name='' id='' />
                    </span>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='office-number'>Office Number *</label>
                    <span className='phone-number'>
                      <select name='country-code' id='country-code'>
                        <option value='+65'>+65</option>
                      </select>

                      <input type='number' name='' id='' />
                    </span>
                  </p>
                </div>
              </form>
              <div className='border'></div>
            </div>

            {/* nationality details */}
            <div className='nationality-details form-el'>
              <form
                action=''
                className='nationality-details-form form-component'
              >
                <h2
                  className='form-title'
                  onClick={() => handleNatDet(isNatDetailsOpen)}
                >
                  <i
                    className={`fa-solid fa-chevron-up dropdown-btn ${
                      isNatDetailsOpen && 'rotate'
                    }`}
                  ></i>{' '}
                  Nationality Details
                </h2>
                <div
                  className={`form-content ${
                    isNatDetailsOpen ? 'show' : 'hidden'
                  }`}
                >
                  <p className='form-element'>
                    <label htmlFor='nationality'>Nationality *</label>
                    <br />
                    <select
                      name='nationality'
                      id='nationality'
                      className='w-100'
                    >
                      <option value='singapore'>Singapore</option>
                    </select>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='cob'>Country of birth </label>
                    <br />
                    <select name='cob' id='cob' className='w-100'>
                      <option value='singapore'>Singapore</option>
                    </select>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='identity-type'>Identity type *</label>
                    <br />
                    <select name='nric' id='identity-type' className='w-100'>
                      <option value='nric'>NRIC</option>
                    </select>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='nationality'>Nationality *</label>
                    <br />
                    <select name='salutation' id='salutation' className='w-100'>
                      <option value='singapore'>Singapore</option>
                    </select>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='passport-number'>NRIC/Passport no.</label>
                    <input type='number' id='passport-number' />
                  </p>
                </div>
              </form>
              <div className='border'></div>
            </div>

            {/* employment details */}
            <div className='employment-details form-el'>
              <form
                action=''
                className='employment-details-form form-component'
              >
                <h2
                  className='form-title'
                  onClick={() => handleEmpDet(isEmpDetOpen)}
                >
                  <i
                    className={`fa-solid fa-chevron-up dropdown-btn ${
                      isEmpDetOpen && 'rotate'
                    }`}
                  ></i>{' '}
                  Employment Details
                </h2>
                <div
                  className={`form-content ${isEmpDetOpen ? 'show' : 'hidden'}`}
                >
                  <p className='form-element'>
                    <label htmlFor='occupation'>Occupation</label>
                    <br />
                    <select name='occupation' id='occupation' className='w-100'>
                      <option value=''></option>
                    </select>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='employment-status'>Employment Status</label>
                    <br />
                    <select
                      name='employment-status'
                      id='employment-status'
                      className='w-100'
                    >
                      <option value=''></option>
                    </select>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='nature-of-business'>
                      Nature of business
                    </label>
                    <br />
                    <select
                      name='nature-of-business'
                      id='nature-of-business'
                      className='w-100'
                    >
                      <option value=''></option>
                    </select>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='name-of-company'>Name of company</label>
                    <input type='text' id='name-of-company' />
                  </p>
                  <p className='form-element'>
                    <label htmlFor='name-of-business'>Name of business</label>
                    <input type='text' id='name-of-business' />
                  </p>
                </div>
              </form>
              <div className='border'></div>
            </div>

            {/* residential address */}
            <div className='residential-details form-el'>
              <form action='' className='personal-info-form form-component'>
                <h2
                  className='form-title'
                  onClick={() => handleResDet(isResAddOpen)}
                >
                  <i
                    className={`fa-solid fa-chevron-up dropdown-btn ${
                      isResAddOpen && 'rotate'
                    }`}
                  ></i>{' '}
                  Residential address
                </h2>
                <div
                  className={`form-content ${isResAddOpen ? 'show' : 'hidden'}`}
                >
                  <p className='form-element'>
                    <label htmlFor='country'>Country</label>
                    <br />
                    <select name='country' id='country' className='w-100'>
                      <option value='singapore'>Singapore</option>
                    </select>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='address-line-1'>Address line 1</label>
                    <br />
                    <input
                      type='text'
                      name='address-line-1'
                      id='address-line-1'
                    />
                  </p>
                  <p className='form-element'>
                    <label htmlFor='postal-code'>Postal code</label>
                    <br />
                    <select
                      name='postal-code'
                      id='postal-code'
                      className='w-100'
                    >
                      <option value='singapore'>NRIC</option>
                    </select>
                  </p>
                  <p className='form-element'>
                    <label htmlFor='address-line-2'>Address line 2</label>
                    <br />
                    <input
                      type='text'
                      name='address-line-2'
                      id='address-line-2'
                    />
                  </p>
                  <p className='form-element'>
                    <label htmlFor='unit-number'>Unit number</label>
                    <br />
                    <input type='number' name='unit-number' id='unit-number' />
                  </p>
                  <p className='form-element'>
                    <label htmlFor='address-line-3'>Address line 3</label>
                    <br />
                    <input
                      type='text'
                      name='address-line-3'
                      id='address-line-3'
                    />
                  </p>
                </div>
              </form>
              <div className='border'></div>
            </div>

            {/* submit-btn */}
            <div className='form-el submit'>
              <button className='btn submit-btn'>Submit</button>
            </div>
            <footer className='dashboard-footer'>
              © 2022 Tokio Marine Life Insurance Singapore Ltd. (Company Reg.
              No. 19480005D)
            </footer>
          </div>
        </div>
      </main>
    </>
  )
}

export default Form
