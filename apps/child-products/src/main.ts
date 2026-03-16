import {bootstrapApplication} from '@angular/platform-browser';
import {ProductsEntryComponent} from './app/products-entry.component';

bootstrapApplication(ProductsEntryComponent).catch((error: unknown) => {
  throw error;
});
