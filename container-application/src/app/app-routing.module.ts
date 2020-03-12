import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { ReactComponent } from './components/react/react.component';
import { VueComponent } from './components/vue/vue.component';
import { AllComponent } from './components/all/all.component';


const routes: Routes = [{
  path:'angular',
  component:AngularComponent
},{
  path:'react',
  component:ReactComponent
},{
  path:'vue',
  component:VueComponent
},{
  path:'all',
  component:AllComponent
},{
  path:'',
  redirectTo:'/angular',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
