import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
import Link from "next/link";
import Utama from "@/app/page";

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

export default function Sidebar() {
  return (
    <div className="w-72 h-screen fixed bg-blue-200 pt-6 pl-7 pb-6">
      <div className="h-[100px] w-full border-b-2 border-black flex">
        <div className="w-[60px] h-[60px]">
          <Image
            src={"/icon.png"}
            className="w-full h-full"
            width={0}
            height={0}
            alt={"icon"}
            unoptimized
          />
        </div>
        <div className="h-[60px] w-48 ml-2 content-center text-[22px] font-[600]">
          <span className={`${poppins.className}`}>My Cashier</span>
        </div>
      </div>
      <div className="h-[300px] w-full mt-5">
        <div className="w-full text-[13px] font-[300]">
          <span className={`${montserrat.className}`}>Main Menu</span>
        </div>
        <ul className="w-full h-full">
          <li className="w-full h-10 hover:bg-slate-200 rounded-2xl my-1 pl-4 content-center">
            <Link href="#" className="flex items-center">
              <div className="h-9 w-9 pt-[2px] flex justify-center">
                <svg
                  className="w-[30px] h-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
                </svg>
              </div>
              <div className="w-44 h-10 ml-3 content-center">
                <span className={`text-[16px]  ${poppins.className}`}>
                  Beranda
                </span>
              </div>
            </Link>
          </li>
          <li className="w-full h-10 hover:bg-slate-200 rounded-2xl my-1 pl-4 content-center">
            <Link href="#" className="flex items-center">
              <div className="h-9 w-9 pt-[2px] flex justify-center">
                <svg
                  className="w-[30px] h-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path>
                </svg>
              </div>
              <div className="w-44 h-10 ml-2 content-center">
                <span className={`text-[16px]  ${poppins.className}`}>
                  Transaksi
                </span>
              </div>
            </Link>
          </li>
          <li className="w-full h-10 hover:bg-slate-200 rounded-2xl my-1 pl-4 content-center">
            <Link href="#" className="flex items-center">
              <div className="h-9 w-9 pt-[2px] flex justify-center">
                <svg
                  className="w-[30px] h-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>
                </svg>
              </div>
              <div className="w-44 h-10 ml-3 content-center">
                <span className={`text-[16px]  ${poppins.className}`}>
                  Stok Produk
                </span>
              </div>
            </Link>
          </li>
          <li className="w-full h-10 hover:bg-slate-200 rounded-2xl my-1 pl-4 content-center">
            <Link href="#" className="flex items-center">
              <div className="h-9 w-9 pt-[2px] flex justify-center">
                <svg
                  className="w-[30px] h-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
                </svg>
              </div>
              <div className="w-44 h-10 ml-3 content-center">
                <span className={`text-[16px]  ${poppins.className}`}>
                  Riwayat
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="w-full h-[135px] content-end mt-36 border-t-2 border-black">
          <div className="w-full  text-[13px] font-[300]">
            <span className={`${montserrat.className}`}>Akun Pengguna</span>
          </div>
          <li className="w-full h-10 hover:bg-slate-200 rounded-2xl my-1 pl-4 content-center">
            <Link href="#" className="flex items-center">
              <div className="h-9 w-9">
                <svg
                  className="w-[30px] h-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                </svg>
              </div>
              <div className="w-44 h-10 ml-2 content-center">
                <span className={`text-[16px]  ${poppins.className}`}>
                  Akun Petugas
                </span>
              </div>
            </Link>
          </li>
          <li className="w-full h-10 hover:bg-slate-200 rounded-2xl my-1 pl-4 content-center">
            <Link href="#" className="flex items-center">
              <div className="h-9 w-9 content-center">
                <svg
                  className="w-[30px] h-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
                </svg>
              </div>
              <div className="w-44 h-10 ml-2 content-center">
                <span className={`text-[16px]  ${poppins.className}`}>
                  Keluar
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
