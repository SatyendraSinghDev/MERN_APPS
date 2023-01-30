import React from "react";
import CustomInput from "../components/CustomInput";

const AddCoupon = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Coupon</h3>
      <div>
        <form action="">
          <CustomInput
            type="text"
            name="name"
            label="Enter Coupon Name"
            id="name"
          />
          <div className="error"></div>
          <CustomInput
            type="date"
            name="expiry"
            label="Enter Expiry Data"
            id="date"
          />
          <div className="error"></div>
          <CustomInput
            type="number"
            name="discount"
            label="Enter Discount"
            id="discount"
          />
          <div className="error"></div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
