import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Response } from 'express';
import { spawn } from 'child_process';

@Injectable()
export class TestsService {
  runTests(res: Response) {
    const process = spawn('python', ['./python.py']);

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    process.stdout.on('data', data => {
      res.write(`data: ${data.toString()}\n\n`);
    });
  }
}
