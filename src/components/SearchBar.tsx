import React from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }
  return (
    <input
      type="text"
      onChange={handleInputChange}
      placeholder="ノートを検索"
    />
  );
};

export default SearchBar;