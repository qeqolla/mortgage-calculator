import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared/shared.module";
import { BanksComponent } from './pages/banks/banks.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BanksComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
