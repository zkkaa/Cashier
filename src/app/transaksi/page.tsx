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
                <span className={`${poppins.className}`}>Transaksi</span>
              </div>
            </div>
            <div className="w-full h-[625px] mt-5 flex border-[1px] border-black rounded-[15px]">
              <div className="h-full w-[730px] px-6 py-4 ">
                <div className="w-full h-full bg-white">
                  <div className="w-full h-11  text-[22px] font-[600]">
                    <span className={`${poppins.className}`}>Menu</span>
                  </div>
                  <div className="flex w-full h-[46px] mt-1 justify-between border-b-[1px] border-black">
                    <div>
                      <select
                        name=""
                        id="Kategori"
                        className="border-[1px] border-black h-8 rounded-[10px] px-1 w-[180px] outline-none"
                      >
                        <option value="" disabled selected hidden>
                          Pilih Kategori
                        </option>
                        <option value="">Stok Terbanyak</option>
                        <option value="">Stok Terkecil</option>
                        <option value="">Makanan</option>
                        <option value="">Minuman</option>
                        <option value="">Lainnya</option>
                      </select>
                    </div>
                    <div className="w-[200px] h-8 flex items-center justify-end">
                      <input
                        type="search"
                        name=""
                        id=""
                        placeholder="cari..."
                        className="outline-none border-[1px] border-black rounded-bl-[10px] rounded-tl-[10px] leading-7 px-2 w-[160px] border-r-0 text-black"
                      />
                      <button className="border-[1px] border-black w-10 rounded-tr-[10px] rounded-br-[10px] content-center border-l-0 justify-center h-[30px]">
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
                  <div className="w-[732px] h-[483px] mt-3 flex flex-wrap content-start overflow-y-auto gap-[19px]">
                    <div className="w-[215px] border-[1px] border-black h-[220px] rounded-[10px] p-1 cursor-pointer">
                      <div className="w-full h-[130px] bg-slate-300 rounded-tl-[10px] rounded-tr-[10px]"></div>
                      <div className="w-full h-[74px] rounded-bl-[10px] rounded-br-[10px] pl-1">
                        <div className="w-full h-[23px] text-[17px] font-[500] truncate">
                          <span>Lontong saya ada banyak sekali</span>
                        </div>
                        <div className="w-full text-[13px] font-[300]">
                          <span>Makanan</span>
                        </div>
                        <div className="w-full text-[17px] font-[500] mt-2">
                          Rp. <span>10.000</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[215px] border-[1px] border-black h-[220px] rounded-[10px] p-1 cursor-pointer">
                      <div className="w-full h-[130px] bg-slate-300 rounded-tl-[10px] rounded-tr-[10px]"></div>
                      <div className="w-full h-[74px] rounded-bl-[10px] rounded-br-[10px] pl-1">
                        <div className="w-full h-[23px] text-[17px] font-[500] truncate">
                          <span>Lontong saya ada banyak sekali</span>
                        </div>
                        <div className="w-full text-[13px] font-[300]">
                          <span>Makanan</span>
                        </div>
                        <div className="w-full text-[17px] font-[500] mt-2">
                          Rp. <span>10.000</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[215px] border-[1px] border-black h-[220px] rounded-[10px] p-1 cursor-pointer">
                      <div className="w-full h-[130px] bg-slate-300 rounded-tl-[10px] rounded-tr-[10px]"></div>
                      <div className="w-full h-[74px] rounded-bl-[10px] rounded-br-[10px] pl-1">
                        <div className="w-full h-[23px] text-[17px] font-[500] truncate">
                          <span>Lontong saya ada banyak sekali</span>
                        </div>
                        <div className="w-full text-[13px] font-[300]">
                          <span>Makanan</span>
                        </div>
                        <div className="w-full text-[17px] font-[500] mt-2">
                          Rp. <span>10.000</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[215px] border-[1px] border-black h-[220px] rounded-[10px] p-1 cursor-pointer">
                      <div className="w-full h-[130px] bg-slate-300 rounded-tl-[10px] rounded-tr-[10px]"></div>
                      <div className="w-full h-[74px] rounded-bl-[10px] rounded-br-[10px] pl-1">
                        <div className="w-full h-[23px] text-[17px] font-[500] truncate">
                          <span>Lontong saya ada banyak sekali</span>
                        </div>
                        <div className="w-full text-[13px] font-[300]">
                          <span>Makanan</span>
                        </div>
                        <div className="w-full text-[17px] font-[500] mt-2">
                          Rp. <span>10.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-black h-full w-[459px] px-4 py-4 rounded-[15px]">
                <div className="w-full h-full bg-white">
                  <div className="w-full h-11 text-[22px] font-[600]">
                    <span className={`${poppins.className}`}>Pesanan</span>
                  </div>
                  <div className="w-full h-[390px] mt-2 overflow-y-auto">
                    <table className="w-full text-center">
                      <thead>
                        <tr className="w-full h-8 border-b-[1px] border-black leading-8">
                          <th>Nama</th>
                          <th className=" w-24 h-full">Qty</th>
                          <th className="w-[150px]">Harga</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b-[1px] border-gray-200 leading-9 content-center">
                          <td>Lontong</td>
                          <td className="flex items-center justify-between">
                            <button className="h-[26px] w-[26px] bg-slate-50 rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="#000000"
                                viewBox="0 0 256 256"
                              >
                                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                              </svg>
                            </button>
                            <span>000</span>
                            <button className="h-[26px] w-[26px] bg-slate-50 rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                viewBox="0 0 256 256"
                              >
                                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                              </svg>
                            </button>
                          </td>
                          <td>
                            Rp. <span>500.000.000</span>
                          </td>
                          <td className="h-full w-7">
                            <div className="w-7 h-7">
                              <button className="w-full h-full flex justify-center items-center bg-red-500">
                                <svg
                                  className="w-6 h-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#000000"
                                  viewBox="0 0 256 256"
                                >
                                  <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="h-[137px] w-full pt-3 border-t-[1px] border-black mt-[10px]">
                    <div className="w-full">
                      <div className="w-full flex justify-between">
                        <div><span>Total Harga</span></div>
                        <div>Rp. <span>500.000.000</span></div>
                      </div>
                      <div className="w-full flex justify-between">
                        <div><span>Total Harga</span></div>
                        <div>Rp. <span>500.000.000</span></div>
                      </div>
                    </div>
                    <div className="w-full content-end flex justify-between items-center text-[20px] font-[600]">
                      <div><span>Total Harga</span></div>
                      <div>Rp. <span>500.000.000</span></div>
                    </div>
                    <div className="w-full h-11 content-end mt-[2px]">
                      <button className="w-full h-5/6 bg-green-300 rounded-[20px]">
                        <span>Bayar</span>
                      </button>
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
