import FilePicker from "../../components/FilePicker";
import DefaultLayout from "../../layout/DefaultLayout";
import Gallery from "../../components/Gallery";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { productSchema } from "../../validation/schemas";

import { useFormik } from "formik";
import { useEffect, useState } from "react";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/category/", {
        headers: {},
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      category: "",
      description: "",
      img: null,
    },

    validationSchema: productSchema,
    onSubmit: (values) => {
      addProduct(values);
    },
  });

  const addProduct = (data) => {
    const formData = new FormData();
    formData.append("img", data.img);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("quantity", data.quantity);
    formData.append("description", data.description);
    axios
      .post("http://localhost:8000/api/productAdd/", formData)
      .then((response) => {
        console.log("Product added successfully:", response.data);
        navigate("/products");
      })
      .catch((error) => {
        console.log("Error adding product:", error);
      });
  };
  return (
    <div>
      <DefaultLayout>
        <form
          action=""
          className="flex flex-col gap-y-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex items-center justify-between gap-8">
            <div className="w-1/2">
              <div>
                <label
                  className="mb-3 block font-extrabold text-black dark:text-white"
                  htmlFor="name"
                >
                  {formik.errors.name && formik.touched.name ? (
                    <span className="text-red-500">{formik.errors.name}</span>
                  ) : (
                    "Name"
                  )}
                </label>
                <input
                  id="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Ex : Airpods"
                  value={formik.values.name}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label
                  className="mb-3 block font-extrabold text-black dark:text-white"
                  htmlFor="price"
                >
                  {formik.errors.price && formik.touched.price ? (
                    <span className="text-red-500">{formik.errors.price}</span>
                  ) : (
                    "Price"
                  )}
                </label>
                <input
                  id="price"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                  placeholder="Ex : 3000"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="w-1/2">
              <div>
                <label
                  htmlFor="category"
                  className="mb-3 block font-extrabold text-black dark:text-white"
                >
                  {formik.errors.category && formik.touched.category ? (
                    <span className="text-red-500">
                      {formik.errors.category}
                    </span>
                  ) : (
                    "Category"
                  )}
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z"
                          fill="#637381"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z"
                          fill="#637381"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <select
                    id="category"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => {
                      return (
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                  <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label
                  className="mb-3 block font-extrabold text-black dark:text-white"
                  htmlFor="quantity"
                >
                  {formik.errors.quantity && formik.touched.quantity ? (
                    <span className="text-red-500">
                      {formik.errors.quantity}
                    </span>
                  ) : (
                    "Quantity"
                  )}
                </label>
                <input
                  id="quantity"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quantity}
                  placeholder="Ex : 120"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label className="mb-3 block font-extrabold text-black dark:text-white">
                {formik.errors.description && formik.touched.description ? (
                  <span className="text-red-500">
                    {formik.errors.description}
                  </span>
                ) : (
                  "Description"
                )}
              </label>
              <textarea
                rows="6"
                disabled=""
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ex : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos hic aperiam mollitia officia aut ex iusto voluptatum! Accusantium mollitia cum commodi asperiores laborum, adipisci praesentium beatae recusandae dolorem architecto officia."
                value={formik.values.description}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5  font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
              ></textarea>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center">
              {!formik.values.img && <FilePicker formik={formik} />}
              {formik.values.img && <Gallery formik={formik} />}
            </div>
            {formik.errors.img && formik.touched.img && (
              <span className="m-auto block w-fit font-bold text-red-500">
                {formik.errors.img}
              </span>
            )}
          </div>

          {/* actions */}
          <div className="my-8 flex items-center justify-center font-bold">
            <button
              className="mx-2 grow rounded-md bg-green-500 py-2 px-20 text-white"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </DefaultLayout>
    </div>
  );
};

export default AddProduct;
