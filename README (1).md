# Escola de Magos — código do site

Site feito só com **HTML + CSS + JavaScript puro** (sem framework, sem Lovable, sem build).
Você pode abrir e editar em qualquer editor de código (recomendo o **VS Code**, é gratuito).

## Arquivos

- `index.html` → todo o conteúdo e estrutura do site (textos, seções, formulário)
- `style.css` → todo o visual (cores, fontes, espaçamentos, animações)
- `script.js` → o menu mobile, o envio do formulário pro WhatsApp e as animações de scroll
- `assets/` → pasta vazia, é onde você deve colocar suas fotos reais

## Como ver o site rodando

1. Baixe os 4 arquivos (`index.html`, `style.css`, `script.js`) e a pasta `assets` e mantenha todos **na mesma pasta**.
2. Dê dois cliques no `index.html` — ele abre direto no navegador. Pronto, já está funcionando.
3. Para editar: abra a pasta inteira no VS Code, mude o que quiser e salve. Só atualizar a página (F5) pra ver a mudança.

## O que trocar primeiro

### 1. Suas fotos na galeria
No `index.html`, procure a seção `<!-- ===================== GALERIA ===================== -->`.
Cada bloco é um `<figure class="gallery-item placeholder">`. Troque por uma imagem real assim:

```html
<figure class="gallery-item">
  <img src="assets/rito-paimon.jpg" alt="Descrição da foto">
  <figcaption>Ritual de Prosperidade<br><span>Selo de Paimon</span></figcaption>
</figure>
```

(coloque o arquivo `rito-paimon.jpg` dentro da pasta `assets`)

### 2. Sua foto na seção "Sobre"
Procure `<div class="about-photo placeholder">` e troque por:
```html
<img class="about-photo" src="assets/sua-foto.jpg" alt="Caue">
```

### 3. Número do WhatsApp
Aparece em dois lugares:
- No `index.html`, nos links `https://wa.me/5547997138542`
- No `script.js`, na linha `const WHATSAPP_NUMBER = "5547997138542";`

### 4. Preços e textos dos rituais
Estão direto no `index.html`, dentro de cada `<article class="card">`. É só editar o texto.

### 5. Cores
No topo do `style.css` tem um bloco `:root { ... }` com todas as cores em um só lugar
(`--gold`, `--bg`, `--ink` etc). Mudar ali muda o site inteiro.

## Colocando no ar (hospedagem)

Esse site é 100% estático (não precisa de servidor/banco de dados), então dá pra hospedar
de graça em vários lugares. As opções mais simples:

- **Netlify Drop** (netlify.com/drop) — arrasta a pasta e já publica, sem cadastro de código.
- **Vercel** ou **GitHub Pages** — ótimo se você já quiser aprender a usar Git.
- **Cloudflare Pages** — também gratuito.

Depois é só apontar seu domínio (se tiver um) pra hospedagem escolhida.

## Se quiser aprender a mexer

- Estrutura (`index.html`) = "o que existe na página"
- Estilo (`style.css`) = "a aparência"
- Comportamento (`script.js`) = "o que acontece quando clica/rola a página"

Essa separação é o padrão usado em qualquer site do mundo — aprendendo a mexer aqui,
você já entende a lógica de praticamente qualquer site simples.
