import { useState } from "react";
import { useInputContext } from "../context/messageContext";
import Card from "../components/Card";

const Kontak = () => {
  const { inputValue, setInputValue } = useInputContext();
  const [dataInput, setDataInput] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (event) => {
    setDataInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue((prev) => [...prev, dataInput]);
    setDataInput({
      nama: "",
      email: "",
      pesan: "",
    });
  };

  return (
    <>
      <h1 className="text-2xl">Kontak</h1>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-gray-500 pt-4 pb-1">Nama</label>
          <input
            className="border-2 rounded-md px-2 py-1"
            type="text"
            placeholder="Nama"
            name="nama"
            required
            value={dataInput.nama}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500 pt-4 pb-1">Email</label>
          <input
            className="border-2 rounded-md px-2 py-1"
            type="email"
            name="email"
            required
            value={dataInput.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500 pt-4">Pesan</label>
          <textarea
            className="border-2 rounded-md px-2 py-1 pb-1"
            type="text"
            name="pesan"
            required
            value={dataInput.pesan}
            onChange={handleChange}
            placeholder="Pesan"
          />
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-blue-500 text-white rounded-full mt-4 px-4 py-1">
            Kirim
          </button>
        </div>
      </form>
      <div className="mt-5 flex flex-col gap-3">
        <h2>
          Pesan Terkirim : <span className="">{inputValue?.length}</span>
        </h2>
        {inputValue.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.nama}
              email={item.email}
              message={item.pesan}
            />
          );
        })}
      </div>
    </>
  );
};

export default Kontak;
