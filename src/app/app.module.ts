import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { AdunitService } from './adunit.service';
import { GetDataComponent } from './get-data/get-data.component';
import { CardComponentComponent } from './card-component/card-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GetDataComponent,
    CardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    RouterModule.forRoot([
    
      {path:'getData',component:GetDataComponent },
      {path:'CardComponent',component:GetDataComponent },
      
      
   
    ])
  ],
  providers: [AdunitService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
