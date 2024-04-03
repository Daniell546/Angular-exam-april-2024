import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { AppInterceptorProvider } from './app-interceptor';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    CoreModule,
    SharedModule,
    PerfumesModule,

    RouterModule,
    PerfumesRoutingModule,
    UserRoutingModule,
    AppRoutingModule,

    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      newestOnTop: false ,
    })
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
