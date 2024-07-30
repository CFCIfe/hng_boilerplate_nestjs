import { Controller, Get, Res } from '@nestjs/common';
import { TestsService } from './tests.service';
import { Response } from 'express';

@Controller('run-tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}
  @Get()
  runTests(@Res() res: Response) {
    return this.testsService.runTests(res);
  }
}
