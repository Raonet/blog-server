import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ArticleEntity } from './article.entity';

@Injectable()
export class ArticleService {
  article: ArticleEntity;
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async addArticle(data: ArticleEntity): Promise<string> {
    let result: string;
    await this.articleRepository
      .save(data)
      .then(() => {
        result = 'success';
      })
      .catch(error => {
        result = error;
      });
    return result;
  }
}
