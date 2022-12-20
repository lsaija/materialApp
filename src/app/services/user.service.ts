import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   LISTA_USER: User[] = [
    {id: 1, nome: 'michele', cognome: 'bressi', dataNascita: '28/07/1998'},
    {id: 2, nome: 'fabio', cognome: 'pulcinelli', dataNascita: '20/06/2002'},
    {id: 3, nome: 'ross', cognome:'rambo', dataNascita: '07/09/1997'},
    {id: 4, nome: 'michele', cognome: 'bressi', dataNascita: '28/07/1998'},
    {id: 5, nome: 'fabio', cognome: 'pulcinelli', dataNascita: '20/06/2002'},
    {id: 6, nome: 'ross', cognome:'rambo', dataNascita: '07/09/1997'},
    {id: 7, nome: 'irene', cognome:'perotti', dataNascita: '29/09/2000'},
    {id: 8, nome: 'Ajeje', cognome:'Brazorf', dataNascita: '29/09/2000'},
  ]

  listaId:number[]=this.LISTA_USER.map(a=>a.id);
  constructor() { }

  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  getData() :Observable<User[]>{
    return of(this.LISTA_USER);
  }
  getDialogData() {
    return this.LISTA_USER;
  }

  delete(idInput?: number): Observable<User[]> {
    this.LISTA_USER=this.LISTA_USER.filter(a => a.id !==idInput);
    return of(this.LISTA_USER);
  }

  findById(idInput?:number){
    let result= this.LISTA_USER.find(a=> a.id==idInput)!;
    return of(result!);
  }

  edit(userUpdate:User):Observable<User[]>{
    this.LISTA_USER.filter(a => a.id == userUpdate.id).map(a => { a.nome = userUpdate.nome; a.cognome = userUpdate.cognome; a.dataNascita = userUpdate.dataNascita; });
    return of(this.LISTA_USER);
  }
  incrementoId():number{
    return Math.max.apply(null,this.listaId)+1;

  }
  create(userInsert:User):Observable<User[]>{
    userInsert.id=this.incrementoId();
    this.LISTA_USER.push(userInsert);
    return of(this.LISTA_USER);
  }
}
