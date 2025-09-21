# 🚀 Dev Finder

Aplicação Angular para buscar perfis públicos de desenvolvedores no GitHub e exibir seus dados e repositórios ordenados por popularidade.

---

## 📦 Requisitos

Antes de instalar, certifique-se de ter:

- **Node.js**: versão `18.x` ou superior
- **Angular CLI**: versão `16.x` ou superior
- **Gerenciador de pacotes**: `npm` (ou `yarn`, se preferir)

---

## 🔧 Instalação

1. Clone o repositório:

```
git clone https://github.com/neckelluiz/dev-finder.git
cd dev-finder
```

2. Instale as dependências:
```
npm install
```
💡 Se estiver usando yarn, substitua por yarn install

## 🧪 Rodar em desenvolvimento

```
npm start
```
- **A aplicação estará disponível em http://localhost:4200**

## 📦 Gerar build de produção

```
ng build
```

## 🗺️ Estrutura de Rotas
/ → Página de busca (home)

/profile/:username → Página de perfil do usuário pesquisado

## ✨ Funcionalidades
🔍 Busca por username do GitHub

👤 Exibição de perfil com avatar, nome, bio, localização, empresa, email e data de entrada

📦 Repositórios ordenados por número de estrelas (do maior para o menor)

🔗 Links diretos para repositórios, site pessoal e Twitter (se disponíveis)

↩️ Botão de voltar para nova pesquisa

📱 Layout responsivo para desktop e tablet.


