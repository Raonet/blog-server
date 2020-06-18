import { Controller, Post, Body } from '@nestjs/common';

import { ArticleService } from './article.service';
import { ArticleDto } from './article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post('add')
  addArticle(@Body() body: ArticleDto): Promise<string> {
    return this.articleService.addArticle(body);
  }
}
