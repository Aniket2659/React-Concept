import Select from "react-select";
import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

const options: Array<Option> = [
  { value: "blues", label: "Blues" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
];

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState<Option | null>(null);

  return (
    <Select
      value={selectedColor}
      onChange={(option) => setSelectedColor(option)}
      options={options}
      placeholder="Search your Favourite color"
      isClearable
      isSearchable
      autoFocus
      noOptionsMessage={(obj) => {
        return `${obj.inputValue} not found`;
      }}
      // Trigger when menu opens
      onMenuOpen={() => {
        console.log("Menu Opened");
      }}
      // Trigger when menu closes
      onMenuClose={() => {
        console.log("Menu Closed");
      }}
    />
  );
}
