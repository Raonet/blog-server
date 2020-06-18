import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ArticleEntity } from './article.entity';
import { ArticleDto } from './article.dto';

@Injectable()
export class ArticleService {
  article: ArticleEntity;
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async addArticle(value: ArticleDto): Promise<string> {
    const time = String(new Date().valueOf());
    const data = {
      id: time,
      title: value.title,
      content: value.content,
      createTime: value.createTime,
      updateTime: '',
      stepId: time,
      stepnum: 0,
      likeId: time,
      likenum: 0,
      commentId: time,
    };
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
