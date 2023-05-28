import React from "react";
import { useParams } from "react-router-dom";
import { FABRICS_LIST, MONTH_LIST } from "../../utils/constants";

import "./styles.css";
import PieChart from "../../components/PieChart";
import createDetailsData from "../../utils/createDetailsData";
import { useFactoryFetch } from "../../hooks/useFactoryFetch";

function DetailsPageContainer() {
  const { factoryID, monthID } = useParams();
  const { data } = useFactoryFetch(factoryID, monthID);

  if (data) {
    const factoryData = createDetailsData(data, monthID);
    const title = `Статистика по продукции ${FABRICS_LIST[factoryID]} за ${MONTH_LIST[monthID]}`;
    return (
      <div className="details">
        <h1 className="detailsTitle">{title}</h1>
        <div className="detailsBlock">
          <PieChart data={factoryData} />
        </div>
      </div>
    );
  }

  return null;
}

export default DetailsPageContainer;
