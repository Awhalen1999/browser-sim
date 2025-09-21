export type WindowType = "about" | "projects";

export interface WindowPosition {
  x: number;
  y: number;
}

export interface WindowSize {
  width: number;
  height: number;
}

export interface WindowState {
  id: string;
  type: WindowType;
  title: string;
  position: WindowPosition;
  size: WindowSize;
  isMaximized: boolean;
  zIndex: number;
}

export interface WindowConfig {
  type: WindowType;
  title: string;
  defaultSize: WindowSize;
  minSize: WindowSize;
}
