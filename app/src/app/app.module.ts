import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user/user-routing.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { PerfumesModule } from './perfumes/perfumes.module';
import { PerfumesRoutingModule } from './perfumes/perfumes-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    CoreModule,
    SharedModule,
    PerfumesModule,
    RouterModule,
    PerfumesRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
