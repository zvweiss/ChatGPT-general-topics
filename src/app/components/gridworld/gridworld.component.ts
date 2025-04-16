import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridworldService } from '../../services/gridworld.service';
import { GridCellComponent } from '../../components/grid-cell/grid-cell.component';
import { Direction } from '../../models/gridworld-model';

@Component({
  selector: 'app-gridworld',
  standalone: true,
  imports: [CommonModule, GridCellComponent],
  template: `
    <h2>Gridworld Environment</h2>
    <div class="grid">
      <ng-container *ngFor="let row of service.grid">
        <div class="row">
          <app-grid-cell
            *ngFor="let cell of row"
            [cell]="cell">
          </app-grid-cell>
        </div>
      </ng-container>
    </div>
    <button (click)="move('up')">⬆️</button>
    <button (click)="move('down')">⬇️</button>
    <button (click)="move('left')">⬅️</button>
    <button (click)="move('right')">➡️</button>
    <button (click)="reset()">🔄 Reset</button>
  `,
  styles: [`
    .grid {
      display: inline-block;
      margin-bottom: 1rem;
    }
    .row {
      display: flex;
    }
    button {
      margin: 0.25rem;
    }
  `]
})
export class GridworldComponent implements OnInit {
  constructor(public service: GridworldService) {}

  ngOnInit(): void {
    this.service.initialize({
      rows: 4,
      cols: 4,
      defaultReward: -0.04,
      terminalStates: [
        { row: 0, col: 3, reward: +1 },
        { row: 1, col: 3, reward: -1 }
      ]
    });
  }

  move(direction: Direction) {
    this.service.moveAgent(direction);
  }

  reset() {
    this.service.resetAgent();
  }
}
