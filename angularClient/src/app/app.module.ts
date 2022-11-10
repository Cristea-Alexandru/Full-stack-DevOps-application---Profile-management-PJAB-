import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserServiceService } from './user-service.service';
import { TypeFormComponent } from './type-form/type-form.component';
import { TypeListComponent } from './type-list/type-list.component';
import { MatSortModule } from '@angular/material/sort';
import { SortDirective } from './directive/sort.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    TypeFormComponent,
    TypeListComponent,
    SortDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
