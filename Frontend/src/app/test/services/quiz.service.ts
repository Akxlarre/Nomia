//app/test/services/quiz.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../components/question-viewer.component';
import { QuizProfile } from '../../shared/models/quiz-profile.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private http: HttpClient) {}

  questions: Question[] = [
    {
      id: 'energia_simbolica',
      title: '¿Qué tipo de energía sientes que rodea a este nuevo ser?',
      type: 'multi',
      maxSelection: 2,
      options: [
        { id: 'luz', label: 'Luz', icon: '🌟' },
        { id: 'magia', label: 'Magia', icon: '✨' },
        { id: 'dulzura', label: 'Dulzura', icon: '🍯' },
        { id: 'proteccion', label: 'Protección', icon: '🛡️' },
        { id: 'sabiduria', label: 'Sabiduría', icon: '🧠' },
        { id: 'fuego', label: 'Fuego', icon: '🔥' },
        { id: 'rebeldia', label: 'Rebeldía', icon: '⚡' },
        { id: 'calma', label: 'Calma', icon: '🕊️' },
        { id: 'transformacion', label: 'Transformación', icon: '🌀' },
        { id: 'espiritualidad', label: 'Espiritualidad', icon: '🌙' },
      ],
    },
    {
      id: 'personalidad_proyectada',
      title: '¿Qué cualidades deseas que este ser refleje?',
      type: 'multi',
      maxSelection: 3,
      options: [
        { id: 'creativo', label: 'Creativo', icon: '🎨' },
        { id: 'protector', label: 'Protector', icon: '🐻' },
        { id: 'alegre', label: 'Alegre', icon: '😊' },
        { id: 'sabio', label: 'Sabio', icon: '🦉' },
        { id: 'libre', label: 'Libre', icon: '🌬️' },
        { id: 'valiente', label: 'Valiente', icon: '🗡️' },
        { id: 'misterioso', label: 'Misterioso', icon: '🌑' },
        { id: 'compasivo', label: 'Compasivo', icon: '💞' },
        { id: 'profundo', label: 'Profundo', icon: '🌊' },
      ],
    },
    {
      id: 'estilo_sonoro',
      title: '¿Cómo te gustaría que suene su nombre?',
      type: 'style',
    },
    {
      id: 'origen_simbolico',
      title: '¿Qué raíces culturales te inspiran?',
      type: 'multi',
      maxSelection: 2,
      options: [
        { id: 'andino', label: 'Andino', icon: '🏔️' },
        { id: 'celta', label: 'Celta', icon: '🌀' },
        { id: 'hebreo', label: 'Hebreo', icon: '✡️' },
        { id: 'arabe', label: 'Árabe', icon: '🕌' },
        { id: 'indigena', label: 'Indígena', icon: '🪶' },
        { id: 'latino', label: 'Latino clásico', icon: '🏛️' },
        { id: 'vasco', label: 'Vasco', icon: '🗻' },
        { id: 'africano', label: 'Africano simbólico', icon: '🌍' },
        { id: 'mapuche', label: 'Mapuche', icon: '🐾' },
        { id: 'griego', label: 'Griego', icon: '🏺' },
      ],
    },
    {
      id: 'valores_deseados',
      title: '¿Qué valores deseas transmitir a través del nombre?',
      type: 'multi',
      maxSelection: 3,
      options: [
        { id: 'libertad', label: 'Libertad', icon: '🕊️' },
        { id: 'conexion', label: 'Conexión', icon: '🔗' },
        { id: 'resiliencia', label: 'Resiliencia', icon: '🌱' },
        { id: 'renacimiento', label: 'Renacimiento', icon: '🔄' },
        { id: 'sabiduria_valor', label: 'Sabiduría', icon: '📚' },
        { id: 'sensibilidad', label: 'Sensibilidad', icon: '💧' },
        { id: 'belleza', label: 'Belleza', icon: '🌸' },
        { id: 'autenticidad', label: 'Autenticidad', icon: '🔥' },
      ],
    },
    {
      id: 'genero_preferido',
      title: '¿Tienes alguna preferencia de género?',
      type: 'single',
      options: [
        { id: 'femenino', label: 'Femenino', icon: '🚺' },
        { id: 'masculino', label: 'Masculino', icon: '🚹' },
        { id: 'neutro', label: 'Neutro', icon: '⚧️' },
        { id: 'sin_preferencia', label: 'Sin preferencia', icon: '❔' },
      ],
    },
    {
      id: 'inspiracion',
      title: '¿Qué tipo de historia o energía quieres que inspire el nombre?',
      type: 'combined',
      options: [
        { id: 'mistico_antiguo', label: 'Antigua y mística', icon: '🧙‍♀️', tonePoetico: 'mistico', epocaInspiradora: 'antigua' },
        { id: 'espiritual_naturaleza', label: 'Alma y naturaleza', icon: '🌿', tonePoetico: 'espiritual', epocaInspiradora: 'naturaleza' },
        { id: 'moderno_futuro', label: 'Futura y visionaria', icon: '🔮', tonePoetico: 'moderno', epocaInspiradora: 'futuro' },
        { id: 'atemporal_simple', label: 'Simple y eterno', icon: '⏳', tonePoetico: 'atemporal', epocaInspiradora: 'sin_tiempo_definido' },
      ],
    },
  ];

  submitAnswers(answers: Record<string, any>): Observable<any> {
    const profile: QuizProfile = {
      energia_simbolica: answers['energia_simbolica'] || [],
      personalidad_proyectada: answers['personalidad_proyectada'] || [],
      estilo_sonoro: answers['estilo_sonoro'] || {
        longitud: 'corto',
        vocal_fuerte: false,
        terminacion: 'a',
        silabas: 1,
      },
      origen_simbolico: answers['origen_simbolico'] || [],
      valores_deseados: answers['valores_deseados'] || [],
      genero_preferido: answers['genero_preferido'] || 'sin_preferencia',
      tono_poetico: '',
      epoca_inspiradora: '',
    };

    const insp = answers['inspiracion'];
    const opt = this.questions
      .find(q => q.id === 'inspiracion')?.options
      ?.find(o => o.id === insp);
    if (opt) {
      profile.tono_poetico = opt.tonePoetico || '';
      profile.epoca_inspiradora = opt.epocaInspiradora || '';
    }

    return this.http.post('/api/test', { quiz_profile: profile });
  }
}
