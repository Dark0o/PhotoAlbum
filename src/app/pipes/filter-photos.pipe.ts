import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appPhotosFilter' })
export class FilterPhotosPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter((it) => {
      return it.title.toLowerCase().includes(searchText);
    });
  }
}
