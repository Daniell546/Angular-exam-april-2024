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
import { ToastrModule } from 'ngx-toastr';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    CoreModule,
    CookieModule.forRoot(),
    SharedModule,
    PerfumesModule,

    RouterModule,
    PerfumesRoutingModule,
    UserRoutingModule,
    AppRoutingModule,

    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
