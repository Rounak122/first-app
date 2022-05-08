import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { YourComponent } from './your-component/your-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    YourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
