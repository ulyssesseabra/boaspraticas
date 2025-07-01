import{_ as a,c as t,o as e,ae as n}from"./chunks/framework.Bi4qhrGY.js";const u=JSON.parse('{"title":"🏢 Estrutura padrão de projeto","description":"","frontmatter":{},"headers":[],"relativePath":"estruturaProjeto.md","filePath":"estruturaProjeto.md"}'),p={name:"estruturaProjeto.md"};function d(i,s,o,r,l,c){return e(),t("div",null,s[0]||(s[0]=[n(`<h1 id="🏢-estrutura-padrao-de-projeto" tabindex="-1">🏢 Estrutura padrão de projeto <a class="header-anchor" href="#🏢-estrutura-padrao-de-projeto" aria-label="Permalink to &quot;🏢 Estrutura padrão de projeto&quot;">​</a></h1><h2 id="estrutura-sugerida-para-criacao-de-solucao-net" tabindex="-1">Estrutura sugerida para criação de solução .Net <a class="header-anchor" href="#estrutura-sugerida-para-criacao-de-solucao-net" aria-label="Permalink to &quot;Estrutura sugerida para criação de solução .Net&quot;">​</a></h2><h2 id="📚-visao-geral" tabindex="-1">📚 Visão Geral <a class="header-anchor" href="#📚-visao-geral" aria-label="Permalink to &quot;📚 Visão Geral&quot;">​</a></h2><p>Este projeto é composto por múltiplos projetos organizados em uma solução .NET, seguindo princípios de Clean Architecture e SOLID.</p><hr><h2 id="📁-estrutura-da-solucao" tabindex="-1">📁 Estrutura da Solução <a class="header-anchor" href="#📁-estrutura-da-solucao" aria-label="Permalink to &quot;📁 Estrutura da Solução&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;Name space base&gt;/</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.[api/worker/service]/</span></span>
<span class="line"><span>│   ├── Controllers/</span></span>
<span class="line"><span>│   ├── Middlewares/</span></span>
<span class="line"><span>│   └── Model/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Business/</span></span>
<span class="line"><span>│   └── IBusiness/</span></span>
<span class="line"><span>│   └── IServices/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Business.Imp/</span></span>
<span class="line"><span>│   ├── Mapping/</span></span>
<span class="line"><span>│   └── Business/</span></span>
<span class="line"><span>│   └── Services/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.CrossCutting/</span></span>
<span class="line"><span>│   ├── Configuration/</span></span>
<span class="line"><span>│   └── Extension/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Domain/</span></span>
<span class="line"><span>│   ├── Dependências/</span></span>
<span class="line"><span>│   ├── Entities/</span></span>
<span class="line"><span>│   └── Map/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Repository/</span></span>
<span class="line"><span>│   ├── Dependências/</span></span>
<span class="line"><span>│   └── Repository/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Repository.Imp/</span></span>
<span class="line"><span>│   ├── Repository/</span></span>
<span class="line"><span>│   └── DataContext.cs / NHibernateHelper.cs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── &lt;Name space base&gt;.Shared/</span></span>
<span class="line"><span>│   ├── DTO/</span></span>
<span class="line"><span>│   └── Util/</span></span></code></pre></div><h3 id="📁-api-worker-presentation" tabindex="-1">📁 .api/worker(Presentation) <a class="header-anchor" href="#📁-api-worker-presentation" aria-label="Permalink to &quot;📁 .api/worker(Presentation)&quot;">​</a></h3><p>Projeto para api/worker ou service, basicamente o projeto de apresentação da solução, o ponto de contato com o ambinete externo a aplicação. A estruturação interna é dependente do modelo escolhido. Nesse ponto ele consome interfaces, o projeto CrossCutting e Shared, demais projetos não podem consumii-lo ou ter ele como referência.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.[api/worker/service]/</span></span>
<span class="line"><span>│   ├── Controllers/</span></span>
<span class="line"><span>│   ├── Middlewares/</span></span>
<span class="line"><span>│   └── Model/</span></span></code></pre></div><h3 id="📁-domain" tabindex="-1">📁 .Domain <a class="header-anchor" href="#📁-domain" aria-label="Permalink to &quot;📁 .Domain&quot;">​</a></h3><p>Projeto com a definição das classes de domínio, podendo nelas ter anotações de mapeamento ou validação. Para projetos Nhibernate a pasta Map é repositório dos .hbm .</p><p>Classes de domínio permanecem dentro do scopo da aplicação, não sendo expostas ao ambinente externo. Para sua exposição se faz necessário do uso de DTO.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Domain/</span></span>
<span class="line"><span>│   ├── Entities/</span></span>
<span class="line"><span>│   └── Map/</span></span></code></pre></div><h3 id="📁-business" tabindex="-1">📁 .Business <a class="header-anchor" href="#📁-business" aria-label="Permalink to &quot;📁 .Business&quot;">​</a></h3><p>Classes de Business e Services são reponsáveis pela pelas regras de negócio e primeira camada do CRUD. A diferença entre Business e Service, são:</p><table tabindex="0"><thead><tr><th>Camada</th><th>CRUD</th><th>Regra de negócio</th><th>Validações</th><th>Rotinas</th><th>Integrações</th></tr></thead><tbody><tr><td>Business</td><td>🟢</td><td>🟢</td><td>🟢</td><td>🔴</td><td>🔴</td></tr><tr><td>Service</td><td>🔴</td><td>🔴</td><td>🔴</td><td>🟢</td><td>🟢</td></tr></tbody></table><p>Legenda:<br> 🟢= Permite<br> 🔴= Não se aplica</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Business/</span></span>
<span class="line"><span>│   └── IBusiness/</span></span>
<span class="line"><span>│       └── I&lt;Entity&gt;Business.cs</span></span>
<span class="line"><span>│   └── IServices/</span></span>
<span class="line"><span>│       └── I&lt;Entity&gt;Services.cs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Business.Imp/</span></span>
<span class="line"><span>│   ├── Mapping/</span></span>
<span class="line"><span>│   └── Business/</span></span>
<span class="line"><span>│       └── &lt;Entity&gt;Business.cs</span></span>
<span class="line"><span>│   └── Services/</span></span>
<span class="line"><span>│       └── &lt;Entity&gt;Services.cs</span></span></code></pre></div><h3 id="📁-repository" tabindex="-1">📁 .Repository <a class="header-anchor" href="#📁-repository" aria-label="Permalink to &quot;📁 .Repository&quot;">​</a></h3><p>Classe responsáveis pela persistencia de dados, não contém regras de negócio mas tem a validação de tipo e tamanhos. Context ou factories devem se implementadas em Imp.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Repository/</span></span>
<span class="line"><span>│   └── Repository/</span></span>
<span class="line"><span>│       └── I&lt;Entity&gt;Repository.cs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.Repository.Imp/</span></span>
<span class="line"><span>│   ├── Repository/</span></span>
<span class="line"><span>│       └── &lt;Entity&gt;Repository.cs</span></span>
<span class="line"><span>│   ├── BaseRepository.cs</span></span>
<span class="line"><span>│   └── NHibernateHelper.cs</span></span></code></pre></div><h3 id="📁-crosscutting" tabindex="-1">📁 .CrossCutting <a class="header-anchor" href="#📁-crosscutting" aria-label="Permalink to &quot;📁 .CrossCutting&quot;">​</a></h3><p>Nesse projeto devem ser aplicadas injeções de dependencia, configurações de integrações e extensões de configuração. Esse projeto poderá ser referenciado em todas os demais mas ele não pode referencia nenhum projeto.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>│</span></span>
<span class="line"><span>├── &lt;Name space base&gt;.CrossCutting/</span></span>
<span class="line"><span>│   ├── Configuration/</span></span>
<span class="line"><span>│   └── Extension/</span></span></code></pre></div><h3 id="📁-shared" tabindex="-1">📁 .Shared <a class="header-anchor" href="#📁-shared" aria-label="Permalink to &quot;📁 .Shared&quot;">​</a></h3><p>Nesse projeto todas classes e funções compartilhadas entre os sistemas são implementadas. Principal grupo de classes são os <a href="./dto.html">DTO&#39;s</a></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>│</span></span>
<span class="line"><span>└── &lt;Name space base&gt;.Shared/</span></span>
<span class="line"><span>│   ├── DTO/</span></span>
<span class="line"><span>│   └── Util</span></span></code></pre></div><h3 id="matriz-de-relacionamento" tabindex="-1">Matriz de relacionamento <a class="header-anchor" href="#matriz-de-relacionamento" aria-label="Permalink to &quot;Matriz de relacionamento&quot;">​</a></h3><table tabindex="0"><thead><tr><th></th><th>Presentation</th><th>Domain</th><th>IBusiness</th><th>Business</th><th>IServices</th><th>Services</th><th>IRepository</th><th>Repository</th><th>CrossCutting</th><th>Shared</th></tr></thead><tbody><tr><td>Presentation</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Domain</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>IBusiness</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Business</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>IServices</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Services</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>IRepository</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Repository</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>CrossCutting</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Shared</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><p>Legenda:<br> ✅ = Presente<br> ⚪ = Não se aplica / ausente</p>`,31)]))}const m=a(p,[["render",d]]);export{u as __pageData,m as default};
