import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolformComponent } from './pages/schoolform/schoolform.component';
import { SchoolDataGridComponent } from './school-data-grid/school-data-grid.component';
const routes: Routes = [
  // ... other routes
  { path: 'create-organization', component: SchoolformComponent },
  
  { path: 'get-organization', component: SchoolDataGridComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
