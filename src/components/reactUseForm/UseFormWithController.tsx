import {
  useForm,
  SubmitHandler,
  FieldValues,
  Controller,
} from "react-hook-form";
import Select from "react-select";

interface OptionType {
  label: string;
  value: string;
}

const UseFormWithController = () => {

  const { handleSubmit, control } = useForm();

  const colorOptions: OptionType[] = [
    { value: "red", label: "RED" },
    { value: "yellow", label: "YELLOW" },
    { value: "green", label: "GREEN" },
    { value: "black", label: "BLACK" },
    { value: "pink", label: "PINK" },
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="colorPicker"
          control={control}
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={colorOptions}
                onChange={(selectedOption) => {
                  console.log("color is ", selectedOption.value);
                  field.onChange(selectedOption);
                }}
              />
            );
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseFormWithController;
