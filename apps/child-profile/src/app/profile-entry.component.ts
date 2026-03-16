import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {TuiButton, TuiChip, TuiTitle} from '@taiga-ui/core';

@Component({
  selector: 'demo-profile-entry',
  imports: [TuiButton, TuiChip, TuiTitle],
  templateUrl: './profile-entry.component.html',
  styleUrl: './profile-entry.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEntryComponent {
  private readonly username = signal('taiga-user');
  private readonly notifications = signal(3);

  protected readonly title = computed(() => `Profile: ${this.username()}`);
  protected readonly badge = computed(() => `Notifications: ${this.notifications()}`);

  protected markRead(): void {
    this.notifications.set(0);
  }
}
