import { Injectable } from '@angular/core';
import { Question } from '../components/question-viewer.component';

@Injectable({ providedIn: 'root' })
export class QuizService {
  questions: Question[] = [
    {
      id: 'q1',
      title: '¿Qué elemento resuena más contigo?',
      options: [
        { id: 'fuego', label: 'Fuego', value: 1, icon: '🔥' },
        { id: 'agua', label: 'Agua', value: 2, icon: '💧' },
        { id: 'aire', label: 'Aire', value: 3, icon: '🌬️' },
        { id: 'tierra', label: 'Tierra', value: 4, icon: '🌱' },
      ],
    },
    {
      id: 'q2',
      title: 'Elige el momento del día que prefieres',
      options: [
        { id: 'amanecer', label: 'Amanecer', value: 1, icon: '🌅' },
        { id: 'mediodia', label: 'Mediodía', value: 2, icon: '🌞' },
        { id: 'atardecer', label: 'Atardecer', value: 3, icon: '🌇' },
        { id: 'noche', label: 'Noche', value: 4, icon: '🌙' },
      ],
    },
    {
      id: 'q3',
      title: '¿Qué flor te inspira más?',
      options: [
        { id: 'rosa', label: 'Rosa', value: 1, icon: '🌹' },
        { id: 'lirio', label: 'Lirio', value: 2, icon: '🌺' },
        { id: 'jazmin', label: 'Jazmín', value: 3, icon: '🌼' },
        { id: 'lotus', label: 'Loto', value: 4, icon: '🪷' },
      ],
    },
    {
      id: 'q4',
      title: 'Escoge un sonido que armonice tu espíritu',
      options: [
        { id: 'olas', label: 'Olas del mar', value: 1, icon: '🌊' },
        { id: 'lluvia', label: 'Lluvia suave', value: 2, icon: '🌧️' },
        { id: 'viento', label: 'Viento entre árboles', value: 3, icon: '🍃' },
        { id: 'campanas', label: 'Campanas tibetanas', value: 4, icon: '🔔' },
      ],
    },
    {
      id: 'q5',
      title: '¿Qué cristal llevarías contigo?',
      options: [
        { id: 'cuarzo', label: 'Cuarzo', value: 1, icon: '💎' },
        { id: 'amatista', label: 'Amatista', value: 2, icon: '🔮' },
        { id: 'obsidiana', label: 'Obsidiana', value: 3, icon: '⚫' },
        { id: 'jade', label: 'Jade', value: 4, icon: '🟢' },
      ],
    },
    {
      id: 'q6',
      title: 'Elige un animal guía',
      options: [
        { id: 'lobo', label: 'Lobo', value: 1, icon: '🐺' },
        { id: 'gato', label: 'Gato', value: 2, icon: '🐱' },
        { id: 'mariposa', label: 'Mariposa', value: 3, icon: '🦋' },
        { id: 'lechuza', label: 'Lechuza', value: 4, icon: '🦉' },
      ],
    },
    {
      id: 'q7',
      title: '¿Qué aroma calma tu mente?',
      options: [
        { id: 'lavanda', label: 'Lavanda', value: 1, icon: '💜' },
        { id: 'sandalwood', label: 'Sándalo', value: 2, icon: '🪵' },
        { id: 'jazmin_aroma', label: 'Jazmín', value: 3, icon: '🌸' },
        { id: 'cedro', label: 'Cedro', value: 4, icon: '🌲' },
      ],
    },
    {
      id: 'q8',
      title: 'Elige un camino para recorrer',
      options: [
        { id: 'bosque', label: 'Bosque', value: 1, icon: '🌳' },
        { id: 'montana', label: 'Montaña', value: 2, icon: '⛰️' },
        { id: 'playa', label: 'Playa', value: 3, icon: '🏖️' },
        { id: 'desierto', label: 'Desierto', value: 4, icon: '🏜️' },
      ],
    },
    {
      id: 'q9',
      title: '¿Cuál estación del año prefieres?',
      options: [
        { id: 'primavera', label: 'Primavera', value: 1, icon: '🌷' },
        { id: 'verano', label: 'Verano', value: 2, icon: '☀️' },
        { id: 'otono', label: 'Otoño', value: 3, icon: '🍂' },
        { id: 'invierno', label: 'Invierno', value: 4, icon: '❄️' },
      ],
    },
    {
      id: 'q10',
      title: 'Escoge el color que más conecte contigo',
      options: [
        { id: 'rojo', label: 'Rojo', value: 1, icon: '❤️' },
        { id: 'azul', label: 'Azul', value: 2, icon: '💙' },
        { id: 'verde', label: 'Verde', value: 3, icon: '💚' },
        { id: 'violeta', label: 'Violeta', value: 4, icon: '💜' },
      ],
    },
  ];

  submitAnswers(answers: Record<string, string>) {
    // Se podría enviar al backend. Aquí solo registramos en consola.
    console.log('Enviando quizProfile', answers);
  }
}
