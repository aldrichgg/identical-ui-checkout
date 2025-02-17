
import { useState, useEffect } from "react";
import { Shield, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState<string>("10:00");
  const [isExtraServiceSelected, setIsExtraServiceSelected] = useState(false);
  const basePrice = 497.00;
  const extraServicePrice = 9.99;

  const totalPrice = isExtraServiceSelected ? basePrice + extraServicePrice : basePrice;

  useEffect(() => {
    // Converter 10 minutos para segundos
    let totalSeconds = 10 * 60;

    const timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds -= 1;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        setTimeLeft(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(timer);
  }, []);

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
              <p className="text-green-500 font-bold text-xl">R$ {basePrice.toFixed(2)}</p>
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
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img 
              src="/placeholder.svg"
              alt="Instagram Features" 
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-pink-500">🎯</span>
                <span className="font-semibold">Método Exclusivo de Crescimento</span>
                <span className="text-pink-500">🎯</span>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Impulsione seu perfil para o Explorar usando nossa tecnologia de IA! 
                Em apenas 24 horas, você receberá:
                • Alcance orgânico multiplicado
                • Engajamento real e direcionado
                • Visibilidade garantida na seção Explorar
                • Análise personalizada do seu perfil
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-400 line-through">R$ 19,99</span>
                  <span className="text-green-500 font-bold ml-2">R$ {extraServicePrice}</span>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isExtraServiceSelected}
                    onChange={() => setIsExtraServiceSelected(!isExtraServiceSelected)}
                    className="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
                  />
                  <span className="text-gray-700">
                    {isExtraServiceSelected ? 'Adicionado' : 'Adicionar'}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="checkout-button">
          Gerar R$ {totalPrice.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Index;
