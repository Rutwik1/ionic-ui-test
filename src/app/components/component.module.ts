import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { ProfileComponent } from "./profile/profile.component";
import { ActivityComponent } from "./activity/activity.component";
import { StatusComponent } from "./status/status.component";


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule,
    ],
    declarations: [
        GalleryComponent,
        ProfileComponent,
        ActivityComponent,
        StatusComponent,


    ],
    exports: [
        GalleryComponent,
        ProfileComponent,
        ActivityComponent,
        StatusComponent,


    ]
})

export class ComponentModule { }