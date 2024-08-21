import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";

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

export default function Login() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-7/12 h-full">
        <div className="w-full h-9/12 mt-[13.8%] flex justify-center">
          <div className="w-9/12 h-3/4">
            <Image
              src={"/img.png"}
              className="w-full h-full"
              width={0}
              height={0}
              alt={"img"}
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="w-5/12 h-full  content-center">
        <div className="w-[400px] h-[380px]">
          <div className={`text-[40px] font-[700] ${montserrat.className}`}>
            <span className="">Masuk</span>
          </div>
          <span className={`text-[16px] ${poppins.className}`}>
            Silahkan masuk ke akun anda!
          </span>
          <div className="w-full h-11 mt-14">
            <div className="form-control">
              <input
                type="value"
                className={` ${poppins.className}`}
                required
              />
              <label>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "0ms" }}
                >
                  U
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "50ms" }}
                >
                  s
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "100ms" }}
                >
                  e
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "150ms" }}
                >
                  r
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "200ms" }}
                >
                  n
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "250ms" }}
                >
                  a
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "300ms" }}
                >
                  m
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "350ms" }}
                >
                  e
                </span>
              </label>
            </div>
          </div>
          <div className="w-full h-11 mt-8">
            <div className="form-control">
              <input
                type="password"
                name=""
                id=""
                className={` ${poppins.className}`}
                required
              />
              <label>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "0ms" }}
                >
                  P
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "50ms" }}
                >
                  a
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "100ms" }}
                >
                  s
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "150ms" }}
                >
                  s
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "200ms" }}
                >
                  w
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "250ms" }}
                >
                  o
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "300ms" }}
                >
                  r
                </span>
                <span
                  className={`span ${montserrat.className}`}
                  style={{ transitionDelay: "350ms" }}
                >
                  d
                </span>
              </label>
            </div>
            <button
              className="w-full h-11 bg-[#75D4FF] rounded-2xl mt-14 active:scale-95"
              id="password"
            >
              <span className="text-[20px] font-[500]" id="togglePassword">
                Login
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
