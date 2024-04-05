import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { InitialComponent } from './components/initial/started/initial.component';
import { EditComponent } from './components/initial/edit/edit.component';
import { LayoutComponent } from './components/layout/layout.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { 
        path: 'initial', 
        component: LayoutComponent,
        children: [
            { path: 'started', component: InitialComponent },
            { path: 'edit', component: EditComponent }
        ]
    },
];

const modules = [
    RouterModule.forRoot(routes),
]

@NgModule({
    imports: [...modules],
    exports: [RouterModule]
})
export class AppRouter{}