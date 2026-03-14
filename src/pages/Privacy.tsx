import React from 'react';
import { motion } from 'motion/react';

const Privacy: React.FC = () => {
  return (
    <div className="relative pt-40 pb-24">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-20" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -mr-48 -mt-48" />
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tight leading-tight">
            Política de <span className="text-gradient">Privacidade</span>
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-12 text-zinc-400 font-medium">
            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 text-sm mr-4">01</span>
                Coleta de Dados
              </h2>
              <p className="leading-relaxed">
                A NT Aplicações coleta informações básicas de navegação para melhorar a experiência do usuário em nosso hub. Dados específicos de cada plataforma (DriverDash, RotaLucro, Roxou) são tratados de forma independente em seus respectivos domínios.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 text-sm mr-4">02</span>
                Proteção de Dados
              </h2>
              <p className="leading-relaxed">
                Utilizamos as melhores práticas de segurança digital para proteger as informações coletadas. Seus dados são criptografados e armazenados em servidores seguros, garantindo que apenas pessoal autorizado tenha acesso.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 text-sm mr-4">03</span>
                Uso de Analytics
              </h2>
              <p className="leading-relaxed">
                Utilizamos ferramentas de análise (como Google Analytics) para entender como os usuários interagem com nosso site. Isso nos ajuda a identificar quais áreas precisam de melhorias e quais projetos despertam mais interesse.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 text-sm mr-4">04</span>
                Cookies
              </h2>
              <p className="leading-relaxed">
                Nosso site utiliza cookies para lembrar suas preferências e sessões. Você pode desativar os cookies nas configurações do seu navegador, embora isso possa afetar algumas funcionalidades do site.
              </p>
            </section>

            <section className="relative">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 text-sm mr-4">05</span>
                Contato
              </h2>
              <p className="leading-relaxed">
                Para solicitações relacionadas à sua privacidade ou exclusão de dados, entre em contato através do e-mail: <span className="text-emerald-500 font-bold">privacidade@ntaplicacoes.com.br</span>.
              </p>
            </section>

            <div className="pt-12 border-t border-white/10 text-sm text-zinc-500 uppercase tracking-widest font-bold">
              Última atualização: 14 de Março de 2026
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
