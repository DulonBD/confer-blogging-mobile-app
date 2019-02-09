import { Component } from "@angular/core";
import { NavController, Loading, LoadingController, ToastController } from "ionic-angular";
import { SignInPage } from "../sign-in/sign-in";
import { HttpClient } from "@angular/common/http";

@Component ({
    selector: 'page-sign-up',
    templateUrl: 'sign-up.html',
})
export class SignUpPage{
    loading: Loading;
    signUpAcceptence = {fullName:'', email:'', password:''};
    constructor( 
        private navCtrl: NavController,
        private loadingCtrl: LoadingController,
        public toastController: ToastController,
        private http: HttpClient
    ){}
    
    public onSignUp(){
        this.showLoading();
        const user = {
            name: this.signUpAcceptence.fullName, 
            email: this.signUpAcceptence.email, 
            password: this.signUpAcceptence.password,
            bio: '',
            dept: '',
            batch: '',
            dob: ''
        };
      
        this.http.post<{status: boolean}>('http://localhost:3000/confer/users/', user)
        .subscribe((res) => {
            if(res.status) {
                this.stopLoading();
                this.showToast('Signup Successfully');
                this.navCtrl.setRoot(SignInPage);
            } 
            else{
                this.stopLoading();
                this.showToast('Error To Signup!');
            } 
        },
        error => {
            this.stopLoading();
            this.showToast('There is some error');
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
    
    GoSignIn() {
        this.navCtrl.setRoot(SignInPage);
    }
}