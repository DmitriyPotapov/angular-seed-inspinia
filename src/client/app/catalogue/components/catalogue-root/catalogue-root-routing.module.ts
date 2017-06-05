import {
    AssemblyComponent,
    AssemblySparesComponent,
    CatalogueRootComponent,
    ClassificationComponent,
    ModelComponent,
    ModificationComponent,
} from '../index';

import { BasicComponent } from '../../../components/layout/layouts/basic.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VendorComponent } from '../vendor/vendor.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: BasicComponent,
                children: [
                    {
                    path: '',
                    component: CatalogueRootComponent,
                    children: [
                        {
                            path: 'vendor',
                            component: VendorComponent
                        },
                        {
                            path: 'classification/:id',
                            component: ClassificationComponent
                        },
                        {
                            path: 'model/:id',
                            component: ModelComponent
                        },
                        {
                            path: 'modification/:id',
                            component: ModificationComponent
                        },
                        {
                            path: 'assembly/:id',
                            component: AssemblyComponent
                        },
                        {
                            path: 'assemblyspares/:id',
                            component: AssemblySparesComponent
                        }
                    ]
                }]
            }

        ])
    ],
    exports: [RouterModule]
})
export class CatalogueRootRoutingModule { }
