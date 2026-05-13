import Select, {
  GroupBase,
  MultiValue,
  MultiValueProps,
  components,
  MultiValueRemoveProps,
  OptionProps,
} from "react-select";
import { useState } from "react";
import { CustomMultiselectWrapper } from "./ReactSelectStyled.ts";

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

const customMultiValue = (
  props: MultiValueProps<Option, true, GroupBase<Option>>,
) => {
  const { data, ...rest } = props;
  return (
    <components.MultiValue {...rest} data={data}>
      <components.MultiValueLabel {...props}>
        {
          <div>
            <span>$ </span>
            {props.data.label}
          </div>
        }
      </components.MultiValueLabel>
    </components.MultiValue>
  );
};

const customMultiValueEmoji = (
  props: MultiValueRemoveProps<Option, true, GroupBase<Option>>,
) => {
  return (
    <components.MultiValueRemove {...props}>
      <span>❌</span>
    </components.MultiValueRemove>
  );
};

const customMulivalueOption = (props: OptionProps<Option>) => {
  const { data, innerProps, innerRef } = props;

  return (
    <div ref={innerRef} {...innerProps} className="select_option">
      <span>$ </span>
      <>{data.label}</>
    </div>
  );
};

export default function CustomMultiSelect() {
  const [selectedColor, setSelectedColor] = useState<MultiValue<Option>>([]);

  return (
    <CustomMultiselectWrapper>
      <Select<Option, true>
        classNamePrefix="color_select"
        value={selectedColor}
        onChange={(option) => setSelectedColor(option)}
        placeholder="Select muliple colors"
        options={options}
        isMulti
        components={{
          MultiValue: customMultiValue,
          MultiValueRemove: customMultiValueEmoji,
          Option: customMulivalueOption,
        }}
      />
    </CustomMultiselectWrapper>
  );
}
