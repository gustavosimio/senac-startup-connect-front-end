import React, { useState } from 'react';
import { LayoutGrid, Search, Lightbulb, Heart, MessageSquare, FileText, Settings, LogOut, Bell, DollarSign, Leaf, HeartPulse, BookOpen } from 'lucide-react';

const mockOpportunities = [
  { id: 1, name: 'NordestePay', location: 'Recife, PE', match: '95% compatível', matchType: 'high', tags: ['Fintech', 'Série A'], status: 'Match', statusType: 'success', icon: DollarSign },
  { id: 2, name: 'AgroSertão', location: 'Petrolina, PE', match: '88% compatível', matchType: 'high', tags: ['Agtech', 'MVP'], status: 'Interesse Enviado', statusType: 'neutral', icon: Leaf },
  { id: 3, name: 'MedFlow', location: 'Fortaleza, CE', match: '84% compatível', matchType: 'medium', tags: ['Healthtech', 'Scale-up'], status: 'Sem Resposta', statusType: 'warning', icon: HeartPulse },
  { id: 4, name: 'EduPass', location: 'Salvador, BA', match: '79% compatível', matchType: 'medium', tags: ['Edtech', 'Ideação'], status: 'Interesse Enviado', statusType: 'neutral', icon: BookOpen },
  { id: 5, name: 'ClimaFarm', location: 'Mossoró, RN', match: '76% compatível', matchType: 'medium', tags: ['Agtech', 'Série A'], status: 'Match', statusType: 'success', icon: Leaf }
];

export default function InvestorOpportunities({ onNavigate, onLogout }) {
  const [filter, setFilter] = useState('Todas');

  const filteredOpportunities = mockOpportunities.filter(item => {
    if (filter === 'Todas') return true;
    if (filter === 'Interesse Enviado') return item.status === 'Interesse Enviado';
    if (filter === 'Match') return item.status === 'Match';
    if (filter === 'Sem Resposta') return item.status === 'Sem Resposta';
    return true;
  });

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
            <button onClick={() => onNavigate('investor-main')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <LayoutGrid className='w-4 h-4' /> Menu Inicial
            </button>
            <button onClick={() => onNavigate('investor-search')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Search className='w-4 h-4' /> Buscar
            </button>
            <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#6366f1] text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all cursor-pointer'>
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
          <div>
            <h1 className='text-xl font-bold tracking-tight'>Minhas Oportunidades</h1>
            <p className='text-gray-400 text-xs mt-1'>
              Acompanhe o status do seu interesse em cada startup.
            </p>
          </div>

          <div className='flex items-center gap-2'>
            {['Todas', 'Interesse Enviado', 'Match', 'Sem Resposta'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={'px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer border ' + (filter === tab ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20' : 'bg-[#111622] text-gray-400 border-[#1e2638] hover:text-white hover:border-gray-700')}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className='space-y-3'>
            {filteredOpportunities.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className='bg-[#111622]/90 border border-[#1e2638] rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-indigo-500/30 transition-all'>
                  <div className='flex items-center gap-4 min-w-0'>
                    <div className='w-12 h-12 rounded-2xl bg-[#1e2638] text-indigo-300 font-bold text-sm flex items-center justify-center shrink-0 border border-indigo-500/20'>
                      <IconComponent className='w-5 h-5 text-indigo-400' />
                    </div>

                    <div className='space-y-1 min-w-0'>
                      <div className='flex items-center gap-2 flex-wrap'>
                        <h3 className='text-sm font-bold text-white'>{item.name}</h3>
                        <span className={'text-[10px] font-semibold px-2 py-0.5 rounded-full border ' + (item.matchType === 'high' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20')}>
                          {item.match}
                        </span>
                      </div>

                      <p className='text-xs text-gray-400'>{item.location}</p>

                      <div className='flex items-center gap-1.5 pt-1'>
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className='text-[10px] text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md font-medium'>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className='shrink-0'>
                    <span className={'text-xs font-semibold px-4 py-2 rounded-xl border block text-center ' + (item.statusType === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : item.statusType === 'warning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-gray-500/10 text-gray-300 border-gray-700')}>
                      {item.status}
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
