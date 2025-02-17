
import { useState } from "react";
import { Shield, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  const [timeLeft] = useState("04:16");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-[#4CAF50] text-white text-center py-3 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Shield className="inline-block mr-2 h-5 w-5" />
          COMPRA 100% SEGURA
        </div>
        <div className="timer-bar h-1 bg-[#2E7D32] absolute bottom-0 left-0"></div>
      </div>

      {/* Timer Banner */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Clock className="inline-block mr-2 h-4 w-4" />
          <span className="text-timer mr-2">{timeLeft}</span>
          <span className="text-sm">
            Oferta por tempo limitado.
            <br className="sm:hidden" /> Não perca esta oportunidade!
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h2 className="text-xl font-semibold mb-6">Produto selecionado</h2>

        {/* Product Card */}
        <div className="product-card mb-6">
          <div className="flex items-start gap-4">
            <img 
              src="/lovable-uploads/53508fb1-7c62-4d80-adb2-b724bcdff053.png" 
              alt="Instagram Profile" 
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-purple-600 font-semibold text-lg">
                30.000 Seguidores + Bônus 🎁
              </h3>
              <p className="text-green-500 font-bold text-xl">R$ 497,00</p>
              <p className="text-gray-600 text-sm mt-2">
                30.000 Seguidores + 🎁 Bônus de 20.000 Curtidas + 20.000 Visualizações
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg p-6 mb-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-gray-700">Finalize a compra, copie o seu código Pix e efetue o pagamento.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-gray-700">Seu pedido será liberado imediatamente.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-gray-700">Pagamento 100% seguro</p>
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-red-500 text-white p-4 rounded-lg text-center mb-6">
          As ofertas abaixo são EXCLUSIVAS para essa compra!
        </div>

        {/* Bonus Offer */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <img 
              src="/placeholder.svg"
              alt="Instagram Features" 
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-pink-500">🎯</span>
                <span className="font-semibold">Garanta seu lugar no topo!</span>
                <span className="text-pink-500">🎯</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Usando nossos métodos exclusivos de Inteligência Artificial, vamos impulsionar seu perfil direto para o Explorar por 24 horas! 🔥 ✅ Automação estratégica para aumentar seu alcance ✅ Engajamento real para atrair mais seguidores ✅ Resultados rápidos e eficazes ⚡ Vagas limitadas! (enquanto o cronômetro estiver valendo)
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-400 line-through">R$ 9,99</span>
                  <span className="text-green-500 font-bold ml-2">R$ 9,99</span>
                </div>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="checkout-button">
          Gerar R$ 497,00
        </button>
      </div>
    </div>
  );
};

export default Index;
