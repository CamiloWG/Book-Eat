import { Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { ReservasComponent } from './pages/reservas/reservas.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent
    },
    {
        path: 'reservas',
        component: ReservasComponent
    },
    { path: '**', redirectTo: ''}
];
