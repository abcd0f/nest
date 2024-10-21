import { IsString, IsNotEmpty } from 'class-validator';

export class CreateListDto {
  @IsString({ message: '标题必须是字符串' })
  @IsNotEmpty({ message: '标题不能为空' })
  title: string;

  @IsString({ message: '描述必须是字符串' })
  @IsNotEmpty({ message: '描述不能为空' })
  description: string;
}
