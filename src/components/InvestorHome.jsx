import React from 'react';
import { LayoutGrid, Search, Lightbulb, Heart, MessageSquare, FileText, Settings, LogOut, Bell, DollarSign, Leaf, HeartPulse, BookOpen } from 'lucide-react';

const mockData = {
  recommendedStartups: [
    { id: 1, name: 'NordestePay', category: 'Fintech · Série A', match: '95% match', matchType: 'high', icon: DollarSign },
    { id: 2, name: 'AgroSertão', category: 'Agtech · MVP', match: '78% match', matchType: 'medium', icon: Leaf },
    { id: 3, name: 'MedFlow', category: 'Healthtech · Scale-up', match: '88% match', matchType: 'high', icon: HeartPulse },
    { id: 4, name: 'EduPass', category: 'Edtech · Ideação', match: '64% match', matchType: 'medium', icon: BookOpen },
    { id: 5, name: 'ClimaFarm', category: 'Agtech · Série A', match: '91% match', matchType: 'high', icon: Leaf },
    { id: 6, name: 'VidaPlena', category: 'Healthtech · MVP', match: '74% match', matchType: 'medium', icon: HeartPulse },
    { id: 7, name: 'PayRural', category: 'Fintech · Ideação', match: '61% match', matchType: 'medium', icon: DollarSign },
    { id: 8, name: 'AprendeJá', category: 'Edtech · Scale-up', match: '83% match', matchType: 'high', icon: BookOpen },
    { id: 9, name: 'SolarNordeste', category: 'Cleantech · Série B', match: '89% match', matchType: 'high', icon: Leaf },
    { id: 10, name: 'TelemédBR', category: 'Healthtech · Série A', match: '92% match', matchType: 'high', icon: HeartPulse },
    { id: 11, name: 'CréditoJá', category: 'Fintech · MVP', match: '70% match', matchType: 'medium', icon: DollarSign },
    { id: 12, name: 'MasterClass+', category: 'Edtech · Série A', match: '85% match', matchType: 'high', icon: BookOpen }
  ]
};

export default function InvestorHome({ onNavigate, onLogout }) {
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
            <button onClick={() => onNavigate('investor-search')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Search className='w-4 h-4' /> Buscar
            </button>
            <button onClick={() => onNavigate('investor-opportunities')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Lightbulb className='w-4 h-4' /> Oportunidades
            </button>
            <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Heart className='w-4 h-4' /> Matches
            </button>
            <button onClick={() => onNavigate('investor-messages')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
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
              IN
            </div>
          </div>
        </header>

        <div className='flex-1 p-8 overflow-y-auto space-y-6'>
          <h1 className='text-lg font-bold tracking-tight text-white'>
            Startups recomendadas
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {mockData.recommendedStartups.map((startup) => {
              const IconComponent = startup.icon;
              return (
                <div key={startup.id} className='bg-[#111622]/90 border border-[#1e2638] rounded-2xl p-5 hover:border-indigo-500/40 transition-all group flex flex-col justify-between h-44 cursor-pointer relative'>
                  <div>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='w-9 h-9 rounded-xl bg-[#1e2638] text-indigo-400 flex items-center justify-center border border-indigo-500/20 group-hover:scale-105 transition-transform'>
                        <IconComponent className='w-4 h-4' />
                      </div>
                      <button className='text-gray-500 hover:text-red-400 transition-colors p-1 cursor-pointer'>
                        <Heart className='w-4 h-4' />
                      </button>
                    </div>

                    <h3 className='text-sm font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors'>
                      {startup.name}
                    </h3>
                    <p className='text-[11px] text-gray-400 font-medium'>
                      {startup.category}
                    </p>
                  </div>

                  <div>
                    <span className={'inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ' + (startup.matchType === 'high' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20')}>
                      {startup.match}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
