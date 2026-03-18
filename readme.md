# 📱 Itens Perdidos FIAP

## 📌 Sobre o Projeto

Um aplicativo mobile desenvolvido com React Native + Expo que tem como objetivo facilitar o registro e a recuperação de itens perdidos dentro do ambiente da FIAP.

A aplicação conecta pessoas que perderam objetos com aquelas que os encontraram, permitindo registrar, visualizar e acompanhar itens de forma simples e organizada.

---

### 🎯 Problema que resolve

Dentro do campus, é comum que objetos sejam perdidos e não haja um sistema eficiente para gerenciar esses itens.

O FindIt resolve isso ao:
- Centralizar registros de itens perdidos e encontrados
- Facilitar a identificação dos objetos
- Melhorar a comunicação entre quem perdeu e quem encontrou

---

### 🏫 Operação da FIAP escolhida

**Serviços ao aluno / infraestrutura interna**

**Motivo:**  
A gestão de itens perdidos impacta diretamente a experiência dos alunos no campus, sendo um problema frequente e com potencial de melhoria através de soluções digitais.

---

### ⚙️ Funcionalidades implementadas

- Cadastro de itens perdidos
- Cadastro de itens encontrados
- Validação de campos obrigatórios
- Formatação automática de data
- Histórico de itens perdidos e encontrados
- Exibição detalhada dos itens cadastrados
- Status automático dos itens
- Interface intuitiva e responsiva

---

## 👥 Integrantes do Grupo

- Ana Laura Torres Loureiro - RM554375
- Murilo Cordeiro Ferreira - RM556727
- Vitor Augusto França de Oliveira- RM555469
- Geronimo Augusto - RM557170
- Ianny Raquel Ferreira de Souza - RM559096

---

## 🚀 Como Rodar o Projeto

### 📋 Pré-requisitos

- Node.js
- npm ou yarn
- Expo CLI
- App **Expo Go** ou emulador Android/iOS

---

### ▶️ Passo a passo

```bash
# Clone o repositório
git clone https://github.com/AnaTorresLoureiro/fiap-mdi-cp1-ItensPerdidos-app.git

# Acesse a pasta
cd fiap-mdi-cp1-ItensPerdidos-app

# Instale as dependências
npm install

# Rode o projeto
npx expo start
````

Depois:

* Escaneie o QR Code com o Expo Go
  ou
* Rode no emulador

---

## 🎥 Demonstração

### 📸 Telas do App

* Tela inicial (Home)
* Cadastro de item encontrado
* Cadastro de item perdido
* Histórico de itens



---

### 🎬 Vídeo do funcionamento



---

## 🧠 Decisões Técnicas

### 🏗️ Estrutura do Projeto

O projeto foi desenvolvido utilizando **React Native com Expo Router**, organizando as telas por rotas e separando responsabilidades em:

* Telas (pages/screens)
* Contexto global (gerenciamento de estado)
* Utilitários (formatação de dados)

---

### ⚛️ Hooks utilizados

* `useState` → controle dos inputs e estados dos formulários
* `useCallback` → otimização de funções usadas em efeitos
* `useFocusEffect` → reset automático dos formulários ao entrar na tela
* `useRouter` → navegação entre telas
* `useReports` → acesso ao estado global de itens

---

### 🧭 Navegação

A navegação foi implementada utilizando o **Expo Router**, com rotas baseadas em arquivos:

* `/report/found` → cadastro de itens encontrados
* `/report/lost` → cadastro de itens perdidos
* `/message/sucessoFound` → feedback de envio
* `/message/sucessoLost` → feedback de envio

---

### 🧩 Gerenciamento de Estado

Foi utilizado um **contexto global (`report-context`)** para:

* Armazenar itens perdidos e encontrados
* Permitir acesso global aos dados
* Centralizar lógica de criação de relatórios (`addFoundReport`, `addLostReport`)

---

### 🛠️ Tratamento de Dados

* Validação de campos obrigatórios antes do envio
* Formatação de datas com função utilitária
* Construção dinâmica de descrições e status dos itens

---

## 🔮 Próximos Passos

* Persistência de dados (AsyncStorage ou API)
* Upload de imagem dos itens
* Sistema de autenticação
* Filtros e busca avançada
* Notificações para correspondência de itens
* Integração com backend

---
