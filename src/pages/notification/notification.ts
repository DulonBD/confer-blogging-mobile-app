import { Component } from "@angular/core";

@Component({
    template: `
    <ion-header>
        <ion-navbar>
            <ion-title>
                Confer & Handbook
            </ion-title>
        </ion-navbar>
    </ion-header>
    <ion-content>
        <ion-list>
            <ion-list-header>
                Recent
            </ion-list-header>
        
            <ion-item>
                <ion-avatar item-start>
                <img src="../../assets/imgs/user-img/client-03.jpg">
                </ion-avatar>
                <h2>John answered on your post</h2>
                <p>2h ago</p>
            </ion-item>
        
            <ion-item>
                <ion-avatar item-start>
                <img src="../../assets/imgs/user-img/client-03.jpg">
                </ion-avatar>
                <h2>Shakira answered on your post</h2>
                <p>2h ago</p>
            </ion-item>
        </ion-list>
        <ion-list>
            <ion-list-header>
                Earlier
            </ion-list-header>
        
            <ion-item>
                <ion-avatar item-start>
                <img src="../../assets/imgs/user-img/client-03.jpg">
                </ion-avatar>
                <h2>Finn answered on your post</h2>
                <p>2h ago</p>
            </ion-item>
        
            <ion-item>
                <ion-avatar item-start>
                <img src="../../assets/imgs/user-img/client-03.jpg">
                </ion-avatar>
                <h2>Han answered on your post</h2>
                <p>2h ago</p>
            </ion-item>
        </ion-list>
    </ion-content>
    `,
    styles: [`
        ion-list-header{
           color: #163871;
        }

        .list-header-md {
            margin-bottom: 0;
            background: #f2f2f2;
        }
    `]
})
export class NotificationPage {

}