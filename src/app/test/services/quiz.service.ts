import { Injectable } from '@angular/core';
import { Question } from '../components/question-viewer.component';

@Injectable({ providedIn: 'root' })
export class QuizService {
  questions: Question[] = [
    {
      id: 'elemento',
      title: '¿Qué elemento resuena más contigo?',
      options: [
        {
          id: 'fuego', label: 'Fuego', icon: '🔥',
          value: 1
        },
        {
          id: 'agua', label: 'Agua', icon: '💧',
          value: 2
        },
        {
          id: 'aire', label: 'Aire', icon: '🌬️',
          value: 3
        },
        {
          id: 'tierra', label: 'Tierra', icon: '🌱',
          value: 4
        },
      ],
    },
    {
      id: 'momento_dia',
      title: 'Elige el momento del día que prefieres',
      options: [
        {
          id: 'amanecer', label: 'Amanecer', icon: '🌅',
          value: 1
        },
        {
          id: 'mediodia', label: 'Mediodía', icon: '🌞',
          value: 2
        },
        {
          id: 'atardecer', label: 'Atardecer', icon: '🌇',
          value: 3
        },
        {
          id: 'noche', label: 'Noche', icon: '🌙',
          value: 4
        },
      ],
    },
    {
      id: 'flor',
      title: '¿Qué flor te inspira más?',
      options: [
        {
          id: 'rosa', label: 'Rosa', icon: '🌹',
          value: 1
        },
        {
          id: 'lirio', label: 'Lirio', icon: '🌺',
          value: 2
        },
        {
          id: 'jazmin', label: 'Jazmín', icon: '🌼',
          value: 3
        },
        {
          id: 'loto', label: 'Loto', icon: '🪷',
          value: 4
        },
      ],
    },
    {
      id: 'sonido',
      title: 'Escoge un sonido que armonice tu espíritu',
      options: [
        {
          id: 'olas', label: 'Olas del mar', icon: '🌊',
          value: 1
        },
        {
          id: 'lluvia', label: 'Lluvia suave', icon: '🌧️',
          value: 2
        },
        {
          id: 'viento', label: 'Viento entre árboles', icon: '🍃',
          value: 3
        },
        {
          id: 'campanas', label: 'Campanas tibetanas', icon: '🔔',
          value: 4
        },
      ],
    },
    {
      id: 'cristal',
      title: '¿Qué cristal llevarías contigo?',
      options: [
        {
          id: 'cuarzo', label: 'Cuarzo', icon: '💎',
          value: 1
        },
        {
          id: 'amatista', label: 'Amatista', icon: '🔮',
          value: 2
        },
        {
          id: 'obsidiana', label: 'Obsidiana', icon: '⚫',
          value: 3
        },
        {
          id: 'jade', label: 'Jade', icon: '🟢',
          value: 4
        },
      ],
    },
    {
      id: 'animal_guia',
      title: 'Elige un animal guía',
      options: [
        {
          id: 'lobo', label: 'Lobo', icon: '🐺',
          value: 1
        },
        {
          id: 'gato', label: 'Gato', icon: '🐱',
          value: 2
        },
        {
          id: 'mariposa', label: 'Mariposa', icon: '🦋',
          value: 3
        },
        {
          id: 'lechuza', label: 'Lechuza', icon: '🦉',
          value: 4
        },
      ],
    },
    {
      id: 'aroma',
      title: '¿Qué aroma calma tu mente?',
      options: [
        {
          id: 'lavanda', label: 'Lavanda', icon: '💜',
          value: 1
        },
        {
          id: 'sandalwood', label: 'Sándalo', icon: '🪵',
          value: 2
        },
        {
          id: 'jazmin_aroma', label: 'Jazmín', icon: '🌸',
          value: 3
        },
        {
          id: 'cedro', label: 'Cedro', icon: '🌲',
          value: 4
        },
      ],
    },
    {
      id: 'camino',
      title: 'Elige un camino para recorrer',
      options: [
        {
          id: 'bosque', label: 'Bosque', icon: '🌳',
          value: 1
        },
        {
          id: 'montana', label: 'Montaña', icon: '⛰️',
          value: 2
        },
        {
          id: 'playa', label: 'Playa', icon: '🏖️',
          value: 3
        },
        {
          id: 'desierto', label: 'Desierto', icon: '🏜️',
          value: 4
        },
      ],
    },
    {
      id: 'estacion',
      title: '¿Cuál estación del año prefieres?',
      options: [
        {
          id: 'primavera', label: 'Primavera', icon: '🌷',
          value: 1
        },
        {
          id: 'verano', label: 'Verano', icon: '☀️',
          value: 2
        },
        {
          id: 'otono', label: 'Otoño', icon: '🍂',
          value: 3
        },
        {
          id: 'invierno', label: 'Invierno', icon: '❄️',
          value: 4
        },
      ],
    },
    {
      id: 'color',
      title: 'Escoge el color que más conecte contigo',
      options: [
        {
          id: 'rojo', label: 'Rojo', icon: '❤️',
          value: 1
        },
        {
          id: 'azul', label: 'Azul', icon: '💙',
          value: 2
        },
        {
          id: 'verde', label: 'Verde', icon: '💚',
          value: 3
        },
        {
          id: 'violeta', label: 'Violeta', icon: '💜',
          value: 4
        },
      ],
    },
  ];

  submitAnswers(answers: Record<string, string>) {
    // Se podría enviar al backend. Aquí solo registramos en consola.
    console.log('Enviando quizProfile', answers);
  }
}
