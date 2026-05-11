import Select, { MultiValue } from "react-select";
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

export default function MultiSelectColorPicker() {
  const [selectedColor, setSelectedColor] = useState<MultiValue<Option>>([]);

  return (
    <Select<Option, true>
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
      // enables multi selection
      isMulti={true}
      // triggered on typing
      onInputChange={(value) => {
        console.log(value);
      }}
    />
  );
}
