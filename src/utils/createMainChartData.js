import { MONTH_LIST } from "./constants";

const splitDataByMonth = (data) => {
  let result = {};
  data.forEach((item) => {
    const { date } = item;
    if (date) {
      const month = date.split("/")[1];
      if (Array.isArray(result[month]) && result[month].length) {
        result = {
          ...result,
          [month]: [...result[month], item],
        };
      } else {
        result = {
          ...result,
          [month]: [item],
        };
      }
    }
  });

  return result;
};

const countMonthData = (acc, current, currentFilter) => {
  if (currentFilter === "1") return acc + current.product1;
  if (currentFilter === "2") return acc + current.product2;
  return acc + current.product1 + current.product2;
};

const createMonthData = (key, data, currentFilter) => {
  const monthFactories = data[key];
  // Делим фабрики
  const factoryData1 = monthFactories.filter((item) => item.factory_id === 1);
  const factoryData2 = monthFactories.filter((item) => item.factory_id === 2);

  // Считаем продукцию на фабриках
  const factoryCount1 = factoryData1.reduce(
    (acc, current) => countMonthData(acc, current, currentFilter),
    0
  );

  const factoryCount2 = factoryData2.reduce(
    (acc, current) => countMonthData(acc, current, currentFilter),
    0
  );

  const factoryCount1Tons = factoryCount1 && (factoryCount1 / 1000).toFixed(0);
  const factoryCount2Tons = factoryCount2 && (factoryCount2 / 1000).toFixed(0);

  return {
    month: MONTH_LIST[key],
    factory1: factoryCount1Tons,
    factory2: factoryCount2Tons,
  };
};

const formatData = (data, currentFilter) => {
  return Object.keys(data).map((key) =>
    createMonthData(key, data, currentFilter)
  );
};

const createMainChartData = (data, currentFilter) => {
  const dataByMonth = splitDataByMonth(data);
  const result = formatData(dataByMonth, currentFilter);
  return result;
};

export default createMainChartData;
