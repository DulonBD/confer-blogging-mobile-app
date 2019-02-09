import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { QueryPage } from '../pages/query/query';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { HeaderPage } from '../pages/header/header';
import { ProfileServicePage } from '../services/profile-service';
import { QueryServicePage } from '../services/query-service';
import { SingleQueryPage } from '../pages/query/single-query/single-query';
import { SingleQueryServicePage } from '../services/single-query-service';
import { SignUpServicePage } from '../services/signup-service';
import { SignInServicePage } from '../services/signin-service';
import { ProfileEditPage } from '../pages/profile/profile-edit/profile-edit';
import { PostPage } from '../pages/profile/post/post';
import { AnswerPage } from '../pages/profile/answer/answer';
import { NotificationPage } from '../pages/notification/notification';
import { SearchServicePage } from '../services/search-service';
import { SearchPage } from '../pages/search/search';
import { ProfileShowServicePage } from '../services/proShow-service';
import { ProfileShowPage } from '../pages/profile/profile-show/profile-show';
import { PostServicePage } from '../services/post-service';
import { AnswerQueryPage } from '../pages/profile/answer/answer-query/answerquery';
import { AnsQueryServicePage } from '../services/ansQuery-service';
import { AuthServiceProvider } from '../services/auth.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    QueryPage,
    TabsPage,
    ProfilePage,
    ProfileShowPage,
    PostPage,
    AnswerPage,
    AnswerQueryPage,
    ProfileEditPage,
    HeaderPage,
    SingleQueryPage,
    NotificationPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    QueryPage,
    TabsPage,
    ProfilePage,
    PostPage,
    AnswerPage,
    AnswerQueryPage,
    ProfileEditPage,
    ProfileShowPage,
    HeaderPage,
    SingleQueryPage,
    NotificationPage,
    SearchPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignInServicePage,
    SignUpServicePage,
    QueryServicePage,
    SingleQueryServicePage,
    ProfileServicePage,
    ProfileShowServicePage,
    PostServicePage,
    AnsQueryServicePage,
    SearchServicePage,
    AuthServiceProvider
  ]
})
export class AppModule {}
