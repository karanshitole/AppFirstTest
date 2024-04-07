import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabWitchComponent } from './components/tab-witch/tab-witch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabWitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
