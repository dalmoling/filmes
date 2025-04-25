# 📱 App de Filmes com React Native + Expo Router

Este é um aplicativo mobile desenvolvido com **React Native**, utilizando **Expo Router** para navegação e a **API pública da OMDb** para exibir uma lista de filmes com base em uma palavra-chave de pesquisa. 

---

## 🚀 Funcionalidades

### ✅ Tela Inicial – Lista de Filmes
- Exibe uma lista de filmes usando uma **FlatList**.
- Cada item mostra:
  - 📷 Pôster do filme
  - 🎬 Título
  - 📅 Ano de lançamento
- Campo de busca com atualização dinâmica ao pressionar `Enter`.

### ✅ Tela de Detalhes do Filme
- Ao clicar em um filme, abre uma nova tela com detalhes mais completos:
  - 📷 Pôster
  - 🎞️ Título
  - 🏷️ Gêneros
  - 🎬 Direção
  - 🧑 Atores
  - 📖 Sinopse completa

### ✅ Navegação com Expo Router
- Utiliza o `expo-router` para navegação entre as telas.
- URLs dinâmicas com `[id].js` para exibir os detalhes dos filmes via `imdbID`.

### ✅ Consumo de API REST pública
- A API utilizada é a [OMDb API](https://www.omdbapi.com/).
- Requisições feitas com `fetch` ou `axios`.

---

## 🧱 Estrutura de Pastas

```bash
📁 projeto/
├── App.js                 # Exporta o Expo Router
├── index.js               # Tela de listagem de filmes
├── [id].js                # Tela de detalhes do filme (rota dinâmica)
├── components/
│   └── MovieCard.js       # Componente de visualização de filme
└── services/
    └── api.js             # Funções para buscar filmes na OMDb
