import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    ShowPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      focusButton: 'confirm',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
