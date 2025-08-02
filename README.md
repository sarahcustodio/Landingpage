# TechFlow - Landing Page Moderna e Responsiva

Uma landing page moderna e responsiva desenvolvida com **HTML**, **CSS** e **TailwindCSS**, apresentando uma empresa fictícia de soluções digitais.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com gradientes e animações
- **Totalmente Responsiva**: Otimizada para desktop, tablet e mobile
- **Acessibilidade**: Código semântico e navegação por teclado
- **Performance**: Carregamento rápido com CDN do TailwindCSS
- **Interatividade**: JavaScript para menu mobile, scroll suave e animações

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos customizados e animações
- **TailwindCSS**: Framework CSS utility-first via CDN
- **JavaScript**: Funcionalidades interativas e animações
- **Font Awesome**: Ícones vetoriais

## 📁 Estrutura do Projeto

```
.vscode/
├── index.html          # Página principal
├── styles.css          # Estilos customizados
├── script.js           # Funcionalidades JavaScript
├── tailwind.config.js  # Configuração do TailwindCSS
├── README.md          # Documentação do projeto
└── .gitignore         # Arquivos ignorados pelo Git
```

## 🎨 Seções da Landing Page

### 1. Header
- Navegação responsiva com menu mobile
- Logo da empresa
- Links para seções da página

### 2. Hero Section
- Título impactante com call-to-action
- Gradiente de fundo com padrão sutil
- Botões de ação principais

### 3. Features Section
- 6 características principais do produto
- Ícones ilustrativos
- Layout em grid responsivo

### 4. Testimonials Section
- Depoimentos de clientes fictícios
- Sistema de avaliação com estrelas
- Cards com design moderno

### 5. CTA Section
- Call-to-action final
- Botões para conversão

### 6. Footer
- Informações de contato
- Links de navegação
- Redes sociais

## 🚀 Como Usar

### 1. Visualização Local

1. **Clone ou baixe** os arquivos do projeto
2. **Abra o arquivo** `index.html` em qualquer navegador moderno
3. **Navegue** pela página para ver todas as funcionalidades

### 2. Desenvolvimento Local

Para desenvolvimento, você pode usar um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (se tiver instalado)
npx serve .

# Com PHP
php -S localhost:8000
```

### 3. Deploy no GitHub Pages

Para fazer o deploy no GitHub Pages:

1. **Crie um repositório** no GitHub
2. **Faça upload** dos arquivos
3. **Ative o GitHub Pages** nas configurações do repositório
4. **Configure** a branch `main` como source

**Comandos Git:**
```bash
# Inicializar Git (se necessário)
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Initial commit: TechFlow Landing Page"

# Adicionar repositório remoto (substitua USERNAME)
git remote add origin https://github.com/USERNAME/techflow-landing-page.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

## 📱 Responsividade

A página é totalmente responsiva e funciona perfeitamente em:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## ⚡ Funcionalidades JavaScript

### Menu Mobile
- Toggle do menu em dispositivos móveis
- Fechamento automático ao clicar em links
- Navegação por teclado (Enter, Espaço, Escape)

### Scroll Suave
- Navegação suave entre seções
- Comportamento nativo do navegador

### Animações
- Fade-in para elementos ao scroll
- Parallax no hero section
- Loading states nos botões

### Header Dinâmico
- Mudança de opacidade no scroll
- Backdrop blur para melhor legibilidade

## 🎯 Otimizações

### Performance
- TailwindCSS via CDN para carregamento rápido
- Font Awesome otimizado
- Imagens SVG inline para padrões

### SEO
- Meta tags apropriadas
- Estrutura HTML semântica
- Títulos hierárquicos corretos

### Acessibilidade
- Navegação por teclado
- Contraste adequado
- Textos alternativos para ícones
- Suporte a leitores de tela

## 🎨 Customização

### Cores
As cores principais podem ser alteradas modificando as classes do TailwindCSS:
- **Primária**: `indigo-600`
- **Secundária**: `purple-600`
- **Acentos**: `yellow-300`, `green-600`, `red-600`

### Conteúdo
- Substitua os textos no HTML
- Atualize as informações de contato
- Modifique os depoimentos

### Estilos
- Adicione classes do TailwindCSS
- Modifique o CSS customizado no `styles.css`
- Ajuste as animações conforme necessário

## 🔧 Configuração do TailwindCSS

O projeto usa TailwindCSS via CDN, mas você pode configurar localmente:

1. **Instale o TailwindCSS**:
```bash
npm install -D tailwindcss
npx tailwindcss init
```

2. **Configure o arquivo** `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. **Compile o CSS**:
```bash
npx tailwindcss -i ./styles.css -o ./dist/output.css --watch
```

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Reportar bugs
2. Sugerir melhorias
3. Adicionar novas funcionalidades
4. Melhorar a documentação

## 📞 Contato

Para dúvidas ou sugestões sobre este projeto, entre em contato através dos canais disponíveis no footer da página.

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript** 