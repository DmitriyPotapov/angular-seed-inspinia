import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, Input, OnInit } from '@angular/core';

import { CatalogueService } from '../../services/catalogue.service';
import { Classification } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'classification-view',
    templateUrl: 'classification.template.html',
    styleUrls: ['classification.style.css']
})
export class ClassificationComponent implements OnInit {
    classifications: Classification[];
    @Input() classification: Classification;
    ASSETS_FOLDER: string = '/assets/img/catalogue/classification';
    constructor(private catalogueService: CatalogueService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        
    }
    ngOnInit() {
        console.log('ClassificationComponent init');

        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.loadClassifications(id);
        });
    }
    loadClassifications(vendor: number) {
        this.catalogueService.getClassifications(vendor).subscribe(
            result => { this.classifications = result; },
            error => { console.log(error); }
        );
    }
    selectClassification(classification: Classification) {
        this.router.navigate(['model', classification.classificationId], { relativeTo: this.activatedRoute.parent });
    }
}
