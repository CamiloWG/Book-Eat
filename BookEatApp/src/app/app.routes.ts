import { Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent
    },
    { path: '**', redirectTo: ''}
];
