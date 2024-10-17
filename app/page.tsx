import Image from "next/image";
import Footer from "@/app/layout"

export default function Home() {
  return (
    <div>
      <header>
        <nav className="flex w-full bg-black h-28 items-center">
          <div className="bg-purple-300 w-72 h-10"> </div>

          <div className="flex justify-end w-4/5 items-center gap-1">
            <div className="bg-red-700 h-10 w-40 text-center text-2xl font-bold">
              <h1>HOME</h1>
            </div>
            <div className="bg-red-500 h-10 w-40 text-center text-2xl font-bold">
              <h1>ABOUT us</h1>
            </div>
            <div className="bg-red-300 h-10 w-40 text-center text-2xl font-bold">
              <h1>PORTFOLIO</h1>
            </div>
            <div className="bg-red-200 h-10 w-40 text-center text-2xl font-bold">
              <h1>PRODUCTS</h1>
            </div>
            <div className="bg-red-100 h-10 w-40 text-center text-xl font-bold">
              <h1>GET CONNECT</h1>
            </div>
          </div>
        </nav>
        <br /> <br />
      </header>

      <div className="flex justify-center gap-4">

        <Image className="bg-gray-700 shadow-lg shadow-gray-700/50 rounded-lg 
            border-spacing-3 border-slate-900" src="/images/3-flexbox.jpg" alt=""
          width={400} height={300}>
        </Image>

        <Image className="bg-gray-700 shadow-lg shadow-gray-700/50 rounded-lg 
            border-spacing-3 border-slate-900" src="/images/5-flexbox.jpg" alt=""
          width={400} height={300}>
        </Image>

        <Image className="bg-gray-700 shadow-lg shadow-gray-700/50 rounded-lg 
          border-spacing-3 border-slate-900" src="/images/4-flexbox.jpg" alt=""
          width={400} height={300}>
        </Image>
      </div> <br /> <br />

      <div className="flex justify-center gap-4">

        <Image className="bg-gray-700 shadow-lg shadow-gray-700/50 rounded-lg 
        border-spacing-3 border-slate-900"
          src="/images/flexbox.webp" alt="fashion-image"
          width={450} height={350}>
        </Image>

        <Image className="bg-gray-700 shadow-lg shadow-gray-700/50 rounded-lg 
        border-spacing-3 border-slate-900" src="/images/2-flexbox.png" alt=""
          width={450} height={350}>
        </Image>
      </div>
      <br /> <br />

      <div>
        <footer>
          <div className="flex w-full justify-center items-center bg-emerald-950 h-16 text-white">
            SABREENA ZAHID ALI | @Alright reserved copyright 2024
          </div>
        </footer>
      </div>

    </div>

  )
}
