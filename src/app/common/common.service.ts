import {Injectable} from '@angular/core';

@Injectable()

//storing a shared array, for ads-detail.component to get filter keys from ads-category.component
export class CommonService{
   filterKeys: string[] = [];
}