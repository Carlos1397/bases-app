import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const options = {
  ngZoneEventCoalescing: true,
};
//console.log({ options });
platformBrowserDynamic()
  .bootstrapModule(AppModule, options)
  .catch((err) => console.error(err));
