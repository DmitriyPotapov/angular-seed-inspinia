import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, Input, OnInit } from '@angular/core';

import { Assembly } from '../../models/index';
import { CatalogueService } from '../../services/catalogue.service';

@Component({
    moduleId: module.id,
    selector: 'assembly-view',
    templateUrl: 'assembly.template.html',
    styleUrls: ['assembly.style.css']
})

export class AssemblyComponent implements OnInit {
    @Input() assembly: Assembly;
    assemblies: Assembly[];
    ASSETS_FOLDER: string = '/assets/img/catalogue/assembly';
    constructor(private catalogueService: CatalogueService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        console.log('AssemblyComponent init');
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.loadAssemblies(id);
        });
    }

    loadAssemblies(modification: number) {
        this.catalogueService.getAssemblies(modification).subscribe(
            result => { this.assemblies = result; },
            error => { console.log(error); }
        );
    }
    selectAssembly(assembly: Assembly) {
        this.router.navigate(['assemblyspares', assembly.assemblyId]);
    }
}
