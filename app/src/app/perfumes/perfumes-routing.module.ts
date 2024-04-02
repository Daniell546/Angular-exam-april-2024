import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from '../home/home.component';
import { CurrPerfumeComponent } from './curr-perfume/curr-perfume.component';

const routes: Routes = [
  {
    path: 'perfume/create',
    component: CreateComponent
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: ':perfumeId',
        component: CurrPerfumeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfumesRoutingModule { }
