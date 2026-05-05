import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import InputText from "../Components/UI/InputText";
import InputPassword from "../Components/UI/InputPassword";

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  email: z.string().min(1, "Email harus diisi").email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  event: z.string().min(1, "Event harus dipilih"),
  bio: z.string().min(1, "Bio harus diisi"),
});

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit", // tambahan biar konsisten
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate("/");
  };

  const onError = (err: any) => {
    console.log("ERROR VALIDASI:", err); // DEBUG WAJIB
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
      className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
    >
      {/* Nama */}
      <InputText
        label="Nama"
        nama="nama"
        register={register}
        error={errors.nama?.message}
      />

      {/* Email */}
      <InputText
        label="Email"
        nama="email"
        register={register}
        error={errors.email?.message}
      />

      {/* Password */}
      <InputPassword
        label="Password"
        nama="password"
        register={register}
        error={errors.password?.message}
      />

      {/* Select */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">
          Pilih Event
        </label>
        <select
          {...register("event")}
          defaultValue=""
          className={`w-full p-3 rounded-2xl border text-sm outline-none transition-all
            ${errors.event
              ? "border-red-500 bg-red-50"
              : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            }
          `}
        >
          <option value="" disabled>
            -- Pilih Event --
          </option>
          <option value="seminar">Seminar</option>
          <option value="workshop">Workshop</option>
          <option value="competition">IT Competition</option>
        </select>

        {errors.event && (
          <p className="text-red-500 text-xs mt-1">
            {errors.event.message}
          </p>
        )}
      </div>

      {/* Bio */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">
          Bio
        </label>
        <textarea
          {...register("bio")}
          placeholder="Tulis bio Anda..."
          className={`w-full p-3 rounded-2xl border text-sm outline-none transition-all
            ${errors.bio
              ? "border-red-500 bg-red-50"
              : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            }
          `}
        />

        {errors.bio && (
          <p className="text-red-500 text-xs mt-1">
            {errors.bio.message}
          </p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-red-700 text-white py-3 rounded-2xl hover:scale-105 transition"
      >
        Daftar
      </button>
    </form>
  );
};

export default RegisterForm;