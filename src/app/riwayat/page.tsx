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
                <span className={`${poppins.className}`}>Riwayat</span>
              </div>
            </div>
            <div className="flex items-center w-full h-16 mt-2 justify-between">
              <div>
                <select
                  name=""
                  id=""
                  className="border-[1px] border-black h-9 rounded-[10px] px-1 w-[220px] outline-none"
                >
                  <option value="">Stok Terbanyak</option>
                  <option value="">Stok Terkecil</option>
                </select>
              </div>
              <div className="w-[220px] h-10 flex items-center">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="cari..."
                  className="outline-none border-[1px] border-black rounded-bl-[10px] rounded-tl-[10px] leading-8 px-2 w-[180px] border-r-0 text-black"
                />
                <button className="border-[1px] border-black w-10 rounded-tr-[10px] rounded-br-[10px] content-center border-l-0 justify-center h-[34px]">
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
            <div className="w-full h-[572px] text-center overflow-y-auto border-[1px] border-black rounded-[15px] p-5">
              <table className="w-full">
                <thead>
                  <tr className="w-full h-8 border-b-[1px] border-black leading-8">
                    <th className="w-36 h-full">Tanggal</th>
                    <th>Nama</th>
                    <th>Qty</th>
                    <th>Satuan</th>
                    <th>Total Harga</th>
                    <th className="w-[130px]">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-[1px] border-gray-200 leading-10">
                    <td>1</td>
                    <td>azka</td>
                    <td>1</td>
                    <td>manusia</td>
                    <td>
                      Rp. <span>5.000</span>
                    </td>
                    <td>
                      <button className="bg-cyan-500 w-[100px] leading-8 rounded-[15px]">
                        Print
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
