import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PersonalModule } from './z1.module';


platformBrowserDynamic().bootstrapModule(PersonalModule)
  .catch(err => console.error(err));
