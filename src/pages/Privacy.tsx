import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="relative pt-48 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[3.5rem] p-10 md:p-20 shadow-2xl relative overflow-hidden border-white/5"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -mr-48 -mt-48" />
          
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-10 border-white/10">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Segurança de Dados</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tighter leading-[0.9] font-display">
            Política de <span className="text-gradient">Privacidade</span>
          </h1>
          
          <div className="space-y-16 text-text-muted font-medium">
            {[
              { 
                id: '01', 
                title: 'Coleta de Dados', 
                icon: Eye,
                content: 'A NT Aplicações coleta informações básicas de navegação para melhorar a experiência do usuário em nosso hub. Dados específicos de cada plataforma (DriverDash, Rota do Lucro, Roxou) são tratados de forma independente em seus respectivos domínios.'
              },
              { 
                id: '02', 
                title: 'Proteção de Dados', 
                icon: Lock,
                content: 'Utilizamos as melhores práticas de segurança digital para proteger as informações coletadas. Seus dados são criptografados e armazenados em servidores seguros, garantindo que apenas pessoal autorizado tenha acesso.'
              },
              { 
                id: '03', 
                title: 'Uso de Analytics', 
                icon: FileText,
                content: 'Utilizamos ferramentas de análise para entender como os usuários interagem com nosso site. Isso nos ajuda a identificar quais áreas precisam de melhorias e quais projetos despertam mais interesse.'
              },
              { 
                id: '04', 
                title: 'Cookies', 
                icon: Shield,
                content: 'Nosso site utiliza cookies para lembrar suas preferências e sessões. Você pode desativar os cookies nas configurações do seu navegador, embora isso possa afetar algumas funcionalidades do site.'
              },
              { 
                id: '05', 
                title: 'Contato', 
                icon: Mail,
                content: 'Para solicitações relacionadas à sua privacidade ou exclusão de dados, entre em contato através do e-mail: privacidade@ntaplicacoes.com.br.'
              }
            ].map((section) => (
              <section key={section.id} className="relative group">
                <div className="flex items-start space-x-8">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary font-black text-xl flex-shrink-0 group-hover:glow-purple transition-all duration-500 border-white/5">
                    {section.id}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white mb-6 font-display flex items-center">
                      <section.icon className="w-6 h-6 mr-3 text-secondary" />
                      {section.title}
                    </h2>
                    <p className="leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </section>
            ))}

            <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xs text-text-muted uppercase tracking-[0.3em] font-black">
                Última atualização: 15 de Março de 2026
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">Certificado de Segurança Ativo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
