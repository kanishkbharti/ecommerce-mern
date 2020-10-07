import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fround-neck-plain-tshirt-with-multi-color-design-18553651988.html&psig=AOvVaw1cPKurYwHqCoEWw2MQbZQW&ust=1601209679521000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiwjYbphuwCFQAAAAAdAAAAABAJ`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
