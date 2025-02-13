import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* ItemList de artistas */}
      <ItemList title="Artistas" items={5} />

      {/* Item List de músicas */}
      <ItemList title="Músicas" items={10} />
    </div>
  );
};

export default Main;
