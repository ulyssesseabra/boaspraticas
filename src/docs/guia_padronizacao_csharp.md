# Guia de Padronização de Código C# para Equipes

## 1. Convenções de Nomenclatura

| Tipo                | Exemplo                 | Convenção                       |
|---------------------|--------------------------|----------------------------------|
| Classe              | `PessoaFisica`           | PascalCase                       |
| Interface           | `IPessoaService`         | PascalCase com prefixo `I`      |
| Método              | `ObterPessoaPorId()`     | PascalCase                       |
| Parâmetro de método | `string nomePessoa`      | camelCase, sem underscore        |
| Variável local      | `var quantidade`         | camelCase                        |
| Campo privado       | `_quantidadeTotal`       | camelCase com prefixo `_`       |
| Campo protegido     | `quantidadeTotal`        | camelCase, sem `_`              |
| Constante           | `MAX_TENTATIVAS`         | UPPER_SNAKE_CASE                |
| Enum                | `TipoDocumento.CPF`      | PascalCase                       |
| Namespace           | `Empresa.Projeto.Modulo` | PascalCase                       |

---

## 2. Organização do Código

1. **Ordem sugerida dentro da classe:**
   - Campos privados
   - Constantes
   - Propriedades públicas
   - Construtores
   - Métodos públicos
   - Métodos privados

2. **Espaçamento:**
   - Uma linha em branco entre membros da classe
   - Não usar múltiplas linhas em branco consecutivas

---

## 3. Propriedades

- Usar propriedades automáticas:
```csharp
public string Nome { get; set; }
```

- Com lógica adicional:
```csharp
private string _nome;

public string Nome
{
    get => _nome;
    set => _nome = value.Trim();
}
```

---

## 4. Comentários e Documentação

- Comentários XML para membros públicos:
```csharp
/// <summary>
/// Obtém uma pessoa pelo ID.
/// </summary>
/// <param name="id">Identificador da pessoa</param>
/// <returns>Instância da pessoa</returns>
public Pessoa ObterPessoaPorId(int id) { ... }
```

- Evitar comentários redundantes.

---

## 5. Uso de `var`

- Usar `var` quando o tipo for óbvio:
```csharp
var pessoa = new Pessoa(); // OK
int idade = 30; // Tipo explícito preferido aqui
```

---

## 6. Tratamento de Exceções

```csharp
try
{
    // código
}
catch (FileNotFoundException ex)
{
    // tratamento específico
}
catch (Exception ex)
{
    // tratamento genérico
    throw;
}
```

---

## 7. Estrutura de Pastas e Namespaces

- Organize por responsabilidade: `Controllers`, `Services`, `Repositories`, `DTOs`, `Entities`.
- Namespaces devem refletir a estrutura.

---

## 8. LINQ e Lambdas

```csharp
var ativos = pessoas.Where(p => p.Ativo).ToList();
```

Evite lógicas muito aninhadas.

---

## 9. Métodos Assíncronos

- Nome com sufixo `Async`: `ObterDadosAsync`
- Evitar `.Result` ou `.Wait()`
- Usar `await` corretamente

---

## 10. Outros Pontos

- Evite números mágicos: use constantes nomeadas
- Use `readonly` para campos imutáveis
- Aplique SOLID e Clean Code
- Nome de arquivo deve ser igual à classe

---

## 11. Princípios SOLID (Resumo Prático)

| Princípio | Descrição | Dica prática |
|-----------|-----------|--------------|
| SRP       | Uma classe deve ter uma única razão para mudar. | Separe responsabilidades. |
| OCP       | Aberta para extensão, fechada para modificação. | Use herança/composição. |
| LSP       | Subtipos devem poder substituir seus tipos base. | Heranças seguras. |
| ISP       | Múltiplas interfaces específicas. | Evite interfaces gigantes. |
| DIP       | Dependa de abstrações. | Use injeção de dependência. |

---

## 12. Boas Práticas de Clean Code

| Prática                   | Explicação                                   | Exemplo                                           |
|---------------------------|----------------------------------------------|---------------------------------------------------|
| Nomes significativos      | Use nomes claros que expressem intenção     | `var clienteAtivo = clientes.Where(c => c.Ativo);` |
| Evite comentários inúteis | Código claro evita explicações redundantes  | Ruim: `// Soma dois números` <br> `return a + b;` |
| Métodos curtos            | Melhor manutenção e leitura                 | Prefira: `CalcularTotalPedido()` com 10 linhas    |
| Evite duplicação          | Reutilize lógica comum                      | Extraia `ValidarEmail(string email)` para uso geral |
| Uma responsabilidade      | Um método = uma tarefa                      | Separar `SalvarUsuario` e `EnviarEmailBoasVindas()` |
| Valide argumentos         | Evita exceções inesperadas                 | `if (nome == null) throw new ArgumentNullException(nameof(nome));` |
| Composição > Herança      | Facilita manutenção                         | Use `EmailService` dentro de `UsuarioService`, em vez de herança |
| Testabilidade             | Código testável é desacoplado              | Métodos com dependências via interfaces, não concretas |
| Evite efeitos colaterais  | Métodos devem ser previsíveis              | Evite que `AtualizarSaldo()` altere também o status do usuário |
