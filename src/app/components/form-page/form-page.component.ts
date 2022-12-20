import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ListUserComponent } from '../list-user/list-user.component';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit{
  constructor(private route: ActivatedRoute, private service: UserService,
    private router: Router){}

  userItem: User = {id: 0, nome: "", cognome: "", dataNascita: ""}
  
  ngOnInit(): void {

    if(!(this.router.url.split("/")[1]==="create")){
    let id: number = Number( this.route.snapshot.paramMap.get('id'));
    
    this.service.findById(id)?.subscribe(user => this.userItem = user);
    }
  }

  isReadOnly() {
    //your condition, in this case textarea will be disbaled.
    if((this.router.url.split("/")[1]==="detail")){
    return true; 
    }
    else{
    return false;
    }
  }

  isReadOnlyBott(){
    if((this.router.url.split("/")[1]==="detail")){
      return false; 
      }
      else{

      return true;
      }
  }

  insertUtente(){
    let id:number = this.service.incrementoId();
    let automobileDaInserire: User={id, nome:this.userItem.nome, cognome:this.userItem.cognome, dataNascita:this.userItem.dataNascita};
    this.service.create(automobileDaInserire);
    this.router.navigate(["list"]);
    
  }
}
