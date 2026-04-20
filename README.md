# 🚀 HeaderLab

**HeaderLab** is a React-based showcase of modern, interactive, and customizable header components.

It is designed as a **UI experimentation lab** where different navigation patterns, animations, and theming strategies are explored in a controlled environment.

---

## ✨ Overview

Headers are one of the most critical components in any interface — they define navigation, branding, and user flow.

**HeaderLab** focuses on:

- Modern navigation patterns
- Interactive UI behaviors
- Theme-aware components (light/dark)
- Token-driven styling
- Reusable and configurable header structures

---

## 🧪 Live Demo

👉 https://headerlab.netlify.app/

---

## ⚙️ Tech Stack

- **React 19**
- **Vite**
- **TailwindCSS**
- **React Router DOM**
- **Motion (animations)**
- **Lucide Icons**

---

## 🏗️ Project Structure

The project follows a **modular and scalable structure**, inspired by real-world frontend architectures:

```bash
src/
│
├── components/
│ └── headers/
│ ├── SlidingHeader/
│ ├── InteractiveHeader/
│ ├── AnimatedHeader/
│
├── pages/
│ └── HeaderShowcase.jsx
│
├── layouts/
│
├── routes/
│
├── styles/
│ └── headerTokens.js
│
├── theme/
│ └── ThemeProvider.jsx
│
└── main.jsx
```

---

## 🧩 Implemented Headers

### 🔹 SlidingHeader
- Animated navigation behavior
- Supports icons and dynamic menus
- Theme-aware styling

### 🔹 InteractiveHeader
- Scroll-based transformations
- Motion-driven interactions

### 🔹 AnimatedHeader
- Focused on transitions and microinteractions

---

## 🧪 Example Usage (Inside the Showcase)

```jsx
<SlidingHeader 
  title="BrandLogo"
  menuItems={menuSlidingHeader}
  icons={iconsSlidingHeader}
  color="purple"
/>
```
---

## 🎛️ Component Configuration

Headers are designed to be configurable via props, enabling flexible experimentation:

| Prop      | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| title     | string | Brand or logo text            |
| menuItems | array  | Navigation items              |
| icons     | array  | Action icons                  |
| color     | string | Theme variant (e.g. "purple") |

---

## 🎨 Styling System (Tokens)

HeaderLab uses a **token-based styling approach** to manage visual consistency and theme variations.

```js
export const headerColors = {
  purple: {
    from: {
      light: "from-purple-600",
      dark: "from-purple-900",
    },
    to: {
      light: "to-pink-600",
      dark: "to-pink-900",
    },
    text: "text-purple-600",
  },
};
```
### Why tokens?
+ Centralized styling logic
+ Easy theme switching
+ Scalable design system approach

### 🌙 Dark Mode

Dark mode is handled via a custom **ThemeContext**:

```js
const { theme, toggleTheme } = useTheme();
```

### Implementation details:
+ Uses React Context API
+ Applies Tailwind ```dark``` class to ```<html>```
+ Reactive theme switching
+ Compatible with token-based styling

---

## 🧠 Architectural Decisions

### 1. Props-driven configuration
Headers are not hardcoded — they are controlled via props, enabling reuse and experimentation.

### 2. Token-based styling
Instead of inline styles, the project uses a centralized token system for colors and variants.

### 3. Theme abstraction
Dark mode is handled globally using a context provider, decoupled from components.

### 4. Showcase-first approach
The project is intentionally built as a **visual playground**, not as a packaged library.

---

## 🎯 Project Goals

+ Explore modern header UX patterns
+ Experiment with animations and interactions
+ Validate reusable UI patterns
+ Build a strong foundation for future component systems

---

## 📈 Future Improvements

+ More header variants
+ Advanced dropdown / mega menus
+ Mobile navigation patterns
+ Accessibility improvements
+ Potential migration to a reusable component library

---

## 👨‍💻 Author

**Faidrn**

---

## ⭐ Final Note

This project reflects a mindset shift:

> [!NOTE]
> From building components
> → to designing systems and interactions

---

## 🧠 Philosophy
> “A great header doesn’t just navigate — it guides the experience.”