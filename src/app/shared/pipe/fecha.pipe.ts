import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fecha',
})
export class FechaPipe implements PipeTransform{

    transform(items: any[], fields: string[], value: string): any[] {
        if (!items) { return []; }
        if (!fields || !value) { return items; }
        return items.filter(item =>
          fields.some(field => (item[field] && item[field].toString().toLowerCase().includes(value.toLowerCase())))
        );
    }

}