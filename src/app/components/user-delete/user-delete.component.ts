import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
 /* constructor(
    public dialogRef: MatDialogRef<UserDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) {}
 
  ngOnInit(): void {}
 
  confirmDelete() {
   this.userService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
    console.log(this.data.id)
  }*/


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserDeleteComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}