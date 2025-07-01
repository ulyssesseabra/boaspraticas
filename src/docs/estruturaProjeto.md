# 🏢 Estrutura padrão de projeto

Estrutura sugerida para criação de solução .Net
---

## 📚 Visão Geral

Este projeto é composto por múltiplos projetos organizados em uma solução .NET, seguindo princípios de Clean Architecture e SOLID.

---

## 📁 Estrutura da Solução

```text
<Name space base>/
├── <Name space base>.[api/worker/service]/
│   ├── Controllers/
│   ├── Middlewares/
│   └── Model/
│
├── <Name space base>.Business/
│   └── IBusiness/
│   └── IServices/
│
├── <Name space base>.Business.Imp/
│   ├── Mapping/
│   └── Business/
│   └── Services/
│
├── <Name space base>.CrossCutting/
│   ├── Configuration/
│   └── Extension/
│
├── <Name space base>.Domain/
│   ├── Dependências/
│   ├── Entities/
│   └── Map/
│
├── <Name space base>.Repository/
│   ├── Dependências/
│   └── Repository/
│
├── <Name space base>.Repository.Imp/
│   ├── Repository/
│   └── DataContext.cs / NHibernateHelper.cs
│
└── <Name space base>.Shared/
│   ├── DTO/
│   └── Util/
```
### 📁 .api/worker(Presentation)

Projeto para api/worker ou service, basicamente o projeto de apresentação da solução, o ponto de contato com o ambinete externo a aplicação. A estruturação interna é dependente do modelo escolhido.
Nesse ponto ele consome interfaces, o projeto CrossCutting e Shared, demais projetos não podem consumii-lo ou ter ele como referência.

```text
│
├── <Name space base>.[api/worker/service]/
│   ├── Controllers/
│   ├── Middlewares/
│   └── Model/
```
### 📁 .Domain
Projeto com a definição das classes de domínio, podendo nelas ter anotações de mapeamento ou validação. Para projetos Nhibernate a pasta Map é repositório dos .hbm .

Classes de domínio permanecem dentro do scopo da aplicação, não sendo expostas ao ambinente externo. Para sua exposição se faz necessário do uso de DTO. 

```text
│
├── <Name space base>.Domain/
│   ├── Entities/
│   └── Map/
```
### 📁 .Business

Classes de Business e Services são reponsáveis pela pelas regras de negócio e primeira camada do CRUD. A diferença entre Business e Service, são:

| Camada    | CRUD   | Regra de negócio | Validações  | Rotinas | Integrações  |
|-------------------|--------|------------------|-------------|---------|--------------|
| Business          | 🟢    | 🟢               | 🟢         | 🔴      | 🔴          |
| Service           | 🔴    | 🔴               | 🔴         | 🟢      | 🟢          |

Legenda:  
🟢= Permite  
🔴= Não se aplica


```text
│
├── <Name space base>.Business/
│   └── IBusiness/
│       └── I<Entity>Business.cs
│   └── IServices/
│       └── I<Entity>Services.cs
│
├── <Name space base>.Business.Imp/
│   ├── Mapping/
│   └── Business/
│       └── <Entity>Business.cs
│   └── Services/
│       └── <Entity>Services.cs
```
### 📁 .Repository
Classe responsáveis pela persistencia de dados, não contém regras de negócio mas tem a validação de tipo e tamanhos.
Context ou factories devem se implementadas em Imp.

```text
│
├── <Name space base>.Repository/
│   └── Repository/
│       └── I<Entity>Repository.cs
│
├── <Name space base>.Repository.Imp/
│   ├── Repository/
│       └── <Entity>Repository.cs
│   ├── BaseRepository.cs
│   └── NHibernateHelper.cs
```
### 📁 .CrossCutting
Nesse projeto devem ser aplicadas injeções de dependencia, configurações de integrações e extensões de configuração. Esse projeto poderá ser referenciado em todas os demais mas ele não pode referencia nenhum projeto.

```text
│
├── <Name space base>.CrossCutting/
│   ├── Configuration/
│   └── Extension/
```

### 📁 .Shared
Nesse projeto todas classes e funções compartilhadas entre os sistemas são implementadas. Principal grupo de classes são os [DTO's](dto)

```text
│
└── <Name space base>.Shared/
│   ├── DTO/
│   └── Util
```


### Matriz de relacionamento
|                   | Presentation | Domain | IBusiness | Business | IServices | Services | IRepository | Repository | CrossCutting | Shared |
|-------------------|--------------|--------|-----------|----------|-----------|----------|-------------|------------|--------------|--------|
| Presentation      |              |        |           |          |           |          |             |            |              |        |
| Domain             
| IBusiness           
| Business           
| IServices           
| Services           
| IRepository         
| Repository         
| CrossCutting             
| Shared             

Legenda:  
✅ = Presente  
⚪ = Não se aplica / ausente
