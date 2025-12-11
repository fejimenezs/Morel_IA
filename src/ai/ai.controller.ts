import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('analyze-session')
  analyze(@Body() body: { text: string }) {
    return this.aiService.analyzeSession(body.text);
  }
}
