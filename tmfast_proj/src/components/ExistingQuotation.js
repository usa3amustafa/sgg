import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import BackToTop from './BackToTop'

export default function ExistingQuotation() {
  return (
    <>
      <Topbar />
      <main>
        <div className='main'>
          <Sidebar />
          <div className='form'>
            <div className='form-title'>Existing Quotation</div>
            <div className='personal-info form-el'>
              <div className='top-row'>
                <Link to='/NewQuotation'>
                  <button className='btn submit-btn'>New Quotation </button>
                </Link>

                <div className='search-bar'>
                  <input type='text' placeholder='search'></input>
                  <i className='fa-solid fa-magnifying-glass searchbar-icon'></i>
                </div>

                {/* This is a checkbox inside a dropdown or just a dropdown*/}
                <div className='searchbar2'>
                  <select id='cars' name='cars'>
                    <option value='volvo'>Name: A-Z</option>
                    <option value='saab'>Name: Z-A</option>
                    <option value='fiat'>Date Created: New to Old</option>
                    <option value='audi'>Date Created: Old to New</option>
                  </select>
                </div>
              </div>

              <div className='Exisiting-quotation-card'>
                <section className='quotation-card-container'>
                  <article className='quotation-card'>
                    <p className='quotation-card-name'>Name</p>
                    <p className='quotation-card-typename'>TM Atlas Wealth</p>
                    <p className='quotation-card-typecontent'>
                      Sum Assured: $50,00
                    </p>
                    <p className='quotation-card-typecontent'>Premium: $2000</p>
                    <p className='quotation-card-typecontent'>
                      Coverage Term: Life
                    </p>
                    <p className='quotation-card-typecontent'>
                      Premium Term: Life
                    </p>
                    <br></br>
                    <hr className='card-hr'></hr>
                    <div className='card-btns'>
                      <button className='card-btn '>
                        <i className='fa-solid fa-eye'></i> view
                      </button>
                      <button className='card-btn '>
                        <i className='fa-solid fa-trash-can'></i> delete
                        {/* {props.cardData.operation} */}
                      </button>
                    </div>
                  </article>

                  <article className='quotation-card'>
                    <p className='quotation-card-name'>Name</p>
                    <p className='quotation-card-typename'>TM Atlas Wealth</p>
                    <p className='quotation-card-typecontent'>
                      Sum Assured: $50,00
                    </p>
                    <p className='quotation-card-typecontent'>Premium: $2000</p>
                    <p className='quotation-card-typecontent'>
                      Coverage Term: Life
                    </p>
                    <p className='quotation-card-typecontent'>
                      Premium Term: Life
                    </p>
                    <br></br>
                    <hr className='card-hr'></hr>
                    <div className='card-btns'>
                      <button className='card-btn '>
                        <i className='fa-solid fa-eye'></i> view
                      </button>
                      <button className='card-btn '>
                        <i className='fa-solid fa-trash-can'></i> delete
                        {/* {props.cardData.operation} */}
                      </button>
                    </div>
                  </article>

                  <article className='quotation-card'>
                    <p className='quotation-card-name'>Name</p>
                    <p className='quotation-card-typename'>TM Atlas Wealth</p>
                    <p className='quotation-card-typecontent'>
                      Sum Assured: $50,00
                    </p>
                    <p className='quotation-card-typecontent'>Premium: $2000</p>
                    <p className='quotation-card-typecontent'>
                      Coverage Term: Life
                    </p>
                    <p className='quotation-card-typecontent'>
                      Premium Term: Life
                    </p>
                    <br></br>
                    <hr className='card-hr'></hr>
                    <div className='card-btns'>
                      <button className='card-btn '>
                        <i className='fa-solid fa-eye'></i> view
                      </button>
                      <button className='card-btn '>
                        <i className='fa-solid fa-trash-can'></i> delete
                        {/* {props.cardData.operation} */}
                      </button>
                    </div>
                  </article>

                  <article className='quotation-card'>
                    <p className='quotation-card-name'>Name</p>
                    <p className='quotation-card-typename'>TM Atlas Wealth</p>
                    <p className='quotation-card-typecontent'>
                      Sum Assured: $50,00
                    </p>
                    <p className='quotation-card-typecontent'>Premium: $2000</p>
                    <p className='quotation-card-typecontent'>
                      Coverage Term: Life
                    </p>
                    <p className='quotation-card-typecontent'>
                      Premium Term: Life
                    </p>
                    <br></br>
                    <hr className='card-hr'></hr>
                    <div className='card-btns'>
                      <button className='card-btn '>
                        <i className='fa-solid fa-eye'></i> view
                      </button>
                      <button className='card-btn '>
                        <i className='fa-solid fa-trash-can'></i> delete
                        {/* {props.cardData.operation} */}
                      </button>
                    </div>
                  </article>

                  <article className='quotation-card'>
                    <p className='quotation-card-name'>Name</p>
                    <p className='quotation-card-typename'>TM Atlas Wealth</p>
                    <p className='quotation-card-typecontent'>
                      Sum Assured: $50,00
                    </p>
                    <p className='quotation-card-typecontent'>Premium: $2000</p>
                    <p className='quotation-card-typecontent'>
                      Coverage Term: Life
                    </p>
                    <p className='quotation-card-typecontent'>
                      Premium Term: Life
                    </p>
                    <br></br>
                    <hr className='card-hr'></hr>
                    <div className='card-btns'>
                      <button className='card-btn '>
                        <i className='fa-solid fa-eye'></i> view
                      </button>
                      <button className='card-btn '>
                        <i className='fa-solid fa-trash-can'></i> delete
                      </button>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BackToTop />
    </>
  )
}
