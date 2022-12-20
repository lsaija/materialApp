import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { DetailsUserComponent } from './components/details-user/details-user.component';
import { FormPageComponent } from './components/form-page/form-page.component';

const routes: Routes = [
  {path:'list', 
  component:ListUserComponent
 
},
{path:'detail/:id',
 component:FormPageComponent
  
},

{path:'delete/:id',
 component:FormPageComponent
  
},
{path:'edit/:id',
 component:FormPageComponent
  
},
{path:'create/:id',
 component:FormPageComponent
  
},

{path:'', 
redirectTo:'list',pathMatch:'full'
},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
