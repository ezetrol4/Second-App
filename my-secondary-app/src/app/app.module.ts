import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddFormComponent } from './add-form/add-form.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    AddFormComponent,
    FruitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
