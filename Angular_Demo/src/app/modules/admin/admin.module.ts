import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CompletedComponent } from './components/completed/completed.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistedBooksPipe } from './components/wishlist/wishlisted-books.pipe';
import { CompleteBooksPipe } from './components/completed/complete-books.pipe';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    WishlistComponent,
    CompletedComponent,
    HomeComponent,
    WishlistedBooksPipe,
    CompleteBooksPipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
