import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar: MatSnackBar) { }

  openSnackBar(data:string,panelClass:string){
    this._snackbar.openFromComponent(SnackbarComponent,{
      data,
      panelClass,
      duration:3000
    });
  }
}
