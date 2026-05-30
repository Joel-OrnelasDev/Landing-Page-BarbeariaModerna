{/* BOOKING */}
<section className="py-32 px-6 bg-[#0a0a0a] overflow-hidden">

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >

      <p className="uppercase tracking-[6px] text-yellow-600 text-sm mb-4">
        Agendamento
      </p>

      <h2 className="text-5xl md:text-7xl mb-6">
        Reserve seu horário
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Escolha seu serviço, barbeiro e horário disponível de forma rápida e elegante.
      </p>

    </motion.div>

    {/* BOOKING CARD */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#111] border border-white/10 rounded-[40px] p-10 md:p-16"
    >

      <div className="grid lg:grid-cols-2 gap-16">

        {/* FORM */}
        <div>

          <h3 className="text-4xl mb-10">
            Agendar Atendimento
          </h3>

          <div className="space-y-6">

            {/* SERVIÇO */}
            <div>

              <label className="block mb-3 text-sm uppercase tracking-[3px] text-gray-400">
                Serviço
              </label>

              <select className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-600 transition">

                <option>Corte Premium</option>
                <option>Barba Completa</option>
                <option>Combo Imperial</option>

              </select>

            </div>

            {/* BARBEIRO */}
            <div>

              <label className="block mb-3 text-sm uppercase tracking-[3px] text-gray-400">
                Barbeiro
              </label>

              <select className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-600 transition">

                <option>João</option>
                <option>Carlos</option>
                <option>Marcos</option>

              </select>

            </div>

            {/* DATA */}
            <div>

              <label className="block mb-3 text-sm uppercase tracking-[3px] text-gray-400">
                Data
              </label>

              <input
                type="date"
                className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-600 transition"
              />

            </div>

          </div>

        </div>

        {/* HORÁRIOS */}
        <div>

          <h3 className="text-4xl mb-10">
            Horários Disponíveis
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-10">

            {[
              "09:00",
              "09:30",
              "10:00",
              "10:30",
              "11:00",
              "11:30",
              "14:00",
              "14:30",
            ].map((time, index) => (

              <button
                key={index}
                className="border border-white/10 hover:border-yellow-600 hover:bg-yellow-600 hover:text-black transition rounded-2xl py-5"
              >
                {time}
              </button>

            ))}

          </div>

          {/* BOTÃO */}
          <button className="w-full bg-yellow-600 hover:bg-yellow-500 transition py-5 rounded-full text-black font-semibold text-lg">
            Confirmar Agendamento
          </button>

        </div>

      </div>

    </motion.div>

  </div>

</section>