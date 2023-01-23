import { IsNotEmpty } from 'class-validator';

export class PhotoUpload {
  @IsNotEmpty()
  id_photo: string;

  @IsNotEmpty()
  originalname: string;

  @IsNotEmpty()
  filename: string;
}
