# 🚀 Landing Page COAPH + VALUT - Pronta para Produção

## ✅ Otimizações Aplicadas

### 1. **Código Limpo**
- ✅ Removida navegação para artes de campanha
- ✅ Removidos componentes não utilizados
- ✅ Removidos imports desnecessários
- ✅ Removido estado `showCampaigns`
- ✅ Código otimizado apenas com a LP principal

### 2. **Performance**
- ✅ Imagens otimizadas com `figma:asset`
- ✅ Lazy loading nativo do navegador
- ✅ Componentes UI otimizados (shadcn/ui)
- ✅ CSS com Tailwind v4 (build otimizado)
- ✅ Animações performáticas com CSS

### 3. **SEO & Acessibilidade**
- ✅ Estrutura semântica HTML5
- ✅ Alt texts em todas as imagens
- ✅ Navegação por âncoras funcionando
- ✅ Contraste adequado de cores
- ✅ Responsivo mobile-first

---

## 📦 Deploy no Vercel

### Opção 1: Via GitHub (Recomendado)

```bash
# 1. Inicializar Git (se ainda não fez)
git init
git add .
git commit -m "Landing Page COAPH + VALUT - Pronta para Produção"

# 2. Criar repositório no GitHub e conectar
git remote add origin https://github.com/seu-usuario/coaph-valut-lp.git
git branch -M main
git push -u origin main

# 3. No Vercel (https://vercel.com):
# - Fazer login com GitHub
# - Clicar em "Add New Project"
# - Selecionar seu repositório
# - Configurações automáticas:
#   Framework: Vite
#   Build Command: npm run build
#   Output Directory: dist
# - Clicar em "Deploy"
```

### Opção 2: Via CLI

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Seguir prompts interativos
```

---

## 🔧 Configurações Adicionais (Opcional)

### Domínio Customizado
1. Acesse seu projeto no Vercel
2. Settings → Domains
3. Adicione seu domínio (ex: `parceria.coaph.com.br`)
4. Configure DNS conforme instruções

### Analytics (Recomendado)
Adicione Vercel Analytics gratuitamente:
```bash
npm install @vercel/analytics
```

No `/src/app/App.tsx`, adicione:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Seu conteúdo */}
      </div>
      <Analytics />
    </>
  );
}
```

---

## 📊 Ferramentas de Marketing (Opcional)

### Meta Pixel (Facebook/Instagram)

Crie `/src/components/MetaPixel.tsx`:
```tsx
import { useEffect } from 'react';

export function MetaPixel() {
  useEffect(() => {
    // Substitua YOUR_PIXEL_ID pelo seu ID real
    if (typeof window !== 'undefined') {
      (window as any).fbq?.('init', 'YOUR_PIXEL_ID');
      (window as any).fbq?.('track', 'PageView');
    }
  }, []);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        `,
      }}
    />
  );
}
```

### Google Analytics 4

Crie `/src/components/GoogleAnalytics.tsx`:
```tsx
import { useEffect } from 'react';

export function GoogleAnalytics() {
  useEffect(() => {
    // Substitua G-XXXXXXXXXX pelo seu ID real
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
}
```

Depois, importe no `App.tsx`:
```tsx
import { MetaPixel } from './components/MetaPixel';
import { GoogleAnalytics } from './components/GoogleAnalytics';

export default function App() {
  return (
    <>
      <MetaPixel />
      <GoogleAnalytics />
      <div className="min-h-screen bg-white">
        {/* Conteúdo */}
      </div>
    </>
  );
}
```

---

## 🎯 Eventos de Conversão Recomendados

Adicione tracking nos botões principais:

```tsx
// Botão "Começar agora"
<Button 
  onClick={() => {
    window.fbq?.('track', 'InitiateCheckout');
    window.gtag?.('event', 'conversion', { send_to: 'AW-CONVERSION_ID' });
  }}
  ...
>

// Botão "Falar no WhatsApp"
<Button 
  onClick={() => {
    window.fbq?.('track', 'Contact');
    window.gtag?.('event', 'contact', { method: 'whatsapp' });
  }}
  ...
>
```

---

## ⚡ Checklist Final

Antes de fazer o deploy:

- [ ] Revisar todos os textos e links
- [ ] Testar no mobile (Chrome DevTools)
- [ ] Verificar links do WhatsApp e App
- [ ] Confirmar cores COAPH (#DC2626) e VALUT (#d3a971)
- [ ] Testar scroll suave entre seções
- [ ] Verificar FAQ expandindo corretamente
- [ ] Confirmar todas as imagens carregando

---

## 📱 Links Importantes

**WhatsApp VALUT:**  
https://wa.me/message/ZKI5SFC5RDURA1

**App VALUT:**  
https://carteira.valut.app/auth

---

## 🔒 Segurança

✅ Sem exposição de taxas fixas (conforme requisito)
✅ Disclaimer sobre MVP gradual presente
✅ Links externos com `rel="noopener noreferrer"`
✅ HTTPS automático no Vercel

---

## 📈 Próximos Passos Recomendados

1. **Configurar domínio customizado** (parceria.coaph.com.br)
2. **Ativar Vercel Analytics** (gratuito)
3. **Adicionar Meta Pixel** (se houver campanhas FB/IG)
4. **Configurar Google Analytics 4** (tracking de visitas)
5. **Criar testes A/B** (diferentes CTAs)
6. **Heatmap/Hotjar** (entender comportamento do usuário)

---

## 🆘 Suporte Técnico

**Documentação Vercel:**  
https://vercel.com/docs

**Tailwind CSS v4:**  
https://tailwindcss.com/docs

**React + Vite:**  
https://vitejs.dev/guide/

---

✨ **Página 100% otimizada e pronta para produção!**
