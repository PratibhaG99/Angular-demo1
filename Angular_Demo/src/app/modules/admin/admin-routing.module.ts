import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompletedComponent } from './components/completed/completed.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent, 
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'wishlist', component: WishlistComponent},
    {path: 'completed', component: CompletedComponent},
    {path: '', redirectTo: '/admin/home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
