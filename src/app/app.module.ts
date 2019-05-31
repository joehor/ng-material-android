import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// traduções
import { MatPaginatorIntlBr } from '../app/shared/MatPaginatorPT-BR';

// material
import { MaterialModule } from '../app/material-modules';
import { MatPaginatorIntl } from '@angular/material';
import { ExpansionComponent } from './expansion/expansion.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpansionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule, FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // material modules
    MaterialModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlBr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
