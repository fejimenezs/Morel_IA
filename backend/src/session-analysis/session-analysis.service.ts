import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionAnalysis } from './session-analysis.entity';
import { Session } from '../sessions/session.entity';

@Injectable()
export class SessionAnalysisService {
  constructor(
    @InjectRepository(SessionAnalysis)
    private readonly analysisRepo: Repository<SessionAnalysis>,

    @InjectRepository(Session)
    private readonly sessionRepo: Repository<Session>,
  ) {}

  async generate(sessionId: string) {
    const session = await this.sessionRepo.findOne({
      where: { id: sessionId },
    });

    if (!session) {
      throw new NotFoundException('Sesión no encontrada');
    }

    const existing = await this.analysisRepo.findOne({
      where: { session: { id: sessionId } },
      relations: { session: true },
    });

    if (existing) return existing;

    const analysis = this.analysisRepo.create({
      session, // ✅ relación correcta
      transcription: 'Transcripción simulada de la sesión de terapia.',
      summary: 'El paciente muestra avances positivos en el manejo emocional.',
      sentimentScore: 0.72, // ✅ propiedad del entity (camelCase)
      emotions: ['ansiedad leve', 'esperanza', 'calma'],
      topics: ['familia', 'estrés', 'autoestima'],
      risks: { level: 'LOW', note: 'Sin señales de riesgo inmediato.' },
    });

    return this.analysisRepo.save(analysis);
  }

  async getBySession(sessionId: string) {
    return this.analysisRepo.findOne({
      where: { session: { id: sessionId } },
      relations: { session: true },
    });
  }
}
