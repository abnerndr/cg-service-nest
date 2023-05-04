/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CgService } from '../services/cg.service';
import { Observable } from 'rxjs';
import { ICongregation } from '../models/cg.interface';

@Controller('congregation')
export class CgController {
  constructor(private cgService: CgService) {}

  @Post('create')
  create(@Body() body: ICongregation): Observable<ICongregation> {
    const { name, president_name, code, address, photo_url } = body;
    const { zip_code, street, street_number, neighborhood, state, city } =
      address;
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let codeNumber: number = 9;
    let codeGenerated = '';
    for (let i = 0; i < codeNumber; i++) {
      const code = Math.floor(Math.random() * 10);
      codeGenerated += code;
    }

    const congregation = this.cgService.store({
      name,
      president_name,
      code: `cg-${codeGenerated}`,
      address: {
        zip_code,
        street,
        street_number,
        neighborhood,
        state,
        city,
      },
      photo_url,
    });
    return congregation;
  }

  @Get('list')
  find(): Observable<ICongregation[]> {
    const congregations = this.cgService.index();
    return congregations;
  }

  @Get(':id')
  fingById(@Param(':id') id: string): Observable<ICongregation> {
    const congregation = this.cgService.show(id);
    return congregation;
  }

  @Put(':id')
  update(
    @Param(':id') id: string,
    @Body() body: ICongregation,
  ): Observable<ICongregation> {
    const congregation = this.cgService.update(id, body);
    return congregation;
  }
}
