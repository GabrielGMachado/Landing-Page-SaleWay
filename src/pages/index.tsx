import Image from "next/image"
import { CheckCircle, Star, Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react"
import NavBar from "@/components/navbar"
import ServicesBox from "@/components/services"
import HowToWork from "@/components/howtowork"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">

      <NavBar/>

      {/* Mobile Menu (hidden by default) */}
    

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-sky-500/20 -z-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Agência de <span className="text-sky-500">Tráfego Pago</span> Especializada
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
                Transformamos cliques em clientes para academias e fast-foods
              </p>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                O tráfego pago é uma estratégia de marketing digital onde empresas investem para atrair clientes através
                de anúncios online. Isso permite alcançar um público segmentado e aumentar as vendas de forma rápida e
                eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:justify-start">
                <a
                  href="#planos"
                  className="bg-sky-500 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-600 transition-colors shadow-lg"
                >
                  Ver Planos
                </a>
                <a
                  href="#contato"
                  className="bg-white text-sky-500 border-2 border-sky-500 px-8 py-3 rounded-full font-bold hover:bg-sky-50 transition-colors shadow-sm"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <Image
                  src="/SALEWAY-NOVO-AZUL.png"
                  alt="Marketing Digital"
                  width={200}
                  height={200}
                  className=" rounded-4xl z-10 md:w-80 not-md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas de tráfego pago para impulsionar seu negócio local e atrair mais clientes
              qualificados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <ServicesBox
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              title="Gestão de Campanhas"
              desc="Criamos e gerenciamos campanhas de anúncios otimizadas para Facebook, Instagram e Google Ads, focadas em
                  resultados."
            />

            {/* Service 2 */}
            <ServicesBox
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              title="Produção de Conteúdo"
              desc="Desenvolvemos roteiros e editamos vídeos persuasivos que convertem visualizações em clientes reais para
                  seu negócio."
            />

            {/* Service 3 */}
            <ServicesBox
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            title="Estratégia Completa"
            desc="Desenvolvemos estratégias personalizadas de marketing digital que alinham seus objetivos de negócio com
                as melhores práticas do mercado."
            />

          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Como Trabalhamos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa metodologia é focada em resultados e transparência, garantindo que você acompanhe cada etapa do
              processo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <HowToWork
              n={1}
              title="Análise"
              desc="Estudamos seu negócio, concorrência e público-alvo para entender as melhores oportunidades."
            />

            {/* Step 2 */}
            <HowToWork
              n={2}
              title="Estratégia"
              desc="Desenvolvemos um plano personalizado com objetivos claros e métricas de sucesso definidas."
            />

            {/* Step 3 */}
            <HowToWork
            n={3}
            title="Execução"
            desc="Implementamos as campanhas, criamos conteúdos e monitoramos o desempenho em tempo real."/>

            {/* Step 4 */}
           <HowToWork
           n={4}
           title="Otimização"
           desc="Analisamos os resultados e otimizamos continuamente para maximizar seu retorno sobre investimento."/> 
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="planos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Planos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio e comece a atrair mais clientes hoje mesmo.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition flex-1 transform hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Plano Essencial</h3>
              <p className="text-gray-600 mb-6 h-12">O mínimo necessário para começar a vender mais com tráfego pago</p>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-800">R$ 2.000</span>
                <span className="text-gray-500 ml-2">/mês</span>
              </div>
              <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                R$ 1.000 investidos em anúncios
              </p>
              <ul className="space-y-3 mb-8 text-black/70">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Gestão de tráfego</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Estratégias de marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Análise de público</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Relatórios semanais</span>
                </li>
              </ul>
              <a
                href="#contato"
                className="block w-full py-3 px-4 bg-white border-2 border-gray-800 text-gray-800 font-bold rounded-lg text-center hover:bg-gray-800 hover:text-white transition-colors"
              >
                Marcar Reunião
              </a>
            </div>

            {/* Plan 2 (Featured) */}
            <div className="bg-white rounded-2xl p-8 border-2 border-sky-500 shadow-xl hover:shadow-2xl transition flex-1 transform scale-105 hover:-translate-y-1 duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Plano SaleWay</h3>
              <p className="text-gray-600 mb-6 h-12">
                Tudo que você precisa para vender mais através de anúncios online
              </p>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-sky-500">R$ 3.000</span>
                <span className="text-gray-500 ml-2">/mês</span>
              </div>
              <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                R$ 1.000 investidos em anúncios
              </p>
              <ul className="space-y-3 mb-8 text-black/70">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tudo do plano essencial</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Criação de roteiros</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Edição de vídeo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Posicionamento online</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <a
                href="#contato"
                className="block w-full py-3 px-4 bg-sky-500 text-white font-bold rounded-lg text-center hover:bg-sky-600 transition-colors shadow-md"
              >
                Marcar Reunião
              </a>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition flex-1 transform hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Plano Criativo</h3>
              <p className="text-gray-600 mb-6 h-12">Feito para quem quer alguém para criar seus roteiros e editar</p>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-800">R$ 2.700</span>
                <span className="text-gray-500 ml-2">/mês</span>
              </div>
              <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                R$ 1.000 investidos em anúncios
              </p>
              <ul className="space-y-3 mb-8 text-black/70">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tudo do plano essencial</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Criação de roteiros</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Edição de vídeo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Consultoria mensal</span>
                </li>
              </ul>
              <a
                href="#contato"
                className="block w-full py-3 px-4 bg-white border-2 border-gray-800 text-gray-800 font-bold rounded-lg text-center hover:bg-gray-800 hover:text-white transition-colors"
              >
                Marcar Reunião
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Resultados Comprovados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja como ajudamos nossos clientes a alcançarem resultados extraordinários com nossas estratégias de
              tráfego pago.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Result Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-sky-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-sky-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Academia Fitness</h3>
                    <p className="text-gray-500">São Paulo, SP</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Novos alunos</span>
                  <span className="text-green-500 font-bold">+147%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">ROI</span>
                  <span className="text-green-500 font-bold">3.8x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Custo por lead</span>
                  <span className="text-green-500 font-bold">-32%</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 italic">
                  "A SaleWay transformou nossa estratégia digital. Conseguimos atrair o público certo e aumentar
                  significativamente nossas matrículas."
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            {/* Result Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-sky-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-sky-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Burger House</h3>
                    <p className="text-gray-500">Rio de Janeiro, RJ</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Pedidos online</span>
                  <span className="text-green-500 font-bold">+215%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">ROI</span>
                  <span className="text-green-500 font-bold">4.2x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Ticket médio</span>
                  <span className="text-green-500 font-bold">+18%</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 italic">
                  "Desde que começamos a trabalhar com a SaleWay, nossas vendas online dispararam. A equipe entende
                  perfeitamente nosso público-alvo."
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            {/* Result Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-sky-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-sky-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Fit Club</h3>
                    <p className="text-gray-500">Belo Horizonte, MG</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Conversões</span>
                  <span className="text-green-500 font-bold">+178%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">ROI</span>
                  <span className="text-green-500 font-bold">3.5x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Retenção</span>
                  <span className="text-green-500 font-bold">+42%</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 italic">
                  "A equipe da SaleWay entregou resultados muito além das nossas expectativas. Recomendo para qualquer
                  academia que queira crescer."
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira os depoimentos de clientes que transformaram seus negócios com nossas estratégias de tráfego pago.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-sky-50 rounded-xl p-8 shadow-sm">
              <div className="flex mb-6">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "A SaleWay revolucionou nossa presença online. Em apenas 3 meses, dobramos o número de alunos na
                academia e melhoramos significativamente nossa taxa de retenção."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-sky-600 font-bold">RM</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Ricardo Mendes</h4>
                  <p className="text-gray-500 text-sm">Proprietário, Academia Power Fit</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-sky-50 rounded-xl p-8 shadow-sm">
              <div className="flex mb-6">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "Investir na SaleWay foi a melhor decisão que tomamos para nosso restaurante. Os anúncios são
                extremamente eficazes e o ROI superou todas as nossas expectativas."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-sky-600 font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Ana Silva</h4>
                  <p className="text-gray-500 text-sm">Gerente, Burger Express</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-sky-50 rounded-xl p-8 shadow-sm">
              <div className="flex mb-6">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "A equipe da SaleWay não só entende de tráfego pago, mas também compreende profundamente o mercado de
                academias. Isso fez toda a diferença nos resultados."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-sky-600 font-bold">PL</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Pedro Lima</h4>
                  <p className="text-gray-500 text-sm">Diretor, Elite Fitness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e como podemos ajudar seu negócio a crescer.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quanto tempo leva para ver resultados?</h3>
                <p className="text-gray-600">
                  Normalmente, nossos clientes começam a ver resultados significativos entre 2 a 4 semanas após o início
                  das campanhas. No entanto, isso pode variar dependendo do setor, concorrência e orçamento de anúncios.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Qual é o investimento mínimo em anúncios recomendado?
                </h3>
                <p className="text-gray-600">
                  Recomendamos um investimento mínimo de R$ 1.000 por mês em anúncios para obter resultados
                  consistentes. Este valor permite testar diferentes públicos e formatos de anúncios para otimizar o
                  desempenho.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Vocês trabalham com contratos de fidelidade?</h3>
                <p className="text-gray-600">
                  Não exigimos contratos de longo prazo. Trabalhamos com renovação mensal, pois acreditamos que nossos
                  resultados falarão por si. No entanto, recomendamos um período mínimo de 3 meses para obter resultados
                  consistentes.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Como funciona o processo de criação de conteúdo?
                </h3>
                <p className="text-gray-600">
                  Nossa equipe desenvolve roteiros personalizados baseados no seu público-alvo e objetivos de negócio.
                  Após sua aprovação, realizamos a edição dos vídeos, otimizando-os para as plataformas de
                  anúncios.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quais plataformas de anúncios vocês utilizam?</h3>
                <p className="text-gray-600">
                  Trabalhamos principalmente com Facebook Ads, Instagram Ads e Google Ads, mas também podemos incluir
                  TikTok Ads e YouTube Ads dependendo do seu público-alvo e objetivos de marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Entre em Contato</h2>
              <p className="text-gray-600 mb-8">
                Estamos prontos para ajudar seu negócio a crescer com estratégias de tráfego pago eficientes. Preencha o
                formulário ou entre em contato diretamente pelos nossos canais.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-sky-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">(11) 9 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-sky-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">contato@saleway.com.br</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-sky-100 p-3 rounded-full mr-4">
                    <Instagram className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Instagram</h3>
                    <p className="text-gray-600">@saleway.marketing</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-gray-800 mb-4">Siga-nos nas redes sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-sky-100 p-3 rounded-full hover:bg-sky-200 transition-colors">
                    <Instagram className="h-6 w-6 text-sky-500" />
                  </a>
                  <a href="#" className="bg-sky-100 p-3 rounded-full hover:bg-sky-200 transition-colors">
                    <Facebook className="h-6 w-6 text-sky-500" />
                  </a>
                  <a href="#" className="bg-sky-100 p-3 rounded-full hover:bg-sky-200 transition-colors">
                    <Linkedin className="h-6 w-6 text-sky-500" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma mensagem</h3>
                <form>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                        placeholder="(00) 0 0000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="business" className="block text-gray-700 font-medium mb-2">
                        Tipo de Negócio
                      </label>
                      <select
                        id="business"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="academia">Academia</option>
                        <option value="restaurante">Restaurante/Fast-food</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                        placeholder="Como podemos ajudar seu negócio?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors shadow-md"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Equipe SaleWay"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl z-10 not-md:hidden"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sobre a SaleWay</h2>
              <p className="text-gray-600 mb-6">
                Somos uma agência de tráfego pago especializada em negócios locais, com foco em academias e restaurantes
                fast-food. Nossa missão é ajudar pequenos e médios empreendedores a conquistarem mais clientes através
                de estratégias digitais eficientes.
              </p>
              <p className="text-gray-600 mb-6">
                Fundada em 2020, a SaleWay nasceu da percepção de que muitos negócios locais enfrentam dificuldades para
                se destacar no ambiente digital. Combinamos conhecimento técnico em marketing digital com profunda
                compreensão dos setores em que atuamos.
              </p>
              <p className="text-gray-600 mb-8">
                Nossa equipe é formada por especialistas em marketing digital, produção de conteúdo e análise de dados,
                todos comprometidos com o crescimento do seu negócio.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-3xl font-bold text-sky-500 mb-2">50+</h3>
                  <p className="text-gray-600 text-sm">Clientes Atendidos</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-3xl font-bold text-sky-500 mb-2">3.5x</h3>
                  <p className="text-gray-600 text-sm">ROI Médio</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-3xl font-bold text-sky-500 mb-2">12</h3>
                  <p className="text-gray-600 text-sm">Especialistas</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-3xl font-bold text-sky-500 mb-2">4</h3>
                  <p className="text-gray-600 text-sm">Anos de Experiência</p>
                </div>
              </div>

              <a
                href="#contato"
                className="inline-flex items-center bg-sky-500 text-white px-6 py-3 rounded-full font-bold hover:bg-sky-600 transition-colors shadow-md"
              >
                Conheça Nossa Equipe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar seu Negócio?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Agende uma consulta gratuita e descubra como podemos ajudar seu negócio a atrair mais clientes com tráfego
            pago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="bg-white text-sky-500 px-8 py-3 rounded-full font-bold hover:bg-sky-50 transition-colors shadow-lg"
            >
              Agendar Consulta Gratuita
            </a>
            <a
              href="#planos"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-white p-2 rounded-full">
                  <Image
                    src="/SALEWAY.png"
                    alt="SaleWay Logo"
                    width={35}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-white text-2xl font-bold">SaleWay</h2>
              </div>
              <p className="text-gray-400 mb-6">Transformando cliques em clientes para seu negócio local.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#planos" className="text-gray-400 hover:text-white transition-colors">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#resultados" className="text-gray-400 hover:text-white transition-colors">
                    Resultados
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Serviços</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Facebook Ads
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Instagram Ads
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Google Ads
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Produção de Conteúdo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Consultoria
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-sky-500 mr-2" />
                  <span className="text-gray-400">(11) 9 9999-9999</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-sky-500 mr-2" />
                  <span className="text-gray-400">contato@saleway.com.br</span>
                </li>
                <li className="flex items-center">
                  <Instagram className="h-5 w-5 text-sky-500 mr-2" />
                  <span className="text-gray-400">@saleway.marketing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">&copy; 2024 SaleWay - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

