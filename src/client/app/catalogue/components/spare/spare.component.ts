import { Component, Input, OnInit } from '@angular/core';
import { Spare, SpareDetalization } from '../../models/index';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

import { CatalogueService } from '../../services/catalogue.service';

@Component({
    moduleId: module.id,
    selector: 'spare-view',
    templateUrl: 'spare.template.html',
    styleUrls: ['spare.style.css']
})

export class SpareComponent implements OnInit {
    @Input() spares: Spare[];
    spareDetalization: SpareDetalization;
    currentView: string;
    ASSETS_FOLDER: string = '/assets/img/vendors/';
    constructor(private catalogueService: CatalogueService) { }
    ngOnInit() {
        console.log('SpareComponent init');
        this.currentView = 'spares';
    }

    loadSpareDetalization(spare: number) {
        this.catalogueService.getSpareDetalization(spare).subscribe(
            result => { this.processSpareDetalizationResult(result); },
            error => { console.log(error); }
        );
    }
    processSpareDetalizationResult(result: SpareDetalization) {
        this.spareDetalization = result;
        if (this.spareDetalization.spareProperty !== undefined
            && this.spareDetalization.spareProperty !== null
            && this.spareDetalization.spareProperty.length > 0)
            this.currentView = 'spareDetalization';
    }
    backToSparesView() {
        this.currentView = 'spares';
    }
}
