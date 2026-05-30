import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/30">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-3xl text-yellow-600">
            Imperial
          </h1>

          {/* MENU */}
          <nav className="hidden lg:flex gap-10 text-sm uppercase tracking-[3px]">

            <a href="#home" className="hover:text-yellow-500 transition">
              Home
            </a>

          <a href="#servicos" className="hover:text-yellow-500 transition">
              Serviços
          </a>

            <a href="#galeria" className="hover:text-yellow-500 transition">
              Galeria
            </a>

            <a href="#sobre" className="hover:text-yellow-500 transition">
              Sobre
            </a>

           

            <a href="#contato" className="hover:text-yellow-500 transition">
              Contato
            </a>

          </nav>

          {/* BOTÃO */}
 <a
  href="https://wa.me/5533999999999"
  target="_blank"
  rel="noreferrer"
  className="bg-yellow-600 hover:bg-yellow-500 transition text-black px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center gap-2"
>
  <FaWhatsapp />

  <span className="hidden sm:inline">
    Agendar pelo WhatsApp
  </span>

  <span className="sm:hidden">
    Agendar
  </span>
</a>

        </div>

      </header>

      {/* HERO */}
      <section
  id="home"
  className="relative min-h-screen flex items-center px-6 overflow-hidden"
>

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1974&auto=format&fit=crop"
            alt="Barber"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-black/70"></div>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">

          <div className="max-w-3xl w-full">

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[6px] text-yellow-600 mb-6 text-sm"
            >
              Luxury Barber Shop
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight mb-8"
            >
              Style Meets Precision
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              Cortes premium, barba profissional e uma experiência sofisticada para homens modernos que valorizam presença e estilo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >

             <a
  href="https://wa.me/5533SEUNUMERO"
  target="_blank"
  rel="noreferrer"
  className="bg-yellow-600 hover:bg-yellow-500 transition px-8 py-4 rounded-full text-black font-semibold"
>
  Agendar 
</a>

<a
  href="#galeria"
  className="border border-white/20 hover:border-yellow-500 hover:text-yellow-500 transition px-8 py-4 rounded-full"
>
  Conhecer Espaço
</a>
            </motion.div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
<section
  id="servicos"
  className="py-32 px-6 bg-[#0a0a0a] scroll-mt-24"
>

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="text-center mb-20">

      <p className="uppercase tracking-[6px] text-yellow-600 text-sm mb-4">
        Serviços Premium
      </p>

      <h2 className="text-4xl sm:text-5xl md:text-7xl">
        Seu estilo merece excelência
      </h2>

    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Corte Premium",
          price: "R$45",
          desc: "Cortes modernos e clássicos com acabamento profissional."
        },

        {
          title: "Barba Completa",
          price: "R$35",
          desc: "Modelagem completa com toalha quente e navalha."
        },

        {
          title: "Combo Imperial",
          price: "R$70",
          desc: "Corte + barba com experiência premium completa."
        }

      ].map((service, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-white/10 rounded-[30px] p-10 hover:border-yellow-600 transition duration-500"
        >

          <div className="text-yellow-600 text-5xl mb-8">
            ✂
          </div>

          <h3 className="text-2xl md:text-4xl mb-4">
            {service.title}
          </h3>

          <p className="text-yellow-600 text-2xl mb-6">
            {service.price}
          </p>

          <p className="text-gray-400 leading-relaxed mb-10">
            {service.desc}
          </p>

                  <a
  href="https://wa.me/5533SEUNUMERO"
  target="_blank"
  rel="noreferrer"
  className="bg-yellow-600 hover:bg-yellow-500 transition px-8 py-4 rounded-full text-black font-semibold"
>
  Agendar 
</a>

        </motion.div>

      ))}

    </div>

  </div>

</section>




{/* ABOUT */}
<section
  id="sobre"
  className="py-24 md:py-32 px-6 bg-black scroll-mt-24"
