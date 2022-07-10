import React, { Component, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Modal from "./Modal";

function NewQuotation() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal closeModal={setOpenModal} />}
      <Topbar />

      <main>
        <div className="main">
          <Sidebar />
          <div className="form">
            <div className="form-title">New Quotation</div>
            <div className="content-container">Steps</div>
            <div className="content-container2">
              <div className="form-title">Add Profile</div>
              <p className="text">Select an option to add profile</p>
              <div className="popupbtn-container">
                <button
                  className="btn-addprofile"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <i class="fa-regular fa-address-book"></i>
                  From Existing Contact
                </button>
                <button className="btn-addprofile">
                  <i class="fa-solid fa-user-plus"></i>
                  Create new Contact
                </button>
              </div>
              {/* cards */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NewQuotation;
