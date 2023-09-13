import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { CadastroComponent } from './views/components/cadastro/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'cadastro',
    component:CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
