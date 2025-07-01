# Exemplos de Design Patterns em C#

Este projeto contém exemplos simples e práticos dos principais Design Patterns utilizados em C#, organizados por pastas.

## Padrões Incluídos

### 1. Singleton
Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.
- Exemplo: Logger usado globalmente.

### 2. Repository
Fornece uma abstração sobre a camada de acesso a dados, isolando a lógica de persistência.
- Exemplo: UserRepository com Entity Framework simulado.

### 3. Unit of Work
Coordena as operações de múltiplos repositórios dentro de uma única transação.
- Exemplo: Interface e implementação controlando repositórios e commits.

### 4. Factory Method
Define uma interface para criação de objetos, permitindo às subclasses decidirem qual classe instanciar.
- Exemplo: AnimalFactory que instancia `Dog`.

### 5. Dependency Injection
Permite a injeção de dependências externas em uma classe, promovendo o baixo acoplamento.
- Exemplo: Notifier usa `IMessageService` para enviar notificações.

### 6. Adapter
Permite que interfaces incompatíveis trabalhem juntas, convertendo a interface de uma classe em outra.
- Exemplo: Adapter para um `LegacyPrinter`.

### 7. Strategy
Permite selecionar algoritmos em tempo de execução encapsulando cada um deles em uma classe.
- Exemplo: Descontos configuráveis no `Checkout`.

### 8. Observer
Define uma dependência um-para-muitos entre objetos, para que quando um objeto muda de estado, seus dependentes sejam notificados.
- Exemplo: Sensor de temperatura notificando `Display`.

### 9. Builder
Separa a construção de um objeto complexo da sua representação, permitindo a criação passo a passo.
- Exemplo: PizzaBuilder construindo objetos `Pizza`.

### 10. Decorator
Adiciona funcionalidades a objetos de forma dinâmica, sem alterar sua estrutura.
- Exemplo: `EncryptedMessage` decorando `SimpleMessage`.

---

## Como usar

Você pode compilar os arquivos individualmente ou integrar todos os exemplos em uma aplicação `Console` para testes.

Cada pasta contém as classes relacionadas a um padrão específico.

---

Criado para fins educacionais e demonstração prática dos padrões mais usados em projetos com C# e .NET.

