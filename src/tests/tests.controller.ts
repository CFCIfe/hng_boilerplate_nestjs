import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { skipAuth } from '../helpers/skipAuth';
import { TestsService } from './tests.service';

@Controller('/run-tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}
  @skipAuth()
  @Get()
  runTests(@Res() res: Response) {
    console.log(res);
    return this.testsService.runTests(res);
  }
}
