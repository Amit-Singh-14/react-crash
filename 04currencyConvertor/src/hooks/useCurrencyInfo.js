import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    // yaha log empty print hoga becuse fetch is async hota h toh iske baad wala code execute ho jata
    // console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
