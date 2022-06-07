import React from "react";

const Card = props => {
  return (
    // Individual Card content
    <div className="card">
      <h3 className="card-title">{props.cardData.cardTitle}</h3>

      <p className="card-code">{props.cardData.cardNumber}</p>

      {props.cardData.createdAtDate && (
        <p className="card-info-2">
          {`Created ${props.cardData.createdAtDate} | ${props.cardData.createdAtTime}`}
        </p>
      )}

      {props.cardData.validUntilDate && (
        <p className="card-info-2">
          {`Valid Until ${props.cardData.validUntilDate} | ${props.cardData.validUntilTime}`}
        </p>
      )}

      {props.cardData.submittedAtDate && (
        <p className="card-info-2">
          {`Submitted At ${props.cardData.submittedAtDate} | ${props.cardData.submittedAtTime}`}
        </p>
      )}

      <hr className="card-hr"></hr>
      <div className="card-btns">
        <button className="card-btn ">
          <i className="fa-solid fa-eye"></i> view
        </button>
        <button className="card-btn ">
          <i className="fa-solid fa-trash-can"></i> {props.cardData.operation}
        </button>
      </div>
    </div>
  );
};

export default Card;
