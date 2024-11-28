import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { StoreModule } from '@ngrx/store';
import { CaustomeincrementComponent } from './component/caustomeincrement/caustomeincrement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Counterdisplay1Component } from './component/counterdisplay1/counterdisplay1.component';
import { BlogComponent } from './blogData/blog.component';
import { MainComponent } from './component/main/main.component';
import { appState } from './shared/global/app.state';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { blogEffects } from './shared/store/blog/blog.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { Customserializer } from './shared/Router/customSerializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EditBlogComponent } from './blogData/edit-blog/edit-blog.component';
import { MasterInterceptor } from './Interceptor/master.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CaustomeincrementComponent,
    Counterdisplay1Component,
    BlogComponent,
    MainComponent,
    EditBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appState),
    EffectsModule.forRoot([blogEffects]),
    MatSnackBarModule,
    NoopAnimationsModule,
    StoreRouterConnectingModule.forRoot({serializer:Customserializer}),
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:MasterInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
