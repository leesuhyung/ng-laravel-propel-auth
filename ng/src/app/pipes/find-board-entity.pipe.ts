import {Pipe, PipeTransform} from '@angular/core';
import {BOARD_ENTITY_LIST} from "../models/board";

@Pipe({
    name: 'findBoardEntity'
})
export class FindBoardEntityPipe implements PipeTransform {

    transform(value: string): string {
        if (value) {
            let item = BOARD_ENTITY_LIST.find((item) => {
                return item.Value === value;
            });

            if (item) {
                return item.Text || '-';
            }

            return value;
        }
        else
            return null;
    }

}
