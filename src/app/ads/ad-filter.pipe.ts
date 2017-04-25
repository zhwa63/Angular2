import{ PipeTransform, Pipe} from '@angular/core';
import{ IAds } from './ads';

@Pipe({
    name:'adFilter'
})

//create a custom filter pipe
export class AdFilterPipe implements PipeTransform{

    transform(value: IAds[], keys: string[]): IAds[]{
        
        var array: IAds[] = [];
        var emptyArray:IAds[]=[];

        //for each filter keyword
        for(let key of keys)
        {
            //if key is define, change to lower case, if not, set it to null
            key = key ? key.toLocaleLowerCase() : null;
            //if key is not null, temp equals to a new array containing the filtered objects. otherwise, temp equals to an empty array
            var temp: IAds[] = key? value.filter((ad: IAds) => ad.category.toLocaleLowerCase().indexOf(key) !== -1):emptyArray;
            //concatenate the new temp array to the old array
            array.push.apply(array,temp);
            //console.log("array="+array);
       
        }
        return array;

    
    }
}