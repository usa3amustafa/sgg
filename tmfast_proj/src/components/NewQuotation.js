import React, { Component, useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Modal from './Modal'
import BackToTop from './BackToTop'

function NewQuotation() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {openModal && <Modal closeModal={setOpenModal} />}
      <Topbar />

      <main>
        <div className='main'>
          <Sidebar />
          <div className='form'>
            <div className='form-title'>New Quotation</div>
            <div className='content-container steps'>
              <div className='step step-one active-step'>
                1<p className='step-desc active-step-desc'>Assured Details</p>
              </div>
              <div className='progress-bar'></div>
              <div className='step step-two'>
                2<p className='step-desc'>Product Details</p>
              </div>

              <div className='progress-bar'></div>
              <div className='step step-three'>
                3 <p className='step-desc'>Premium Summary</p>
              </div>
            </div>
            <div className='content-container2'>
              <div className='form-title'>Add Profile</div>
              <p className='text'>Select an option to add profile</p>
              <div className='popupbtn-container'>
                <button
                  className='btn-addprofile'
                  onClick={() => {
                    setOpenModal(true)
                  }}
                >
                  <i class='fa-regular fa-address-book'></i>
                  From Existing Contact
                </button>
                <button className='btn-addprofile'>
                  <i class='fa-solid fa-user-plus'></i>
                  Create new Contact
                </button>
              </div>
              {/* cards */}
              <div className='cards-container'>
                <div className='nq-card'>
                  <h2 className='card-title'>Nay King</h2>

                  <select name='' id='' className='card-selectlist'>
                    <option value=''>Prosper and Life Assured</option>
                    <option value=''>Prosper</option>
                    <option value=''>Life Assured</option>
                  </select>

                  <div className='card-attr'>
                    <p className='card-id'>ANB21</p>
                    <p className='card-property'>Smoker</p>
                  </div>

                  <div class='card-btns'>
                    <button class='card-btn '>
                      <i class='fa-solid fa-eye'></i> view
                    </button>
                    <button class='card-btn '>
                      <i class='fa-solid fa-trash-can'></i> delete
                    </button>
                  </div>
                </div>

                <div className='nq-card'>
                  <h2 className='card-title'>Nay King</h2>

                  <select name='' id='' className='card-selectlist'>
                    <option value=''>Prosper and Life Assured</option>
                    <option value=''>Prosper</option>
                    <option value=''>Life Assured</option>
                  </select>

                  <div className='card-attr'>
                    <p className='card-id'>ANB21</p>
                    <p className='card-property'>Smoker</p>
                  </div>

                  <div class='card-btns'>
                    <button class='card-btn '>
                      <i class='fa-solid fa-eye'></i> view
                    </button>
                    <button class='card-btn '>
                      <i class='fa-solid fa-trash-can'></i> delete
                    </button>
                  </div>
                </div>

                <div className='nq-card'>
                  <h2 className='card-title'>Nay King</h2>

                  <select name='' id='' className='card-selectlist'>
                    <option value=''>Prosper and Life Assured</option>
                    <option value=''>Prosper</option>
                    <option value=''>Life Assured</option>
                  </select>

                  <div className='card-attr'>
                    <p className='card-id'>ANB21</p>
                    <p className='card-property'>Smoker</p>
                  </div>

                  <div class='card-btns'>
                    <button class='card-btn '>
                      <i class='fa-solid fa-eye'></i> view
                    </button>
                    <button class='card-btn '>
                      <i class='fa-solid fa-trash-can'></i> delete
                    </button>
                  </div>
                </div>

                <div className='nq-card'>
                  <h2 className='card-title'>Nay King</h2>

                  <select name='' id='' className='card-selectlist'>
                    <option value=''>Prosper and Life Assured</option>
                    <option value=''>Prosper</option>
                    <option value=''>Life Assured</option>
                  </select>

                  <div className='card-attr'>
                    <p className='card-id'>ANB21</p>
                    <p className='card-property'>Smoker</p>
                  </div>

                  <div class='card-btns'>
                    <button class='card-btn '>
                      <i class='fa-solid fa-eye'></i> view
                    </button>
                    <button class='card-btn '>
                      <i class='fa-solid fa-trash-can'></i> delete
                    </button>
                  </div>
                </div>
              </div>

              <div className='next-btn-container'>
                <button class='btn submit-btn next-btn'>Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BackToTop />
    </>
  )
}

export default NewQuotation
