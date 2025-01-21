<<<<<<< HEAD
# Lyra-UI

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
=======
# Lyra UI 🌌

**Lyra UI** is a modern and minimal Vue 3 component library inspired by the beauty of space and stars. It includes pre-built components, composable functions, and Tailwind CSS styles to help you quickly build beautiful and responsive user interfaces.

---

## ✨ Features

- **Modern Components**: Buttons, forms, cards, modals, dropdowns, and more.
- **Tailwind CSS Support**: Default styles powered by Tailwind CSS for easy customization.
- **RTL Support**: Fully compatible with right-to-left languages.
- **TypeScript**: Type safety and better development with TypeScript.
- **Auto-import**: Components and composables are auto-imported.
- **Unit Tests**: Comprehensive tests to ensure code quality.
- **Modular**: Components and composables are independently usable.

---

## 🚀 Quick Start

### Installation

Install Lyra UI via npm:

```bash
npm install lyra-ui
```

### Usage

In your Vue project, use Lyra UI as follows:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import LyraUI from 'lyra-ui';
import 'lyra-ui/dist/style.css'; // Default styles

const app = createApp(App);
app.use(LyraUI);
app.mount('#app');
```

### Using Components

```vue
<template>
  <LyraButton variant="primary">Click me</LyraButton>
  <LyraModal v-if="isOpen" @close="closeModal">
    <p>This is a modal!</p>
  </LyraModal>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(true);
const closeModal = () => (isOpen.value = false);
</script>
```

---

## 🛠️ Configuration

### Enabling Tailwind CSS

Lyra UI uses Tailwind CSS by default. If you want to disable Tailwind, you can use the base styles:

```javascript
import { useConfig } from 'lyra-ui';

const { setConfig } = useConfig();
setConfig({ useTailwind: false });
```

### Setting Direction (RTL/LTR)

To set the text direction, use the `setConfig` function:

```javascript
import { useConfig } from 'lyra-ui';

const { setConfig } = useConfig();
setConfig({ direction: 'rtl' }); // or 'ltr'
```

---

## 🧪 Testing

To run unit tests, use the following command:

```bash
npm test
```

---

## 🤝 Contributing

We welcome your contributions! To contribute to the project, follow these steps:

1. Fork the project.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push your changes (`git push origin feature/YourFeatureName`).
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

Thank you for using **Lyra UI**! If you have any questions or need assistance, we're happy to help. 🌟
```

---

### Key Sections:
1. **Introduction**: A brief overview of the project and its purpose.
2. **Features**: A list of key features of the library.
3. **Quick Start**: Instructions for installation and basic usage.
4. **Configuration**: How to configure Tailwind CSS and RTL/LTR support.
5. **Testing**: Commands to run unit tests.
6. **Contributing**: Guidelines for contributing to the project.
7. **License**: The license under which the project is distributed.
8. **Acknowledgments**: A thank-you note to users and contributors.

If you need further adjustments or have any questions, feel free to ask! 😊
>>>>>>> f9164bc75e5e7bda0b5dc999ca2e3092c834e427
