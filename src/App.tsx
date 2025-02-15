import logo from "../public/logo.svg";
import heroOne from "../public/heroOne.png";
import heroTwo from "../public/heroTwo.png";
import heroThree from "../public/heroThree.png";
import aboutUs from "../public/aboutUs.png";
import openDoor from "../public/openDoor.png";
import openLocker from "../public/openLocker.png";
import openVehicle from "../public/openVehicle.png";
import changeAndRepair from "../public/changeAndRepair.png";
import contact from "../public/contact.png";
export default function App() {
  return (
    <body id="home" className="bg-stone-200/60 space-y-10 px-5 md:px-10 py-1 md:pt-5 lg:px-20">
      <header className="sticky top-2 z-20 flex items-center justify-center md:text-left md:justify-between rounded-xl fill-stone-800 bg-stone-200 drop-shadow stroke-white/5 lg:px-10 md:px-5 px-6 py-5 text-blue-700">
        <a href="#home" className="flex items-center gap-10 md:gap-2 lg:gap-5">
          <img src={logo} alt="" />
          <div>
            <h1 className="md:text-3xl text-2xl font-semibold">
              Chaveiro Oliveira
            </h1>
            <p className="text-sm font-medium">
              24 Horas - Serviços Residenciais e Veiculares
            </p>
          </div>
        </a>
        <nav>
          <ul className="md:flex hidden gap-2 lg:gap-4 font-semibold ">
            <li className="group">
              <a href="#aboutUs">Sobre Nós</a>
              <div className=" bg-blue-700 h-px w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </li>
            <li className="group">
              <a href="#services">Serviços</a>
              <div className=" bg-blue-700 h-px w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </li>
            <li className="group">
              <a href="#contact">Contato</a>
              <div className=" bg-blue-700 h-px w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </li>
          </ul>
        </nav>
      </header>
      <section className="relative lg:h-[560px] h-[400px]  text-center flex items-center justify-center">
        <img
          className="absolute z-0 top-0 lg:left-10 left-5  w-32 lg:w-auto"
          src={heroOne}
          alt=""
        />
        <img
          className="absolute z-0 bottom-0 md:left-40 left-20 w-32 lg:w-auto"
          src={heroTwo}
          alt=""
        />
        <img
          className="absolute z-0 top-2 right-4 w-28 lg:w-auto"
          src={heroThree}
          alt=""
        />
        <div className="z-10 md:flex flex-col gap-5">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-blue-700">
            Nós o apoiamos
          </h1>
          <p className="md:text-xl font-medium text-blue-700">
            Quando se trata de abrir a fechadura.
          </p>
        </div>
      </section>
      <main className=" space-y-10">
        <section
          id="aboutUs"
          className="flex gap-5 justify-between text-blue-700 lg:mt-32 scroll-mt-16 lg:py-24"
        >
          <img className="hidden xl:block" src={aboutUs} alt="" />
          <aside className="lg:space-y-7 space-y-5 bg-[#E9EAD6] rounded-xl p-10 ">
            <div className="flex items-center gap-5">
              <div className="w-10 h-[2px] bg-blue-700"></div>
              <p className="md:text-xl text-lg font-semibold uppercase">Sobre Nós</p>
            </div>
            <h1 className="text-2xl lg:text-5xl font-semibold">
              Trabalhando em conjunto com você para simplificar sua vida
            </h1>
            <p className="text-lg font-medium">
              Somos um serviço de chaveiro com tradição e excelência, inspirados
              nos valores da Família Oliveira. Oferecemos serviços de abertura
              de portas residenciais, veículos e cofres, disponíveis 24 horas
              por dia, garantindo qualidade e segurança para nossos clientes.
            </p>
          </aside>
        </section>
      </main>
      <main className="bg-[#EBE4DE] lg:mx-[-80px] md:mx-[-40px] mx-[-20px] px-10">
        <section
          id="services"
          className="space-y-10 lg:py-24 lg:mx-20 py-10 justify-between text-blue-700 scroll-mt-28"
        >
          <div className="flex items-center gap-5">
            <div className="w-10 h-[2px] bg-blue-700"></div>
            <p className="md:text-xl text-lg font-semibold uppercase">Serviços</p>
          </div>
          <h1 className="text-2xl lg:text-5xl font-semibold">
            Confira os serviços que oferecemos:
          </h1>
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <li className="flex gap-5 p-5 bg-[#B9DDFF] rounded-xl">
              <img className="hidden xl:block" src={openDoor} alt="" />
              <div className="space-y-4">
                <h1 className="font-semibold md:text-4xl text-2xl ">
                  Abertura de portas residenciais
                </h1>
                <p className="md:text-xl">
                  Se ficou trancado do lado de fora de casa, nós estamos aqui
                  para ajudar! Oferecemos um serviço rápido, eficiente e seguro
                  para a abertura de portas residenciais. Utilizamos técnicas
                  modernas que preservam a integridade das fechaduras e garantem
                  sua tranquilidade.
                </p>
              </div>
            </li>
            <li className="flex gap-5 p-5 bg-[#9DEAB3] rounded-xl">
              <img className="hidden xl:block" src={openVehicle} alt="" />
              <div className="space-y-4">
                <h1 className="font-semibold md:text-4xl text-2xl ">Abertura de veículos</h1>
                <p className="md:text-xl">
                  Perdeu a chave do carro ou esqueceu ela dentro do veículo? Não
                  se preocupe! Contamos com ferramentas especializadas para
                  abrir seu veículo com rapidez e sem causar danos, atendendo a
                  diversos modelos e marcas.
                </p>
              </div>
            </li>
            <li className="flex gap-5 p-5 bg-[#F6B4AF] rounded-xl">
              <img className="hidden xl:block" src={openLocker} alt="" />
              <div className="space-y-4">
                <h1 className="font-semibold md:text-4xl text-2xl ">Abertura de cofres</h1>
                <p className="md:text-xl">
                  Se perdeu o acesso ao cofre, nossa equipe está pronta para
                  ajudar. Oferecemos soluções para a abertura de cofres com
                  técnicas avançadas e seguras, garantindo que você recupere o
                  que é importante sem comprometer o equipamento.
                </p>
              </div>
            </li>
            <li className="flex gap-5 p-5 bg-[#EAF475] rounded-xl">
              <img className="hidden xl:block" src={changeAndRepair} alt="" />
              <div className="space-y-4">
                <h1 className="font-semibold md:text-4xl text-2xl ">
                  Troca de fechaduras e reparos
                </h1>
                <p className="md:text-xl">
                  Precisa aumentar a segurança do seu imóvel ou consertar uma
                  fechadura danificada? Realizamos troca de fechaduras, reparos
                  e ajustes com materiais de alta qualidade e garantia de
                  serviço. Oferecemos consultoria para escolher a melhor solução
                  para sua segurança.
                </p>
              </div>
            </li>
          </ul>
        </section>
        
        <section
          id="contact"
          className="flex gap-20 lg:mx-20 py-10  justify-between text-blue-700 lg:py-24"
        >
          <img className="hidden xl:block" src={contact} alt="" />
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              Precisa de ajuda urgente?
            </h1>
            <p className="md:text-2xl font-medium">
              Estamos disponíveis 24 horas por dia para atender você. Clique no
              botão abaixo ou entre em contato pelo número{" "}
              <span className="font-semibold">+351 912 845 736</span>.
            </p>
            <button className="bg-blue-700 text-zinc-50 rounded-xl px-5 py-3">
              <a href="https://wa.me/351928227021" target="_blank">
                Fale conosco no WhatsApp
              </a>
            </button>
          </div>
        </section>
      <footer className="text-center rounded px-10 py-5 text-blue-700">
        <p>© 2023 Chaveiro Oliveira. Todos os direitos reservados.</p>
      </footer>
      </main>
    </body>
  );
}
