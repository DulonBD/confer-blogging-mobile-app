import { Component } from "@angular/core";
import { NavController, Loading, LoadingController, ToastController } from "ionic-angular";
import { SignUpPage } from "../sign-up/sign-up";
import { TabsPage } from "../tabs/tabs";
import { HttpClient } from "@angular/common/http";
import { AuthServiceProvider } from "../../services/auth.service";
import { Storage } from '@ionic/storage';

@Component ({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage {
    signUpPage = SignUpPage;
    loading: Loading;
    signinAcceptence = { email:'', password:'' };
    constructor( 
        private navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private toastController: ToastController,
        private http: HttpClient,
        private auth: AuthServiceProvider,
        private storage: Storage
    ){
        this.storage.get('email').then((val) => {
            if(val != null) {
                this.auth.setUser(val);
                this.navCtrl.setRoot(TabsPage);
            }
        });
    }
    
    onSignIn(){
        this.showLoading();
        this.http.get<{response: any}>('https://appconfer.herokuapp.com/confer/users/'+ this.signinAcceptence.email)
        .subscribe(res => {
            if(this.signinAcceptence.email == res.response.email && this.signinAcceptence.password == res.response.password) {
                this.stopLoading();
                this.showToast("Signin Successful!");
                this.storage.set('email', res.response.email);
                this.auth.setUser(res.response.email);
                this.navCtrl.setRoot(TabsPage);
            } 
            else{
                this.stopLoading();
                this.showToast("Access Denied");
            }
        },
        error => {
            this.stopLoading();
            this.showToast(error);
        });
    }

    showToast(msg) {
        const toast = this.toastController.create({
            message: msg,
            showCloseButton: true,
            duration: 5000,
            position: 'top',
            closeButtonText: 'Done'
        });
        toast.present();
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
          content: `<img src="./../../assets/imgs/loader.gif"/>`,
          spinner: 'hide',
          cssClass: 'my-loading-class',
          dismissOnPageChange: true
        });
        this.loading.present();
        this.loading.present();
    }
    
    stopLoading() {
        this.loading.dismiss();
    }
}
