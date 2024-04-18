import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HelloModule } from './hello.module';


platformBrowserDynamic().bootstrapModule( HelloModule)
  .catch(err => console.error(err));