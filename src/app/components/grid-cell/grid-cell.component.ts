import { Component, Input } from '@angular/core';
import { GridCell } from '../../models/gridworld-model';

@Component({
  selector: 'app-grid-cell',
  standalone: true,
  template: `
    <div class="cell" [class.terminal]="cell.isTerminal">
      <div class="value">{{ cell.value.toFixed(1) }}</div>
    </div>
  `,
  styles: [`
    .cell {
      width: 60px;
      height: 60px;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .terminal {
      background-color: #ffd700;
    }
    .value {
      font-size: 0.8rem;
      color: #333;
    }
  `]
})
export class GridCellComponent {
  @Input() cell!: GridCell;
}
