import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvatarHelper {
  buildSrc(data: string): string {
    if (data) {
      if (data.substr(0, 4) === 'data') {
        return data;
      } else {
        return `${environment.srcImages}/${data}`;
      }
    } else {
      return environment.source.images.notHaveAvatar;
    }
  }
}
