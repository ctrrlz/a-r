import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObComponent } from './ob.component';
import { SoComponent } from './so.component';

@NgModule({
  declarations: [AppComponent, ObComponent, SoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, ObComponent, SoComponent],
})
export class AppModule {}