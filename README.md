<div align="center">

# 🎨 Kaveen Deshapriya's Portfolio

### Modern Full-Stack Portfolio with AI-Powered Chatbot

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![LangChain](https://img.shields.io/badge/LangChain-AI-00C853?style=for-the-badge&logo=chainlink&logoColor=white)](https://www.langchain.com/)

[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## ✨ Overview

A sophisticated, production-ready portfolio showcasing full-stack development expertise with cutting-edge animations, responsive design, and an intelligent AI-powered chatbot. Built with modern web technologies and best practices, this portfolio demonstrates proficiency in React, TypeScript, AI/ML, and advanced UI/UX design.

### 🌟 Key Highlights

- **🎬 Advanced Animations** - Scroll-based effects, parallax, text reveals, and circular animations using Framer Motion & GSAP
- **🤖 AI-Powered Chatbot** - LangChain agent with RAG (Retrieval-Augmented Generation) and vector search via Qdrant
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop with smooth transitions
- **⚡ Lightning Fast** - Built with Vite and React SWC for blazing fast development and production builds
- **🎨 Modern UI/UX** - Custom animations, smooth scrolling, and professional design system
- **🔧 Full-Stack** - React frontend with Python/FastAPI backend integration

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Frontend Architecture](#-frontend-architecture)
- [Backend & AI Agent](#-backend--ai-agent)
- [Animations & Effects](#-animations--effects)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 Features

### Frontend Features

- **🏠 Multi-Page Portfolio**
  - Hero section with circular text animation and parallax effects
  - Frontend projects showcase (6+ projects)
  - AI/ML projects portfolio
  - Career/Experience timeline
  - About Me with tech stack display
  - Contact form and information

- **🎭 Advanced Animations**
  - Scroll-triggered animations with Framer Motion
  - MaskText reveals (line-by-line and whole block)
  - Parallax text effects with velocity tracking
  - Circular text animation (360° rotation)
  - Sliding text effects
  - Logo carousel loop
  - Matrix effect video integration

- **🗺️ Navigation**
  - Slide-in navigation panel
  - Active section detection
  - Image grid on desktop
  - Animated SVG underlines
  - Social media integration (TikTok, Instagram, YouTube, Twitch)

- **💬 Chatbot Interface**
  - Terminal-style UI (macOS-inspired)
  - Theme switching (Orange/Claude, Green)
  - Auto-scroll functionality
  - Message animations
  - Loading indicators
  - ASCII art branding

### Backend Features

- **🧠 AI Agent System**
  - LangChain orchestration with LangGraph
  - OpenAI GPT-4o integration
  - Tool-calling capabilities (RAG, LinkedIn updates)
  - Persistent conversation history
  - Memory checkpointing

- **🔍 RAG Implementation**
  - Qdrant vector database
  - OpenAI text-embedding-3-large embeddings
  - Semantic search for contextual answers
  - Top-3 document retrieval
  - Professional response formatting

- **🛠️ Custom Tools**
  - RAG search tool
  - LinkedIn integration
  - Extensible tool registry

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19.1.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.8.3 | Type safety |
| [Vite](https://vitejs.dev/) | 7.0.4 | Build tool |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.11 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 12.23.24 | Animations |
| [GSAP](https://greensock.com/gsap/) | 3.13.0 | Complex animations |
| [React Router](https://reactrouter.com/) | 7.9.6 | Routing |
| [Lucide React](https://lucide.dev/) | 0.536.0 | Icons |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.5.0 | Icon library |

### Backend

| Technology | Purpose |
|------------|---------|
| [Python](https://www.python.org/) 3.x | Backend language |
| [LangChain](https://www.langchain.com/) | AI framework |
| [LangGraph](https://langchain-ai.github.io/langgraph/) | Agent orchestration |
| [OpenAI API](https://openai.com/) | LLM (GPT-4o) |
| [Qdrant](https://qdrant.tech/) | Vector database |
| [FastAPI](https://fastapi.tiangolo.com/) | API framework |

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TS-specific rules
- **SWC** - Fast transpilation
- **Vite DevServer** - Hot Module Replacement

---

## 📂 Project Structure

```
portfolio/
├── 📁 src/                          # Frontend source code
│   ├── App.tsx                     # Main router setup
│   ├── main.tsx                    # React entry point
│   ├── index.css                   # Global styles & animations
│   │
│   ├── 📁 component/               # React components
│   │   ├── Hero.tsx                # Landing hero section
│   │   ├── 📁 navigation/          # Navigation menu
│   │   ├── 📁 chatbot/             # Chatbot UI
│   │   │   └── ChatBot.tsx         # Terminal-style chat interface
│   │   ├── 📁 projects/            # Project showcases
│   │   │   ├── Project.tsx         # Frontend projects
│   │   │   └── AI_Projects.tsx     # AI/ML projects
│   │   ├── 📁 contact/             # Contact sections
│   │   ├── 📁 Aboutme/             # About section
│   │   └── 📁 ui/                  # Animation components
│   │       ├── MaskText.tsx        # Text reveal animations
│   │       ├── ParallaxText.tsx    # Infinite scroll text
│   │       ├── CircularTextAnimation.tsx
│   │       ├── SlidingText.tsx
│   │       └── LogoLoop.tsx
│   │
│   ├── 📁 hooks/                   # Custom React hooks
│   ├── 📁 lib/                     # Utility functions
│   └── 📁 types/                   # TypeScript definitions
│
├── 📁 backend/                      # Python backend
│   ├── main.py                     # CLI entry point
│   ├── requirements.txt            # Python dependencies
│   ├── .env                        # Environment variables
│   │
│   ├── 📁 src/
│   │   ├── 📁 agent/
│   │   │   └── workflow.py         # LangGraph agent orchestration
│   │   ├── 📁 retriever/           # RAG implementation
│   │   │   ├── load_qdrant_index.py
│   │   │   └── read_qdrant_index.py
│   │   ├── 📁 tools/               # Agent tools
│   │   │   ├── rag_tool.py         # RAG search tool
│   │   │   └── linkdin_update.py   # LinkedIn integration
│   │   └── 📁 llm/                 # Model factories
│   │       ├── models.py           # LLM & embedding models
│   │       └── prompt.py           # Prompt templates
│   │
│   └── 📁 data/
│       ├── 📁 qdrant_storage/      # Vector database
│       └── 📁 docs/                # Document storage
│
├── 📁 public/                       # Static assets
│   ├── 📁 fonts/                   # Custom fonts
│   ├── Matrix_Effect.mp4           # Hero video
│   └── 🖼️ [project images]
│
├── 📄 index.html                    # HTML entry
├── 📄 package.json                  # Frontend dependencies
├── 📄 tailwind.config.js            # Tailwind configuration
├── 📄 vite.config.ts                # Vite config
├── 📄 tsconfig.json                 # TypeScript config
└── 📄 components.json               # shadcn/ui config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm/yarn
- **Python** 3.9+ and pip
- **Qdrant** (running locally or cloud)
- **OpenAI API Key**

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

#### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The frontend will be available at `http://localhost:5173`

#### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env and add your OpenAI API key
```

#### 4. Configure Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Qdrant Configuration
QDRANT_URL=http://localhost:6333

# LinkedIn (optional)
LINKEDIN_URL=your_linkedin_url
LINKEDIN_TOKEN=your_linkedin_token
```

#### 5. Start Qdrant Vector Database

```bash
# Using Docker
docker run -p 6333:6333 qdrant/qdrant

# Or install locally from https://qdrant.tech/
```

#### 6. Run the Backend Agent

```bash
cd backend
python main.py
```

---

## 🎨 Frontend Architecture

### Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Hero | Landing page with animations |
| `/chatbot` | ChatBot | AI assistant interface |
| `/carrier` | Career | Experience timeline |
| `/frontend-projects` | Projects | Frontend portfolio |
| `/ai-projects` | AI_Projects | AI/ML showcase |
| `/about-me` | About | Bio & skills |
| `/contact-me` | Contact | Contact form |

### Key Components

#### Hero Section
- Circular text animation rotating "design · kaveen · creative"
- Parallax scrolling text effects
- Profile image with scale/opacity animations
- Matrix Effect video overlay
- Grid background pattern

#### Navigation
- Slide-in panel with image grid (desktop)
- Active section highlighting
- Animated SVG underlines
- Social media links
- Business enquiries section

#### ChatBot
- Terminal-style interface (macOS appearance)
- Theme color switching
- Auto-scroll to latest messages
- Message animations (fade-in, scale)
- ASCII art branding
- Loading indicators

### Custom Hooks

```typescript
// Auto-scroll functionality
useAutoScroll(dependency: any[])

// Scroll animations
useScroll(), useTransform(), useSpring()
```

---

## 🤖 Backend & AI Agent

### Architecture

The backend uses **LangChain** with **LangGraph** for agent orchestration:

```python
# Agent Workflow
START → agent (LLM call) → Decision
                           ├─→ continue (tool call) → tools → agent
                           └─→ end (response) → END
```

### Agent Features

1. **LLM Configuration**
   - Model: GPT-4o with temperature 0.3
   - System prompt: Professional assistant representing Kaveen
   - Tool binding: RAG and LinkedIn tools

2. **Memory Management**
   - MemorySaver for persistent history
   - Session-based conversation tracking
   - In-memory state management

3. **RAG Implementation**
   - Vector database: Qdrant
   - Embeddings: text-embedding-3-large
   - Top-3 document retrieval
   - Context-aware responses

### Tools

#### RAG Tool (`rag_tool.py`)
```python
def rag_answer(query: str) -> str:
    """
    Searches Qdrant vector database for relevant information
    Returns formatted context for LLM
    """
```

#### LinkedIn Tool (`linkdin_update.py`)
```python
def linkdin_updates() -> str:
    """
    Fetches latest LinkedIn profile updates
    """
```

### Running the Agent CLI

```bash
cd backend
python main.py

# Interactive chat interface
# Type 'quit' or 'exit' to end session
```

### API Integration (Future)

The backend can be extended with FastAPI endpoints:

```python
# Example: Chat endpoint
@app.post("/api/chat")
async def chat(message: str, session_id: str):
    response = await agent.ainvoke(message, session_id)
    return {"response": response}
```

---

## 🎬 Animations & Effects

### Framer Motion Animations

#### MaskText Component
```typescript
<MaskText
  text="Your text here"
  mode="line"  // or "whole"
  direction="LTR"  // or "RTL"
  maskColor="#000000"
/>
```

**Features:**
- Line-by-line or whole block reveals
- Customizable mask colors
- Direction control (LTR/RTL)
- Clip-path based animations

#### ParallaxText Component
```typescript
<ParallaxText baseVelocity={-5}>
  Your scrolling text
</ParallaxText>
```

**Features:**
- Infinite scrolling loop
- Velocity-based speed adjustment
- Spring physics for smoothness
- Gradient fade edges

#### CircularTextAnimation
```typescript
<CircularTextAnimation
  text="design · kaveen · creative · "
  radius={100}
/>
```

**Features:**
- 360-degree character rotation
- Center icon scaling pulse
- SVG-based rendering

### GSAP Animations

Used for complex timeline-based animations and scroll triggers.

### Tailwind Custom Animations

```javascript
// tailwind.config.js
keyframes: {
  slideInDiagonal: {
    '0%': { transform: 'translate(-100%, -100%)' },
    '100%': { transform: 'translate(0, 0)' }
  },
  fadeInLeft: {
    '0%': { opacity: '0', transform: 'translateX(-20px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' }
  },
  underlineGrow: {
    '0%': { width: '0%' },
    '100%': { width: '100%' }
  }
}
```

---

## 📸 Screenshots

### Hero Section
![Hero Section](./public/screenshots/hero.png)
*Circular text animation with parallax effects*

### Projects Showcase
![Projects](./public/screenshots/projects.png)
*Frontend projects with hover effects*

### AI Chatbot
![Chatbot](./public/screenshots/chatbot.png)
*Terminal-style chat interface*

### About Section
![About](./public/screenshots/about.png)
*Tech stack display with animated logos*

---

## 🚢 Deployment

### Frontend Deployment (Vercel/Netlify)

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod --dir=dist
```

### Backend Deployment (Railway/Render)

1. **Prepare for deployment**
   ```bash
   # Add a Procfile for Railway/Render
   echo "web: uvicorn main:app --host 0.0.0.0 --port \$PORT" > Procfile
   ```

2. **Environment Variables**
   - Set `OPENAI_API_KEY` in platform dashboard
   - Set `QDRANT_URL` (cloud Qdrant or self-hosted)

3. **Deploy to Railway**
   ```bash
   railway login
   railway init
   railway up
   ```

### Docker Deployment

```dockerfile
# Frontend Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

```dockerfile
# Backend Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install -r requirements.txt
COPY backend/ .
EXPOSE 8000
CMD ["python", "main.py"]
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain component modularity
- Write meaningful commit messages
- Update documentation for new features
- Test animations across browsers

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Kaveen Deshapriya**

- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

**Social Media:**
- TikTok: [@yourtiktok](https://tiktok.com/@yourtiktok)
- Instagram: [@yourinstagram](https://instagram.com/yourinstagram)
- YouTube: [Your Channel](https://youtube.com/@yourchannel)
- Twitch: [Your Twitch](https://twitch.tv/yourtwitch)

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [LangChain](https://www.langchain.com/) - AI framework
- [OpenAI](https://openai.com/) - GPT-4o API
- [Qdrant](https://qdrant.tech/) - Vector database
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">

### Made with ❤️ by Kaveen Deshapriya

**If you found this helpful, please give it a ⭐!**

</div>
