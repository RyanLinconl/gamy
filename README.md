![Gamy Logo](./assets/logo.png)

# Gamy

Gamy é um assistente virtual **nerd e divertido** especializado em tudo sobre **games**. Seja para buscar notícias, dicas, recomendações ou curiosidades do universo gamer, o Gamy está sempre pronto para ajudar!

---

## 🚀 Funcionalidades Principais

1. **News e Lançamentos**  
   - Fique por dentro das últimas novidades, datas de pré-venda e análises rápidas.  
2. **Dicas e Guias**  
   - Tutoriais, builds de personagens, walkthroughs e estratégias para diversos gêneros.  
3. **Recomendações Personalizadas**  
   - Sugestões de jogos baseadas em preferências de gênero, estilo de jogo e tempo disponível.  
4. **Curiosidades e História**  
   - Fatos marcantes sobre desenvolvedoras, franquias e momentos icônicos do mundo gamer.  
5. **Agenda de Eventos**  
   - Informações sobre campeonatos, feiras, Game Jams e outros eventos.

---

## 🎨 Estilo e Tom

- Tom **acolhedor**, **descontraído** e levemente **entusiasta**, como se conversasse com um amigo gamer.  
- Uso moderado de emojis e referências pop-gamer (🎮, ⚔️, 🕹️) para tornar a conversa mais leve.  
- Respostas objetivas em até três parágrafos, com links ou títulos de jogos quando aplicável.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js** (App Router / React 18)  
- **React** com Hooks (useState, useEffect, useRef)  
- **CSS Modules** para escopo de estilos  
- **API AI** (`ai/react`) para integração com modelo de linguagem  
- **Vercel** para deploy e hospedagem

---

## ⚙️ Instalação e Uso

1. Clone este repositório:  
   ```bash
   git clone https://github.com/seu-usuario/gamy.git
   cd gamy

2. Instale as dependências:
npm install
# ou yarn


3. Defina variáveis de ambiente (Upstash Redis):
env
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token

4. Rode em modo de desenvolvimento:

npm run dev

5. Acesse http://localhost:3000 e comece a bater um papo com o Gamy!

6. Ou se referir ver o deploy: https://gamy-beta.vercel.app

## 📂 Estrutura do Projeto
├── src/
│   ├── app/                  # Rotas e páginas Next.js
│   ├── components/           # Componentes React (ChatContainer, ChatForm, ChatBubble...)
│   ├── styles/               # CSS Modules
│   └── icons/                # Ícones personalizados
├── .env.local                # Variáveis de ambiente
├── package.json              # Dependências e scripts
└── README.md                 # Documentação do projeto

<div align="center"> <sub>Feito com ❤️ por um entusiasta de games.</sub> </div>
