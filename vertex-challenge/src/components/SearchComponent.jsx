import { Button } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

const SearchComponent = () => {
  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 justify-center mt-8 ml-12 sm:ml-0">
      <div className=" -mb-4 lg:mb-0 md:mr-8">
        <SearchBar />
      </div>
      <Button variant="contained" color="error" onClick={handleBack}>
        Voltar
      </Button>
    </div>
  );
};

export default SearchComponent;
