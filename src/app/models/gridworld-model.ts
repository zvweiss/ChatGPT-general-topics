// export class GridworldModel {
// }

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface GridCell {
  row: number;
  col: number;
  reward: number;
  isTerminal: boolean;
  value: number;
}

export interface AgentState {
  row: number;
  col: number;
}

export interface GridworldConfig {
  rows: number;
  cols: number;
  terminalStates: { row: number; col: number; reward: number }[];
  defaultReward: number;
}