import { ImageLinks } from './image.model';
import { VolumeInfo } from './volumeInfo.model';
export interface BookData
{
   kind:string;
   id:string;
   etag:string;
   selfLink:string;
   volumeInfo:VolumeInfo;
   language:string;
   
}
