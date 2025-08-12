
# 🧪 QA Swag Labs - Cypress

![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen?logo=cypress)
![Status](https://img.shields.io/badge/Status-Ativo-success)
![License](https://img.shields.io/badge/license-MIT-blue)

Projeto de automação de testes End-to-End (E2E) utilizando **Cypress** para validar funcionalidades do site [Swag Labs](https://www.saucedemo.com/).

## 📌 Sobre o Projeto
Este repositório contém testes automatizados que simulam o comportamento de um usuário no **Swag Labs**, incluindo:
- Login com credenciais inválidas e válidas
- Adição de produto ao carrinho
- Início do checkout até a tela **Checkout: Overview**

O objetivo é validar rapidamente o **fluxo crítico** (Smoke Test) da aplicação.

---

## 🛠 Tecnologias Utilizadas
- Node.js
- Cypress
- JavaScript
- Git / GitHub

---

## 📂 Estrutura do Projeto
```

qa-swaglabs-cypress
│-- cypress/
│   ├── e2e/          # Testes automatizados
│   ├── fixtures/     # Massa de dados (opcional)
│   └── support/      # Comandos/configs adicionais
│-- cypress.config.js # Configuração do Cypress
│-- package.json      # Dependências e scripts
│-- README.md         # Documentação
│-- .gitignore        # Arquivos ignorados

````

---

## 🚀 Como Executar

### 1) Instalar dependências
```bash
npm install
````

### 2) Rodar com interface (dev/debug)

```bash
npx cypress open
```

### 3) Rodar headless (grava vídeo e fecha sozinho)

```bash
npx cypress run --spec cypress/e2e/smoke.cy.js
```

> Evidências ficam em: `cypress/videos/` e, em falhas, `cypress/screenshots/`.

---

## ⚙️ Configurações úteis

* `cypress.config.js` já ajustado para execução rápida (timeouts menores) e bloqueio de telemetria do site.
* Scripts sugeridos no `package.json`:

```json
{
  "scripts": {
    "smoke:fast": "cypress run --spec cypress/e2e/smoke.cy.js",
    "cy:open": "cypress open"
  }
}
```

---

## 📄 Licença

MIT

---

✍ **Autor:** arieviloanelym
💼 **LinkedIn:** [https://www.linkedin.com/in/SEU-PERFIL](https://www.linkedin.com/in/SEU-PERFIL)
📅 **Atualizado:** ago/2025
EOF

````


Pronto! Quer que eu também adicione o **workflow do GitHub Actions** para rodar o smoke em cada push? Posso te mandar o arquivo `.github/workflows/cypress.yml` prontinho.
