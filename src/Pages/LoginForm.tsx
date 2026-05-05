import { useForm } from "react-hook-form";
import InputText from "../Components/UI/InputText";
import InputPassword from "../Components/UI/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../Components/UI/Button";
import { useAuthStore } from "../Store/AuthStore";
import { useNavigate, Link } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, "Email harus diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function LoginForm() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("📝 Form submitted:", { email: data.email });
    
    if (
      data.email === "gustirizqiputrah@gmail.com" &&
      data.password === "password123"
    ) {
      console.log("✓ Kredensial benar, mulai login...");
      login(data.email);
      navigate("/dashboard");
    } else {
      console.log("✗ Kredensial salah");
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <InputText
            label="Email"
            nama="email"
            register={register}
            error={errors.email?.message}
          />

          <InputPassword
            label="Password"
            nama="password"
            register={register}
            error={errors.password?.message}
          />

          <Button label="Login" variant="primary" type = "submit" />

          <p className="text-sm text-center">
            Belum punya akun?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Daftar sekarang
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}