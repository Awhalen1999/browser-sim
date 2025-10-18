# Browser Simulation

An interactive browser simulation built with Next.js, featuring draggable and resizable windows with a macOS-inspired interface.

## Features

- 🪟 **Draggable Windows** - Click and drag windows anywhere on the screen
- 📏 **Resizable Windows** - Resize windows by dragging the bottom-right corner
- 🎯 **Window Management** - Minimize, maximize, and close windows
- 🎨 **Dark/Light Mode** - Toggle between dark and light themes
- ⌨️ **Keyboard Shortcuts** - Press ESC to close all windows
- 🎭 **macOS-Style Dock** - Beautiful dock with hover effects and animations
- 📱 **Responsive Design** - Works on all screen sizes

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **next-themes** - Theme switching
- **React Icons** - Icon library

## Project Structure

```
/app                 # Next.js app directory
/components          # React components
  /windows          # Individual window components
/lib
  /stores           # Zustand stores
  /types            # TypeScript types
```

## Adding New Windows

1. Create a new window component in `components/windows/`
2. Add the window type to `lib/types/window.ts`
3. Configure the window in `lib/stores/window-store.ts`
4. Add a dock icon in `components/dock.tsx`

## License

MIT
