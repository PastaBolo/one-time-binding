import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { OneTimeBindingPipe } from './one-time-binding.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    OneTimeBindingPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
