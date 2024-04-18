import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BgModule } from './BgModule';


platformBrowserDynamic().bootstrapModule(BgModule)
  .catch(err => console.error(err));