import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { SettingsComponent } from './settings-component/settings.component';
import { ProfileComponent } from './profile-component/profile.component';
import { HelpComponent } from './help-component/help.component';
import { MainComponent } from './main-component/main.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'help', component: HelpComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { 
                enableTracing: true,// <-- debugging purposes only
                useHash: true
            } 
        )
    ],
    declarations: [
        HomeComponent,
        MainComponent,
        ProfileComponent,
        SettingsComponent,
        HelpComponent
    ],
    bootstrap: [MainComponent]
})
export class AppModule { }