import { Controller, Post, Body } from '@nestjs/common';

import { ArticleEntity } from './article.entity';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post('add')
  addArticle(@Body() body: ArticleEntity): Promise<string> {
    return this.articleService.addArticle(body);
  }
}
