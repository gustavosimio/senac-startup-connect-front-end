import React, { useState } from 'react';
import { LayoutGrid, Search, Lightbulb, Heart, MessageSquare, FileText, Settings, LogOut, Bell, TrendingUp, User } from 'lucide-react';

const mockNotifications = [
  { id: 1, type: 'Matches', title: 'Novo match de 92% com Rafael Mendes (investidor anjo)', time: 'há 2h', unread: true, icon: Heart, iconBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
  { id: 2, type: 'Mensagens', title: 'Luciana Costa enviou uma mensagem sobre a rodada Série A', time: 'há 5h', unread: true, icon: MessageSquare, iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
  { id: 3, type: 'Matches', title: 'Nova correspondência de 85% com Pedro Albuquerque (fundo seed)', time: 'há 8h', unread: true, icon: Heart, iconBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
  { id: 4, type: 'Atividades', title: 'Uma startup que você segue, AgroSertão, publicou nova atualização', time: 'ontem', unread: false, icon: TrendingUp, iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  { id: 5, type: 'Mensagens', title: 'Ana Souza respondeu ao seu contato sobre oportunidades de investimento', time: 'ontem', unread: false, icon: MessageSquare, iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
  { id: 6, type: 'Atividades', title: 'Seu perfil foi visualizado 12 vezes esta semana', time: 'há 2 dias', unread: false, icon: User, iconBg: 'bg-gray-500/10 text-gray-400 border-gray-700' },
  { id: 7, type: 'Atividades', title: 'MedFlow atualizou seu estágio para Scale-up e busca R$ 2M', time: 'há 3 dias', unread: false, icon: TrendingUp, iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' }
];

export default function StartupMessages({ onNavigate, onLogout }) {
  const [filter, setFilter] = useState('Todas');
  const [notifications, setNotifications] = useState(mockNotifications);

  const filteredNotifications = notifications.filter(item => {
    if (filter === 'Todas') return true;
    return item.type === filter;
  });

  const markAllAsRead = () => {
    setNotifications(notifications.map(item => ({ ...item, unread: false })));
  };

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
            <button onClick={() => onNavigate('startup-search')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Search className='w-4 h-4' /> Buscar
            </button>
            <button onClick={() => onNavigate('startup-opportunities')} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Lightbulb className='w-4 h-4' /> Oportunidades
            </button>
            <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#111622] text-xs font-medium transition-all cursor-pointer'>
              <Heart className='w-4 h-4' /> Matches
            </button>
            <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#6366f1] text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all cursor-pointer'>
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

        <div className='flex-1 p-8 overflow-y-auto space-y-6'>
          <div>
            <h1 className='text-xl font-bold tracking-tight'>Alertas</h1>
            <p className='text-gray-400 text-xs mt-1'>
              Acompanhe as novidades do seu perfil e das suas conexões
            </p>
          </div>

          <div className='flex items-center justify-between gap-4 flex-wrap'>
            <div className='flex items-center gap-2'>
              {['Todas', 'Matches', 'Mensagens', 'Atividades'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={'px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer border ' + (filter === tab ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20' : 'bg-[#111622] text-gray-400 border-[#1e2638] hover:text-white hover:border-gray-700')}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button
              onClick={markAllAsRead}
              className='px-4 py-2 rounded-full text-xs font-medium text-gray-400 bg-[#111622] border border-[#1e2638] hover:text-white hover:border-gray-700 transition-all cursor-pointer'
            >
              Marcar todas como lidas
            </button>
          </div>

          <div className='space-y-3'>
            {filteredNotifications.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className='bg-[#111622]/90 border border-[#1e2638] rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-indigo-500/30 transition-all'>
                  <div className='flex items-center gap-4 min-w-0'>
                    <div className={'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ' + item.iconBg}>
                      <IconComponent className='w-4 h-4' />
                    </div>

                    <div className='space-y-0.5 min-w-0'>
                      <h3 className='text-xs font-semibold text-white truncate'>{item.title}</h3>
                      <p className='text-[11px] text-gray-500'>{item.time}</p>
                    </div>
                  </div>

                  {item.unread && (
                    <div className='w-2 h-2 rounded-full bg-indigo-500 shrink-0 shadow-sm shadow-indigo-500/50' />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
