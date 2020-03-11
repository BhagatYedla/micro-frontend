import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents:[AppComponent]
})
export class AppModule implements DoBootstrap {
  
  constructor(private injector:Injector){
    const appComponent = createCustomElement(AppComponent , {injector});
    customElements.define('angular-app' , appComponent);
  }

  ngDoBootstrap(){
  }

}
