import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HamletModule } from './hamlet.module';


platformBrowserDynamic().bootstrapModule(HamletModule)
  .catch(err => console.error(err));