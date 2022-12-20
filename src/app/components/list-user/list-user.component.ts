import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { of } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  index?: number;
  id?: number;
  allUserSource: User[] = [];
  currentUser?: User;

  constructor(public userService:UserService,private router:Router,public dialog: MatDialog,private dialogService: DialogService){}

  ngOnInit(): void {
   this.getData();
  }

  displayedColumns: string[] = ['id', 'nome', 'cognome', 'dataNascita','azione'];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  userDatabase?: UserService;
  dataSource!:MatTableDataSource<User>;

 ngAfterViewInit(){
  this.dataSource.paginator=this.paginator;
 }
  getData(){
    this.userService.getData().subscribe(res=>{
      this.dataSource=new MatTableDataSource<User>(res);
    });
  }


//metodi click
  onClick(idInput:number){
    this.router.navigate(['detail',idInput]);
  }

  OnclickDelete(idInput:number){
    this.userService.delete(idInput).subscribe(res=> this.dataSource.data=res);
    
  }

  OnclickEdit(userInput:User){
    this.userService.edit(userInput).subscribe(res=> this.dataSource.data=res);
    
  }

  OnclickCreate(userInput:User){
    this.userService.create(userInput).subscribe(res=> this.dataSource.data=res);
    
  }

 //metodi modal
  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      width: '250px',
      data: { id },
    });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.LISTA_USER = this.userService.LISTA_USER.filter(
          (_) => _.id !== id
        );
      }
    });
    console.log(dialogRef)
  }
//seconda prova
deleteUser(userId: number) {
  // this.userService.deleteById(userId).subscribe(
  //   res => { this.dataSource.data = res }
  // )
  this.userService.findById(userId).subscribe({
    next: user => {
      this.currentUser = user;
    }
  });

  this.dialogService.openConfirmDialog(`Vuoi cancellare ${this.currentUser?.nome} ${this.currentUser?.cognome}?`)
    .afterClosed().subscribe(res => {
      if (res) {
        this.userService.delete(userId).subscribe(
          result => { this.dataSource.data = result }
        );
      }
    });

}

//metodi url
  selectUtenteById(id: number){

    this.router.navigate(["detail",id]);
  }

  selectUtenteModifica(id: number){
    this.router.navigate(["edit",id]);
  }

  createUtente() {
    this.router.navigate(["create"]);
  }

  selectUtenteDaEliminare(id: number){

    this.userService.delete(id);
    this.getData();
    this.dataSource.paginator = this.paginator;
  }
}


