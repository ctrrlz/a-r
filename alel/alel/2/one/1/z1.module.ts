
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PersonalComponent } from './z1.component';


@NgModule({
  declarations: [PersonalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [PersonalComponent],
})
export class PersonalModule {}