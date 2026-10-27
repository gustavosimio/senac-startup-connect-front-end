import React from "react";
import { TrendingUp } from "lucide-react";
export default function InvestorRegister({ onLogin }) {
  return (
    <div className="min-h-screen bg-[#07090e] flex items-center justify-center p-4 text-white font-sans">
      <div className="w-full max-w-md bg-[#111622]/90 border border-[#1e2638] rounded-3xl p-8 shadow-2xl relative flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-9 h-9 rounded-xl bg-[#1e2638]/80 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            Cadastro de Investidor
          </h2>
        </div>
        <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              className="w-full bg-[#171e2e] border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Tipo de Investidor
            </label>
            <select className="w-full bg-[#171e2e] border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-gray-400 focus:outline-none transition-colors cursor-pointer">
              <option value="">Selecione o tipo</option>
              <option value="anjo">Investidor Anjo</option>
              <option value="vc">Venture Capital</option>
              <option value="pe">Private Equity</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Área de Interesse
            </label>
            <select className="w-full bg-[#171e2e] border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-gray-400 focus:outline-none transition-colors cursor-pointer">
              <option value="">Selecione os segmentos</option>
              <option value="fintech">Fintech</option>
              <option value="healthtech">Healthtech</option>
              <option value="edtech">Edtech</option>
              <option value="agtech">Agtech</option>
              <option value="saas">SaaS</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Faixa de Investimento
            </label>
            <select className="w-full bg-[#171e2e] border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-gray-400 focus:outline-none transition-colors cursor-pointer">
              <option value="">Selecione a faixa</option>
              <option value="ate50k">Até R$ 50.000</option>
              <option value="50k-200k">R$ 50.000 - R$ 200.000</option>
              <option value="200k-500k">R$ 200.000 - R$ 500.000</option>
              <option value="acima500k">Acima de R$ 500.000</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Tese de Investimento
            </label>
            <textarea
              rows="3"
              placeholder="Descreva sua tese de investimento..."
              className="w-full bg-[#171e2e] border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#6366f1] hover:bg-[#5052e4] text-white text-xs font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/20 cursor-pointer mt-2"
          >
            Finalizar Cadastro
          </button>
        </form>
        <div className="mt-6 text-center text-xs text-gray-400">
          Já tem cadastro?{" "}
          <button
            onClick={onLogin}
            className="text-indigo-400 hover:underline font-medium cursor-pointer"
          >
            Realizar Login
          </button>
        </div>
      </div>
    </div>
  );
}
