import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPatientComponent } from './show-patient/show-patient.component';

const routes: Routes = [
  {path: "", component: ShowPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
