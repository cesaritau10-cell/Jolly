'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  MessageCircle, 
  Heart, 
  Truck, 
  Settings, 
  Instagram, 
  Facebook,
  ChevronRight,
  Star
} from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close menu when resizing to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed w-full z-50 bg-cream/90 backdrop-blur-md border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
               <a href="#home" className="flex flex-col items-start leading-none group cursor-pointer transition-all">
                  <span className="font-serif text-2xl md:text-3xl text-primary font-medium italic tracking-tight">Jolly</span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-secondary font-bold -mt-0.5 ml-1 opacity-70">Fios & Arte</span>
               </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Produtos', 'Sob Medida', 'Sobre Mim', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-600 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="relative ml-4 p-2 text-stone-700 hover:text-primary transition-colors duration-200" id="cart-button">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-white text-[9px] font-bold flex items-center justify-center rounded-full">2</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button className="p-2 text-stone-700 hover:text-primary transition-colors" aria-label="Carrinho">
                <div className="relative">
                  <ShoppingBag size={22} strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-white text-[8px] font-bold flex items-center justify-center rounded-full">2</span>
                </div>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-stone-700 hover:text-primary transition-colors z-[60]"
                id="mobile-menu-toggle"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <motion.div 
          initial={false}
          animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-50 md:hidden bg-cream flex flex-col pt-32 px-10 pb-10"
        >
          <div className="flex flex-col space-y-8">
            {['Home', 'Produtos', 'Sob Medida', 'Sobre Mim', 'Contato'].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-4xl font-serif text-stone-800 hover:text-primary transition-colors border-b border-secondary/5 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <div className="mt-auto pt-10 flex flex-col gap-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold opacity-60">Siga-nos</p>
            <div className="flex gap-6">
              <Instagram size={24} className="text-secondary hover:text-primary transition-colors" />
              <Facebook size={24} className="text-secondary hover:text-primary transition-colors" />
            </div>
          </div>
        </motion.div>
      </nav>
      
      {/* Background overlay for accessibility */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-stone-900/10 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

const Hero = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)] mt-20" id="home">
      {/* Left: Hero Content */}
      <section className="lg:col-span-7 bg-[#F5F2ED] relative flex flex-col justify-center px-4 sm:px-12 lg:px-20 py-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent mix-blend-multiply opacity-20 blur-3xl" />
        <div className="relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            Artesanato em Pelotas
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-stone-900"
          >
            Arte em cada ponto,<br />
            <span className="italic text-primary">carinho em cada fio.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-500 mb-10 max-w-md font-light leading-relaxed"
          >
            Crochê artesanal exclusivo com entrega facilitada para Pelotas e Capão do Leão. Peças feitas à mão que transformam sua casa e seu estilo.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-primary text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              Ver Coleção
            </button>
            <button className="border border-secondary/40 text-secondary px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary/5 transition-all">
              Encomendas
            </button>
          </motion.div>
        </div>
      </section>

      {/* Right: Integrated Sidebar */}
      <aside className="lg:col-span-5 bg-white border-l border-secondary/10 flex flex-col">
        {/* Category Quick Access */}
        <div className="p-8 sm:p-12 border-b border-secondary/10 flex-1">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-10">Categorias</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: 'decor', label: 'Decoração', icon: '🧶' },
              { id: 'fashion', label: 'Moda', icon: '👗' },
              { id: 'kids', label: 'Infantil', icon: '🧸' },
            ].map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-cream/50 border border-secondary/5 flex flex-col items-center text-center cursor-pointer hover:bg-cream hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <span className="text-sm font-serif italic text-stone-900">{cat.label}</span>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-primary p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg shadow-primary/10 cursor-pointer"
            >
              <p className="text-white text-[10px] font-bold uppercase tracking-widest mb-2">Exclusivo?</p>
              <button className="bg-white text-primary text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                WhatsApp
              </button>
            </motion.div>
          </div>
        </div>

        {/* Brand Detail Image */}
        <div className="relative aspect-video lg:aspect-square overflow-hidden group">
          <Image
            src="/input_file_1.png"
            alt="Detalhe do crochê colorido"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </aside>
    </main>
  );
};

