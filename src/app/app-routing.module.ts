import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksComponent } from "./pages/banks/banks.component";
import { CalculatorComponent } from "./pages/calculator/calculator.component";

const routes: Routes = [
  {path: '', component: BanksComponent},
  {path: 'mortgage-calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
