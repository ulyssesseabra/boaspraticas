# Exemplos de Design Patterns em C#

Este projeto contém exemplos simples e práticos dos principais Design Patterns utilizados em C#.

## 1. Singleton
Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.

```csharp
public class Logger
{
    private static Logger _instance;
    public static Logger Instance => _instance ??= new Logger();
    private Logger() { }

    public void Log(string message) => Console.WriteLine(message);
}
```

---

## 2. Repository
Abstrai a lógica de acesso a dados, promovendo separação de responsabilidades.

```csharp
public interface IUserRepository
{
    User GetById(int id);
}

public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;
    public UserRepository(AppDbContext context) => _context = context;

    public User GetById(int id) => _context.Users.Find(id);
}

public class User { public int Id; public string Name; }

public class AppDbContext
{
    public List<User> Users = new();
    public User Find(int id) => Users.FirstOrDefault(u => u.Id == id);
}
```

---

## 3. Unit of Work
Coordena múltiplos repositórios em uma única transação lógica.

```csharp
public interface IUnitOfWork
{
    IUserRepository Users { get; }
    void Save();
}

public class UnitOfWork : IUnitOfWork
{
    private readonly AppDbContext _context;
    public IUserRepository Users { get; }

    public UnitOfWork(AppDbContext context)
    {
        _context = context;
        Users = new UserRepository(_context);
    }

    public void Save() => Console.WriteLine("Changes saved");
}
```

---

## 4. Factory Method
Cria objetos sem expor a lógica de instanciação ao cliente.

```csharp
public abstract class Animal
{
    public abstract string Speak();
}

public class Dog : Animal
{
    public override string Speak() => "Woof!";
}

public class AnimalFactory
{
    public static Animal Create(string type) =>
        type == "dog" ? new Dog() : throw new NotImplementedException();
}
```

---

## 5. Dependency Injection
Promove o desacoplamento ao injetar dependências via construtor ou outro mecanismo.

```csharp
public interface IMessageService
{
    void Send(string message);
}

public class EmailService : IMessageService
{
    public void Send(string message) => Console.WriteLine($"Email: {message}");
}

public class Notifier
{
    private readonly IMessageService _service;
    public Notifier(IMessageService service) => _service = service;

    public void Notify(string msg) => _service.Send(msg);
}
```

---

## 6. Adapter
Permite que duas interfaces incompatíveis trabalhem juntas.

```csharp
public class LegacyPrinter
{
    public void PrintText(string text) => Console.WriteLine(text);
}

public interface IPrinter
{
    void Print(string content);
}

public class PrinterAdapter : IPrinter
{
    private readonly LegacyPrinter _legacy;
    public PrinterAdapter(LegacyPrinter legacy) => _legacy = legacy;

    public void Print(string content) => _legacy.PrintText(content);
}
```

---

## 7. Strategy
Permite trocar o algoritmo de forma dinâmica em tempo de execução.

```csharp
public interface IDiscountStrategy
{
    decimal ApplyDiscount(decimal amount);
}

public class ChristmasDiscount : IDiscountStrategy
{
    public decimal ApplyDiscount(decimal amount) => amount * 0.9m;
}

public class Checkout
{
    private readonly IDiscountStrategy _strategy;
    public Checkout(IDiscountStrategy strategy) => _strategy = strategy;

    public decimal CalculateTotal(decimal amount) => _strategy.ApplyDiscount(amount);
}
```

---

## 8. Observer
Permite que um objeto notifique outros objetos quando seu estado muda.

```csharp
public class TemperatureSensor
{
    public event Action<float> TemperatureChanged;

    public void UpdateTemperature(float temp)
    {
        TemperatureChanged?.Invoke(temp);
    }
}

public class Display
{
    public void Subscribe(TemperatureSensor sensor)
    {
        sensor.TemperatureChanged += t => Console.WriteLine($"Temp: {t}");
    }
}
```

---

## 9. Builder
Constrói objetos complexos passo a passo, com maior controle sobre o processo.

```csharp
public class Pizza
{
    public string Dough, Sauce, Topping;
}

public class PizzaBuilder
{
    private readonly Pizza _pizza = new();
    public PizzaBuilder AddDough(string dough) { _pizza.Dough = dough; return this; }
    public PizzaBuilder AddSauce(string sauce) { _pizza.Sauce = sauce; return this; }
    public PizzaBuilder AddTopping(string topping) { _pizza.Topping = topping; return this; }
    public Pizza Build() => _pizza;
}
```

---

## 10. Decorator
Adiciona funcionalidades a objetos de forma dinâmica, mantendo a mesma interface.

```csharp
public interface IMessage
{
    string GetContent();
}

public class SimpleMessage : IMessage
{
    public string GetContent() => "Hello";
}

public class EncryptedMessage : IMessage
{
    private readonly IMessage _inner;
    public EncryptedMessage(IMessage inner) => _inner = inner;

    public string GetContent() =>
        Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(_inner.GetContent()));
}
```

---

## Como usar

Você pode compilar os arquivos individualmente ou integrar todos os exemplos em uma aplicação `Console` para testes.

Cada padrão está encapsulado em uma estrutura de classes para facilitar o entendimento e a reutilização em projetos reais.

---

Criado para fins educacionais e demonstração prática dos padrões mais usados em projetos com C# e .NET.