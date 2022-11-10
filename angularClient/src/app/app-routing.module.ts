import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeFormComponent } from './type-form/type-form.component';
import { TypeListComponent } from './type-list/type-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'types', component: TypeListComponent },
  { path: 'addusertype', component: TypeFormComponent },
  { path: 'addusertype/:id', component: TypeFormComponent }, 
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'adduser/:id', component: UserFormComponent }, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
