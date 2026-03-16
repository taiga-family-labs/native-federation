import {bootstrapApplication} from '@angular/platform-browser';
import {ProfileEntryComponent} from './app/profile-entry.component';

bootstrapApplication(ProfileEntryComponent).catch((error: unknown) => {
  throw error;
});
