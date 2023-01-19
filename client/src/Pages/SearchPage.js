import React, { useState } from "react";
import FilterPanel from "../Pages/SearchProduct/FilterPanel";
import SearchBar from "../Pages/SearchProduct/SearchBar";
import ListItem from "../Pages/SearchProduct/ListItem";
import "./SearchPage.css";

export default function SearchPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([50, 5000]);
  const [balnearios, setBalnearios] = useState([
    { id: 1, checked: false, label: "Piriapolis" },
    { id: 2, checked: false, label: "La Paloma" },
    { id: 3, checked: false, label: "La Esmeralda" },
    { id: 4, checked: false, label: "Valizas" },
    { id: 5, checked: false, label: "Santa Teresa" },
    { id: 6, checked: false, label: "Las Toscas" },
    { id: 7, checked: false, label: "La Coronilla" },
    { id: 8, checked: false, label: "Otro" },
  ]);

  const handleSelectPropertyType = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleChangeChecked = (id) => {
    const listaBalnearios = balnearios;
    const changeCheckedBalnearios = listaBalnearios.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setBalnearios(changeCheckedBalnearios);
  };

  const handleChangePrice = (event, value) => setSelectedPrice(value);

  return (
    <div className="home">
      <SearchBar />

      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectPropertyType}
            balnearios={balnearios}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changedPrice={handleChangePrice}
          />
        </div>

        <div className="home_list-wrap">
          <ListItem />
        </div>
      </div>
    </div>
  );
}
