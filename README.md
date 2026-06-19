# Edge Think — Landing Page

Landing page institucional da **Edge Think**, consultoria de **agentes de IA & automação**.

> _"Construindo na fronteira do pensamento."_ — Humanos definem a estratégia, a IA executa a operação.

- **Produção:** https://edgethink.com.br
- **Stack:** React 18 + Vite, estilos inline orientados por design tokens
- **Idiomas:** bilíngue pt-BR / en-US (toggle no header, padrão pt-BR, persistido em `localStorage`)
- **Deploy:** GitHub Actions → GitHub Pages ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))

## Desenvolvimento local

```bash
npm install        # instala dependências
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run build      # build de produção → ./dist
npm run preview    # serve o build de produção localmente
```

## Estrutura

```
index.html               # entry HTML (Google Fonts + #root)
vite.config.js           # config do Vite (base '/')
public/
  CNAME                  # edgethink.com.br — copiado para dist/ no build
src/
  main.jsx              # entry React
  App.jsx               # composição da página + LanguageProvider
  LanguageContext.jsx   # i18n via Context (padrão pt, localStorage)
  i18n.js               # dicionário pt/en, integrações e contato
  theme.js              # design tokens (cores, fontes)
  styles.css            # reset + keyframes das animações
  components/
    Header.jsx          # header sticky, logo, toggle de idioma
    Hero.jsx            # hero + CTAs + chips de integração
    HeroGraphic.jsx     # abstração geométrica (CSS puro)
    Features.jsx        # 3 cards de capacidade (hover)
    UseCases.jsx        # 4 cards de casos de uso
    Philosophy.jsx      # faixa navy de filosofia
    FinalCTA.jsx        # CTA final + contato
    Footer.jsx          # logo, slogan, links, copyright
```

## Design

Implementação fiel da variação aprovada **"Editorial Light"**, gerada no Claude Design.
Tokens em [src/theme.js](src/theme.js); tipografia Playfair Display (títulos) + Helvetica (corpo).
Sem assets bitmap — todos os gráficos são primitivas CSS.

## Deploy & domínio

- Push na branch `main` → o workflow builda com Vite e publica `./dist` no GitHub Pages.
- O domínio `edgethink.com.br` é fixado pelo arquivo `public/CNAME` (vai para o output do build).
- Servido na **raiz** do domínio, então `base` do Vite é `/`.

Mais contexto de deploy/domínio em [AGENTS.md](AGENTS.md).
