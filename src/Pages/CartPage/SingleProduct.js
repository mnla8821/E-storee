import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useGet from "../../Custom Hooks/useGet";
import config from "../../Constants/enviroment";
import {
  handleIncreaseProducts,
  handleAddProduct,
  handleAddAmount,
} from "../../Redux/counterSlice";
import Loading from "../../Components/Loading/Loading";

const SingleProduct = () => {
  const isRealyDark = useSelector((state) => state.counter.isDark);
  const [Products, loading] = useGet(config.allProducts, {});
  const location = useLocation();
  const [data, setData] = useState();
  const [dataSelect, setDataSelect] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigateBag = (id, count) => {
    navigate("/CardBag", {
      state: {
        ID: id,
        COUNT: count,
      },
    });
  };

  const handleChange = (e) => {
    setDataSelect(parseInt(e.target.value));
  };
  useEffect(() => {
    location.state != undefined
      ? setData(location.state.ID)
      : console.log("err");
  }, [location.state]);

  const Prodcuts =
    Products &&
    Products.map((item) =>
      data == item.id ? (
        <div className="row hero-Cart-page" key={item.id}>
          <div className="col-6 hero-cart-page-img">
            <img src={item.image} alt="" />
          </div>
          <div className="col-6 hero-cart-page-text">
            <h3>{item.category}</h3>
            <h4>${item.price}</h4>
            <p>{item.description}</p>
            Color
            <div className="color">
              <div
                className="cir1"
                style={{ backgroundColor: item.color1 }}
              ></div>
              <div
                className="cir2"
                style={{ backgroundColor: item.color2 }}
              ></div>
            </div>
            <div className="amount">
              <label className="mb-4 mt-3">Amount</label>
              <select name="amount" id="count" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
            </div>
            <div
              className={
                isRealyDark == true ? "btn-cart light" : "btn-cart dark"
              }
              onClick={() => {
                handleNavigateBag(item.id);
                dispatch(handleIncreaseProducts(dataSelect));
                dispatch(handleAddProduct(item.id));
                dispatch(handleAddAmount(dataSelect));
              }}
            >
              add to bag
            </div>
          </div>
        </div>
      ) : (
        ""
      )
    );

  return (
    <>
      {loading == true ? (
        <Loading />
      ) : (
        <>
          <div
            className={
              isRealyDark == true
                ? "container-fluid light2"
                : " container-fluid dark2"
            }
          >
            {Prodcuts}
          </div>
        </>
      )}
    </>
  );
};
export default SingleProduct;
