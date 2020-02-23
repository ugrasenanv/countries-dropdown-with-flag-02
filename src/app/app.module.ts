import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountryDropdownFlagsComponent } from './country-dropdown-flags/country-dropdown-flags.component';
import { FlagDirective } from './flag.directive';
import { CountryFlagDirective } from './country-flag.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CountryDropdownFlagsComponent, FlagDirective, CountryFlagDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
