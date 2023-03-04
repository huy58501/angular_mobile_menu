import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeadfootModule } from './modules/headfoot/headfoot.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material-ui.module';
import { JsonListComponent } from './json-list/json-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HeadfootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
