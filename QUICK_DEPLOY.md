# ⚡ Guia Rápido de Deploy - 5 Minutos

## 🚀 Deploy Instantâneo (Opção Mais Rápida)

### 1. Instale o Vercel CLI

```bash
npm install -g vercel
```

### 2. Faça o Deploy

```bash
vercel
```

### 3. Siga os Prompts

```
? Set up and deploy "~/coaph-valut-lp"? [Y/n] Y
? Which scope do you want to deploy to? (Seu usuário)
? Link to existing project? [y/N] N
? What's your project's name? coaph-valut-lp
? In which directory is your code located? ./
? Want to override the settings? [y/N] N
```

### 4. Pronto! ✨

Sua LP estará online em segundos! O Vercel retornará:
```
✅ Production: https://coaph-valut-lp-xyz.vercel.app
```

---

## 🔗 Deploy via GitHub (Melhor para Longo Prazo)

### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Crie um novo repositório (ex: `coaph-valut-lp`)
3. **NÃO** inicialize com README

### Passo 2: Conectar Projeto Local

```bash
# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "Landing Page COAPH + VALUT - Pronta para Produção"

# Adicionar remote (substitua com SEU repositório)
git remote add origin https://github.com/SEU-USUARIO/coaph-valut-lp.git

# Renomear branch principal
git branch -M main

# Push inicial
git push -u origin main
```

### Passo 3: Conectar ao Vercel

1. Acesse https://vercel.com/login
2. Faça login com sua conta GitHub
3. Clique em **"Add New..."** → **"Project"**
4. Selecione seu repositório `coaph-valut-lp`
5. Clique em **"Import"**
6. Configurações detectadas automaticamente:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Clique em **"Deploy"**

### Passo 4: Aguarde (~2 minutos)

O Vercel irá:
- ✅ Instalar dependências
- ✅ Fazer o build
- ✅ Deploy na CDN global
- ✅ Gerar URL de produção

---

## 🌐 Configurar Domínio Customizado (Opcional)

### No Vercel:

1. Acesse seu projeto
2. **Settings** → **Domains**
3. Clique em **"Add"**
4. Digite seu domínio (ex: `parceria.coaph.com.br`)

### No seu DNS:

Adicione um registro:
```
Type: CNAME
Name: parceria (ou www)
Value: cname.vercel-dns.com
```

**Aguarde propagação:** 5-30 minutos

---

## 📊 Ativar Analytics (Grátis)

No Vercel Dashboard:

1. Acesse seu projeto
2. **Analytics** tab
3. Click **"Enable"**
4. Pronto! Métricas automáticas de:
   - Visitantes únicos
   - Page views
   - Top pages
   - Dispositivos
   - Localização

---

## 🔄 Atualizar LP (Após Deploy via GitHub)

Sempre que fizer mudanças:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

**Deploy automático!** O Vercel detecta o push e faz deploy em ~2 minutos.

---

## ✅ Verificar se está Online

Após o deploy, teste:

1. ✅ Abra a URL fornecida pelo Vercel
2. ✅ Teste no mobile (Chrome DevTools)
3. ✅ Clique nos botões de CTA
4. ✅ Verifique links do WhatsApp e App
5. ✅ Teste scroll suave entre seções
6. ✅ Expanda itens do FAQ

---

## 🆘 Problemas Comuns

### ❌ Build Failed

```bash
# Rode localmente primeiro
npm install
npm run build

# Se funcionar localmente, limpe cache do Vercel
# Settings → General → Clear Build Cache
```

### ❌ Imagens não aparecem

- Verifique se os assets estão no repositório
- Confira se `figma:asset` foi processado corretamente
- Veja os logs de build no Vercel

### ❌ Domínio não funciona

- Aguarde propagação DNS (até 48h, geralmente 30min)
- Verifique configuração CNAME
- Use ferramenta: https://dnschecker.org

---

## 📱 Compartilhar Preview

**URL de Produção:**
```
https://seu-projeto.vercel.app
```

**Gerar QR Code:**
```
https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://seu-projeto.vercel.app
```

---

## 🎉 Pronto!

Sua landing page está:
- ✅ Online globalmente
- ✅ Com HTTPS automático
- ✅ Performance otimizada
- ✅ Deploy automático (se via GitHub)
- ✅ Analytics disponível

**Próximos passos:** Adicione tracking pixels (veja `PRODUCTION_READY.md`)

---

*Tempo total: ~5 minutos* ⚡
