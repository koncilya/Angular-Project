import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Services */
import {MessageService} from 'primeng/api';

/* Pages */
import { ProductsComponent } from './products/products.component';

/* PrimeNG Modules */
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PostsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
    TableModule
  ],
  providers: [
  	MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

