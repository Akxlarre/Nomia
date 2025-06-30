export interface QuizProfile {
  energia_simbolica: string[];
  personalidad_proyectada: string[];
  estilo_sonoro: {
    longitud: 'corto' | 'largo';
    vocal_fuerte: boolean;
    terminacion: 'a' | 'o' | 'otra';
    silabas: 1 | 2 | 3;
  };
  origen_simbolico: string[];
  valores_deseados: string[];
  genero_preferido: 'femenino' | 'masculino' | 'neutro' | 'sin_preferencia';
  tono_poetico: string;
  epoca_inspiradora: string;
}
