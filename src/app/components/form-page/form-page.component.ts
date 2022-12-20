import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private router: Router,private fb:FormBuilder){}
    userReactive:FormGroup=this.fb.group({
      id:this.fb.control(''),
      nome:this.fb.control('',[Validators.required,Validators.minLength(4)]),
      cognome:this.fb.control('',[Validators.required,Validators.minLength(4)]),
      dataNascita:this.fb.control('',[Validators.required]),
    })

  userItem: User = {id: 0, nome: "", cognome: "", dataNascita: ""}
  
  ngOnInit(): void {

    if(!(this.router.url.split("/")[1]==="create")){
    let id: number = Number( this.route.snapshot.paramMap.get('id'));
    
    this.service.findById(id)?.subscribe(user => {this.userReactive.patchValue(user)});
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
    let automobileDaInserire: User={...this.userReactive.value,id};
    this.service.create(automobileDaInserire);
    this.router.navigate(["list"]);
    
  }
  aggiorna(){
    this.service.edit(this.userReactive.value);
    this.router.navigate(["list"]);
  }

  fillForm(user:User){
     this.userReactive.patchValue(user);
     if(("/")[1]==="detail"){
        this.userReactive.disable();
     }
     
  }
  getUser(idUser:number){
    this.service.findById(idUser).subscribe(res=> {
      if(res){
        this.userItem={...res};
        this.fillForm(res);
        
      }
    });
  }
}
