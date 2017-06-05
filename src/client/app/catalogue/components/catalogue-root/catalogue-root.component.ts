import { Assembly, AssemblySpares, Classification, Model, Modification, Vendor } from '../../models/index';
import { Component, OnChanges, OnInit } from '@angular/core';

import { CatalogueService } from '../../services/catalogue.service';
import { correctHeight } from '../../../app.helpers';

@Component({
    moduleId: module.id,
    selector: 'catalogue-root',
    templateUrl: 'catalogue-root.template.html'
})

export class CatalogueRootComponent implements OnInit {
    vendors: Vendor[];
    classifications: Classification[];
    models: Model[];
    modifications: Modification[];
    assemblies: Assembly[];
    assemblySpares: AssemblySpares;
    currentView: string;
    ASSETS_FOLDER: string = '/assets/img/vendors/';
    constructor(private catalogueService: CatalogueService) { }
    ngOnInit() { }
   
    
    
    loadAssemblySpares(assembly: number) {
        this.catalogueService.getAssemblySpares(assembly).subscribe(
            result => { this.assemblySpares = result; },
            error => { console.log(error); }
        );
        this.currentView = 'assemblySpares';
        console.log(this.assemblySpares);
    }

}
