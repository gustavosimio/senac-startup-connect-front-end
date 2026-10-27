import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, TrendingUp } from 'lucide-react';

export default function InvestorDashboard({ onBack, onRegister, onLoginSuccess }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen bg-[#07090e] flex items-center justify-center p-4 text-white font-sans'>
      <div className='w-full max-w-md bg-[#111622]/90 border border-[#1e2638] rounded-3xl p-8 shadow-2xl relative flex flex-col items-center'>
        <button
          onClick={onBack}
          className='self-start flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors mb-4 cursor-pointer'
        >
          <ArrowLeft className='w-3.5 h-3.5' /> Voltar
        </button>

        <div className='relative mb-4 flex items-center justify-center'>
          <div className='w-12 h-12 rounded-2xl bg-[#1e2638]/80 flex items-center justify-center border border-indigo-500/20 text-indigo-400'>
            <TrendingUp className='w-6 h-6' />
          </div>
          <span className='absolute -bottom-1 -right-1 bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-[9px] font-bold px-1.5 py-0.5 rounded-full'>
            IN
          </span>
        </div>

        <h2 className='text-xl font-bold tracking-tight mb-1'>
          Entrar como <span className='text-indigo-400'>Investidor</span>
        </h2>
        <p className='text-gray-400 text-xs text-center mb-8'>
          Insira suas credenciais para acessar a plataforma.
        </p>

        <form
          className='w-full space-y-4'
          onSubmit={(e) => {
            e.preventDefault();
            onLoginSuccess && onLoginSuccess();
          }}
        >
          <div className='w-full'>
            <input
              type='email'
              placeholder='nome@empresa.com'
              className='w-full bg-[#171e2e] border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors'
            />
          </div>

          <div className='w-full relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Senha'
              className='w-full bg-[#171e2e] border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors pr-10'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 cursor-pointer'
            >
              {showPassword ? <EyeOff className='w-4 h-4' /> : <Eye className='w-4 h-4' />}
            </button>
          </div>

          <div className='flex justify-end'>
            <a href='#esqueci' className='text-[11px] text-indigo-400 hover:underline'>
              Esqueci minha senha
            </a>
          </div>

          <button
            type='submit'
            className='w-full py-3 bg-[#6366f1] hover:bg-[#5052e4] text-white text-xs font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/20 cursor-pointer mt-2'
          >
            Entrar como Investidor
          </button>
        </form>

        <div className='mt-8 text-center text-xs text-gray-400'>
          Ainda não tem conta?{' '}
          <button
            onClick={onRegister}
            className='text-indigo-400 hover:underline font-medium cursor-pointer'
          >
            Criar cadastro
          </button>
        </div>
      </div>
    </div>
  );
}
