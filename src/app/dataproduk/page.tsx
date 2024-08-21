import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
// import { trash } from "@phosphor-icons/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Databarang() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="bg-blue-200 w-full h-full ml-[285px] py-5 pl-10 pr-5">
        <div className="bg-white w-full h-full rounded-2xl py-5 px-8">
          <div className="w-full h-full">
            <div className="w-full h-12">
              <div className="h-full w-52 content-center text-[24px] font-[500]">
                <span className={`${poppins.className}`}>Stok Produk</span>
              </div>
            </div>
            <div className="flex w-full h-16 mt-5 justify-between border-b-[1px] border-black">
              <div className="h-full justify-end flex items-center gap-4">
                <div>
                  <select
                    name=""
                    id="Kategori"
                    className="border-[1px] border-black h-9 rounded-[10px] px-1 w-[190px] outline-none"
                  >
                  <option value="" disabled selected hidden>Pilih Kategori</option>
                    <option value="">Stok Terbanyak</option>
                    <option value="">Stok Terkecil</option>
                    <option value="">Makanan</option>
                    <option value="">Minuman</option>
                    <option value="">Lainnya</option>
                    </select>
                </div>
                <div className="w-[200px] h-10 flex items-center">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="cari..."
                    className="outline-none border-[1px] border-black rounded-bl-[10px] rounded-tl-[10px] leading-8 px-2 w-[150px] border-r-0 text-black"
                  />
                  <button className="border-[1px] border-black w-10 rounded-tr-[10px] rounded-br-[10px] content-center justify-center h-[34px]  border-l-0">
                    <svg
                      className="w-6 h-6 ml-[5px]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="h-full w-[500px] flex items-center justify-end">
                <button className="h-9 w-44 bg-slate-400 text-center rounded-[15px] text-[16px]">
                  <span>Tambah Produk</span>
                </button>
              </div>
            </div>
            <div className="w-full h-[541px] mt-5 flex flex-wrap gap-4 overflow-y-auto content-start">
              <div className="w-[380px] h-[180px] border-[1px] border-black rounded-[15px] p-2 flex cursor-pointer">
                <div className="h-full w-[155px] bg-red-500 rounded-[10px] mr-3"></div>
                <div className="h-[full]  w-[225px]">
                  <div className="flex w-full h-[94px]">
                    <div className="w-[168px] h-[91px] text-[16px] ">
                      <div className="w-full line-clamp-2 flex">
                        <span className="">nama barang</span>
                      </div>
                      <div className="w-full text-[12px] text-zinc-400">
                        <span className={`${montserrat.className}`}>
                          Makanan
                        </span>
                      </div>
                      <div
                        className={`flex w-full h-[24px] font-[600] mt-3 ${montserrat.className}`}
                      >
                        <span className="mr-2">Rp.</span>
                        <span>1.000.000.000</span>
                      </div>
                    </div>
                    <div className="w-10 h-20 bg-white ">
                      <button className="h-1/2 w-full"></button>
                      <button className="h-1/2 w-full mt-[-5px]"></button>
                    </div>
                  </div>
                  <div className="w-full h-[70px] pt-10">
                    <div className="flex w-full h-6">
                      <span>Stok :</span>
                      <span className="ml-2 font-[500]">55</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
