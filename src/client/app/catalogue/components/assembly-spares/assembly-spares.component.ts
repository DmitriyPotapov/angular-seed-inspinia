import { ActivatedRoute, Params, Router } from '@angular/router';
import { Assembly, AssemblySpares } from '../../models/index';
import { Component, Input, OnInit } from '@angular/core';

import { CatalogueService } from '../../services/catalogue.service';

@Component({
    moduleId: module.id,
    selector: 'assembly-spares',
    templateUrl: 'assembly-spares.template.html',
    styleUrls: ['assembly-spares.style.css']
})

export class AssemblySparesComponent implements OnInit {
    assemblySpares: AssemblySpares;
    ASSETS_FOLDER: string = '/assets/img/catalogue/assembly';
    constructor(private catalogueService: CatalogueService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        console.log('AssemblySparesComponent init');
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params['id'];
            this.loadAssemblySpares(id);
        });
    }

    loadAssemblySpares(assembly: number) {
        this.catalogueService.getAssemblySpares(assembly).subscribe(
            result => { this.assemblySpares = result; },
            error => { console.log(error); }
        );
        console.log(this.assemblySpares);
    }
    selectSubAssembly(assembly: Assembly) {
        this.router.navigate(['assemblyspares', assembly.assemblyId], { relativeTo: this.activatedRoute.parent });
    }
}
