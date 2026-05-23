import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "../../Components/UI/InputText";
import { Button } from "../../Components/UI/Button";
import { useForm } from "react-hook-form";
import InputSelectEvent from "../../Components/UI/Select";
import InputDate from "../../Components/UI/InputDate";
import Textarea from "../../Components/UI/TextArea";
import { useState } from "react";

type FormData = {
  pembicara: string;
  nama: string;
  category: string;
  date: string;
  bio: string;
};
const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  pembicara: z.string().min(1, "Pembicara harus dipilih"),
  category: z.string().min(1, "Category harus dipilih"),
  date: z.string().min(1, "Tanggal harus diisi"),
  bio: z.string().max(100, "Bio maksimal 100 karakter"),
});

export default function EventCreate() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const categoryValue = watch("category");
  const pembicaraValue = watch("pembicara");

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.nama,
          categoryId: Number(data.category),
          pembicaraId: Number(data.pembicara),
          tanggal: data.date,
          description: data.bio,
        }),
      });

      if (!response.ok) throw new Error("Gagal menambahkan event");

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
      <h2 className="text-2xl font-white uppercase tracking-tight border-b-4 border-black pb-4 mb-6">
        New Event
      </h2>

      {success && (
        <div className="mb-4 px-4 py-3 border-2 border-black bg-green-300 font-bold shadow-[3px_3px_0px_0px_#000]">
          Event berhasil ditambahkan!
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-white p-6 flex flex-col gap-4 max-w-md"
      >
        <InputText
          label="New Event"
          nama="nama"
          register={register}
          error={errors.nama?.message}
        />
        <InputSelectEvent
          label="Pilih Category"
          nama="category"
          register={register}
          setValue={setValue}
          error={errors.category?.message}
          endpoint="categories"
          value={categoryValue}
        />
        <InputSelectEvent
          label="Pilih Pembicara"
          nama="pembicara"
          register={register}
          setValue={setValue}
          error={errors.pembicara?.message}
          endpoint="pembicara"
          value={pembicaraValue}
        />
        <InputDate
          label="Tanggal Event"
          nama="date"
          register={register}
          setValue={setValue}
          error={errors.date?.message}
        />
          <Textarea
          label="Deskripsi Event"
          nama="bio"
          register={register}
          error={errors.bio?.message}
        />

        <Button
          label="Add"
          type="submit"
          variant="primary"
          className="bg-blue-500 text-black font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-blue-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all"
        />
      </form>
    </div>
  );
}