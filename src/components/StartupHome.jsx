import React from 'react';
import { LayoutGrid, Search, Lightbulb, Heart, MessageSquare, FileText, Settings, LogOut, Bell, Calendar } from 'lucide-react';

const mockData = {
  startupName: 'NordestePay',
  metrics: { profileCompletion: '80%', views30Days: 142, interestsReceived: 7 },
  investors: [
    { id: 1, initials: 'RM', name: 'Rafael Mendes', description: 'Tese em fintech · Faixa R$ 1M a R$ 3M', match: '92% match', matchType: 'high' },
    { id: 2, initials: 'LC', name: 'Luciana Costa', description: 'Investidora-anjo · Foco em pagamentos B2B', match: '76% match', matchType: 'medium' },
    { id: 3, initials: 'PA', name: 'Pedro Albuquerque', description: 'Fundo seed · Infraestrutura financeira', match: '68% match', matchType: 'medium' },
    { id: 4, initials: 'AS', name: 'Ana Souza', description: 'CVC bancário · Série A, mercado nordestino', match: '85% match', matchType: 'high' }
  ],
  events: [
    { id: 1, type: 'EVENTO', title: 'Demoday Porto Digital', date: '15/11/2026' },
    { id: 2, type: 'EDITAL', title: 'Edital FINEP Fintech Nordeste', date: '30/11/2026' },
    { id: 3, type: 'EVENTO', title: 'InovAtiva Brasil — Rodada', date: '08/12/2026' }
  ]
};

export default function StartupHome({ onNavigate, onLogout }) {
  return (
    <div className='min-h-screen bg-[#07090e] text-white flex font-sans'>
      <aside className='w-64 border-r border-[#1e2638] bg-[#0b0f19] flex flex-col justify-between p-4 shrink-0'>
        <div>
          <div className='flex items-center gap-2 px-3 py-4 mb-4'>
            <div className='w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30'>
              <LayoutGrid className='w-4 h-4' />
            </div>
            <span className='font-bold text-lg tracking-tight'>InvestCase</span>
          </div>

          <nav className='space-y-1'>
            <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#6366f1] text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all cursor-pointer'>
              <LayoutGrid className='w-4 h-4' /> Menu Inicial
            </button>
            <button onClick={() => onNavigate('startup-search')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Search className='w-4 h-4' /> Buscar
            </button>
            <button onClick={() => onNavigate('startup-opportunities')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Lightbulb className='w-4 h-4' /> Oportunidades
            </button>
            <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Heart className='w-4 h-4' /> Matches
            </button>
            <button onClick={() => onNavigate('startup-messages')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <MessageSquare className='w-4 h-4' /> Mensagens
            </button>
            <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <FileText className='w-4 h-4' /> Cadastro
            </button>
          </nav>
        </div>

        <div className='pt-4 border-t border-[#1e2638] space-y-1'>
          <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
            <Settings className='w-4 h-4' /> Configurações
          </button>
          <button onClick={onLogout} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-red-400 hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
            <LogOut className='w-4 h-4' /> Sair
          </button>
        </div>
      </aside>

      <main className='flex-1 flex flex-col min-w-0'>
        <header className='h-16 border-b border-[#1e2638] bg-[#0b0f19]/50 px-8 flex items-center justify-between gap-4'>
          <div className='relative w-96'>
            <Search className='w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2' />
            <input type='text' placeholder='Buscar startup, setor ou palavra-chave' className='w-full bg-[#111622] border border-[#1e2638] focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors' />
          </div>

          <div className='flex items-center gap-4'>
            <button className='p-2 text-gray-400 hover:text-white hover:bg-[#111622] rounded-xl transition-all cursor-pointer relative'>
              <Bell className='w-4 h-4' />
            </button>
            <div className='w-8 h-8 rounded-full bg-[#1e2638] border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-300'>
              NP
            </div>
          </div>
        </header>

        <div className='flex-1 p-8 space-y-8 overflow-y-auto'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight flex items-center gap-2'>
              Olá, {mockData.startupName} 👋
            </h1>
            <p className='text-gray-400 text-xs mt-1'>
              Confira seu desempenho e os investidores interessados no seu negócio.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-[#111622]/90 border border-[#1e2638] rounded-2xl p-6'>
              <span className='text-xs text-gray-400 font-medium'>Perfil completo</span>
              <div className='text-3xl font-bold mt-2 text-white'>
                {mockData.metrics.profileCompletion}
              </div>
              <p className='text-[11px] text-gray-500 mt-2'>Complete seu cadastro para mais visibilidade</p>
            </div>

            <div className='bg-[#111622]/90 border border-[#1e2638] rounded-2xl p-6'>
              <span className='text-xs text-gray-400 font-medium'>Visualizações</span>
              <div className='text-3xl font-bold mt-2 text-white'>
                {mockData.metrics.views30Days}
              </div>
              <p className='text-[11px] text-gray-500 mt-2'>Nos últimos 30 dias</p>
            </div>

            <div className='bg-[#111622]/90 border border-[#1e2638] rounded-2xl p-6'>
              <span className='text-xs text-gray-400 font-medium'>Interesses recebidos</span>
              <div className='text-3xl font-bold mt-2 text-indigo-400'>
                {mockData.metrics.interestsReceived}
              </div>
              <p className='text-[11px] text-gray-500 mt-2'>Investidores demonstraram interesse</p>
            </div>
          </div>

          <div>
            <h2 className='text-sm font-semibold mb-3 text-white'>Investidores interessados</h2>
            <div className='bg-[#111622]/90 border border-[#1e2638] rounded-2xl divide-y divide-[#1e2638] overflow-hidden'>
              {mockData.investors.map((investor) => (
                <div key={investor.id} className='p-4 flex items-center justify-between gap-4 hover:bg-[#171e2e]/50 transition-colors'>
                  <div className='flex items-center gap-3 min-w-0'>
                    <div className='w-10 h-10 rounded-xl bg-[#1e2638] text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-500/20'>
                      {investor.initials}
                    </div>
                    <div className='min-w-0'>
                      <h3 className='text-xs font-semibold text-white truncate'>{investor.name}</h3>
                      <p className='text-[11px] text-gray-400 truncate'>{investor.description}</p>
                    </div>
                  </div>
                  <span className={'text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ' + (investor.matchType === 'high' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20')}>
                    {investor.match}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-sm font-semibold mb-3 text-white'>Eventos e editais recomendados</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {mockData.events.map((event) => (
                <div key={event.id} className='bg-[#111622]/90 border border-[#1e2638] rounded-2xl p-5 hover:border-indigo-500/30 transition-all'>
                  <span className='text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider'>
                    {event.type}
                  </span>
                  <h3 className='text-xs font-semibold text-white mt-3 mb-2'>{event.title}</h3>
                  <div className='flex items-center gap-1.5 text-[11px] text-gray-400'>
                    <Calendar className='w-3.5 h-3.5' />
                    <span>{event.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
