# 🏥 Landing Page COAPH + VALUT

Landing page da parceria oficial entre **COAPH** (Cooperativa de Anestesiologistas de Pernambuco e Hospitais) e **VALUT** (fintech de soluções financeiras para cooperados).

## 🎯 Objetivo

Apresentar os produtos financeiros da parceria:
- **Antecipação de Produção** - Receba antecipadamente os valores de sua produção
- **Programa Atraso Zero** - Pagamento garantido mesmo com atraso do cliente

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS v4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e composáveis
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Design System

### Cores Principais

- **COAPH Vermelho:** `#DC2626`
- **VALUT Dourado:** `#d3a971` e `#b8925f`
- Tons neutros: branco, cinza claro, preto

### Tipografia

- Fonte padrão do sistema
- Pesos: regular (400), semibold (600), bold (700), black (900)

## 📱 Responsividade

A landing page foi desenvolvida com abordagem **mobile-first**:
- ✅ Mobile (< 768px)
- ✅ Tablet (768px - 1024px)
- ✅ Desktop (> 1024px)

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Via CLI
npm install -g vercel
vercel
```

Ou conecte seu repositório GitHub diretamente no [Vercel Dashboard](https://vercel.com).

### Configurações Automáticas

- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## 📂 Estrutura do Projeto

```
/
├── src/
│   ├── app/
│   │   ├── components/       # Componentes React
│   │   │   └── ui/           # Componentes UI (shadcn)
│   │   └── App.tsx           # Componente principal
│   ├── imports/              # Assets importados
│   ├── styles/
│   │   ├── theme.css         # Tokens CSS
│   │   └── fonts.css         # Fontes customizadas
│   └── main.tsx              # Entry point
├── public/                   # Assets estáticos
├── vercel.json              # Configuração Vercel
├── vite.config.ts           # Configuração Vite
└── package.json
```

## 🔗 Links Importantes

- **WhatsApp VALUT:** https://wa.me/message/ZKI5SFC5RDURA1
- **App VALUT:** https://carteira.valut.app/auth

## ⚙️ Configurações Opcionais

### Analytics

Para adicionar tracking (Meta Pixel, Google Analytics), consulte o arquivo `PRODUCTION_READY.md`.

### Domínio Customizado

Configure seu domínio no Vercel:
1. Settings → Domains
2. Adicione o domínio desejado
3. Configure DNS conforme instruções

## 📋 Checklist de Produção

- [x] Código limpo e otimizado
- [x] Sem componentes não utilizados
- [x] Responsivo em todos os breakpoints
- [x] Imagens otimizadas
- [x] Links funcionando corretamente
- [x] SEO básico implementado
- [x] Performance otimizada
- [x] Pronto para deploy

## 📄 Licença

Propriedade de **COAPH** e **VALUT**. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para cooperados COAPH**
