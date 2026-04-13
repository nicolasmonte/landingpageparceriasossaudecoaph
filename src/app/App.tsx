import { 
  Smartphone, 
  CheckCircle2, 
  Shield, 
  HeadphonesIcon, 
  TrendingUp, 
  FileText,
  Download,
  MessageCircle,
  ChevronRight,
  Eye,
  Calculator,
  Banknote,
  Clock,
  UserCheck,
  Lightbulb,
  Play,
  CheckSquare,
  AlertCircle,
  Globe
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { SEO } from "./components/SEO";
import coaphLogo from "../assets/coaph-logo.png";
import sosLogo from "../assets/sossaude-logo.png";
import nurse1 from "../assets/nurse-1.png";
import nurse3 from "../assets/nurse-3.png";
import ambulance from "../assets/ambulance.png";
import appScreenshot from "../assets/app-screenshot.png"
import appScreenshot2 from "../assets/app-screenshot2.png"

export default function App() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 py-8 md:py-24 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-4 md:space-y-6">
              {/* Logos Partnership */}
              <div className="flex items-center gap-4 md:gap-6 justify-center md:justify-start flex-wrap -mb-4 md:-mb-6">
                <img src={coaphLogo} alt="COAPH" className="h-14 md:h-16 w-auto object-contain drop-shadow-lg" />
                <div className="text-xl md:text-2xl font-bold text-[#d3a971] self-center">+</div>
                <img src={sosLogo} alt="S.O.S SAÚDE" className="h-48 md:h-64 w-auto object-contain object-center drop-shadow-lg" style={{ marginTop: '-3rem', marginBottom: '-3rem' }} />
              </div>

              {/* Main Headline */}
              <div className="space-y-3 md:space-y-6 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                  <span className="text-[#d3a971]">Receba sua produção sem atraso</span>
                  <span className="text-white"> e </span>
                  <span className="text-[#d3a971]">antecipe quando precisar</span>
                </h1>
                
                <div className="flex justify-center md:justify-start">
                  <p className="text-sm md:text-lg bg-white/95 text-[#b8925f] px-5 md:px-6 py-1.5 md:py-2 rounded-full font-bold shadow-lg backdrop-blur-sm">
                    Parceria oficial COAPH + S.O.S SAÚDE para cooperados
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-base md:text-lg text-[#faf8f5] text-left md:text-left">Com o App <span className="text-[#b8925f] font-bold">S.O.S SAÚDE</span> você pode:</p>
                  <ul className="space-y-2 text-[#faf8f5] text-left md:text-left">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#d3a971] flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Abrir sua conta digital</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#d3a971] flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Acompanhar sua produção</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#d3a971] flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Simular e solicitar antecipação</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#d3a971] flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Receber direto na conta</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 justify-center md:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-[#d3a971] to-[#b8925f] hover:from-[#b8925f] hover:to-[#9d7c4d] text-white font-bold text-lg px-8 py-6 shadow-xl h-14" asChild>
                  <a href="https://carteira.sossaude.app/auth" target="_blank" rel="noopener noreferrer">
                    <ChevronRight className="mr-2 h-5 w-5" />
                    Começar agora
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-[#d3a971] text-[#d3a971] hover:bg-[#d3a971]/10 font-bold text-lg px-8 py-6 backdrop-blur-sm h-14" asChild>
                  <a href="https://wa.me/message/ZK576547C5RDURA1" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>

              <p className="text-[#e9dbba] text-sm text-center md:text-left">
                Disponível para cooperados ativos da COAPH*
              </p>
            </div>

            {/* Mockup with Healthcare Professionals */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-2xl h-[600px]">
                
                {/* Healthcare Professional - Left Side */}
                <div className="hidden lg:block absolute left-0 bottom-0 w-80 z-10 animate-float-slow">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent blur-2xl"></div>
                    <img src={nurse1} alt="Profissional COAPH" className="relative w-full h-auto drop-shadow-2xl" />
                  </div>
                </div>

                {/* Healthcare Professional - Right Top */}
                <div className="hidden lg:block absolute right-0 top-0 w-72 z-10 animate-float">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d3a971]/20 to-transparent blur-2xl"></div>
                    <img src={nurse3} alt="Profissional COAPH" className="relative w-full h-auto drop-shadow-2xl" />
                  </div>
                </div>

                {/* Medical Icon Decorations */}
                <div className="hidden lg:block absolute left-12 top-20 animate-pulse-slow">
                  <div className="bg-red-600/10 backdrop-blur-sm rounded-full p-3 border border-red-600/20">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>

                <div className="hidden lg:block absolute right-16 top-48 animate-pulse-slow animation-delay-1000">
                  <div className="bg-[#d3a971]/10 backdrop-blur-sm rounded-full p-3 border border-[#d3a971]/20">
                    <Shield className="w-8 h-8 text-[#d3a971]" />
                  </div>
                </div>

                {/* Phone Mockup - Centered */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#d3a971] to-red-600 rounded-[3.5rem] blur-2xl opacity-40"></div>
                    <div className="relative w-72 h-[600px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] shadow-2xl p-2">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                    {/* App Screenshot Real */}
                    <img 
                      src={appScreenshot} 
                      alt="App S.O.S SAÚDE - Antecipação de Recebíveis" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                </div>
                </div>

                {/* Ambulance - Bottom Right */}
                <div className="hidden lg:block absolute right-0 bottom-[-100px] w-96 z-10 animate-float-slow">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/15 to-transparent blur-2xl"></div>
                    <img src={ambulance} alt="Ambulância SAMU" className="relative w-full h-auto drop-shadow-2xl" />
                  </div>
                </div>
              
              </div>
            </div>
          </div>

          {/* Trust Badges - Below Mockup */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <CheckCircle2 className="h-6 w-6 text-[#d3a971] flex-shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">Processo 100% digital</div>
                <div className="text-[#f5eee0] text-xs mt-1">Tudo pelo aplicativo</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <CheckCircle2 className="h-6 w-6 text-[#d3a971] flex-shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">Antecipação no aplicativo</div>
                <div className="text-[#f5eee0] text-xs mt-1">Simule antes de contratar</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <CheckCircle2 className="h-6 w-6 text-[#d3a971] flex-shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">Programa Atraso Zero</div>
                <div className="text-[#f5eee0] text-xs mt-1">Receba sua produção sem atrasos</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <CheckCircle2 className="h-6 w-6 text-[#d3a971] flex-shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">Suporte dedicado</div>
                <div className="text-[#f5eee0] text-xs mt-1">Para cooperados COAPH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* What are the Products */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conheça os produtos da parceria
            </h2>
            <p className="text-lg text-gray-600">
              A parceria oferece duas soluções para dar mais previsibilidade ao seu recebimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Antecipação de Produção */}
            <Card className="border-2 border-[#ddc193] hover:border-[#d3a971] transition-colors shadow-lg">
              <CardContent className="pt-8 flex flex-col h-full">
                <div className="flex items-start gap-4 min-h-[80px]">
                  <div className="h-16 w-16 bg-gradient-to-br from-[#d3a971] to-[#b8925f] rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Antecipação de Produção</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4 mb-auto">
                  Receba antecipadamente os valores da sua produção que ainda não foram pagos. Você pode simular diretamente pelo nosso aplicativo, ver as condições e solicitar a antecipação de forma 100% digital.
                </p>
                <div className="pt-6 flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#b8925f] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Simulação transparente antes de contratar
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Atraso Zero */}
            <Card className="border-2 border-red-300 hover:border-red-400 transition-colors shadow-lg">
              <CardContent className="pt-8 flex flex-col h-full">
                <div className="flex items-start gap-4 min-h-[80px]">
                  <div className="h-16 w-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"> Programa Atraso Zero</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4 mb-auto">
                  Se o tomador atrasar o pagamento do contrato, você não fica esperando. Com o App S.O.S SAÚDE, seu pagamento acontece na data prevista e a antecipação é liquidada sem cobrança de juros extras.
                </p>
                <div className="pt-6 flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Segurança e previsibilidade para seu fluxo de caixa
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is this Partnership */}
      <section id="sobre-parceria" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entenda como funciona a parceria COAPH + S.O.S SAÚDE
            </h2>
            <p className="text-lg text-gray-600">
              A COAPH e a S.O.S SAÚDE criaram uma parceria para dar mais previsibilidade ao recebimento dos cooperados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-[#ddc193] transition-colors hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-[#f5eee0] rounded-lg flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-[#b8925f]" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Conta digital</h3>
                <p className="text-gray-600">Abra sua conta digital e acesse os serviços pelo aplicativo. A abertura e manutenção da conta S.O.S SAÚDE é 100% gratuita para cooperados da COAPH.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-300 transition-colors hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Visualização da produção</h3>
                <p className="text-gray-600">Visualize sua produção disponível para antecipação diretamente pelo aplicativo após o fechamento realizado pela COAPH.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#ddc193] transition-colors hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-[#f5eee0] rounded-lg flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-[#b8925f]" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Simulação de antecipação</h3>
                <p className="text-gray-600">Faça uma simulação e veja as condições da operação no aplicativo antes de contratar.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-300 transition-colors hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Atraso Zero</h3>
                <p className="text-gray-600">Receba sua produção na data prevista mesmo se houver atraso no pagamento do contrato, assim você não paga juros extras pela antecipação.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#ddc193] transition-colors hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-[#f5eee0] rounded-lg flex items-center justify-center">
                  <Banknote className="h-6 w-6 text-[#b8925f]" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Liquidação automática</h3>
                <p className="text-gray-600">A liquidação da antecipação solicitada ocorre por desconto em folha no dia do pagamento programado do contrato, de forma automática.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#ddc193] transition-colors hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <HeadphonesIcon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Atendimento dedicado</h3>
                <p className="text-gray-600">Conte com suporte exclusivo da equipe S.O.S SAÚDE através do Whatsapp para tirar dúvidas e concluir seu acesso.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios exclusivos para cooperados COAPH
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="h-10 w-10 bg-[#f5eee0] rounded-lg flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-[#b8925f]" />
                </div>
                <h3 className="font-bold text-gray-900">Processo 100% digital</h3>
                <p className="text-gray-600 text-sm">Tudo é feito pelo App S.O.S SAÚDE, com praticidade e segurança.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900">Acompanhamento da produção</h3>
                <p className="text-gray-600 text-sm">Visualize os valores disponíveis para antecipação, após fechamento da produção pela COAPH.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="h-10 w-10 bg-[#f5eee0] rounded-lg flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-[#b8925f]" />
                </div>
                <h3 className="font-bold text-gray-900">Simulação antes de contratar</h3>
                <p className="text-gray-600 text-sm">Antes de solicitar, você consegue simular a antecipação diretamente da sua conta digital S.O.S SAÚDE.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Banknote className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900">Conta para receber seus valores</h3>
                <p className="text-gray-600 text-sm">Os valores são pagos na sua conta S.O.S SAÚDE, que você pode utilizar para realizar transferências e pagamentos, ou fazer um pix para outra conta em sua titularidade.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="h-10 w-10 bg-[#f5eee0] rounded-lg flex items-center justify-center">
                  <HeadphonesIcon className="h-5 w-5 text-[#b8925f]" />
                </div>
                <h3 className="font-bold text-gray-900">Suporte dedicado</h3>
                <p className="text-gray-600 text-sm">Atendimento exclusivo da parceria através do Whatsapp, preparado para auxiliar cooperados da COAPH.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900">Mais previsibilidade financeira</h3>
                <p className="text-gray-600 text-sm">Com a Antecipação de Produção e o Atraso Zero, você sabe exatamente quando vai receber e evita imprevistos no seu fluxo de caixa.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section id="como-funciona" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja como começar a usar
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                number: "1",
                title: "Baixe o App S.O.S SAÚDE",
                description: "Faça o download do aplicativo no seu celular, os links para download estão no final do site.",
                icon: Download
              },
              {
                number: "2",
                title: "Finalize sua abertura de conta",
                description: "Acesse o aplicativo e siga o passo a passo para concluir a abertura da sua conta digital.",
                icon: UserCheck
              },
              {
                number: "3",
                title: "Aguarde a disponibilização da produção",
                description: "Após o fechamento realizado pela COAPH, sua produção ficará disponível para consulta no aplicativo.",
                icon: Clock
              },
              {
                number: "4",
                title: "Faça sua simulação",
                description: "Dentro do App S.O.S SAÚDE, você poderá visualizar sua produção e simular uma antecipação.",
                icon: Calculator
              },
              {
                number: "5",
                title: "Solicite sua antecipação",
                description: "Caso queira seguir com a antecipação, a solicitação é feita diretamente pelo aplicativo.",
                icon: CheckSquare
              }
            ].map((step) => (
              <div key={step.number} className="flex gap-4 items-center bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#e9dbba] transition-colors shadow-sm">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-[#d3a971] to-[#b8925f] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <step.icon className="h-6 w-6 text-[#b8925f] flex-shrink-0" />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex gap-3 items-start">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-blue-900">
                  <strong>Importante:</strong> A disponibilidade da produção depende do fechamento e envio das informações pela COAPH. A liberação para todos os cooperados ocorrerá de forma gradual, conforme os contratos forem sendo incluídos no projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Anticipation Works */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-amber-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona a antecipação pelo App S.O.S SAÚDE
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-red-300 to-amber-300"></div>

              <div className="space-y-8">
                {[
                  {
                    title: "Fechamento da produção",
                    description: "A COAPH realiza o fechamento da produção e envia as informações para a plataforma S.O.S SAÚDE.",
                    icon: FileText,
                    color: "red"
                  },
                  {
                    title: "Disponibilização no App S.O.S SAÚDE",
                    description: "Após isso, o cooperado pode acessar o aplicativo para visualizar a produção vinculada ao seu contrato.",
                    icon: Smartphone,
                    color: "gold"
                  },
                  {
                    title: "Simulação da antecipação",
                    description: "Antes de solicitar a antecipação, o cooperado consegue simular a operação no próprio aplicativo.",
                    icon: Calculator,
                    color: "red"
                  },
                  {
                    title: "Solicitação e pagamento",
                    description: "Se optar por seguir, a solicitação é feita digitalmente e o pagamento é realizado conforme as condições da simulação.",
                    icon: CheckCircle2,
                    color: "gold"
                  }
                ].map((step, index) => (
                  <div key={index} className="relative flex gap-6 items-center">
                    <div className={`flex-shrink-0 h-16 w-16 ${step.color === 'red' ? 'bg-gradient-to-br from-red-600 to-red-700' : 'bg-gradient-to-br from-[#d3a971] to-[#b8925f]'} rounded-xl flex items-center justify-center shadow-lg z-10`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 shadow-md border-2 border-[#ddc193]">
              <div className="flex gap-3 items-start">
                <Lightbulb className="h-6 w-6 text-[#b8925f] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <strong>A simulação é o melhor caminho para consultar sua condição.</strong> Como as condições podem variar conforme cada operação, o aplicativo sempre mostrará os valores aplicáveis antes da confirmação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step to Simulate */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como fazer sua simulação no aplicativo
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#d3a971] to-red-600 rounded-[3.5rem] blur-2xl opacity-40"></div>
                <div className="relative w-72 h-[600px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] shadow-2xl p-2">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                    <img 
                      src={appScreenshot2} 
                      alt="Resumo da Antecipação no App S.O.S SAÚDE" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Steps List */}
            <div className="space-y-4">
              {[
                {
                  number: "1",
                  title: "Acesse sua conta no App S.O.S SAÚDE",
                  description: "Entre com seu login após concluir a abertura de conta."
                },
                {
                  number: "2",
                  title: "Vá até a área da sua produção",
                  description: "Visualize os valores disponíveis após o fechamento enviado pela COAPH."
                },
                {
                  number: "3",
                  title: "Escolha a opção de simular antecipação",
                  description: "O aplicativo mostrará a jornada de simulação de forma guiada."
                },
                {
                  number: "4",
                  title: "Informe o valor desejado",
                  description: "Escolha o valor que deseja antecipar, dentro do que estiver disponível."
                },
                {
                  number: "5",
                  title: "Confira as condições da operação",
                  description: "Antes de confirmar, o aplicativo mostrará os valores da operação para sua análise."
                },
                {
                  number: "6",
                  title: "Confirme apenas se estiver de acordo",
                  description: "A contratação só acontece após sua confirmação final."
                }
              ].map((step) => (
                <div key={step.number} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-gradient-to-br from-[#d3a971] to-[#b8925f] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
              <div className="flex gap-3 items-start">
                <Shield className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-900">
                  <strong>A simulação não gera contratação automática.</strong> Você sempre poderá visualizar as condições antes de concluir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything in the App */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo acontece direto no aplicativo
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { icon: UserCheck, label: "Abertura de conta", color: "gold" },
              { icon: Eye, label: "Acesso à produção", color: "red" },
              { icon: Calculator, label: "Simulação", color: "gold" },
              { icon: CheckSquare, label: "Antecipação", color: "red" },
              { icon: Banknote, label: "Recebimento", color: "gold" },
              { icon: TrendingUp, label: "Acompanhamento", color: "red" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-[#ddc193] transition-colors flex flex-col items-center gap-3 min-w-[160px]">
                <div className={`h-12 w-12 ${item.color === 'gold' ? 'bg-[#f5eee0]' : 'bg-red-100'} rounded-lg flex items-center justify-center`}>
                  <item.icon className={`h-6 w-6 ${item.color === 'gold' ? 'text-[#b8925f]' : 'text-red-600'}`} />
                </div>
                <div className="text-center font-medium text-gray-900">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas-frequentes" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Como faço para baixar o app?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Basta baixar o App S.O.S SAÚDE na App Store ou Google Play. Depois disso, siga o passo a passo no aplicativo para concluir a abertura da conta. Os links estão disponibilizados nesta página.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Como falar com o suporte?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A equipe S.O.S SAÚDE disponibiliza atendimento dedicado para cooperados da COAPH através do Whatsapp informado nesta página.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Existe custo para abrir a conta?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A abertura da conta digital S.O.S SAÚDE é gratuita para cooperados participantes da parceria com a COAPH.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Quais são os benefícios da parceria?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Somente os cooperados que aderirem a parceria terão acesso a: Conta digital S.O.S SAÚDE; Visualização da produção; Simulação e solicitação de antecipação; O programa Atraso Zero, que garante o pagamento da produção na data prevista em contrato mesmo se houver atraso do tomador.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Qual é a taxa da antecipação?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A taxa não é fixa e pode variar conforme as características da operação. Por isso, o cooperado deve realizar a simulação diretamente no App S.O.S SAÚDE, onde as condições serão apresentadas antes da confirmação da antecipação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Onde eu recebo o dinheiro?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Os valores são creditados na conta S.O.S SAÚDE vinculada ao cooperado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Quando e como eu pago a antecipação?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A antecipação é liquidada automaticamente no dia do pagamento da produção. O valor é descontado diretamente do pagamento do contrato. Você não precisa fazer nenhum pagamento manual.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Se eu atrasar, tem multa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Não. Com o Atraso Zero, a antecipação é liquidada na data prevista, mesmo que o tomador do contrato atrase o pagamento. Isso evita juros adicionais por atraso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Em quantas parcelas eu posso pagar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A antecipação é liquidada em parcela única, no dia do pagamento da produção vinculada ao contrato.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Se eu estiver com o nome restrito, posso usar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A elegibilidade depende das regras internas de análise da operação. O cooperado deve concluir seu cadastro e consultar sua disponibilidade no aplicativo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Qualquer cooperado da COAPH já pode usar o app hoje?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A liberação do acesso acontece de forma gradual. Isso depende do envio das informações de produção pela COAPH para cada contrato participante do projeto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="bg-white rounded-xl border-2 border-gray-100 px-6">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                  Quanto tempo demora para o dinheiro cair na conta?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Após a confirmação da antecipação no aplicativo, o valor normalmente é creditado no mesmo dia na sua conta S.O.S SAÚDE, caso tenha sido confirmada até às 16:00.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-amber-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900">Parceria Oficial</h3>
              <p className="text-gray-600 text-sm">Operação autorizada e em conformidade com as diretrizes da COAPH</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-gradient-to-br from-[#d3a971] to-[#b8925f] rounded-full flex items-center justify-center mx-auto shadow-lg">
                <HeadphonesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900">Suporte Dedicado</h3>
              <p className="text-gray-600 text-sm">Equipe exclusiva preparada para atender cooperados da COAPH</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900">Processo Digital Seguro</h3>
              <p className="text-gray-600 text-sm">Toda a jornada acontece de forma protegida no aplicativo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="suporte" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-[#e9dbba] p-8 md:p-12 space-y-6">
              <div className="h-16 w-16 bg-[#f5eee0] rounded-full flex items-center justify-center mx-auto">
                <HeadphonesIcon className="h-8 w-8 text-[#b8925f]" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Precisa de ajuda? Fale com a nossa equipe
              </h2>
              
              <p className="text-lg text-gray-600">
                Se você tiver dúvidas sobre abertura de conta, acesso ao app ou uso da parceria, fale com o suporte dedicado para cooperados da COAPH.
              </p>

              <div className="space-y-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-[#d3a971] to-[#b8925f] hover:from-[#b8925f] hover:to-[#9d7c4d] text-white font-bold text-lg px-8 py-6 w-full sm:w-auto shadow-lg" asChild>
                  <a href="https://wa.me/message/ZKI7657576A1" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar com o Suporte
                  </a>
                </Button>
                
                <p className="text-sm text-gray-500">
                  Atendimento: Segunda a Sexta, 9h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#d3a971]/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Baixe o App S.O.S SAÚDE e finalize sua abertura de conta
                </h2>
                <p className="text-lg text-[#faf8f5]">
                  Se você já foi pré-cadastrado, basta baixar o aplicativo e seguir o passo a passo para concluir seu acesso.
                </p>

                <div className="space-y-4 pt-4">
                  <Button size="lg" className="bg-gradient-to-r from-[#d3a971] to-[#b8925f] hover:from-[#b8925f] hover:to-[#9d7c4d] text-white font-bold text-lg px-8 py-6 w-full sm:w-auto shadow-xl" asChild>
                    <a href="https://apps.apple.com/br/app/sossaude-app/id6736549589" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      App Store
                    </a>
                  </Button>
                  <Button size="lg" className="bg-gradient-to-r from-[#d3a971] to-[#b8925f] hover:from-[#b8925f] hover:to-[#9d7c4d] text-white font-bold text-lg px-8 py-6 w-full sm:w-auto ml-0 sm:ml-4 shadow-xl" asChild>
                    <a href="https://play.google.com/store/apps/details?id=com.sossaude.app" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      Play Store
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-64 h-64 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-6">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* QR Code decorativo */}
                    <rect x="0" y="0" width="200" height="200" fill="white"/>
                    
                    {/* Quadrado superior esquerdo */}
                    <rect x="10" y="10" width="60" height="60" fill="black"/>
                    <rect x="20" y="20" width="40" height="40" fill="white"/>
                    <rect x="30" y="30" width="20" height="20" fill="black"/>
                    
                    {/* Quadrado superior direito */}
                    <rect x="130" y="10" width="60" height="60" fill="black"/>
                    <rect x="140" y="20" width="40" height="40" fill="white"/>
                    <rect x="150" y="30" width="20" height="20" fill="black"/>
                    
                    {/* Quadrado inferior esquerdo */}
                    <rect x="10" y="130" width="60" height="60" fill="black"/>
                    <rect x="20" y="140" width="40" height="40" fill="white"/>
                    <rect x="30" y="150" width="20" height="20" fill="black"/>
                    
                    {/* Padrão aleatório decorativo */}
                    <rect x="80" y="10" width="10" height="10" fill="black"/>
                    <rect x="90" y="10" width="10" height="10" fill="black"/>
                    <rect x="110" y="10" width="10" height="10" fill="black"/>
                    
                    <rect x="80" y="20" width="10" height="10" fill="black"/>
                    <rect x="100" y="20" width="10" height="10" fill="black"/>
                    <rect x="110" y="20" width="10" height="10" fill="black"/>
                    
                    <rect x="80" y="30" width="10" height="10" fill="black"/>
                    <rect x="100" y="30" width="10" height="10" fill="black"/>
                    <rect x="120" y="30" width="10" height="10" fill="black"/>
                    
                    <rect x="80" y="40" width="10" height="10" fill="black"/>
                    <rect x="90" y="40" width="10" height="10" fill="black"/>
                    <rect x="100" y="40" width="10" height="10" fill="black"/>
                    <rect x="120" y="40" width="10" height="10" fill="black"/>
                    
                    <rect x="90" y="50" width="10" height="10" fill="black"/>
                    <rect x="110" y="50" width="10" height="10" fill="black"/>
                    <rect x="120" y="50" width="10" height="10" fill="black"/>
                    
                    <rect x="80" y="60" width="10" height="10" fill="black"/>
                    <rect x="100" y="60" width="10" height="10" fill="black"/>
                    <rect x="110" y="60" width="10" height="10" fill="black"/>
                    
                    {/* Mais padrões */}
                    <rect x="10" y="80" width="10" height="10" fill="black"/>
                    <rect x="20" y="80" width="10" height="10" fill="black"/>
                    <rect x="40" y="80" width="10" height="10" fill="black"/>
                    <rect x="60" y="80" width="10" height="10" fill="black"/>
                    
                    <rect x="10" y="90" width="10" height="10" fill="black"/>
                    <rect x="30" y="90" width="10" height="10" fill="black"/>
                    <rect x="50" y="90" width="10" height="10" fill="black"/>
                    <rect x="60" y="90" width="10" height="10" fill="black"/>
                    
                    <rect x="20" y="100" width="10" height="10" fill="black"/>
                    <rect x="30" y="100" width="10" height="10" fill="black"/>
                    <rect x="50" y="100" width="10" height="10" fill="black"/>
                    
                    <rect x="10" y="110" width="10" height="10" fill="black"/>
                    <rect x="40" y="110" width="10" height="10" fill="black"/>
                    <rect x="60" y="110" width="10" height="10" fill="black"/>
                    
                    <rect x="20" y="120" width="10" height="10" fill="black"/>
                    <rect x="30" y="120" width="10" height="10" fill="black"/>
                    <rect x="50" y="120" width="10" height="10" fill="black"/>
                    
                    {/* Lado direito e inferior */}
                    <rect x="80" y="80" width="10" height="10" fill="black"/>
                    <rect x="100" y="80" width="10" height="10" fill="black"/>
                    <rect x="130" y="80" width="10" height="10" fill="black"/>
                    <rect x="150" y="80" width="10" height="10" fill="black"/>
                    <rect x="170" y="80" width="10" height="10" fill="black"/>
                    <rect x="180" y="80" width="10" height="10" fill="black"/>
                    
                    <rect x="80" y="90" width="10" height="10" fill="black"/>
                    <rect x="90" y="90" width="10" height="10" fill="black"/>
                    <rect x="110" y="90" width="10" height="10" fill="black"/>
                    <rect x="140" y="90" width="10" height="10" fill="black"/>
                    <rect x="160" y="90" width="10" height="10" fill="black"/>
                    <rect x="180" y="90" width="10" height="10" fill="black"/>
                    
                    <rect x="100" y="100" width="10" height="10" fill="black"/>
                    <rect x="120" y="100" width="10" height="10" fill="black"/>
                    <rect x="130" y="100" width="10" height="10" fill="black"/>
                    <rect x="150" y="100" width="10" height="10" fill="black"/>
                    <rect x="170" y="100" width="10" height="10" fill="black"/>
                    <rect x="190" y="100" width="10" height="10" fill="black"/>
                    
                    <rect x="80" y="110" width="10" height="10" fill="black"/>
                    <rect x="90" y="110" width="10" height="10" fill="black"/>
                    <rect x="110" y="110" width="10" height="10" fill="black"/>
                    <rect x="140" y="110" width="10" height="10" fill="black"/>
                    <rect x="160" y="110" width="10" height="10" fill="black"/>
                    <rect x="180" y="110" width="10" height="10" fill="black"/>
                    
                    <rect x="100" y="120" width="10" height="10" fill="black"/>
                    <rect x="110" y="120" width="10" height="10" fill="black"/>
                    <rect x="130" y="120" width="10" height="10" fill="black"/>
                    <rect x="150" y="120" width="10" height="10" fill="black"/>
                    <rect x="170" y="120" width="10" height="10" fill="black"/>
                    
                    <rect x="80" y="130" width="10" height="10" fill="black"/>
                    <rect x="90" y="130" width="10" height="10" fill="black"/>
                    <rect x="120" y="130" width="10" height="10" fill="black"/>
                    <rect x="140" y="130" width="10" height="10" fill="black"/>
                    <rect x="160" y="130" width="10" height="10" fill="black"/>
                    <rect x="190" y="130" width="10" height="10" fill="black"/>
                    
                    <rect x="100" y="140" width="10" height="10" fill="black"/>
                    <rect x="110" y="140" width="10" height="10" fill="black"/>
                    <rect x="120" y="140" width="10" height="10" fill="black"/>
                    <rect x="130" y="140" width="10" height="10" fill="black"/>
                    <rect x="150" y="140" width="10" height="10" fill="black"/>
                    <rect x="180" y="140" width="10" height="10" fill="black"/>
                    
                    <rect x="80" y="150" width="10" height="10" fill="black"/>
                    <rect x="100" y="150" width="10" height="10" fill="black"/>
                    <rect x="120" y="150" width="10" height="10" fill="black"/>
                    <rect x="140" y="150" width="10" height="10" fill="black"/>
                    <rect x="170" y="150" width="10" height="10" fill="black"/>
                    <rect x="180" y="150" width="10" height="10" fill="black"/>
                    
                    <rect x="90" y="160" width="10" height="10" fill="black"/>
                    <rect x="110" y="160" width="10" height="10" fill="black"/>
                    <rect x="130" y="160" width="10" height="10" fill="black"/>
                    <rect x="160" y="160" width="10" height="10" fill="black"/>
                    <rect x="190" y="160" width="10" height="10" fill="black"/>
                    
                    <rect x="80" y="170" width="10" height="10" fill="black"/>
                    <rect x="100" y="170" width="10" height="10" fill="black"/>
                    <rect x="120" y="170" width="10" height="10" fill="black"/>
                    <rect x="140" y="170" width="10" height="10" fill="black"/>
                    <rect x="150" y="170" width="10" height="10" fill="black"/>
                    <rect x="170" y="170" width="10" height="10" fill="black"/>
                    
                    <rect x="90" y="180" width="10" height="10" fill="black"/>
                    <rect x="100" y="180" width="10" height="10" fill="black"/>
                    <rect x="130" y="180" width="10" height="10" fill="black"/>
                    <rect x="160" y="180" width="10" height="10" fill="black"/>
                    <rect x="180" y="180" width="10" height="10" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-red-400">COAPH</div>
                <div className="text-gray-500">+</div>
                <div className="text-2xl font-bold text-[#d3a971]">S.O.S SAÚDE</div>
              </div>
              <p className="text-gray-400 text-sm">
                Parceria operacional exclusiva entre COAPH e S.O.S SAÚDE, criada para trazer mais previsibilidade ao recebimento dos cooperados, permitindo a antecipação da produção e evitando atrasos no pagamento.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Links Úteis</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#sobre-parceria" className="hover:text-amber-400 transition-colors">Sobre a Parceria</a></li>
                <li><a href="#como-funciona" className="hover:text-amber-400 transition-colors">Como Funciona</a></li>
                <li><a href="#duvidas-frequentes" className="hover:text-amber-400 transition-colors">Dúvidas Frequentes</a></li>
                <li><a href="#suporte" className="hover:text-amber-400 transition-colors">Suporte</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contato</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp: (85) 99999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>comercial.nordeste@sossaude.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>www.sossaude.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2026 S.O.S SAÚDE + COAPH. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
