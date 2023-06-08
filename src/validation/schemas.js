import * as Yup from "yup";

const productSchema = Yup.object({
    name: Yup.string()
      .max(255, "Name must be 255 characters or less")
      .required("The name is required"),

    price: Yup.number()
      .required("The price is required")
      .min(0, "The price must be positive number"),
    quantity: Yup.number()
      .required("The quantity is required")
      .min(0, "The quantity must be positive number "),
    category: Yup.string()
      .max(255, "Category must be 255 characters or less")
      .required("The category id required"),
    description: Yup.string().required("The description is required"),
    img: Yup.string().required("image is required"),
});

export {
  productSchema,
}
