import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { CatalogueService } from '../../services/catalogue.service';
import { Modification } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'modification-view',
    templateUrl: 'modification.template.html',
    styleUrls: ['modification.style.css']
})
export class ModificationComponent implements OnInit {
    @Input() modification: Modification;
    modifications: Modification[];
    ASSETS_FOLDER: string = '/assets/img/catalogue/modification';
    constructor(private catalogueService: CatalogueService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        console.log('ModificationComponent init');
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.loadModifications(id);
        });
    }
    loadModifications(model: number) {
        this.catalogueService.getModifications(model).subscribe(
            result => { this.modifications = result; },
            error => { console.log(error); }
        );
    }
    selectModification(modification: Modification) {
        this.router.navigate(['assembly', modification.modificationId]);
    }
}
