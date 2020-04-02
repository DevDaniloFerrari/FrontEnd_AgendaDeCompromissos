import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: 'paciente',
                loadChildren: () => import('../paciente/paciente.module').then(m => m.PacienteModule)
            },
            {
                path: 'consulta',
                loadChildren: () => import('../consulta/consulta.module').then(m => m.ConsultaModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContainerRoutingModule { }
