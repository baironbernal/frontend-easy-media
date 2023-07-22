import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { MyPublicationsComponent } from './pages/my-publications/my-publications.component';
import { CreateComponent } from './pages/create/create.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'all-post', component: AllComponent },
      { path: 'create', component:CreateComponent }, 
      { path: 'my-publications', component:MyPublicationsComponent }, 
      { path: '**', redirectTo: 'my-publications'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
