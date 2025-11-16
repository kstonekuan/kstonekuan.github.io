# All About Me

A modern personal website built with React, Vite, and TypeScript, featuring a card-based layout design.

## Tech Stack

- **Framework**: React with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Radix UI primitives
- **Code Quality**: Biome for linting and formatting

## Getting Started

### Prerequisites

- Node.js (recommended: latest LTS version)
- pnpm (preferred package manager)

### Installation

Install dependencies using pnpm:

```bash
pnpm install
```

### Development

Start the development server on port 3000:

```bash
pnpm dev
```

The site will automatically open in your browser at http://localhost:3000

### Building

Build the project for production:

```bash
pnpm build
```

The built files will be output to the `build` directory.

### Code Quality

Run type checking:

```bash
pnpm typecheck
```

Run linting and formatting:

```bash
pnpm lint
```

Run all checks (typecheck + lint):

```bash
pnpm check
```

## Project Structure

- `/src` - Source code and components
- `/public` - Static assets
- `/build` - Production build output
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `biome.json` - Biome linting and formatting configuration
