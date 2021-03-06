// Title: CheckOut component
// Details: Form for checking out an order.
// Author: raadu

// Dependencies
import { useForm } from "react-hook-form";
import { Fade } from 'react-reveal';
import CheckOutStyle from "./CheckOut.module.scss";

const CheckOut = ({ cartItems, createOrder }) => {
  // useForm handler
  // const { register, handleSubmit } = useForm();
  const { register, handleSubmit } = useForm();

  // onSubmit Function
  const onSubmit = (data) => {
    const orderInfo = {
      ...data,
      cartItems,
    };
    createOrder(orderInfo);
  };

  return (
    <Fade right cascade>
      <div className={CheckOutStyle.cart}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul className={CheckOutStyle.formContainer}>
            <li>
              <label>Email</label>
              <input
                name="email"
                type="email"
                required
                {...register("email")}
              />
            </li>
            <li>
              <label>Name</label>
              <input
                name="name"
                type="text"
                required
                {...register("name")}
              />
            </li>
            <li>
              <label>Address</label>
              <input
                name="address"
                type="text"
                required
                {...register("address")}
              />
            </li>
            <li>
              <button className={CheckOutStyle.checkOutButton} type="submit">
                Checkout
              </button>
            </li>
          </ul>
        </form>
      </div>
    </Fade>
  );
};

export default CheckOut;
