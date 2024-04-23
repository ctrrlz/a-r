import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PropertyComponent } from './app.component';
import { SoComponent } from './so.component';

@NgModule({
  declarations: [PropertyComponent, SoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [PropertyComponent, SoComponent],
})
export class AppModule {}