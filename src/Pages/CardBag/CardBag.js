import React, { useEffect, useState } from "react";
import "./CardBag.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useGet from "../../Custom Hooks/useGet";
import config from "../../Constants/enviroment";
import {
  handelDecreaseProducts,
  handleRemoveAmount,
  handleRemoveProduct,
} from "../../Redux/counterSlice";
const CardBag = () => {
  const isRealyDark = useSelector((state) => state.counter.isDark);
  const buyProduct = useSelector((state) => state.counter.buyProduct);
  const AmountProduct = useSelector((state) => state.counter.countOfProduct);
  const [Products, Loading] = useGet(config.allProducts, "");
  const [data, setData] = useState();
  const [dataCount, setDataCount] = useState([]);
  const [dataLoaded, setDataLoaded] = useState([]);
  const [dataItem, setDataItem] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    location.state != undefined && setData(location.state.ID);
    if (location.state != undefined && data != undefined) {
      localStorage.setItem("dataItem", data);
      setDataItem((prev) => [
        ...prev,
        parseInt(localStorage.getItem("dataItem")),
      ]);
    }
    if (buyProduct && Products) {
      const ProdcutsHere =
        Products &&
        Products.filter((item) => buyProduct && buyProduct.includes(item.id));
      setDataLoaded(ProdcutsHere);
      setDataCount([] || JSON.parse(localStorage.getItem("countOfProduct")));
    }
    if (AmountProduct && buyProduct && Products) {
      const updatedDataCount = AmountProduct.map((item) => item);
      setDataCount(updatedDataCount);
    }
  }, [data, location.state, AmountProduct, buyProduct, Products]);

  return (
    <>
      <div
        className={
          isRealyDark == true
            ? "container-fliud light2"
            : "conatiner-fliud dark2"
        }
      >
        <div className="row hero-bag">
          <div className="empty-notempty">
            <h2>
              {localStorage.getItem("numofitem") != 0 ? (
                <h2>Your Products Are</h2>
              ) : (
                <h2>Your Card Is Empty</h2>
              )}
            </h2>
            <hr />
          </div>
          <div className="contianer ">
            <div className="row  final">
              {localStorage.getItem("numofitem") != 0 ? (
                <div className="final-right col-4 order-1">
                  <div
                    className={
                      isRealyDark == true
                        ? " final-tax light-tax"
                        : " final-tax dark-tax"
                    }
                  >
                    <div className="subtotal">
                      <p>SubTotal</p>
                      <p>$120</p>
                    </div>
                    <hr />
                    <div className="shiping">
                      <p>Shiping</p>
                      <p>$5</p>
                    </div>
                    <hr />
                    <div className="tax">
                      <p>Tax</p>
                      <p>$150.4</p>
                    </div>
                    <hr />
                    <div className="order-total">
                      <p>Order Total</p>
                      <p>$326.02</p>
                    </div>
                  </div>
                  <div
                    className={
                      isRealyDark == true ? "final-btn light" : "final-btn dark"
                    }
                  >
                    PLEASE LOGIN
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="col-8 final-left order-0">
                {dataLoaded &&
                  dataLoaded.map((item, index) => (
                    <>
                      <div className="col-3 final-img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="col-3 final-category">
                        <h5>{item.category}</h5>
                        <p>{item.title}</p>
                        <p>Colors :</p>
                      </div>
                      <div className="col-3 final-amount">
                        <label className="mb-1" for="ff">
                          Amount
                        </label>
                        <select
                          className="final-select"
                          id="ff"
                          value={dataCount[index]}
                        >
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
                        <p className="final-remove mb-4">
                          <div
                            className={
                              isRealyDark == true
                                ? "remove light-remo"
                                : "remove dark-remo"
                            }
                            onClick={() => {
                              dispatch(handleRemoveProduct(data));
                              dispatch(
                                handelDecreaseProducts(dataCount[index])
                              );
                              dispatch(handleRemoveAmount(dataCount[index]));
                            }}
                          >
                            remove
                          </div>
                        </p>
                      </div>
                      <div className="col-3 final-price">
                        Price :<p>${item.price} </p>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBag;
