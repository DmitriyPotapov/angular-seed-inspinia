import {
    Assembly,
    AssemblySpares,
    Classification,
    Model,
    Modification,
    Spare,
    SpareDetalization,
    Vendor,
} from '../models/index';
import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CatalogueService {
    constructor(private http: Http) { }
    getVendors(): Observable<Vendor[]> {
        return this.http.get(`/api/vendors`)
            .map(response => response.json() as Vendor[])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getClassifications(vendor: number): Observable<Classification[]> {
        return this.http.get(`/api/classifications/${vendor}`)
            .map(response => response.json() as Classification[])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getModels(classification: number): Observable<Model[]> {
        return this.http.get(`/api/models/${classification}`)
            .map(response => response.json() as Model[])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getModifications(model: number): Observable<Modification[]> {
        return this.http.get(`/api/modifications/${model}`)
            .map(response => response.json() as Modification[])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getAssemblies(modification: number): Observable<Assembly[]> {
        return this.http.get(`/api/assemblies/${modification}`)
            .map(response => response.json() as Assembly[])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getAssemblySpares(assembly: number): Observable<AssemblySpares> {
        return this.http.get(`/api/assemblyspares/${assembly}`)
            .map(response => response.json() as AssemblySpares[])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSpareDetalization(spare: number): Observable<SpareDetalization> {
        return this.http.get(`/api/sparedetalization/${spare}`)
            .map(response => response.json() as SpareDetalization)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
