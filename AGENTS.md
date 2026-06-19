# AGENTS.md

Guia para agentes de IA trabalhando neste repositório.

## O que é

Landing page institucional da **Edge Think** — consultoria/serviço de **agentes de IA & automação**.
Site estático (SPA React) servido pelo **GitHub Pages** no domínio customizado **edgethink.com.br**.

- **Repositório:** `jcguimaraesnet/website-edgethink` (era `jcguimaraesnet.github.io`)
- **Domínio:** https://edgethink.com.br (HTTPS forçado)
- **Design:** variação "Editorial Light" gerada no Claude Design (handoff React)

## Stack atual

- **React 18 + Vite 5** — estilos inline orientados por design tokens (sem framework de UI)
- **i18n** próprio via React Context ([src/LanguageContext.jsx](src/LanguageContext.jsx) + [src/i18n.js](src/i18n.js)) — bilíngue pt-BR / en-US, padrão pt-BR, persiste em `localStorage`
- Fontes: Playfair Display (títulos/logo) via Google Fonts; Helvetica (corpo); mono (eyebrows)
- **pnpm** como gerenciador de pacotes (commitar `pnpm-lock.yaml`, nunca `package-lock.json`)
- Build e deploy via **GitHub Actions** ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) — builda com Vite e publica `./dist`

> Histórico: o site foi migrado de **Jekyll (Serif Theme)** para este app React em jun/2026.

## Desenvolvimento local

```bash
pnpm install       # instala dependências
pnpm dev           # servidor de desenvolvimento (http://localhost:5173)
pnpm build         # build de produção → ./dist
pnpm preview       # serve o build de produção
```

## Estrutura

```
index.html           # entry HTML (Google Fonts + #root)
vite.config.js       # config do Vite (base '/')
public/CNAME         # edgethink.com.br — copiado para dist/ no build
src/
  main.jsx           # entry React
  App.jsx            # composição + LanguageProvider
  LanguageContext.jsx, i18n.js   # i18n (Context + dicionário pt/en)
  theme.js           # design tokens (cores, fontes)
  styles.css         # reset + keyframes
  components/         # Header, Hero, HeroGraphic, Features, UseCases,
                     # Philosophy, FinalCTA, Footer
```

> Os CTAs ("Solicite diagnóstico gratuito") ainda são placeholders — precisam ser ligados
> ao fluxo real de leads (form, modal ou rota). Contato atual: jcguimaraes@gmail.com.

## Deploy & domínio (contexto importante)

- Push na branch `main` → workflow do GitHub Actions builda com Vite e publica `./dist` no Pages.
- O domínio `edgethink.com.br` é fixado pelo arquivo **`public/CNAME`** (entra no output do build) + nas Settings do Pages.
- **DNS** está no **registro.br** (modo avançado), não há Cloudflare:
  - `A`/`AAAA` do apex → IPs anycast do GitHub Pages (`185.199.108-111.153`)
  - `CNAME www` → `jcguimaraesnet.github.io` (aponta para a conta, não para o repo)
- Por ser um **project site** (nome ≠ `usuario.github.io`) com domínio customizado, o site
  é servido na **raiz** do domínio (`base: '/'` no Vite).
- ⚠️ **Não** crie um repo chamado `jcguimaraesnet.github.io` com o domínio `edgethink.com.br`
  apontado nele — isso reativaria o redirect global de `*.github.io` para o domínio.

## Convenções

- Conteúdo e textos do site em **português (pt-BR)** e inglês (en-US), via dicionário i18n.
- Commits gerados por IA usam o prefixo `[AI]` ou `[IA]` (ver histórico). Demais commits seguem Conventional Commits (`feat:`, `chore:`).
- Commitar/pushar somente quando solicitado.
