import React, { useState } from 'react';
import { LayoutGrid, Search, Lightbulb, Heart, MessageSquare, FileText, Settings, LogOut, Bell } from 'lucide-react';

const mockInvestors = [
  { id: 1, initials: 'RM', name: 'Rafael Mendes', type: 'Investidor Anjo', location: 'Recife, PE', match: '94% compatível', matchType: 'high', investmentRange: 'R$ 500 mil a R$ 1,5 mi' },
  { id: 2, initials: 'VN', name: 'Vértice Ventures', type: 'Fundo Seed', location: 'Fortaleza, CE', match: '89% compatível', matchType: 'high', investmentRange: 'R$ 1 mi a R$ 3 mi' },
  { id: 3, initials: 'AI', name: 'Acelera Impacto', type: 'Aceleradora', location: 'Salvador, BA', match: '86% compatível', matchType: 'high', investmentRange: 'R$ 250 mil a R$ 800 mil' },
  { id: 4, initials: 'LC', name: 'Luciana Costa', type: 'Investidor Anjo', location: 'João Pessoa, PB', match: '82% compatível', matchType: 'medium', investmentRange: 'R$ 300 mil a R$ 1 mi' },
  { id: 5, initials: 'CS', name: 'Capital Sertão', type: 'Fundo Seed', location: 'Recife, PE', match: '78% compatível', matchType: 'medium', investmentRange: 'R$ 1,5 mi a R$ 5 mi' }
];

export default function StartupSearch({ onNavigate, onLogout }) {
  const [searchTerm, setSearchTerm] = useState('');

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
            <button onClick={() => onNavigate('startup-main')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <LayoutGrid className='w-4 h-4' /> Menu Inicial
            </button>
            <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#6366f1] text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all cursor-pointer'>
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
            <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Buscar investidor, área de interesse ou palavra-chave' className='w-full bg-[#111622] border border-[#1e2638] focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors' />
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

        <div className='flex-1 p-8 overflow-y-auto space-y-6'>
          <div>
            <h1 className='text-xl font-bold tracking-tight'>Buscar investidores</h1>
            <p className='text-gray-400 text-xs mt-1'>
              Encontre investidores alinhados ao momento e ao setor da sua startup.
            </p>
          </div>

          <div className='flex gap-8 items-start'>
            <aside className='w-64 bg-[#111622]/90 border border-[#1e2638] rounded-2xl p-5 space-y-6 shrink-0'>
              <h2 className='text-xs font-bold text-white uppercase tracking-wider'>Filtros</h2>

              <div className='space-y-2.5'>
                <label className='block text-xs font-semibold text-gray-300'>Tipo de Investidor</label>
                <div className='space-y-2 text-xs text-gray-400'>
                  <label className='flex items-center gap-2.5 cursor-pointer hover:text-white transition-colors'>
                    <input type='checkbox' className='rounded border-gray-700 bg-[#171e2e] accent-indigo-600' />
                    <span>Investidor Anjo</span>
                  </label>
                  <label className='flex items-center gap-2.5 cursor-pointer hover:text-white transition-colors'>
                    <input type='checkbox' className='rounded border-gray-700 bg-[#171e2e] accent-indigo-600' />
                    <span>Fundo Seed</span>
                  </label>
                  <label className='flex items-center gap-2.5 cursor-pointer hover:text-white transition-colors'>
                    <input type='checkbox' className='rounded border-gray-700 bg-[#171e2e] accent-indigo-600' />
                    <span>Aceleradora</span>
                  </label>
                </div>
              </div>

              <div className='space-y-2.5 pt-4 border-t border-[#1e2638]'>
                <label className='block text-xs font-semibold text-gray-300'>Área de Interesse</label>
                <div className='space-y-2 text-xs text-gray-400'>
                  <label className='flex items-center gap-2.5 cursor-pointer hover:text-white transition-colors'>
                    <input type='checkbox' className='rounded border-gray-700 bg-[#171e2e] accent-indigo-600' />
                    <span>Fintech</span>
                  </label>
                  <label className='flex items-center gap-2.5 cursor-pointer hover:text-white transition-colors'>
                    <input type='checkbox' className='rounded border-gray-700 bg-[#171e2e] accent-indigo-600' />
                    <span>Agtech</span>
                  </label>
                  <label className='flex items-center gap-2.5 cursor-pointer hover:text-white transition-colors'>
                    <input type='checkbox' className='rounded border-gray-700 bg-[#171e2e] accent-indigo-600' />
                    <span>Healthtech</span>
                  </label>
                  <label className='flex items-center gap-2.5 cursor-pointer hover:text-white transition-colors'>
                    <input type='checkbox' className='rounded border-gray-700 bg-[#171e2e] accent-indigo-600' />
                    <span>Edtech</span>
                  </label>
                </div>
              </div>

              <div className='space-y-2.5 pt-4 border-t border-[#1e2638]'>
                <label className='block text-xs font-semibold text-gray-300'>Faixa de Investimento</label>
                <div className='flex justify-between text-[11px] text-gray-400 font-medium'>
                  <span>R$ 0</span>
                  <span className='text-indigo-400 font-bold'>R$ 5M+</span>
                </div>
                <input type='range' min='0' max='5000000' className='w-full accent-indigo-600 bg-[#171e2e] h-1.5 rounded-lg cursor-pointer' />
              </div>

              <div className='space-y-2.5 pt-4 border-t border-[#1e2638]'>
                <label className='block text-xs font-semibold text-gray-300'>Localização</label>
                <select className='w-full bg-[#171e2e] border border-gray-800 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none cursor-pointer'>
                  <option value='nordeste'>Nordeste</option>
                  <option value='sudeste'>Sudeste</option>
                  <option value='sul'>Sul</option>
                  <option value='norte'>Norte</option>
                  <option value='centro-oeste'>Centro-Oeste</option>
                </select>
              </div>
            </aside>

            <div className='flex-1 space-y-4'>
              <div className='flex justify-between items-center text-xs text-gray-400'>
                <span className='font-semibold text-white'>Investidores encontrados</span>
                <span>{mockInvestors.length} resultados</span>
              </div>

              <div className='space-y-3'>
                {mockInvestors.map((investor) => (
                  <div key={investor.id} className='bg-[#111622]/90 border border-[#1e2638] rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-indigo-500/30 transition-all'>
                    <div className='flex items-center gap-4 min-w-0'>
                      <div className='w-12 h-12 rounded-2xl bg-[#1e2638] text-indigo-300 font-bold text-sm flex items-center justify-center shrink-0 border border-indigo-500/20'>
                        {investor.initials}
                      </div>

                      <div className='space-y-1 min-w-0'>
                        <div className='flex items-center gap-2 flex-wrap'>
                          <h3 className='text-sm font-bold text-white'>{investor.name}</h3>
                          <span className={'text-[10px] font-semibold px-2 py-0.5 rounded-full border ' + (investor.matchType === 'high' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20')}>
                            {investor.match}
                          </span>
                        </div>

                        <p className='text-xs text-gray-400'>
                          {investor.type} · {investor.location}
                        </p>

                        <div className='pt-1'>
                          <span className='text-[10px] text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md font-medium'>
                            Faixa de aporte: {investor.investmentRange}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className='py-2.5 px-4 bg-[#6366f1] hover:bg-[#5052e4] text-white text-xs font-medium rounded-xl transition-all shadow-lg shadow-indigo-600/25 cursor-pointer shrink-0'>
                      Tenho Interesse
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
