# All About Me

A personal portfolio website built with Rust and WebAssembly using the Leptos framework.

## Tech Stack

- **Framework**: [Leptos](https://leptos.dev/) (Rust)
- **Build Tool**: [Trunk](https://trunkrs.dev/)
- **Styling**: Tailwind CSS
- **Target**: WebAssembly (WASM)

## Getting Started

### Prerequisites

- [Rust](https://rustup.rs/) (latest stable)
- WASM target: `rustup target add wasm32-unknown-unknown`
- Trunk: `cargo install trunk`

### Development

Start the development server with hot reload:

```bash
trunk serve
```

The site will open at http://localhost:3000

### Building

Build for production:

```bash
trunk build --release
```

Output is in the `dist/` directory.

## Project Structure

```
├── Cargo.toml          # Rust dependencies
├── Trunk.toml          # Build configuration
├── index.html          # Entry point
├── public/             # Static assets (images, SVGs)
└── src/
    ├── main.rs         # App entry point
    ├── app.rs          # Main App component
    ├── components/     # Reusable components
    │   ├── mod.rs
    │   ├── ascii_art_card.rs
    │   ├── dialog.rs
    │   └── image_with_fallback.rs
    └── styles/
        └── globals.css # Tailwind CSS
```

## Deployment

The `dist/` folder contains static files that can be deployed to any static hosting:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
