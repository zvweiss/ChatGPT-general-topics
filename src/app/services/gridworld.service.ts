import { Injectable } from '@angular/core';
import { AgentState, GridCell, GridworldConfig, Direction } from '../models/gridworld-model';

@Injectable({ providedIn: 'root' })
export class GridworldService {
  grid: GridCell[][] = [];
  agent: AgentState = { row: 0, col: 0 };
  config!: GridworldConfig;

  initialize(config: GridworldConfig) {
    this.config = config;
    this.grid = [];
    for (let r = 0; r < config.rows; r++) {
      const row: GridCell[] = [];
      for (let c = 0; c < config.cols; c++) {
        row.push({
          row: r,
          col: c,
          reward: config.defaultReward,
          isTerminal: false,
          value: 0
        });
      }
      this.grid.push(row);
    }

    for (const t of config.terminalStates) {
      this.grid[t.row][t.col].isTerminal = true;
      this.grid[t.row][t.col].reward = t.reward;
    }

    this.agent = { row: 0, col: 0 }; // Reset agent
  }

  getCurrentCell(): GridCell {
    return this.grid[this.agent.row][this.agent.col];
  }

  moveAgent(direction: Direction): void {
    if (this.getCurrentCell().isTerminal) return;
    const { row, col } = this.agent;
    const deltas: Record<Direction, [number, number]> = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1]
    };
    const [dr, dc] = deltas[direction];
    const newRow = Math.max(0, Math.min(this.config.rows - 1, row + dr));
    const newCol = Math.max(0, Math.min(this.config.cols - 1, col + dc));
    this.agent = { row: newRow, col: newCol };
  }

  resetAgent() {
    this.agent = { row: 0, col: 0 };
  }
}
