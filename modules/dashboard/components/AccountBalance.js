import React, { useEffect, useState } from "react";
import { ArrowRight2, CardReceive, CardSend, Moneys } from "iconsax-react";
import axios from "axios";

const AccountBalance = () => {
  let [balance, setBalance] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/balance`)
      .then((response) => {
        setBalance(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div
        className="col-md-12 pb-2  2xl:box-content 2xl:h-fit my-4 bg-white xl:box-content xl:h-fit"
        style={{ borderRadius: "12px" }}
      >
        <div className="col-md-12 container pt-2" style={{ color: "#064061" }}>
          <p className="font-semibold text-2xl">All Expenses</p>
        </div>
        <div class="grid gap-4 grid-cols-3 container my-2 ">
          <>
            <div
              className="2xl:box-content  rounded-xl  "
              style={{ backgroundColor: "#4EB7F2" }}
            >
              <div className="box-content inline-flex 2xl:space-x-20 xl:space-x-0 p-3 d-flex justify-content-between">
                <div
                  className="box-content h-20 w-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <Moneys size="34" color="#ffffff" />
                </div>
                <div className="box-content flex items-center justify-center">
                  <ArrowRight2 size="32" color="#ffffff" />
                </div>
              </div>
              <div className="box-content inline-flex space-x-20 p-3">
                <div class="flex flex-col gap-y-2">
                  <div>
                    <p className="text-lg text-white font-semibold">Balance</p>
                    <p className="text-sm text-white">April 2022</p>
                  </div>
                  <div className="xl:text-3xl lg:text-2xl  text-white font-semibold">
                    ${balance.balance}
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:box-content border  rounded-xl xl:box-content ">
              <div className="box-content inline-flex 2xl:space-x-20 xl:space-x-0 p-3 d-flex justify-content-between">
                <div
                  className="box-content h-20 w-20  rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <CardReceive size="34" color="#4EB7F2" />
                </div>
                <div className="box-content flex items-center justify-center">
                  <ArrowRight2 size="32" color="#064061" />
                </div>
              </div>
              <div className="box-content inline-flex space-x-20 p-3">
                <div class="flex flex-col gap-y-2">
                  <div>
                    <p
                      className="text-lg  font-semibold"
                      style={{ color: "#064061" }}
                    >
                      Income
                    </p>
                    <p className="text-sm " style={{ color: "#AAAAAA" }}>
                      April 2022
                    </p>
                  </div>
                  <div
                    className="xl:text-3xl lg:text-2xl  font-semibold "
                    style={{ color: "#4EB7F2" }}
                  >
                    ${balance.income}
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:box-content border  rounded-xl xl:box-content ">
              <div className="box-content inline-flex 2xl:space-x-20 xl:space-x-0 p-3 d-flex justify-content-between">
                <div
                  className="box-content h-20 w-20  rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <CardSend size="34" color="#4EB7F2" />
                </div>
                <div className="box-content flex items-center justify-center">
                  <ArrowRight2 size="32" color="#064061" />
                </div>
              </div>
              <div className="box-content inline-flex space-x-20 p-3">
                <div class="flex flex-col gap-y-2">
                  <div>
                    <p
                      className="text-lg  font-semibold"
                      style={{ color: "#064061" }}
                    >
                      Expenses
                    </p>
                    <p className="text-sm " style={{ color: "#AAAAAA" }}>
                      April 2022
                    </p>
                  </div>
                  <div
                    className="xl:text-3xl lg:text-2xl  font-semibold"
                    style={{ color: "#4EB7F2" }}
                  >
                    ${balance.expenses}
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default AccountBalance;
