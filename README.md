# @jayjaybeeuk/custom-component-library

A reusable component library built with React and TypeScript, organized as a monorepo using Lerna. This library is designed to support multiple themes and follows the Atomic Design principles.

Currently deploys to https://custom-component-library.vercel.app/

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Theming](#theming)
- [Atomic Design Structure](#atomic-design-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Monorepo Architecture**: Managed using [Lerna](https://lerna.js.org/) for efficient dependency management and versioning.
- ~~**Atomic Design**: Components are structured following the Atomic Design methodology.~~ (In Progress)
- **TypeScript**: Strongly typed components for enhanced developer experience.
- ~~**Multi-Theming Support**: Easily switch between different themes imported directly from Figma.~~ (In Progress)
- **Storybook Integration**: Comprehensive documentation and visual testing of components.
- **CI/CD Integration**: Automated testing, building, and publishing of packages using GitHub Actions.

## Installation

To install the components from this library, you can use npm or yarn:

```bash
npm install @yourorg/component-name
# or
yarn add @yourorg/component-name
```

## Usage

Import and use the components in your React project:

```jsx
import React from 'react';
import { Button } from '@yourorg/button';


const App = () => (
  <div>
    <Button variant="primary">Click Me</Button>
  </div>
);

export default App;
```

## Development

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn
- Lerna (npm install -g lerna)

### Setting Up the Project

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
lerna bootstrap
```


### Running the Storybook
To start Storybook and view the components:

```bash
npm run storybook
```

### Building the Packages
To build all packages:

```bash
lerna run build
```

### Running Tests

To run tests for all packages:

```bash
lerna run test
```

### Versioning and Publishing

This project follows Semantic Versioning and uses Conventional Commits for versioning. To release a new version and publish the packages:

```bash
lerna version
lerna publish
```

## Theming

This library supports multiple themes. You can import themes directly from Figma or use pre-defined themes:

### Using a Theme

```jsx
import { ThemeProvider } from '@yourorg/theme';
import { Button } from '@yourorg/button';
import theme from '@yourorg/theme/default';

const App = () => (
  <ThemeProvider theme={theme}>
    <Button variant="primary">Click Me</Button>
  </ThemeProvider>
);

export default App;
```

### Adding a New Theme

Currently basic level theme can be manually created. To add a new theme, create a new file in the packages/theme directory and define your theme values:

```javascript
const newTheme = {
  colors: {
    primary: '#ff6347',
    secondary: '#4CAF50',
    // other theme values
  },
  // additional theme properties
};

export default newTheme;
```

In future we are looking to integrate figma tokens directly, or at least formatted to accept them via an import of some kind.

## Atomic Design Structure
This component library follows the Atomic Design methodology. Components are categorized as follows:

Atoms: Basic building blocks (e.g., Buttons, Inputs).
Molecules: Combinations of atoms (e.g., Form Fields, Cards).
Organisms: Complex components composed of molecules (e.g., Headers, Footers).
Templates: Page layouts that combine organisms and molecules.
Pages: Fully designed pages using templates.

### Example Directory Structure

```css
packages/
├── atoms/
│   ├── button/
│   └── input/
├── molecules/
│   ├── form-group/
│   └── card/
├── organisms/
│   ├── header/
│   └── footer/
├── templates/
│   └── main-layout/
└── pages/
    └── home/
```

## Contributing

We welcome contributions! Please read our Contributing Guide to learn how you can contribute to this project.

## Reporting Issues
If you find a bug or have a feature request, please open an issue on GitHub.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
