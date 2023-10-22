import axios from "axios";
import React, { useEffect, useState } from "react";

const CardHistory = () => {
  let [card, setCard] = useState([]);
  let [transaction, setTransaction] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/card`)
      .then((response) => setCard(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/transaction`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div
        className="col-md-12 pb-2  2xl:box-content 2xl:h-fit my-4 bg-white xl:box-content xl:h-fit"
        style={{ borderRadius: "12px" }}
      >
        <div className="col-md-12 container pt-2" style={{ color: "#064061" }}>
          <p className="font-semibold text-2xl">My card</p>
        </div>
        <div className="row container-fluid mx-auto">
          <div
            className="col-md-12  border h-60 rounded-xl my-1"
            style={{ backgroundColor: "#4EB7F2" }}
          >
            <div className="mt-3 ml-4">
              <p className="text-white text-base">Name card</p>
              <p className="text-white font-medium text-xl">{card.name}</p>
            </div>
            <div className="mt-20 mr-4 text-right">
              <p className="text-white font-medium text-2xl">
                {`${card.nocard}`.replace(/\d{4}?(?=...)/g, "$& ")}
              </p>
              <p className="text-white">12/20 - {card.cvv}</p>
            </div>
          </div>
        </div>
        <div className="col-md-12 container mt-5" style={{ color: "#064061" }}>
          <div className="row">
            <div className="col-md-9">
              <p className="font-semibold text-2xl">Transaction History</p>
            </div>
            <div className="col-md-3 flex">
              <p className=" text-lg m-auto" style={{ color: "#4EB7F2" }}>
                See all
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 container mt-2" style={{ color: "#064061" }}>
          <p className="font-normal text-gray-400 text-base">13 April 2022</p>
        </div>
        <div className="container-fluid m-auto">
          {transaction.map((item, index) => (
            <div
              className="col-md-12 container mt-2 p-3 bg-slate-100 rounded-lg"
              style={{ color: "#064061" }}
            >
              <div className="row" key={index}>
                <div className="col-md-9">
                  <div className="col-md-12">
                    <p
                      className="text-normal font-semibold"
                      style={{ color: "#064061" }}
                    >
                      {item.iname}
                    </p>
                    <p className="font-normal text-gray-400 text-base">
                      13 April 2022
                    </p>
                  </div>
                </div>
                <div className="col-md-3 flex">
                  <p className="m-auto text-lg text-red-400 font-semibold">
                    ${item.iamount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardHistory;
