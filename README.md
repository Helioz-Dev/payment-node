# 💳 Payment Node Proxy

Servidor simples e seguro em **Node.js** que protege a tua **API Key** e faz requisições seguras para a [PayMoz](https://paymoz.tech/).  
Desenvolvido por: **Helioz Dev**

---

## 🧠 Introdução
O **Payment Node Proxy** atua como intermediário entre o teu **aplicativo, site ou sistema** e a **API PayMoz**, garantindo que a tua `API_KEY` nunca seja exposta publicamente.

Ideal para:
- 🌐 Aplicações **web** (React, Vue, etc.)
- 📱 Aplicativos **Android / Flutter**
- ⚙️ Servidores backend que precisam de segurança adicional

---

## 🌍 Base URL
> Substitui o domínio abaixo pelo nome do teu serviço no Render:

```
https://payment-node.onrender.com/payments
```

---

## ⚙️ Autenticação
Nenhum token é necessário do lado do cliente.  
A autenticação é feita automaticamente pelo servidor Render usando a variável de ambiente:

```
Authorization: ApiKey [SUA_CHAVE_API]
```

---

## 📤 Endpoint `/payments`

### Método: `POST`  
### Descrição:
Envia um pedido de pagamento para a PayMoz via proxy seguro.

---

### 📦 Corpo da requisição (JSON)
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|------------|
| `metodo` | string | ✅ | Método de pagamento (`mpesa`, `emola`, etc.) |
| `valor` | string | ✅ | Valor do pagamento em MZN |
| `numero_celular` | string | ✅ | Número do cliente (ex: `852233065`) |

---

### 🧩 Exemplo de requisição

#### JavaScript (fetch)
```js
fetch("https://payment-node.onrender.com/payments", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    metodo: "mpesa",
    valor: "10.00",
    numero_celular: "852233065"
  })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
```

#### cURL
```bash
curl -X POST https://payment-node.onrender.com/payments \
  -H "Content-Type: application/json" \
  -d '{
    "metodo": "mpesa",
    "valor": "10.00",
    "numero_celular": "852233065"
  }'
```

---

## 📥 Respostas da API

### ✅ Sucesso (200)
```json
{
  "status": "success",
  "mensagem": "Pagamento processado com sucesso",
  "transacao_id": "PMZ123456789"
}
```

### ❌ Erro (400–500)
```json
{
  "erro": "Descrição do erro retornado pela PayMoz"
}
```

---

## 🧠 Como funciona no Render

### 1️⃣ Código hospedado no Render
O Render identifica automaticamente o ambiente Node.js e instala as dependências do `package.json`.

### 2️⃣ Variáveis de ambiente
Adiciona a tua chave no painel Render:
```
Key: API_KEY
Value: TUA_CHAVE_DA_PAYMOZ
```
> 🔒 Fica guardada de forma segura no servidor, nunca visível no código.

### 3️⃣ Comando de execução
```
npm start
```

---

## 🧩 Como fazer deploy no Render

1. Cria um repositório no GitHub com os arquivos:
   - `server.js`
   - `package.json`
   - `README.md`
2. Vai em [https://render.com](https://render.com)
3. Clica em **New + → Web Service**
4. Escolhe **Deploy from GitHub**
5. Liga ao teu repositório (`payment-node`)
6. Define:
   - **Start Command:** `npm start`
   - **Environment Variable:** `API_KEY = tua chave PayMoz`
7. Clica **Deploy Web Service**

Após o deploy, a URL pública será algo como:
```
https://payment-node.onrender.com/payments
```

---

## 🧩 Testar o endpoint

```bash
curl -X POST https://payment-node.onrender.com/payments \
  -H "Content-Type: application/json" \
  -d '{"metodo":"mpesa","valor":"5.00","numero_celular":"852233065"}'
```

Se receberes uma resposta JSON da PayMoz, o proxy está funcional ✅

---

## 🧱 Tecnologias utilizadas
- **Node.js**  
- **Express.js**  
- **CORS**  
- **node-fetch**  
- **Render** (para deploy)

---

## 🔒 Benefícios
- Protege tua **API Key** no servidor
- Permite uso direto por apps e sites
- Habilitado para **CORS**
- Hospedagem gratuita e simples no **Render**
- Totalmente **open source**

---

## 👨‍💻 Desenvolvido por
**Helioz Dev** — soluções práticas e seguras para integração com PayMoz.  
> 💡 Personaliza livremente e integra facilmente nos teus próprios sistemas.
