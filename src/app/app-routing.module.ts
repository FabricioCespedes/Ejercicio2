import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ModuloComponent } from './components/modulo/modulo.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'modulo', component:ModuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
