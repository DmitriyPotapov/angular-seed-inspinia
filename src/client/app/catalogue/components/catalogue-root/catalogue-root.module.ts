import { AssemblyComponent } from '../assembly/assembly.component';
import { AssemblySparesComponent } from '../assembly-spares/assembly-spares.component';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogueRootComponent } from './catalogue-root.component';
import { CatalogueRootRoutingModule } from './catalogue-root-routing.module';
import { CatalogueService } from '../../services/catalogue.service';
import { ClassificationComponent } from '../classification/classification.component';
import { ModelComponent } from '../model/model.component';
import { ModificationComponent } from '../modification/modification.component';
import { NgModule } from '@angular/core';
import { SpareComponent } from '../spare/spare.component';
import { SpareDetalizationComponent } from '../spare-detalization/spare-detalization.component';
import { VendorComponent } from '../vendor/vendor.component';
@NgModule({
    imports: [BrowserModule, CatalogueRootRoutingModule],
    exports: [],
    declarations: [
        CatalogueRootComponent,
        VendorComponent,
        ClassificationComponent,
        ModelComponent,
        ModificationComponent,
        AssemblyComponent,
        SpareComponent,
        SpareDetalizationComponent,
        AssemblySparesComponent
    ],
    providers: [CatalogueService]
})
export class CatalogueRootModule { }
