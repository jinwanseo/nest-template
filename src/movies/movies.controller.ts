import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

// Controller 역할
// 1. Url 매핑 (express router)
// 2. Request (Query / Param / Body) / Response
// 여기서 핵심 역할 !! ⭐️
// Param | Body 등 원하는 데이터가 있으면 직접 호출 해야함! (express 처럼 req, res 전부 가져오지 않음!)
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movis';
  }
  @Get('search')
  search(@Query('title') title: string) {
    return `We are searchig for movie with a title : ${title}`;
  }
  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie, movieId is ${movieId}`;
  }

  @Post()
  createMovie(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }

  // 간혹 PUT 을 사용 안하고 Patch로 사용하는 경우도 있음
  // why ?
  // PUT 은 모든 리소스를 업데이트 하기 때문임.
  @Patch(':id')
  update(@Param('id') movieId: string, @Body() updateMovie) {
    return {
      updatedMovie: movieId,
      ...updateMovie,
    };
  }
}