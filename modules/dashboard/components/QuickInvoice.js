import React, { useEffect, useState } from "react";
import profilpicture from "@/public/Frame.svg";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

const QuickInvoice = () => {
  let [transaction, setTransaction] = useState([]);
  let [transactions, setTransactions] = useState({
    cname: "",
    cemail: "",
    iname: "",
    iamount: "",
  });

  let handleChange = (e) => {
    setTransactions({
      ...transactions,
      [e.target.name]: e.target.value,
    });
  };

  const Router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/transaction`, transactions)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/transaction`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div
        className="col-md-12  h-3/6 bg-white"
        style={{ borderRadius: "12px" }}
      >
        <div className="col-md-12 container pt-2 " style={{ color: "#064061" }}>
          <p className="font-semibold text-2xl ">Quick Invoice</p>
        </div>
        <div
          className="col-md-12 container my-3  "
          style={{ color: "#064061" }}
        >
          <p className="font-normal text-base ">Latest Transaction</p>
        </div>

        <div
          className="col-md-12 container  gap-3"
          style={{ color: "#064061" }}
        >
          <ul className="flex flex-row overflow-y-auto gap-7 scroll-smooth">
            {transaction.map((item) => (
              <li key={item.id}>
                <div className="row box-content py-1 w-56 h-12 rounded bg-slate-100">
                  <div className="col-md-12 container pe-8 ps-8">
                    <div className="row">
                      <div className="col-md-3 d-flex align-item-center justify-content-center p-0">
                        <Image
                          src={profilpicture}
                          width={42}
                          height={42}
                          alt="profpic"
                        />
                      </div>
                      <div className="col-md-9 p-0">
                        <div className="col-md-12 m-0">
                          <p className="text-base font-semibold text-cyan-950">
                            {item.cname}
                          </p>
                        </div>
                        <div className="col-md-12">
                          <p className="text-sm font-normal text-gray-400">
                            {item.cemail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className="col-md-12 container my-3"
            style={{ color: "#064061" }}
          >
            <div className="row d-flex justify-content-between">
              <div className="  col-md-5">
                <label className="font-semibold">Customer Name</label>
                <input
                  class="form-control h-14"
                  name="cname"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                  placeholder="Type customer name"
                  style={{
                    backgroundColor: "#FAFAFA",
                    border: "1px transparent",
                  }}
                />
              </div>
              <div className="  col-md-5">
                <label className="font-semibold">Customer Email</label>
                <input
                  class="form-control h-14"
                  aria-describedby="emailHelp"
                  placeholder="Type customer email"
                  style={{
                    backgroundColor: "#FAFAFA",
                    border: "1px transparent",
                  }}
                  name="cemail"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-12 container my-3"
            style={{ color: "#064061" }}
          >
            <div className="row d-flex justify-content-between">
              <div className="  col-md-5">
                <label className="font-semibold">Item name</label>
                <input
                  class="form-control h-14"
                  aria-describedby="emailHelp"
                  placeholder="Type item name"
                  style={{
                    backgroundColor: "#FAFAFA",
                    border: "1px transparent",
                  }}
                  name="iname"
                  onChange={handleChange}
                />
              </div>
              <div className="  col-md-5">
                <label className="font-semibold">Item amount</label>
                <input
                  class="form-control h-14"
                  aria-describedby="emailHelp"
                  placeholder="Type item amount "
                  style={{
                    backgroundColor: "#FAFAFA",
                    border: "1px transparent",
                  }}
                  name="iamount"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 container my-3">
            <div className="row d-flex justify-content-center ">
              <div className=" col-md-5">
                <button
                  className=" bg-transparent w-60 h-16 rounded-xl font-semibold"
                  style={{ color: "#4EB7F2" }}
                >
                  Add more details
                </button>
              </div>
              <div className="  col-md-5">
                <button
                  type="submit"
                  onClick={() => Router.reload()}
                  className="w-60 h-16 rounded-xl font-semibold text-white"
                  style={{ backgroundColor: "#4EB7F2" }}
                >
                  Send money
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default QuickInvoice;