>

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

    {/* IMAGEM */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >

      <img
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1974&auto=format&fit=crop"
        alt="Barbearia"
        className="rounded-[30px] h-[350px] sm:h-[500px] md:h-[700px] w-full object-cover"
      />

      {/* CARD FLUTUANTE */}
      <div className="absolute bottom-10 left-10 bg-[#111] border border-white/10 backdrop-blur-md rounded-3xl p-8">

        <h3 className="text-5xl text-yellow-600 mb-2">
          +10k
        </h3>

        <p className="text-gray-400 uppercase tracking-[3px] text-sm">
          Clientes atendidos
        </p>

      </div>

    </motion.div>

    {/* TEXTO */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <p className="uppercase tracking-[6px] text-yellow-600 text-sm mb-6">
        Sobre Nós
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-none mb-8">
        Tradição, estilo e excelência masculina
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed mb-8">
        Nossa barbearia combina tradição clássica com tendências modernas para oferecer uma experiência sofisticada e personalizada.
      </p>

      <p className="text-gray-400 text-lg leading-relaxed mb-12">
        Cada detalhe do ambiente foi pensado para homens que valorizam presença, estilo e atendimento premium.
      </p>

      {/* ESTATÍSTICAS */}
      <div className="grid grid-cols-2 gap-8">

        <div>
          <h3 className="text-5xl text-yellow-600 mb-3">
            5+
          </h3>

          <p className="text-gray-400 uppercase tracking-[3px] text-sm">
            Anos de experiência
          </p>
        </div>

        <div>
          <h3 className="text-5xl text-yellow-600 mb-3">
            4.9★
          </h3>

          <p className="text-gray-400 uppercase tracking-[3px] text-sm">
            Avaliação média
          </p>
        </div>

      </div>

    </motion.div>

  </div>

</section>



{/* GALERIA */}
<section
  id="galeria"
  className="py-32 px-6 bg-black overflow-hidden"
>
  <div className="max-w-7xl mx-auto">

    {/* TÍTULO */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="uppercase tracking-[6px] text-yellow-600 text-sm mb-4">
        Nossa Estrutura
      </p>

      <h2 className="text-5xl md:text-7xl mb-6">
        Conheça Nosso Espaço
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto text-lg">
        Um ambiente sofisticado criado para proporcionar conforto,
        estilo e uma experiência premium em cada atendimento.
      </p>
    </motion.div>

    {/* GRID DE IMAGENS */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200",
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200",
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200",
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200",
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200",
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200"
      ].map((image, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.1
          }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[30px]"
        >
          <img
            src={image}
            alt="Barbearia Imperial"
            className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

          <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
            <h3 className="text-2xl text-white mb-2">
              Imperial Barber
            </h3>

            <p className="text-gray-300">
              Ambiente premium e atendimento exclusivo.
            </p>
          </div>
        </motion.div>

      ))}

    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mt-20"
    >
      <a
        href="https://wa.me/5533999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário."
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-yellow-600 hover:bg-yellow-500 transition px-10 py-5 rounded-full text-black font-semibold text-lg"
      >
        Agendar pelo WhatsApp
      </a>
    </motion.div>

  </div>
</section>


{/* FOOTER */}
<footer
  id="contato"
  className="bg-black border-t border-white/10 py-16 px-6"
>

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* LOGO */}
      <div>

        <h3 className="text-3xl text-yellow-600 mb-4">
          Imperial
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Barbearia premium para homens que valorizam estilo, presença e excelência.
        </p>

      </div>

      {/* LINKS */}
      <div>

        <h4 className="text-xl mb-4">
          Navegação
        </h4>

        <ul className="space-y-3 text-gray-400">

         <li><a href="#home">Home</a></li>
<li><a href="#sobre">Sobre</a></li>
<li><a href="#servicos">Serviços</a></li>
<li><a href="#contato">Contato</a></li>
<li><a href="#galeria">Galeria</a></li>

        </ul>

      </div>

      {/* HORÁRIOS */}
      <div>

        <h4 className="text-xl mb-4">
          Horários
        </h4>

        <ul className="space-y-3 text-gray-400">

          <li>Seg - Sex: 09h às 19h</li>
          <li>Sábado: 09h às 18h</li>
          <li>Domingo: Fechado</li>

        </ul>

      </div>

      {/* CONTATO */}
      <div>

        <h4 className="text-xl mb-4">
          Contato
        </h4>

        <ul className="space-y-3 text-gray-400">

          <li>(00) 99999-9999</li>
          <li>contato@imperial.com</li>
          <li>Teófilo Otoni - MG</li>

        </ul>

      </div>

    </div>

    {/* LINHA */}
    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-gray-500 text-sm">
        © 2026 Imperial Barber Shop. Todos os direitos reservados.
      </p>

      <a
        href="https://joelornelas.dev"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-600 hover:text-yellow-500 transition text-sm"
      >
        Desenvolvido por Joel Ornelas
      </a>

    </div>

  </div>

</footer>

    </main>
  );
}

export default App;
