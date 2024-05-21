import axios from "axios";
import { useEffect, useState } from "react";
import config from "../Constants/enviroment";

const useGet = (endPoint, isLimit) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${config.baseUrl1}/${endPoint}${isLimit && `?limit=${isLimit.limit}`}`
      )
      .then((res) => {
        setLoading(false);
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  }, []);
  return [data, loading];
};

export default useGet;
