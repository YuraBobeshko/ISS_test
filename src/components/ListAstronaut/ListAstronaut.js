import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import "./ListAstronaut.scss";

const defaultUrl = "./photos/defaultUrl.jpg";

function ListAstronaut({ errorListAstronaut, loadData, listAstronaut }) {
  useEffect(() => {
    if (!listAstronaut) {
      loadData("listAstronaut", "https://api.open-notify.org/astros.json");
    }
    const timer = setTimeout(() => {
      loadData("listAstronaut", "https://api.open-notify.org/astros.json");
    }, 5000);
    return () => clearTimeout(timer);
  }, [listAstronaut, loadData]);

  const memoListAstronaut = useMemo(
    () =>
      listAstronaut && !errorListAstronaut
        ? listAstronaut.people.filter(astronaut => astronaut.craft === "ISS")
        : null,
    [errorListAstronaut, listAstronaut]
  );

  if (errorListAstronaut){
    return (
      <div className={"ListAstronaut"}>
        <h1>error name: {errorListAstronaut.toString()}</h1>
      </div>
    );
  }
  if (!memoListAstronaut){
    return (
      <div className={"ListAstronaut"}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={"ListAstronaut"}>
      <div className={"ListAstronaut__list"}>
        {memoListAstronaut.map(astronaut => (
          <div key={astronaut.name} className={"ListAstronaut__astronaut"}>
            <img
              className={"ListAstronaut__img"}
              src={astronaut.url || defaultUrl}
              alt={astronaut.name}
            />
            <span className={"ListAstronaut__name"}>{astronaut.name}</span>
          </div>
        ))}
      </div>
      <p
        className={"ListAstronaut__totalAmount"}
      >{`Total amount: ${memoListAstronaut.length} people in ISS`}</p>
    </div>
  );
}

ListAstronaut.propTypes = {
  error: PropTypes.string,
  loadData: PropTypes.func.isRequired,
  listAstronaut: PropTypes.object
};

export default ListAstronaut;
