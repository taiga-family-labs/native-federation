import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'demo-host-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TuiButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly title = signal('Taiga + Native Federation Host');
}
