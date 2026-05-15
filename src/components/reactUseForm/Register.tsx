import { useForm, SubmitHandler } from "react-hook-form";

enum genderValues {
  Male = "male",
  Female = "female",
  Other = "other",
}
interface useFormType {
  firstName: string;
  age: number;
  gender: genderValues;
}
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<useFormType>();

  const onSubmit: SubmitHandler<useFormType> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fistName">FirstName: </label>
        <input
          id="firstName"
          {...register("firstName", {
            required: "First name is Required",
            minLength: {
              value: 3,
              message: "FirstName should be at least 3 characters",
            },
          })}
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            required: "Age is required",
            min: {
              value: 18,
              message: "minimum age is 18",
            },
            max: {
              value: 60,
              message: "maximum value is 60",
            },
          })}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </div>
      <div>
        <label htmlFor="gender">Gender: </label>
        <select
          id="gender"
          {...register("gender", {
            required: "Gender is required",
          })}
        >
          <option value={genderValues.Male}>Male</option>
          <option value={genderValues.Female}>Female</option>
          <option value={genderValues.Other}>Other</option>
        </select>
        {errors.gender && (
          <p style={{ color: "red" }}>{errors.gender.message}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
