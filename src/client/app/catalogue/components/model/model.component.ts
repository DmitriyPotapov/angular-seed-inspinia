import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { CatalogueService } from '../../services/catalogue.service';
import { Model } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'model-view',
    templateUrl: 'model.template.html',
    styleUrls: ['model.style.css']
})
export class ModelComponent implements OnInit {
    models: Model[];
    @Input() model: Model;
    ASSETS_FOLDER: string = '/assets/img/catalogue/model';
    constructor(private catalogueService: CatalogueService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        console.log('ModelComponent init');
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params['id'];
            this.loadModels(id);
        });
    }
    loadModels(classification: number) {
        this.catalogueService.getModels(classification).subscribe(
            result => { this.models = result; },
            error => { console.log(error); }
        );
    }
    selectModel(model: Model) {
        this.router.navigate(['modification', model.modelId],{relativeTo: this.activatedRoute.parent });
    }
}
