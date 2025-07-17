// import Image from "next/image";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa6";
import * as motion from "motion/react-client"

export default function Home() {
  return (
    <div className="flex justify-center font-[Albert_Sans]">
      {/* <header className="w-full lg:w-7xl m-2 lg:m-4">
        <div className="flex items-center">
          <Image 
            src="/clair-de-lune.svg"
            alt="Clair de Lune Logo"
            width={75}
            height={75}
            priority
          />
          <h1 className="uppercase font-medium text-[24px] tracking-[2px] ml-[6px] mr-[6px] leading-[20px]">
            Clair de Lune
            <span className="flex text-[12px] items-center">
              <span className="inline-block w-[27px] max-h-px border border-white mr-[4px]" />
              Salão de beleza
              <span className="inline-block w-[27px] max-h-px border border-white ml-[4px]" />
            </span>
          </h1>
        </div>
        <menu>
          <li><button>Agendar</button></li>
          <li><button>Clube</button></li>
          <li><button><FaFacebook /></button></li>
          <li><button><FaInstagram /></button></li>
          <li><button><FaWhatsapp /></button></li>
        </menu>
      </header> */}
      <main className="w-full h-screen bg-linear-to-r from-[var(--theme-color-3)] to-[var(--theme-color-2)] flex items-center">
      <motion.p initial={{ opacity: 0, x:-300 }}
           whileInView={{x:10, opacity: 1, transition: { duration: 2 }}
    } className="text-6xl ">O Primeiro <strong>Salão de Beleza</strong><br />por assinatura de<br />Pedra de Guaratiba</motion.p>
      </main>
      <footer>
      </footer>
    </div>
  );
}
