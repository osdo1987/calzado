import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/partesLogin/login/login.component';
import { RegisterComponent } from './componentes/partesLogin/register/register.component';
import { ForgotComponent } from './componentes/partesLogin/forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'proveedor', component: ProveedoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
