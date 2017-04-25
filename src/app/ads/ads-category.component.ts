
import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CommonService} from '../common/common.service'

//decorator: a function that adds metada to a class, its members, or its method arguments
@Component({
    moduleId:module.id,
    templateUrl: 'ads-category.component.html'

})

export class AdsCategoryComponent implements OnInit{

    pageTitle:string = 'Category';
    filterKeys: string[];

    constructor(private arrayService: CommonService, private _router:Router){
    }

   public ngOnInit(){
       this.filterKeys = this.arrayService.filterKeys;
   }

   onSubmit(value: any):void{
        //console.log(value);

        //get all the checkboxs
        var checkboxs =document.getElementsByTagName('input');
        var i;
        for(i = 0; i<checkboxs.length; i++)
        {
            //if checkbox is checked, add the name value into filter keys
            if(checkboxs[i].checked == true){
                this.filterKeys.push(checkboxs[i].name);
            }
        }
        //route to detail page
        this._router.navigate(['/detail']);
        
    }
    
}