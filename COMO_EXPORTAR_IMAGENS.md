# 🎯 Como Exportar as Imagens para Deploy no Vercel

## 🚨 Problema
O esquema `figma:asset` é **exclusivo do ambiente Figma Make** e não funciona no Vercel ou em outros servidores. Você precisa exportar as imagens como arquivos reais.

---

## 📋 Imagens que você precisa exportar:

No seu código (`/src/app/App.tsx`), você está usando:

```tsx
import coaphLogo from "figma:asset/53a9543ecb764d4606405422dc581849886e5f4e.png";
import valutLogo from "figma:asset/7b3569f07855fcb89f88e516069ff8515778bb19.png";
import nurse1 from "figma:asset/d37d12ebe684ed5d61dbb73a66cd03ddd2775d2b.png";
import nurse3 from "figma:asset/86af0c9f2db5f714a68c2f014c80b6eed995ebb9.png";
import ambulance from "figma:asset/f78e5f1792f42cf3fe667707ee69d1b6b82d74f9.png";
```

**Total: 5 imagens**

---

## ✅ PASSO A PASSO: Exportar as Imagens

### **Método 1: Via DevTools (RECOMENDADO)** 🔧

1. **Abra o DevTools do navegador:**
   - Pressione `F12` (ou `Ctrl+Shift+I` / `Cmd+Option+I`)

2. **Vá para a aba "Network"**

3. **Filtre por imagens:**
   - Clique no filtro "Img" ou digite `png` na busca

4. **Recarregue a página:**
   - Pressione `F5` ou `Ctrl+R`

5. **Localize cada imagem:**
   - Procure pelos hashes no nome:
     - `53a9543ecb764d4606405422dc581849886e5f4e.png` → Logo COAPH
     - `7b3569f07855fcb89f88e516069ff8515778bb19.png` → Logo VALUT
     - `d37d12ebe684ed5d61dbb73a66cd03ddd2775d2b.png` → Enfermeira 1
     - `86af0c9f2db5f714a68c2f014c80b6eed995ebb9.png` → Enfermeira 3
     - `f78e5f1792f42cf3fe667707ee69d1b6b82d74f9.png` → Ambulância

6. **Salve cada imagem:**
   - Clique com **botão direito** na linha da imagem
   - Selecione **"Open in new tab"**
   - Na nova aba, **clique com botão direito** na imagem
   - **"Salvar imagem como..."**
   - Salve com os nomes abaixo

---

### **Método 2: Screenshot Direto** 📸

Se a imagem está visível na tela:

1. **Clique com botão direito** sobre a imagem
2. Selecione **"Salvar imagem como..."** ou **"Save image as..."**
3. Salve com o nome correto

---

### **Método 3: Inspecionar Elemento** 🔍

1. **Clique com botão direito** na imagem
2. Selecione **"Inspecionar"** ou **"Inspect"**
3. No HTML, você verá algo como: `<img src="blob:http://...">`
4. **Clique com botão direito** no `src` → **"Open in new tab"**
5. **Salve a imagem**

---

## 📁 Estrutura de Pastas

Crie a pasta `/public/images/` e salve as imagens com estes nomes:

```
/public/
  /images/
    coaph-logo.png        ← Logo da COAPH
    valut-logo.png        ← Logo da VALUT
    nurse-1.png           ← Foto enfermeira 1
    nurse-3.png           ← Foto enfermeira 3
    ambulance.png         ← Foto ambulância
```

---

## 🔄 Atualizar o Código

Depois de salvar as imagens em `/public/images/`, edite o arquivo `/src/app/App.tsx`:

**SUBSTITUA as linhas 26-30:**

```tsx
// ❌ REMOVA ISTO:
import coaphLogo from "figma:asset/53a9543ecb764d4606405422dc581849886e5f4e.png";
import valutLogo from "figma:asset/7b3569f07855fcb89f88e516069ff8515778bb19.png";
import nurse1 from "figma:asset/d37d12ebe684ed5d61dbb73a66cd03ddd2775d2b.png";
import nurse3 from "figma:asset/86af0c9f2db5f714a68c2f014c80b6eed995ebb9.png";
import ambulance from "figma:asset/f78e5f1792f42cf3fe667707ee69d1b6b82d74f9.png";
```

**POR ISTO:**

```tsx
// ✅ USE PATHS LOCAIS:
const coaphLogo = "/images/coaph-logo.png";
const valutLogo = "/images/valut-logo.png";
const nurse1 = "/images/nurse-1.png";
const nurse3 = "/images/nurse-3.png";
const ambulance = "/images/ambulance.png";
```

**Note:** Use `const` em vez de `import` porque agora são paths públicos.

---

## 🚀 Deploy no Vercel

Depois de fazer as mudanças:

```bash
# 1. Adicionar as mudanças
git add .

# 2. Commit
git commit -m "Replace figma:asset with local images"

# 3. Push
git push

# 4. Deploy
vercel
```

---

## 🎨 Alternativa: Usar Placeholders Temporários

Se você quiser fazer deploy **AGORA** sem exportar as imagens, pode usar placeholders temporários:

```tsx
// Placeholders temporários - substitua depois com imagens reais
const coaphLogo = "https://via.placeholder.com/200x80/DC2626/FFFFFF?text=COAPH";
const valutLogo = "https://via.placeholder.com/200x60/F59E0B/FFFFFF?text=VALUT";
const nurse1 = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=600&fit=crop";
const nurse3 = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=600&fit=crop";
const ambulance = "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=500&h=300&fit=crop";
```

Isso permite que você valide o deploy enquanto consegue as imagens reais.

---

## 🆘 Solução de Problemas

### Problema: "Não consigo encontrar as imagens no DevTools"
**Solução:** Tente o Método 2 (screenshot direto) ou Método 3 (inspecionar elemento)

### Problema: "As imagens não aparecem depois do deploy"
**Solução:** 
- Verifique se as imagens estão em `/public/images/`
- Verifique se os nomes estão corretos (case-sensitive!)
- Limpe o cache do Vercel e faça redeploy

### Problema: "Quero usar logos oficiais da COAPH/VALUT"
**Solução:** 
- Peça os arquivos oficiais para a COAPH e VALUT
- Ou use as URLs se já estiverem hospedados online:
```tsx
const coaphLogo = "https://coaph.com.br/assets/logo.png";
const valutLogo = "https://valutglobal.com/logo.png";
```

---

## ✨ Resumo Rápido

1. ⬇️ **Exportar** as 5 imagens (DevTools ou screenshot)
2. 📁 **Salvar** em `/public/images/` com os nomes corretos
3. 🔄 **Atualizar** `/src/app/App.tsx` (trocar `import` por `const`)
4. 🚀 **Deploy** no Vercel

---

**Boa sorte com o deploy! 🎉**
