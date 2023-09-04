import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";

function Form() {
  const schema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    contact: yup.number().positive().required("Required"),
    addressOne: yup.number().positive().required("Required"),
    addressTwo: yup.number().positive().required("Required"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  function Onsubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(Onsubmit)}
        noValidate
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-2 gap-4 ">
          <div className=" overflow-hidden">
            <input
              placeholder="First Name"
              className="py-2 px-3 mb-1 focus:outline-none  text-[12px] bg-slate-700 w-full  placeholder:text-slate-200 text-slate-200   leading-tight"
              type="text"
              {...register("firstName")}
            />
            <p className="text-red-500 ml-3 text-[10px]">
              {errors.firstName?.message}
            </p>
          </div>
          <div className=" overflow-hidden">
            <input
              placeholder="Last Name"
              className="py-2 px-3 mb-1 focus:outline-none  text-[12px] bg-slate-700 w-full  placeholder:text-slate-200 text-slate-200   leading-tight"
              type="text"
              {...register("lastName")}
            />
            <p className="text-red-500 ml-3 text-[10px]">
              {errors.lastName?.message}
            </p>
          </div>
        </div>
        <div className=" overflow-hidden">
          <input
            placeholder="Email"
            className="py-2 px-3 mb-1 focus:outline-none  text-[12px] bg-slate-700 w-full  placeholder:text-slate-200 text-slate-200   leading-tight"
            type="text"
            {...register("email")}
          />
          <p className="text-red-500 ml-3 text-[10px]">
            {errors.email?.message}
          </p>
        </div>
        <div className=" overflow-hidden">
          <input
            placeholder="Contact Number"
            className="py-2 px-3 mb-1 focus:outline-none  text-[12px] bg-slate-700 w-full  placeholder:text-slate-200 text-slate-200   leading-tight"
            type="text"
            {...register("contact")}
          />
          <p className="text-red-500 ml-3 text-[10px]">
            {errors.contact && "Required"}
          </p>
        </div>
        <div className=" overflow-hidden">
          <input
            placeholder="Address 1"
            className="py-2 px-3 mb-1 focus:outline-none  text-[12px] bg-slate-700 w-full  placeholder:text-slate-200 text-slate-200   leading-tight"
            type="text"
            {...register("addressOne")}
          />
          <p className="text-red-500 ml-3 text-[10px]">
            {errors.addressOne && "Required"}
          </p>
        </div>
        <div className=" overflow-hidden">
          <input
            placeholder="Address 2"
            className="py-2 px-3 mb-1 focus:outline-none  text-[12px] bg-slate-700 w-full  placeholder:text-slate-200 text-slate-200   leading-tight"
            type="text"
            {...register("addressTwo")}
          />
          <p className="text-red-500 ml-3 text-[10px]">
            {errors.addressTwo && "Required"}
          </p>
        </div>
        <DevTool control={control} />
        <div className="w-full flex justify-end">
          <input
            type="submit"
            value="CREATE NEW USER"
            className="cursor-pointer bg-green-500 w-[120px] py-2 px-3 rounded  text-[10px] text-white"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
