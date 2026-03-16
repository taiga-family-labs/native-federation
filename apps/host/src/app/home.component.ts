import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAlert} from '@taiga-ui/core';

@Component({
  selector: 'demo-home',
  imports: [TuiAlert],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
