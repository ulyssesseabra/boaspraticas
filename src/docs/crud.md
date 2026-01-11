# CRUD - Conceito e Aplicação para Desenvolvedores

## 📌 O que é CRUD?

CRUD é um acrônimo que representa as quatro operações básicas de persistência em banco de dados:

- **C**reate (Criar)
- **R**ead (Ler ou Recuperar)
- **U**pdate (Atualizar)
- **D**elete (Deletar)

Essas operações são a base para manipulação de dados em sistemas de software, sendo amplamente utilizadas em APIs, sistemas web, bancos de dados relacionais e não relacionais.

---

## 🛠️ Operações CRUD

### ✅ Create (Criar)

Cria um novo registro na base de dados.

**HTTP Verbo:** `POST`  
**SQL:** `INSERT`  
**Exemplo:**
```csharp
public async Task<IActionResult> Create(UserDto dto)
{
    var user = new User { Name = dto.Name, Email = dto.Email };
    _context.Users.Add(user);
    await _context.SaveChangesAsync();
    return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
}
```

---

### 🔍 Read (Ler)

Recupera dados do banco, podendo ser um ou vários registros.

**HTTP Verbo:** `GET`  
**SQL:** `SELECT`  
**Exemplo:**
```csharp
public async Task<ActionResult<User>> GetById(int id)
{
    var user = await _context.Users.FindAsync(id);
    if (user == null) return NotFound();
    return user;
}
```

---

### ✏️ Update (Atualizar)

Modifica um ou mais dados de um registro existente.

**HTTP Verbo:** `PUT` ou `PATCH`  
**SQL:** `UPDATE`  
**Exemplo:**
```csharp
public async Task<IActionResult> Update(int id, UserDto dto)
{
    var user = await _context.Users.FindAsync(id);
    if (user == null) return NotFound();

    user.Name = dto.Name;
    user.Email = dto.Email;
    await _context.SaveChangesAsync();

    return NoContent();
}
```

---

### ❌ Delete (Excluir)

Remove um registro da base de dados.

**HTTP Verbo:** `DELETE`  
**SQL:** `DELETE`  
**Exemplo:**
```csharp
public async Task<IActionResult> Delete(int id)
{
    var user = await _context.Users.FindAsync(id);
    if (user == null) return NotFound();

    _context.Users.Remove(user);
    await _context.SaveChangesAsync();

    return NoContent();
}
```

---

## 📚 Boas Práticas

- **Validação:** Sempre valide os dados antes de persistir no banco.
- **DTOs:** Utilize objetos de transferência de dados para separar a camada de dados da lógica de negócio.
- **Status HTTP:** Use códigos de resposta adequados (`201`, `200`, `204`, `404`, etc).
- **Segurança:** Proteja endpoints sensíveis com autenticação e autorização.
- **Tratamento de erros:** Utilize `try-catch`, `ModelState.IsValid`, e mensagens claras.

---

## 🔁 CRUD em Arquiteturas

- Em APIs RESTful, cada operação do CRUD é mapeada para um verbo HTTP.
- Em bancos de dados relacionais, essas operações são realizadas via comandos SQL.
- Em padrões como DDD, o CRUD é implementado via serviços, repositórios e DTOs.

---

## 🧠 Conclusão

Compreender o padrão CRUD é essencial para qualquer desenvolvedor, pois é a base para a maioria dos sistemas que manipulam dados. Sua correta implementação garante código limpo, organizado e manutenível.
