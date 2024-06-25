import { useEffect, useState } from "react";
import axios from "axios";


const useAxios = (sieveModel) => {
  const [isLoading, setLoading] = useState(false);
  const [response, setRespanse] = useState([]);

  const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com/Programmer/sieve",
  headers: {
    "content-type": "application/json; charset=utf-8",
  },
});

  const fatchData = async () => {
    setLoading(true);
    try {
      const res = await instance.post('', sieveModel);
      const data = res.data;

      setRespanse(data);
    } catch (error) {
      console.log("error data =>", error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fatchData();
  }, []);

  return {response, isLoading};
};

export default useAxios;

// ----------------------------------------------------------------------------------------------------------

//   const url = "https://react-mini-projects-api.classbon.com/Programmer/sieve";

//   const fatchData = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(sieveModel),
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//         },
//       });
//       const data = await res.json();
//       console.log("new data", data);
//       setRespanse(data);
//     } catch (error) {
//       console.log("error =>", error);
//     } finally {
//       setLoading(false);
//     }
//   };