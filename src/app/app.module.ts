import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {AdsCategoryComponent} from './ads/ads-category.component';
import {AdsDetailComponent} from './ads/ads-detail.component';
import{CommonService} from './common/common.service';
import{AdFilterPipe} from './ads/ad-filter.pipe';


@NgModule({
  imports:      [ BrowserModule,
                  CommonModule,
                  FormsModule,
                  RouterModule.forRoot([
                    {path:'main', component: AdsCategoryComponent},        
                    {path:'detail', component: AdsDetailComponent},
                    {path:"",redirectTo:'main',pathMatch:'full'}
                  ]) ],
  declarations: [ AppComponent,
                  AdsCategoryComponent,
                  AdsDetailComponent,
                  AdFilterPipe ],
  providers:[CommonService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
