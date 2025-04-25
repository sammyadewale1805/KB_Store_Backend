import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class SlidesService {
  getSlides(req: Request) {
    const host = `${req.protocol}://${req.get('host')}`;

    return {
      casual: [
        {
          image: `${host}/uploads/buy_now.jpg`,
          price: '$82.61',
          original: '$153.92',
        },
        {
          image: `${host}/uploads/casual2.jpg`,
          price: '$70.00',
          original: '$130.00',
        },
      ],
      corporate: [
        {
          image: `${host}/uploads/coporate2.jpg`,
          price: '$129.00',
          original: '$220.00',
        },
        {
          image: `${host}/uploads/coporate3.jpg`,
          price: '$115.99',
          original: '$210.00',
        },
      ],
    };
  }
}
