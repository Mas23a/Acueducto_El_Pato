import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FinancieroComponent } from './financiero/financiero.component';


const routes: Routes=[
  {path: '', redirectTo:'/principal', pathMatch:'full'},
  {path: 'principal', component:PrincipalComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'financiero', component:FinancieroComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    CuerpoComponent,
    FooterComponent,
    NosotrosComponent,
    ServiciosComponent,
    FinancieroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
