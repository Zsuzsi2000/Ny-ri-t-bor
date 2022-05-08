import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Camp } from "../../pages/camp/Camp";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class CampService {

  collectionName = 'Camps';

  constructor(private afs: AngularFirestore) { }

  loadCampData(): Observable<Array<Camp>> {
    return this.afs.collection<Camp>(this.collectionName).valueChanges();
  }

}
