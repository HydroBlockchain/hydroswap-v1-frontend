import { DefaultTheme } from "styled-components";

export interface ThemedProps {
  theme: DefaultTheme;
}

export type Status = "past" | "current" | "future";

export interface StatusProps extends ThemedProps {
  theme: DefaultTheme;
  status: Status;
}

//todo: maybe need to fix any
export interface StepProps {
  index: number;
  status: Status;
  numberOfSteps?: number;
  children: any
}
