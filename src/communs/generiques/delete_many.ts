/* eslint-disable prettier/prettier */

import { IsArray, IsNotEmpty } from 'class-validator';

export class DeleteMany {
  @IsNotEmpty()
  @IsArray()
  ids: string[];
}
