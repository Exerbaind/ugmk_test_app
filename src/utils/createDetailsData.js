const createDetailsData = (data, monthID) => {
  const product1 = data.reduce((acc, curr) => acc + curr.product1, 0);
  const product2 = data.reduce((acc, curr) => acc + curr.product2, 0);

  const product1Tons = (product1 / 1000).toFixed(0);
  const product2Tons = (product2 / 1000).toFixed(0);

  const result = [
    {
      name: "Продукт 1",
      value: Number(product1Tons),
    },
    {
      name: "Продукт 2",
      value: Number(product2Tons),
    },
  ];

  return result;
};

export default createDetailsData;
