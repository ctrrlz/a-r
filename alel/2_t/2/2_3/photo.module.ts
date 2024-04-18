import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PhotoComponent } from './photo.component';

@NgModule({
  declarations: [PhotoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [PhotoComponent],
})
export class PhotoModule {}