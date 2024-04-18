import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HamletComponent } from './hamlet.component';


@NgModule({
  declarations: [HamletComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HamletComponent],
})
export class HamletModule {}