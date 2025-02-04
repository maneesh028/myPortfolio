import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "main",
  loadChildren: () =>
   import("./main/main.module").then(
     (m) => m.MainModule
   ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default redirect to home without main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