const Features = () => {
  const items = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "100% Artesanal",
      desc: "Cada peça é produzida individualmente com dedicação total."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Regional",
      desc: "Entrega facilitada em Pelotas e Capão do Leão por motoboy."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Personalizável",
      desc: "Você escolhe as cores, fios e tamanhos da sua peça."
    }
  ];

  return (
    <section className="bg-white py-12 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-5 p-4 rounded-xl border border-transparent hover:border-stone-100 hover:bg-stone-50/50 transition-all cursor-default"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-secondary">
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-900">{item.title}</h3>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const cats = [
    {
      title: "Decoração",
      items: "Cestos, sousplats, mantas",
      img: "/input_file_0.png",
      color: "bg-secondary/10"
    },
    {
      title: "Moda",
      items: "Tops, bolsas, acessórios",
      img: "https://picsum.photos/seed/crochet-fashion/600/600",
      color: "bg-primary/10"
    },
    {
      title: "Infantil",
      items: "Amigurumis, mantinhas",
      img: "https://picsum.photos/seed/crochet-baby/600/600",
      color: "bg-accent/10"
    }
  ];

  return (
    <section className="bg-white py-24" id="produtos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-4">Escolha por nicho</h3>
            <h2 className="text-4xl font-serif text-stone-900">Categorias em Destaque</h2>
          </div>
          <div className="h-px flex-1 bg-secondary/10 hidden md:block mx-12 mb-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cats.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-8 border border-secondary/5 bg-cream">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-stone-900 group-hover:text-primary transition-colors italic">{cat.title}</h3>
                  <p className="text-stone-500 text-xs mt-1 uppercase tracking-widest leading-relaxed">{cat.items}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CustomOrder = () => {
  return (
    <section className="py-24 bg-secondary/5 rounded-[3rem] mx-4 sm:mx-8 mb-24 overflow-hidden relative" id="sob-medida">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Exclusividade</span>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">Quer algo exclusivo para você?</h2>
          <p className="text-lg text-stone-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Não encontrou o que procurava? Eu crio peças personalizadas sob medida para o seu gosto, combinando suas cores favoritas com o meu toque artesanal.
          </p>
          <a 
            href="https:wa.me/5553999999999?text=Olá Jolly! Vi o site e gostaria de fazer uma encomenda personalizada."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-[#25D366]/20"
          >
            <MessageCircle fill="currentColor" className="text-white" />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
      
      {/* Abstract yarn background effect */}
      <div className="absolute top-0 right-0 w-64 h-64 border-4 border-secondary/10 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border-8 border-primary/5 rounded-full -ml-48 -mb-48" />
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24" id="sobre-mim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden z-10 shadow-2xl">
                <Image
                  src="/input_file_0.png"
                  alt="A artesã por trás da Jolly Fios & Arte"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-1" />
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-1" />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Por trás da agulha</h2>
            <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
              <p>
                Olá! Sou a mente e as mãos por trás da <strong>Jolly - Fios & Arte</strong>. Meu caso de amor com o crochê começou como um hobby e se transformou em uma missão: levar o aconchego do feito à mão para os lares da nossa Pelotas.
              </p>
              <p>
                O nome &quot;Jolly&quot; vem da alegria que sinto ao ver um fio se transformar em algo único. Acredito que o artesanal tem alma, e cada peça que sai do meu ateliê carrega um pedacinho da cultura e do carinho da nossa região.
              </p>
              <p>
                Seja para decorar sua casa, vestir-se com estilo ou presentear um novo membro da família, estou aqui para criar algo que conte a sua história através dos pontos.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-stone-900 italic">Juliana L.</span>
                <span className="text-secondary font-medium text-sm tracking-widest uppercase">Artesã e Fundadora</span>
              </div>
              <div className="h-px w-12 bg-stone-200" />
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-primary hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Camila R.",
      city: "Pelotas (Três Vendas)",
      text: "Os cestos que encomendei são divinos! O acabamento é impecável e a cor terracota combinou perfeitamente com a minha sala.",
      stars: 5
    },
    {
      name: "Mariana S.",
      city: "Capão do Leão",
      text: "O amigurumi de girafa é a coisa mais fofa do mundo. Minha afilhada não desgruda dele. Dá pra ver que foi feito com muito amor.",
      stars: 5
    },
    {
      name: "Beatriz M.",
      city: "Pelotas (Centro)",
      text: "Atendimento nota mil! A Juliana me ajudou a escolher as cores do meu sousplat e a entrega foi super rápida.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4">Carinho reconhecido</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-3xl border border-secondary/5 flex flex-col italic"
            >
              <p className="text-stone-600 mb-8 leading-relaxed font-serif text-lg">&quot;{review.text}&quot;</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-serif text-secondary text-sm">
                  {review.name[0]}
                </div>
                <div className="text-left">
                  <p className="font-bold text-stone-800 text-xs uppercase tracking-widest">{review.name}</p>
                  <p className="text-secondary text-[10px] uppercase tracking-tighter">{review.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-secondary/10 overflow-hidden" id="contato">
      {/* Bottom Benefit Bar Inspired by Theme */}
      <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-24 px-4 sm:px-6 lg:px-12 border-b border-secondary/10">
        <div className="flex items-center gap-4 py-6 md:py-0 md:border-r border-secondary/10">
          <span className="text-2xl">🧶</span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-stone-800">100% Artesanal</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-tighter">Feito ponto a ponto</p>
          </div>
        </div>
        <div className="flex items-center gap-4 py-6 md:py-0 md:px-8 md:border-r border-secondary/10">
          <span className="text-2xl">📍</span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-stone-800">Regional</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-tighter">Entrega em Pelotas/RS</p>
          </div>
        </div>
        <div className="flex items-center gap-4 py-6 md:py-0 md:px-8 md:border-r border-secondary/10">
          <span className="text-2xl">✨</span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-stone-800">Personalizável</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-tighter">Cores sob medida</p>
          </div>
        </div>
        <div className="flex items-center justify-start md:justify-end py-6 md:py-0 italic text-secondary text-sm font-serif md:px-8">
          &quot;O acabamento é impecável!&quot; — Maria, Cliente
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex flex-col items-start leading-none mb-6">
                <span className="font-serif text-3xl text-primary font-medium italic tracking-tight">Jolly</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-secondary font-bold -mt-0.5 ml-1 opacity-70">Fios & Arte</span>
             </div>
             <p className="text-sm text-stone-500 leading-relaxed font-light">
               Levando o aconchego do crochê artesanal exclusivo para Pelotas e região. Cada ponto é uma história de carinho.
             </p>
          </div>
          
          <div>
            <h4 className="text-stone-800 font-bold uppercase tracking-widest text-xs mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#sob-medida" className="hover:text-primary transition-colors">Encomendas</a></li>
              <li><a href="#sobre-mim" className="hover:text-primary transition-colors">Sobre Mim</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-800 font-bold uppercase tracking-widest text-xs mb-6">Localização</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Pelotas - Centro
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Entrega: Fragata, Laranjal, Três Vendas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Retirada no Ateliê (Agendada)
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-800 font-bold uppercase tracking-widest text-xs mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-cream border border-secondary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-secondary">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-cream border border-secondary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-secondary">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-cream border border-secondary/10 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-secondary">
                <MessageCircle size={18} />
              </a>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-widest text-stone-400">
              O melhor do crochê em Pelotas, RS
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-stone-400">
          <p>© {new Date().getFullYear()} Jolly - Fios & Arte.</p>
          <p className="flex items-center gap-1">
            Feito à mão <Heart size={10} className="text-primary" /> em Pelotas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <CustomOrder />
      <About />
      <Testimonials />
      <Footer />
      
      {/* Floating Action Button (WhatsApp) */}
      <motion.a
        href="https://wa.me/5553999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.a>
    </div>
  );
}
