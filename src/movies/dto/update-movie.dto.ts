import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// PartialType ๐ npm i @nestjs/mapped-types ๐ ์์ ๋ฐ๊ณ  ์ถ์ ํ์ ์ ๋ณด GET
/// UpdateMovieDto / CreateMovieDto์ ์ธํฐํ์ด์ค๋ ๋์ผํ๋ ํ์ ๊ฐ์ด ์๋
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
