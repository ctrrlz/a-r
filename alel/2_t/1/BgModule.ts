import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BgComponent } from './BgComponent';


@NgModule({
  declarations: [BgComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [BgComponent],
})
export class BgModule {}