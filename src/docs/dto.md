# Conceitos de DTOs no Desenvolvimento de Software

## 📌 O que é um DTO?

**DTO** significa **Data Transfer Object** (Objeto de Transferência de Dados). É um padrão de projeto utilizado para **transportar dados entre processos, camadas ou sistemas**, sem conter lógica de negócio.

### Características:
- Classe simples (POCO — Plain Old CLR Object)
- Sem comportamento (métodos com lógica)
- Utilizada para transferir dados entre camadas
- Pode representar subconjuntos ou combinações de dados
- Facilita testes, validações e manutenções

---

## ✅ Usos de DTO

1. **Separação de camadas**
   - Evita acoplamento entre entidades e APIs.

2. **Controle de exposição de dados**
   - Garante que apenas informações relevantes sejam expostas.

3. **Validação**
   - Permite aplicar data annotations (`[Required]`, `[MaxLength]`, etc.).

4. **Evita overposting e underposting**
   - Recebe apenas os campos necessários.

5. **Mapeamento personalizado**
   - Pode unir dados de várias entidades.

---

## 🛠️ Exemplo prático em C#

### Entidade de domínio:
```csharp
public class Usuario
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Email { get; set; }
    public string SenhaHash { get; set; }
    public DateTime DataCadastro { get; set; }
}
```

### DTO de Requisição (Request):
```csharp
public class UsuarioCreateRequestDto
{
    [Required]
    public string Nome { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [MinLength(6)]
    public string Senha { get; set; }
}
```

### DTO de Resposta (Response):
```csharp
public class UsuarioResponseDto
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Email { get; set; }
}
```

### Mapeamento:
```csharp
var usuario = new Usuario
{
    Id = Guid.NewGuid(),
    Nome = dto.Nome,
    Email = dto.Email,
    SenhaHash = HashSenha(dto.Senha),
    DataCadastro = DateTime.UtcNow
};
```

---

# Tipos de DTOs

## 1. 📦 Request (ou Request DTO)

### Finalidade:
Usado para **receber dados de entrada** da API, como criação ou atualização de entidades.

### Exemplo:
```csharp
public class ProdutoCreateRequest
{
    [Required]
    public string Nome { get; set; }

    [Range(0.01, double.MaxValue)]
    public decimal Preco { get; set; }

    public string Categoria { get; set; }
}
```

---

## 2. 📦 Response (ou Response DTO)

### Finalidade:
Usado para **retornar dados para o cliente**, após uma operação ou consulta.

### Exemplo:
```csharp
public class ProdutoResponse
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public decimal Preco { get; set; }
    public string Categoria { get; set; }
    public DateTime CriadoEm { get; set; }
}
```

---

## 3. 🔎 Filter (ou Query DTO)

### Finalidade:
Usado para receber **parâmetros de busca, filtro ou paginação**.

### Exemplo:
```csharp
public class ProdutoFilter
{
    public string? Nome { get; set; }
    public string? Categoria { get; set; }

    [Range(1, int.MaxValue)]
    public int Page { get; set; } = 1;

    [Range(1, 100)]
    public int PageSize { get; set; } = 10;
}
```

---

## 4. 📚 List (ou PagedResult)

### Finalidade:
Usado para retornar **coleções de dados com metainformações** (ex: total de registros, página atual).

### Exemplo:
```csharp
public class PagedResult<T>
{
    public List<T> Items { get; set; }
    public int TotalCount { get; set; }
    public int Page { get; set; }
    public int PageSize { get; set; }
}
```

### Uso:
```csharp
return new PagedResult<ProdutoResponse>
{
    Items = produtos.Select(p => mapper.Map<ProdutoResponse>(p)).ToList(),
    TotalCount = total,
    Page = filter.Page,
    PageSize = filter.PageSize
};
```

---

## 🧩 Relação entre os Tipos

| Tipo     | Usado para       | Direção     | Contém Lógica? | Exemplo de Método |
|----------|------------------|-------------|----------------|-------------------|
| Request  | Criar/Atualizar  | Entrada     | Não            | `POST /produto`   |
| Response | Retornar dados   | Saída       | Não            | `GET /produto/1`  |
| Filter   | Buscar/Paginar   | Entrada     | Não            | `GET /produto?nome=tv` |
| List     | Retornar coleção | Saída       | Não            | `GET /produto`    |

---

> **Dica:** Nunca exponha diretamente entidades de domínio em sua API. Use DTOs específicos para cada finalidade.
