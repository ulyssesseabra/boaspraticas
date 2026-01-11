# REST - Conceitos e Definições para Desenvolvedores

## 🌐 O que é REST?

REST (Representational State Transfer) é um estilo de arquitetura para sistemas distribuídos baseado em comunicação via protocolo HTTP. Foi definido por Roy Fielding em sua tese de doutorado em 2000.

Ele é amplamente utilizado para a criação de APIs (Application Programming Interfaces) que são simples, escaláveis e baseadas em recursos.

---

## 🔑 Princípios Fundamentais do REST

### 1. **Cliente-Servidor**

A arquitetura separa as responsabilidades:
- O cliente é responsável pela interface do usuário.
- O servidor é responsável por processar e armazenar os dados.

### 2. **Stateless (Sem Estado)**

Cada requisição HTTP deve conter todas as informações necessárias para o servidor processá-la. O servidor não armazena estado do cliente entre requisições.

### 3. **Cacheável**

Respostas devem indicar se podem ser armazenadas em cache, melhorando desempenho e escalabilidade.

### 4. **Interface Uniforme**

É o princípio central do REST. Facilita a comunicação entre sistemas desacoplados por meio de:
- Identificação de recursos via URI
- Manipulação de recursos através de representações (JSON, XML)
- Mensagens autodescritivas
- HATEOAS (Hypermedia as the Engine of Application State)

### 5. **Camadas**

Uma arquitetura REST pode ser composta por múltiplas camadas (proxy, gateway, cache) sem que o cliente saiba.

---

## 🔗 Recursos e URIs

Recursos são entidades representadas por URIs.  
Exemplo:
```
GET /api/users/1
```
Neste exemplo, `/users/1` é o recurso com ID `1`.

---

## 📡 Verbos HTTP

| Verbo | Ação     | Descrição                                  |
|-------|----------|--------------------------------------------|
| GET   | Read     | Recupera um recurso                        |
| POST  | Create   | Cria um novo recurso                       |
| PUT   | Update   | Atualiza um recurso inteiro                |
| PATCH | Update   | Atualiza parcialmente um recurso           |
| DELETE| Delete   | Remove um recurso                          |

---

## 📥 Representações

A representação mais comum em APIs REST é o **JSON**, mas também pode ser XML, HTML, etc.

Exemplo de resposta JSON:
```json
{
  "id": 1,
  "nome": "Ulysses Seabra",
  "email": "ulysses@example.com"
}
```

---

## ✅ Boas Práticas RESTful

- Use **substantivos** nas URIs: `/products` ao invés de `/getProducts`
- Utilize **plural** para recursos: `/users`, `/orders`
- Respeite os **verbos HTTP**: não use `GET` para deletar ou atualizar
- Retorne os **códigos HTTP apropriados**:
  - `200 OK`
  - `201 Created`
  - `204 No Content`
  - `400 Bad Request`
  - `404 Not Found`
  - `500 Internal Server Error`
- Documente sua API (ex: OpenAPI/Swagger)

---

## 🧠 REST x RESTful

- **REST**: Estilo arquitetural definido por Roy Fielding.
- **RESTful**: Um sistema que aplica corretamente os princípios REST.

---

## 🚀 Conclusão

REST é a base de comunicação para muitas aplicações modernas. APIs RESTful oferecem padronização, simplicidade e flexibilidade na integração entre sistemas.

Sua correta aplicação melhora a escalabilidade, manutenção e entendimento dos sistemas.

