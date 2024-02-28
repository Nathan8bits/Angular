import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParenteDataComponent } from './component/parente-data/parente-data.component';
import { TitleComponent } from './component/title/title.component';
import { DiretivasComponent } from './component/diretivas/diretivas.component';
import { SchoolComponent } from './component/school/school.component';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { ReatividadeComponent } from './component/reatividade/reatividade.component';
import { NgWitchCaseComponent } from './component/ng-witch-case/ng-witch-case.component';

@NgModule({
  declarations: [
    AppComponent,
    ParenteDataComponent,
    TitleComponent,
    DiretivasComponent,
    SchoolComponent,
    NgIfComponent,
    NgForComponent,
    ReatividadeComponent,
    NgWitchCaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
