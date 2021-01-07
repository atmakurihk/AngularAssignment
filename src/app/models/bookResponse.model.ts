import { BookData } from './bookData.model';
import { BookService } from "../book.service";

export interface BookResponse
{
   kind: string;
   totalItems:number;
   items:BookData[]
}
