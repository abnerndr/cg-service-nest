/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Congregation } from '../models/cg.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { ICongregation } from '../models/cg.interface';

@Injectable()
export class CgService {
  constructor(
    @InjectRepository(Congregation)
    private readonly CongregationRepository: Repository<Congregation>,
  ) {}

  //   quando criar  ainterface da entity subistituir o any por ela
  store(body: ICongregation): Observable<ICongregation> {
    return from(this.CongregationRepository.save(body));
  }

  index(): Observable<any> {
    return from(this.CongregationRepository.find());
  }

  show(id: any): Observable<any> {
    return from(this.CongregationRepository.findBy(id));
  }

  update(id: string, body: any): Observable<any> {
    return from(this.CongregationRepository.update(id, body));
  }
}
