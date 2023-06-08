import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import userIcon from "../../images/icon/user.svg";
import emailIcon from "../../images/icon/email.svg";
import phoneIcon from "../../images/icon/phone.svg";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:8000";

const OrderDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [customer, setCustomer] = useState({});
  const [order, setOrder] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/order/${id}/items/`)
      .then((response) => {
        setItems(Object.values(response.data));
        const prices = items.map((item) => item.product.price * item.quantity);
        let tmp = prices.reduce((sum, price) => sum + price, 0);
        setTotalPrice(tmp);
      })
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8000/api/order/${id}`)
      .then((response) => {
        setOrder(response.data);
        const userId = response.data.user;
        axios
          .get(`http://localhost:8000/api/user/${userId}`)
          .then((secondResponse) => {
            setCustomer(secondResponse.data);
          });
      })
      .catch((error) => console.log(error));
  }, []);

  const acceptOrder = () => {
    const formData = new FormData();
    formData.append("state", "shipped");
    axios
      .patch(`http://localhost:8000/api/order/${id}`, formData)
      .then((response) => {
        console.log("order shipped successfully");
        navigate("/orders");
      })
      .catch((error) => console.log(error));
  };

  const refuseOrder = () => {
    const formData = new FormData();
    formData.append("state", "refused");
    axios
      .patch(`http://localhost:8000/api/order/${id}`, formData)
      .then((response) => {
        console.log("order refused successfully");
        navigate("/orders");
      })
      .catch((error) => console.log(error));
  };

  return (
    <DefaultLayout>
      <React.Fragment>
        <div className="mb-8 w-full rounded-md bg-white p-4 dark:bg-boxdark dark:text-white">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-bold">Order's items</h2>
            {order && (
              <div className="flex gap-4">
                <button
                  className="rounded-md bg-green-500 px-2 py-1 font-bold text-white"
                  onClick={(e) => acceptOrder()}
                >
                  Accept
                </button>
                <button
                  className="rounded-md bg-red-500 px-2 py-1 font-bold text-white"
                  onClick={(e) => refuseOrder()}
                >
                  Refuse
                </button>
              </div>
            )}
          </div>

          <div className="scrollbar-thumb mb-2 max-h-96 overflow-y-scroll p-4">
            <ul className="flex flex-col gap-8 p-4 ">
              {items.map((item, index) => {
                return (
                  <li
                    className="flex items-center justify-between gap-4"
                    key={index}
                  >
                    <div className="flex h-[96px] w-[96px] items-center justify-center">
                      <img src={baseUrl + item.product.img} alt="" />
                    </div>
                    <div>
                      <h1 className="font-bold text-black dark:text-white">
                        {item.product.name}
                      </h1>
                      <h2>{item.product.category.name}</h2>
                    </div>
                    <div>
                      <p className="font-bold">
                        {item.product.price}DZD X {item.quantity}
                      </p>
                    </div>
                    <div className="font-bold">
                      <p>{item.product.price * item.quantity}DZD</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-auto  h-[1px]  w-[94%] bg-[#E2E8F0] dark:bg-slate-700"></div>
          <div className="mr-4 flex justify-end p-4">
            <div className="w-2/5">
              <ul className="color-black flex flex-col  gap-2 font-semibold">
                <li className="flex items-center justify-between gap-8">
                  <p>Subtotal</p>
                  <p>{order.totalPrice}DZD</p>
                </li>
                <li className="flex items-center justify-between gap-8">
                  <p>Shipping</p>
                  <p>500.00DZD</p>
                </li>
                <li className="flex items-center justify-between gap-8">
                  <p>Tax</p>
                  <p>0.00DZD</p>
                </li>
                <li className="mt-2 flex items-center justify-between gap-8 font-extrabold">
                  <p>Total</p>
                  <p>{order.totalPrice + 500}DZD</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full rounded-md bg-white p-4 dark:bg-boxdark dark:text-white">
          <div className="p-4">
            <h2 className="text-xl font-bold ">Customer Details</h2>
          </div>
          <hr />
          <div>
            <ul className="flex flex-col gap-4 p-2">
              <li className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-1">
                  <div className="h-[24px] w-[24px]">
                    <img src={userIcon} alt="" />
                  </div>
                  <p className="mt-[2px]">{customer.name}</p>
                </div>
                <p>Algeria</p>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-1">
                  <div className="h-[24px] w-[24px]">
                    <img src={emailIcon} alt="" />
                  </div>
                  <p>{customer.email}</p>
                </div>
                <p>{customer.adress}</p>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-1">
                  <div className="h-[24px] w-[24px]">
                    <img src={phoneIcon} alt="" />
                  </div>
                  <p>{customer.phone}</p>
                </div>
                <p>Oreedoo</p>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    </DefaultLayout>
  );
};

export default OrderDetails;
