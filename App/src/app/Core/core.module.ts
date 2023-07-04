import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagePannerComponent } from './page-panner/page-panner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagePannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PagePannerComponent
  ]
})
export class CoreModule { }
