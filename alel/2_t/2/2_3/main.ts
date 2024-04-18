import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PhotoModule } from './photo.module';


platformBrowserDynamic().bootstrapModule(PhotoModule)
  .catch(err => console.error(err));