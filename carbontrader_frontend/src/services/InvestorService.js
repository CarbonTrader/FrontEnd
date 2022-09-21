import instance from "./instance";

let data;

const getData = async () => {
  await instance.get("/carbontrader.json").then((response) => {
    data = response.data.Trader;
  });
  return data;
};

export default getData;
