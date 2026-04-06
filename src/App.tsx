/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, FormEvent } from "react";

const SERVICES = [
  {
    icon: "gavel",
    title: "Assessoria Jurídica",
    description: "Defesa dos direitos trabalhistas e orientação jurídica especializada para o cuidador.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "school",
    title: "Cursos e Capacitação",
    description: "Programas de atualização profissional e certificações para valorizar seu currículo.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "payments",
    title: "Convênios e Benefícios",
    description: "Descontos exclusivos em farmácias, exames, lazer e serviços para nossos associados.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "groups",
    title: "Representação Sindical",
    description: "Voz ativa nas negociações coletivas e na busca por melhores condições de trabalho.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "health_and_safety",
    title: "Saúde do Trabalhador",
    description: "Apoio psicológico e orientações sobre ergonomia e segurança no ambiente de trabalho.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "newspaper",
    title: "Informativos e Notícias",
    description: "Fique por dentro de todas as mudanças na legislação e eventos da categoria.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"
  },
];

const TESTIMONIALS = [
  {
    text: "Desde que me associei, me sinto muito mais segura. O suporte jurídico foi fundamental para resolver uma questão pendente.",
    name: "Cláudia Rocha",
    role: "Cuidadora Associada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    text: "Os cursos de capacitação do sindicato me ajudaram a conseguir melhores oportunidades. A valorização é real.",
    name: "Ricardo Santos",
    role: "Cuidador Profissional",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    text: "Os convênios em farmácias e clínicas ajudam muito no orçamento mensal. Vale muito a pena fazer parte.",
    name: "Sônia Mendes",
    role: "Associada há 2 anos",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

const CAROUSEL_IMAGES = [
  { url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&h=600&q=80", alt: "Profissional de saúde prestando atendimento" },
  { url: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&h=600&q=80", alt: "Cuidadora sorridente com paciente" },
  { url: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&h=600&q=80", alt: "Mãos dadas simbolizando cuidado" },
  { url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&h=600&q=80", alt: "Equipe médica profissional" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [filiaForm, setFiliaForm] = useState({
    nome: '',
    telefone: '',
    experiencia: '',
    cidade: 'Ribeirão Preto'
  });

  const handleFiliaSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá! Quero me filiar ao Sindicato dos Cuidadores.
Meus dados:
Nome: ${filiaForm.nome}
Telefone: ${filiaForm.telefone}
Experiência: ${filiaForm.experiencia}
Cidade: ${filiaForm.cidade}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5516988068810?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);

  return (
    <div className="min-h-screen">
      {/* Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>
      {/* LGPD Cookie Banner */}
      {showCookieBanner && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 mb-2">Privacidade e Cookies (LGPD)</h4>
              <p className="text-sm text-slate-600">
                Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <a href="#" className="text-primary underline">Política de Privacidade</a> e o tratamento de dados conforme a Lei Geral de Proteção de Dados.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button 
                onClick={() => setShowCookieBanner(false)}
                className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all text-sm"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Fixed WhatsApp Button */}
      <motion.a
        href="https://wa.me/5516988068810?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20cuidadores.%20Vi%20o%20site%20de%20vocês."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
      </motion.a>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl normal-case">groups</span>
              </div>
              <span className="text-slate-900 text-xl font-bold tracking-tight">Sindicato Cuidadores</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              {["Início", "O Sindicato", "Benefícios", "Filie-se", "Contato"].map((item) => (
                <a
                  key={item}
                  href={item === "Início" ? "#inicio" : `#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:inline-flex items-center justify-center bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                href="https://wa.me/5516988068810?text=Olá!%20Gostaria%20de%20me%20filiar%20ao%20Sindicato%20dos%20Cuidadores.%20Vi%20o%20site%20de%20vocês."
                aria-label="Falar no WhatsApp"
              >
                Filie-se Agora
              </motion.a>
              <button 
                className="md:hidden text-slate-600 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                <span className="material-symbols-outlined normal-case">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-6 flex flex-col gap-4"
          >
            {["Início", "O Sindicato", "Benefícios", "Filie-se", "Contato"].map((item) => (
              <a
                key={item}
                href={item === "Início" ? "#inicio" : `#${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg font-semibold text-slate-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section id="inicio" className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:flex lg:items-center lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex flex-col gap-8 z-10"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-dark px-3 py-1 rounded-full text-xs font-bold tracking-wider w-fit">
                <span className="material-symbols-outlined text-sm normal-case">verified_user</span>
                <span className="uppercase">Referência em Ribeirão Preto</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                União e Força para os <span className="text-primary">Cuidadores Profissionais</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Representação legítima, defesa de direitos e valorização da categoria. Juntos somos mais fortes na busca por dignidade e reconhecimento profissional.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
                  href="#contato"
                >
                  Quero me Filiar
                  <span className="material-symbols-outlined normal-case">person_add</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-slate-200 text-slate-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all"
                  href="https://wa.me/5516988068810?text=Olá!%20Gostaria%20de%20me%20filiar%20ao%20Sindicato%20dos%20Cuidadores.%20Vi%20o%20site%20de%20vocês."
                >
                  Falar no WhatsApp
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-0 lg:w-1/2 relative"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbbxHbMYAru6Rxw7KNMQvBZ6E6r1mATZdPmH5d6pRgegNXY_0ON2x2aITqohjkfIzywUL9Z28DNwb0DFdfv8EDoByPb0kEnuKo7B8gUHJPX70_jRDUZQmp_LtOwUvbba_cxj192-hb4PLqE0vZ-N8VaPiEuY5pL6F0pZHWKz7mEUV8OiBLTWcJ8foSc0Qsmxj-xz2Olp947D12zVDRj_AI16jmwD5MvRg4FKskDNALiH6bVPzvVCJxp-IbbxpuCWH6JrzA6qSXIhE" 
                  alt="Cuidadora ajudando idosa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* O Sindicato */}
        <section id="o-sindicato" className="py-24 bg-background-light overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">O Sindicato</h2>
                <div className="w-20 h-1.5 bg-secondary rounded-full mb-6"></div>
                <p className="text-slate-600 text-lg mb-6">
                  Somos a entidade representativa dos Cuidadores Profissionais em Ribeirão Preto e região, lutando incansavelmente pela valorização e respeito à nossa categoria.
                </p>
                <p className="text-slate-600 mb-8">
                  Nossa missão é garantir que cada cuidador tenha seus direitos respeitados, acesso à formação contínua e suporte em todas as etapas de sua jornada profissional.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: "gavel", title: "Defesa Jurídica", desc: "Proteção total aos seus direitos trabalhistas.", color: "primary" },
                    { icon: "workspace_premium", title: "Valorização Profissional", desc: "Luta por pisos salariais e melhores condições.", color: "secondary-dark" },
                    { icon: "handshake", title: "União da Categoria", desc: "Juntos somos ouvidos pelo poder público e empresas.", color: "primary" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`size-10 bg-slate-200 text-${item.color} rounded-lg flex items-center justify-center shrink-0`}>
                        <span className="material-symbols-outlined text-2xl normal-case">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={CAROUSEL_IMAGES[currentSlide].url}
                      alt={CAROUSEL_IMAGES[currentSlide].alt}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading={currentSlide === 0 ? "eager" : "lazy"}
                    />
                  </AnimatePresence>
                  
                  {/* Carousel Controls */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={prevSlide}
                      className="size-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-all shadow-lg"
                      aria-label="Imagem anterior"
                    >
                      <span className="material-symbols-outlined normal-case">chevron_left</span>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="size-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-all shadow-lg"
                      aria-label="Próxima imagem"
                    >
                      <span className="material-symbols-outlined normal-case">chevron_right</span>
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {CAROUSEL_IMAGES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`size-2 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/50'}`}
                        aria-label={`Ir para imagem ${idx + 1}`}
                        aria-current={currentSlide === idx}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="benefícios" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Benefícios do Associado</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Ao se tornar um associado, você tem acesso a uma rede completa de suporte e vantagens exclusivas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 left-4 size-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-2xl normal-case">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                    <a className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm" href="#contato">
                      Saiba Mais <span className="material-symbols-outlined text-sm normal-case">arrow_forward</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-white" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight">Por que se filiar ao nosso sindicato?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Segurança Jurídica", desc: "Advogados prontos para defender seus direitos trabalhistas." },
                  { title: "Cursos Gratuitos", desc: "Acesso a workshops e treinamentos de atualização." },
                  { title: "Clube de Vantagens", desc: "Descontos em diversos estabelecimentos parceiros." },
                  { title: "Força Política", desc: "Representação ativa junto aos órgãos governamentais." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined bg-white/20 p-1 rounded-md normal-case">check_circle</span>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <motion.a 
                  href="https://wa.me/5516988068810?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20cuidadores.%20Vi%20o%20site%20de%20vocês."
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all inline-flex items-center gap-2"
                >
                  Entrar em Contato Agora
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10 aspect-video bg-slate-200">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABmTIRHT040IsZ9dHEDuk6UB4hW0TJgwhfUrI_AgZcZQdJ7LWP7fjdt16Fmyfzp11G0j5idzaFPAjmZIpIYWumq7B2AWh2qicuWEr0L0Ef3fVWJrxvexiRcMuCMgwAqsLqLpNZhu_PJb1RHukF34_zuJnMVRfIiygF859FNPniPcXxwV4HajqRSm2JgjvUcdg7X3Ps7p43oVf7AjKzoWr2MFTTZkg9S4wCdZ8fkRWfjNrKUYrTMjylcUd1xlt8miM4hWVXILtlWxI" 
                  alt="Mãos dadas"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filie-se */}
        <section id="filie-se" className="py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Como se Filiar</h2>
              <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Faça parte da nossa união em apenas alguns passos simples.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 -z-0"></div>
              {[
                { step: 1, title: "Cadastro", desc: "Preencha o formulário de interesse abaixo ou fale conosco no WhatsApp." },
                { step: 2, title: "Documentação", desc: "Envie os documentos necessários para validação profissional." },
                { step: 3, title: "Aprovação", desc: "Nossa equipe analisa seu perfil e confirma sua filiação." },
                { step: 4, title: "Benefícios", desc: "Comece a desfrutar de todas as vantagens de ser associado." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center gap-4 relative z-10"
                >
                  <div className="size-16 bg-white rounded-full border-4 border-primary text-primary font-black text-2xl flex items-center justify-center shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm px-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Membership Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Formulário de Filiação</h3>
              <form className="space-y-4" onSubmit={handleFiliaSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      value={filiaForm.nome}
                      onChange={(e) => setFiliaForm({...filiaForm, nome: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" 
                      placeholder="Seu Nome" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      value={filiaForm.telefone}
                      onChange={(e) => setFiliaForm({...filiaForm, telefone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" 
                      placeholder="(16) 99999-9999" 
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Tempo de Experiência como Cuidador</label>
                  <input 
                    type="text" 
                    required
                    value={filiaForm.experiencia}
                    onChange={(e) => setFiliaForm({...filiaForm, experiencia: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" 
                    placeholder="Ex: 2 anos, 5 meses..." 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Cidade</label>
                  <input 
                    type="text" 
                    required
                    value={filiaForm.cidade}
                    onChange={(e) => setFiliaForm({...filiaForm, cidade: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" 
                    placeholder="Ribeirão Preto" 
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined normal-case">send</span>
                  Enviar via WhatsApp
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">O que dizem nossos associados</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-background-light p-8 rounded-2xl relative"
                >
                  <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4 normal-case">format_quote</span>
                  <p className="text-slate-600 italic mb-6 relative z-10">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="size-12 rounded-full object-cover bg-slate-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500 uppercase">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Mapa */}
        <section id="contato" className="py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Fale com o Sindicato</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Dúvidas sobre direitos, filiação ou benefícios? Nossa equipe está pronta para te orientar.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Nome Completo</label>
                      <input id="name" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Seu Nome" type="text" required />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                      <input id="phone" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="(16) 99999-9999" type="tel" required />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">E-mail</label>
                    <input id="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="seu@email.com" type="email" required />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Como podemos ajudar?</label>
                    <textarea id="message" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Dúvidas, denúncias ou solicitações" rows={4} required></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3 py-2">
                    <input type="checkbox" id="lgpd-check" className="mt-1 size-4 accent-primary" required />
                    <label htmlFor="lgpd-check" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                      Concordo com o processamento dos meus dados pessoais para fins de contato, conforme a <strong>Lei Geral de Proteção de Dados (LGPD)</strong> e a Política de Privacidade.
                    </label>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    Enviar Mensagem
                  </motion.button>
                </form>
                <div className="mt-12 space-y-4">
                  <div className="flex items-center gap-4 text-slate-600">
                    <span className="material-symbols-outlined text-primary normal-case">location_on</span>
                    <span>Avenida Caramuru nº 451, Bairro Jardim Sumaré, CEP: 14025-080, Ribeirão Preto - SP</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <span className="material-symbols-outlined text-primary normal-case">phone</span>
                    <span>(16) 3021-1196</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <span className="material-symbols-outlined text-primary normal-case">chat</span>
                    <span>WhatsApp: (16) 98806-8810</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-xl min-h-[400px] border border-slate-200 relative"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApAj16xkxSwNSrIEDMvXVGRLzFGaJhnqI-Mgr_DncoTmQU3CJoA7vU7A8e5rO1R5WvVcVJxaaT-XbkeLMZDjRK01GgVqFhyxDvZfI_ROyoo9NLZK_iy-shAni24Ni0Mm76WCed7s9EtDLj3fERgZdYpAVeGKtoq6qN4VCMRHf8ZPUTtxszxX8d_oxP40kD3Oz89GP4nQH-tr0EPAjAsjiacX2zTMy4_krkcNzKv1xCx6l1pU4EtG-2zwWuUgyjYYLdn0Ss70qwkAI" 
                  alt="Mapa Ribeirão Preto"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[1px]">
                  <div className="bg-white p-4 rounded-lg shadow-xl text-slate-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500 normal-case">location_on</span>
                    <span className="font-bold">Estamos aqui!</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-xl normal-case">groups</span>
                </div>
                <span className="text-white text-lg font-bold">Sindicato Cuidadores</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Representação, defesa de direitos e valorização dos cuidadores profissionais de Ribeirão Preto e região.
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {["Início", "O Sindicato", "Benefícios", "Filie-se", "Contato"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Benefícios</h4>
              <ul className="space-y-3">
                <li><a href="#benefícios" className="hover:text-primary transition-colors text-sm">Assessoria Jurídica</a></li>
                <li><a href="#benefícios" className="hover:text-primary transition-colors text-sm">Cursos e Capacitação</a></li>
                <li><a href="#benefícios" className="hover:text-primary transition-colors text-sm">Convênios Exclusivos</a></li>
                <li><a href="#benefícios" className="hover:text-primary transition-colors text-sm">Saúde do Trabalhador</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl normal-case">location_on</span>
                  <span>Avenida Caramuru nº 451, Jardim Sumaré, CEP: 14025-080, Ribeirão Preto/SP</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl normal-case">phone</span>
                  <span>(16) 3021-1196</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl normal-case">chat</span>
                  <span>WhatsApp: (16) 98806-8810</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl normal-case">mail</span>
                  <span>contato@cuidadoresprofissionais.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p>© 2024 Sindicato dos Cuidadores Profissionais. Todos os direitos reservados. Ribeirão Preto - SP.</p>
              <p>Feito por <a href="https://eficazbot.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">EficazBot</a></p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
