import {NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {TuiButton, TuiTitle} from '@taiga-ui/core';

@Component({
  selector: 'demo-products-entry',
  imports: [NgFor, TuiButton, TuiTitle],
  templateUrl: './products-entry.component.html',
  styleUrl: './products-entry.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsEntryComponent {
  private readonly products = signal(['UI Kit', 'Design Tokens', 'Micro-frontend shell']);

  protected readonly count = computed(() => this.products().length);
  protected readonly items = this.products.asReadonly();

  protected addProduct(): void {
    const item = `Remote item ${this.count() + 1}`;
    this.products.update((products) => [...products, item]);
  }
}
