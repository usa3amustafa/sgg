import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import BackToTop from './BackToTop'

export class ExistingContact extends Component {
  render() {
    return (
      <>
        <Topbar />
        <main>
          <div className='main'>
            <Sidebar />
            <div className='form'>
              <div className='form-title'>Existing Contact</div>
              <div className='personal-info form-el'>
                <div className='top-row'>
                  <Link to='/ContactForm'>
                    <button className='btn submit-btn'>Create Proposal</button>
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

                {/* Cards */}

                <div className='Exisiting-quotation-card'>
                  <section className='quotation-card-container'>
                    <article className='quotation-card'>
                      <p className='quotation-card-name'>Ajay Matthew</p>
                      <p className='quotation-card-typecontent'>35,Male</p>
                      <p className='quotation-card-typecontent'>Smoker</p>
                      <p className='quotation-card-typecontent'>Proposals: 1</p>
                      <br></br>
                      <hr className='card-hr'></hr>
                      <div className='card-btns'>
                        <button className='card-btn '>
                          <i class='fa-solid fa-pen'></i> edit
                        </button>
                        <button className='card-btn '>
                          <i className='fa-solid fa-trash-can'></i> delete
                          {/* {props.cardData.operation} */}
                        </button>
                      </div>
                    </article>

                    <article className='quotation-card'>
                      <p className='quotation-card-name'>Anne Wong</p>
                      <p className='quotation-card-typecontent'>21, Female</p>
                      <p className='quotation-card-typecontent'>Non-smoker</p>
                      <p className='quotation-card-typecontent'>Proposals: 2</p>
                      <br></br>
                      <hr className='card-hr'></hr>
                      <div className='card-btns'>
                        <button className='card-btn '>
                          <i class='fa-solid fa-pen'></i> edit
                        </button>
                        <button className='card-btn '>
                          <i className='fa-solid fa-trash-can'></i> delete
                          {/* {props.cardData.operation} */}
                        </button>
                      </div>
                    </article>

                    <article className='quotation-card'>
                      <p className='quotation-card-name'>Elaine Wong</p>
                      <p className='quotation-card-typecontent'>27,Female</p>
                      <p className='quotation-card-typecontent'>Non-smoker</p>
                      <p className='quotation-card-typecontent'>Proposals: 1</p>
                      <br></br>
                      <hr className='card-hr'></hr>
                      <div className='card-btns'>
                        <button className='card-btn '>
                          <i class='fa-solid fa-pen'></i> edit
                        </button>
                        <button className='card-btn '>
                          <i className='fa-solid fa-trash-can'></i> delete
                        </button>
                      </div>
                    </article>

                    <article className='quotation-card'>
                      <p className='quotation-card-name'>Joy Joseph</p>
                      <p className='quotation-card-typecontent'>15,Male</p>
                      <p className='quotation-card-typecontent'>smoker</p>
                      <p className='quotation-card-typecontent'>Proposals: 1</p>
                      <br></br>
                      <hr className='card-hr'></hr>
                      <div className='card-btns'>
                        <button className='card-btn '>
                          <i class='fa-solid fa-pen'></i> edit
                        </button>
                        <button className='card-btn '>
                          <i className='fa-solid fa-trash-can'></i> delete
                        </button>
                      </div>
                    </article>
                    <article className='quotation-card'>
                      <p className='quotation-card-name'>Ajay Matthew</p>
                      <p className='quotation-card-typecontent'>35,Male</p>
                      <p className='quotation-card-typecontent'>smoker</p>
                      <p className='quotation-card-typecontent'>Proposals: 1</p>
                      <br></br>
                      <hr className='card-hr'></hr>
                      <div className='card-btns'>
                        <button className='card-btn '>
                          <i class='fa-solid fa-pen'></i> edit
                        </button>
                        <button className='card-btn '>
                          <i className='fa-solid fa-trash-can'></i> delete
                          {/* {props.cardData.operation} */}
                        </button>
                      </div>
                    </article>
                    <article className='quotation-card'>
                      <p className='quotation-card-name'>Ajay Matthew</p>
                      <p className='quotation-card-typecontent'>35,Male</p>
                      <p className='quotation-card-typecontent'>smoker</p>
                      <p className='quotation-card-typecontent'>Proposals: 1</p>
                      <br></br>
                      <hr className='card-hr'></hr>
                      <div className='card-btns'>
                        <button className='card-btn '>
                          <i class='fa-solid fa-pen'></i> edit
                        </button>
                        <button className='card-btn '>
                          <i className='fa-solid fa-trash-can'></i> delete
                          {/* {props.cardData.operation} */}
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
}

export default ExistingContact
