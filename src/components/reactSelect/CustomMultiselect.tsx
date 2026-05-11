import Select, { GroupBase, MultiValue ,MultiValueProps,components} from "react-select";
import {  useState } from "react";

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

const MultiValue=(props:MultiValueProps<Option,true,GroupBase<Option>>)=>{

    const {data,...rest}=props;
    return(
    <components.MultiValue {...rest} data={data}>
        <components.MultiValueLabel {...props}>{<p>Hello {props.data.label}</p>}</components.MultiValueLabel>
    </components.MultiValue>
    )


}

export default function CustomMultiSelect() {
  const [selectedColor, setSelectedColor] = useState<MultiValue<Option>>([]);

  return (
    <Select<Option, true>
      value={selectedColor}
      onChange={(option) => setSelectedColor(option)}
      placeholder="Select muliple colors"
      options={options}
      isMulti
      components={{MultiValue}}
    />
  );
}
