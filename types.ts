
export enum AQICategory {
  GOOD = 'Good',
  MODERATE = 'Moderate',
  UNHEALTHY_SENSITIVE = 'Unhealthy for Sensitive Groups',
  UNHEALTHY = 'Unhealthy',
  VERY_UNHEALTHY = 'Very Unhealthy',
  HAZARDOUS = 'Hazardous'
}

export interface AQIData {
  location: string;
  value: number;
  category: AQICategory;
  pollutants: {
    pm25: number;
    pm10: number;
    no2: number;
  };
  timestamp: string;
  isInferred: boolean;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  sources?: string[];
}
