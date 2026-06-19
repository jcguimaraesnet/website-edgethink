# AGENTS.md

Guia para agentes de IA trabalhando neste repositório.

## O que é

Landing page institucional da **Edge Think** — consultoria/serviço de **agentes de IA**.
Site estático servido pelo **GitHub Pages** no domínio customizado **edgethink.com.br**.

- **Repositório:** `jcguimaraesnet/website-edgethink` (era `jcguimaraesnet.github.io`)
- **Domínio:** https://edgethink.com.br (HTTPS forçado)
- **Base do tema:** Jekyll Serif Theme (Zerostatic), personalizado para a Edge Think

## Stack atual

- **Jekyll 4.3** (Ruby) + SCSS
- Plugin `jekyll-environment-variables`
- Build e deploy via **GitHub Actions** ([.github/workflows/jekyll.yml](.github/workflows/jekyll.yml)) — `build_type: workflow`, não o build clássico do Pages

> ⚠️ **Migração planejada:** há intenção de trocar o site Jekyll por um app **React (Vite)** ou **HTML puro** com o design remodelado. Se for migrar, troque o workflow para buildar o novo projeto e publicar a pasta de saída (`dist`), e **mantenha o `CNAME` no output** (em React/Vite, coloque o arquivo em `public/`).

## Desenvolvimento local

```bash
bundle install              # instala dependências Ruby
bundle exec jekyll serve    # servidor local em http://localhost:4000
bundle exec jekyll build    # build para ./_site
```

## Estrutura

```
_config.yml          # config do Jekyll (baseurl '/', collections, sass)
index.md             # home
about.md services.md team.md contact.md
_layouts/            # default, home, page, service(s), team(s), contact
_includes/           # header, footer, menus, social, google-analytics
_sass/               # variáveis bootstrap/SCSS
_data/               # contact.yml, menus.yml, seo.yml, features.json, social.json
_services/           # collection "services" (1 arquivo .md por serviço, ordenado por weight)
_team/               # collection "team" (1 arquivo .md por pessoa)
assets/ images/      # estáticos
CNAME                # edgethink.com.br — fixa o domínio customizado
```

> Nota: os arquivos em `_services/` e `_team/` ainda contêm conteúdo placeholder do tema
> original (ex: `accounting.md`, nomes de equipe fictícios) — devem ser substituídos pelo
> conteúdo real da Edge Think.

## Deploy & domínio (contexto importante)

- Push na branch `main` → workflow do GitHub Actions builda e publica no Pages.
- O domínio `edgethink.com.br` está **fixado via arquivo `CNAME`** + nas Settings do Pages.
- **DNS** está no **registro.br** (modo avançado), não há Cloudflare:
  - `A`/`AAAA` do apex → IPs anycast do GitHub Pages (`185.199.108-111.153`)
  - `CNAME www` → `jcguimaraesnet.github.io` (aponta para a conta, não para o repo)
- Por ser um **project site** (nome ≠ `usuario.github.io`) com domínio customizado, o site
  é servido na **raiz** do domínio (`baseurl: '/'`).
- ⚠️ **Não** crie um repo chamado `jcguimaraesnet.github.io` com o domínio `edgethink.com.br`
  apontado nele — isso reativaria o redirect global de `*.github.io` para o domínio.

## Convenções

- Conteúdo e textos do site em **português (pt-BR)**.
- Commits gerados por IA usam o prefixo `[AI]` ou `[IA]` (ver histórico). Demais commits seguem Conventional Commits (`feat:`, `chore:`).
- Commitar/pushar somente quando solicitado.
