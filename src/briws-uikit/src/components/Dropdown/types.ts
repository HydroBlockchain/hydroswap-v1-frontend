export type Position = "top" | "top-right" | "bottom";

export interface PositionProps {
  position?: Position;
}

//todo: maybe need to fix any
export interface DropdownProps extends PositionProps {
  target: React.ReactElement;
  children: any
}
