import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputText from "../../Components/UI/InputText";
import { Button } from "../../Components/UI/Button";
import { useState } from "react";

type FormData = {
  nama: string;
  role: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  role: z.string().min(1, "Role harus diisi"),
});

export default function SpeakerCreate() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/pembicara`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: data.nama, role: data.role }),
        },
      );

      if (!response.ok) throw new Error("Gagal menambahkan pembicara");

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      reset();
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan, coba lagi");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-4 mb-6">
        New Pembicara
      </h2>

      {success && (
        <div className="mb-4 px-4 py-3 border-2 border-black bg-green-300 font-bold shadow-[3px_3px_0px_0px_#000]">
          Pembicara berhasil ditambahkan!
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-white p-6 flex flex-col gap-4 max-w-md"
      >
        <InputText
          label="Nama Speaker"
          nama="nama"
          register={register}
          error={errors.nama?.message}
        />
        <InputText
          label="Role"
          nama="role"
          register={register}
          error={errors.role?.message}
        />
        <Button
            label="Add"
            type="submit"
            variant="primary"
            className="bg-blue-500 text-black font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-blue-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all"
        />
        
    </form>
</div>
    )
}   