import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { SlidesService } from './slides.service';

@Controller('api/hero-slides')
export class SlidesController {
  constructor(private readonly slidesService: SlidesService) {}

  @Get()
  getSlides(@Req() req: Request) {
    return this.slidesService.getSlides(req);
  }
}
