import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// import TypewriterComponent from "typewriter-effect";
import Sidebar from "@/components/sidebar";

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

export default function Utama() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="bg-blue-200 w-full h-full ml-[285px] py-5 pl-10 pr-5">
        <div className="bg-white w-full h-full rounded-2xl py-5 px-8">
          <div className="w-full h-full ">
            <div className="flex w-full h-12 justify-between">
              <div className="h-full w-52 content-center text-[24px] font-[500]">
                <span className={`${poppins.className}`}>Beranda</span>
              </div>
              <div className=" flex h-full w-80 items-center justify-end text-[20px] font-[500]">
                <div className="w-[45px] h-[45px] flex justify-center mt-1 mr-2">
                  <svg
                    className="w-[40px] h-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
                  </svg>
                </div>
                <span className={`${poppins.className}`}>Admin Azka</span>
              </div>
            </div>
            <div className="flex w-full h-[100px] justify-between mt-5">
              <div className="flex h-full w-60  border-r-2 border-gray-400 items-center">
                <div className="border-2 border-black w-16 h-16"></div>
                <div className="w-[155px] h-16 ml-3">
                  <div className="w-full h-7 mt-1 text-[18px] font-[600]">
                    <span className={`${poppins.className}`}>Stok Data</span>
                  </div>
                  <div className="w-full h-8 content-end">
                    <span className={`${montserrat.className}`}>RP.</span>
                    <span className={`${montserrat.className}`}>
                      10.000.000
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-60  border-r-2 border-gray-400 items-center">
                <div className="border-2 border-black w-16 h-16"></div>
                <div className="w-[155px] h-16 ml-3">
                  <div className="w-full h-7 mt-1 text-[18px] font-[600]">
                    <span className={`${poppins.className}`}>Stok Data</span>
                  </div>
                  <div className="w-full h-8 content-end">
                    <span className={`${montserrat.className}`}>RP.</span>
                    <span className={`${montserrat.className}`}>
                      10.000.000
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-60  border-r-2 border-gray-400 items-center">
                <div className="border-2 border-black w-16 h-16"></div>
                <div className="w-[155px] h-16 ml-3">
                  <div className="w-full h-7 mt-1 text-[18px] font-[600]">
                    <span className={`${poppins.className}`}>Stok Data</span>
                  </div>
                  <div className="w-full h-8 content-end">
                    <span className={`${montserrat.className}`}>RP.</span>
                    <span className={`${montserrat.className}`}>
                      10.000.000
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-60  items-center">
                <div className="border-2 border-black w-16 h-16"></div>
                <div className="w-[155px] h-16 ml-3">
                  <div className="w-full h-7 mt-1 text-[18px] font-[600]">
                    <span className={`${poppins.className}`}>
                      Jumlah Produk
                    </span>
                  </div>
                  <div className="w-full h-8 content-end">
                    <span className={`${montserrat.className}`}>50</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-14 w-full h-[465px] flex">
              <div className="h-full w-[660px] pr-10">
                <div className="w-full h-full rounded-[10px] p-4 border-[1px] border-black">
                  <div className="w-full h-11  text-[22px] font-[600] border-b-[1px] border-black">
                    <span className={`${poppins.className}`}>Data Produk</span>
                  </div>
                  <div className="w-full h-10 mt-4 justify-end flex items-center gap-4">
                    <div>
                      <select
                        name=""
                        id=""
                        className="border-[1px] border-black h-8 rounded-[10px] px-1 w-[190px] outline-none"
                      >
                        <option value="">Stok Terbanyak</option>
                        <option value="">Stok Terkecil</option>
                      </select>
                    </div>
                    <div className="w-[190px] h-10 flex items-center">
                      <input
                        type="search"
                        name=""
                        id=""
                        placeholder="cari..."
                        className="outline-none border-[1px] border-black rounded-bl-[10px] rounded-tl-[10px] px-2 w-[150px] border-r-0 text-black h-8"
                      />
                      <button className="border-[1px] border-black border-l-0 w-10 rounded-tr-[10px] rounded-br-[10px] h-8">
                        <svg
                          className="w-6 h-6 ml-[6px]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-[300px] mt-1 text-center overflow-y-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="w-full h-8 border-b-[1px] border-black leading-8">
                          <th className="w-14 h-full">No</th>
                          <th>Nama</th>
                          <th>Qty</th>
                          <th>Satuan</th>
                          <th>Harga</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b-[1px] border-gray-200 leading-8">
                          <td>1</td>
                          <td>azka</td>
                          <td>1</td>
                          <td>manusia</td>
                          <td>
                            Rp. <span>5.000</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="h-full w-[527px]">
                <div className="w-full h-[185px] border-[1px] border-black rounded-[10px] flex">
                  <div className="w-[280px] h-full content-center px-5">
                    <div className="w-full text-[24px] font-[600]">
                      {/* <TypewriterComponent
                        options={{
                          strings: ["Hello", "World"],
                          autoStart: true,
                          loop: true,
                        }}
                      /> */}
                      <span>Transaksi Cepat</span>
                    </div>
                    <div className="w-full text-[16px] mt-3">
                      Tingkatkan efisiensi Anda dengan{" "}
                      <span>aplikasi MyCashier</span>
                    </div>
                  </div>
                  <div className="w-[247px] h-full content-center ">
                    <Image
                      src={"/img.png"}
                      className="w-[220px] h-[150px] ml-2"
                      width={0}
                      height={0}
                      alt={"img"}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="w-full h-[240px] border-[1px] border-red-600 rounded-[10px] mt-[36px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
