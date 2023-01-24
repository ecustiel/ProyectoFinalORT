import React from "react";
import ListItemData from "./ListPublications/ListItemData";
import "./ListItem.css";

const ListItem = ({ dataPublications }) => {
  return (
    <div className="list-wrap">
      {dataPublications.map((item) => (
        <ListItemData key={item.idPub} item={item} />
      ))}
    </div>
  );
};

export default ListItem;
