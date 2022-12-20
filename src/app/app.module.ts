import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ListUserComponent } from './components/list-user/list-user.component';
import { DetailsUserComponent } from './components/details-user/details-user.component';
import { AppRoutingModule } from './app-routing.module';
import { FormPageComponent } from './components/form-page/form-page.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    DetailsUserComponent,
    FormPageComponent,
    UserDeleteComponent,
    SnackbarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
