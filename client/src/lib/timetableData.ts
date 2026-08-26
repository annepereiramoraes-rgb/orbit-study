/**
 * Dados estruturados da grade CEP — Manhã/12, 2º semestre, vigência em 24/08/2026.
 * Fonte: horario_12_manha_turmas_24_08_2026.pdf fornecido pela usuária.
 */
export type TimetableEntry = { time: string; subject: string };
export type ClassSchedule = { name: string; schedule: Record<string, TimetableEntry[]> };

export const schoolDays = ["Segunda","Terça","Quarta","Quinta","Sexta"] as const;
export const classSchedules: ClassSchedule[] = [
  {
    "name": "2A",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "L.ING"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "10:00",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "10:50",
          "subject": "SOC"
        },
        {
          "time": "11:40",
          "subject": "HIS"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "SOC"
        },
        {
          "time": "08:00",
          "subject": "L.ING"
        },
        {
          "time": "08:50",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "10:00",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "HIS"
        },
        {
          "time": "10:50",
          "subject": "ART"
        },
        {
          "time": "11:40",
          "subject": "ART"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "08:50",
          "subject": "FIL"
        },
        {
          "time": "10:00",
          "subject": "FIL"
        },
        {
          "time": "10:50",
          "subject": "ED FIN"
        },
        {
          "time": "11:40",
          "subject": "ED FIN"
        }
      ]
    }
  },
  {
    "name": "2B",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "ED FIN"
        },
        {
          "time": "08:00",
          "subject": "ED FIN"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "SOC"
        },
        {
          "time": "10:50",
          "subject": "HIS"
        },
        {
          "time": "11:40",
          "subject": "L.ING"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "08:00",
          "subject": "SOC"
        },
        {
          "time": "08:50",
          "subject": "L.ING"
        },
        {
          "time": "10:00",
          "subject": "EDF"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "SOCIO: GOV CIDAD E SOC"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "HIS"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "ART"
        },
        {
          "time": "11:40",
          "subject": "ART"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "FIL"
        },
        {
          "time": "08:00",
          "subject": "FIL"
        },
        {
          "time": "08:50",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "10:00",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "10:50",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ]
    }
  },
  {
    "name": "2C",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "SOC"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "L.ING"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "10:00",
          "subject": "L.ING"
        },
        {
          "time": "10:50",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "FIL"
        },
        {
          "time": "08:00",
          "subject": "FIL"
        },
        {
          "time": "08:50",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "10:00",
          "subject": "HIS"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "ART"
        },
        {
          "time": "08:00",
          "subject": "ART"
        },
        {
          "time": "08:50",
          "subject": "ED FIN"
        },
        {
          "time": "10:00",
          "subject": "ED FIN"
        },
        {
          "time": "10:50",
          "subject": "HIS"
        },
        {
          "time": "11:40",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "SOC"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ]
    }
  },
  {
    "name": "2D",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "HIS"
        },
        {
          "time": "08:00",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "08:50",
          "subject": "L.ING"
        },
        {
          "time": "10:00",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "10:50",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "11:40",
          "subject": "SOCIO: GOV CIDAD E SOC"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "L.ING"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "FIL"
        },
        {
          "time": "10:50",
          "subject": "FIL"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "ART"
        },
        {
          "time": "10:00",
          "subject": "ART"
        },
        {
          "time": "10:50",
          "subject": "ED FIN"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "SOC"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "HIS"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "ED FIN"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "SOC"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        }
      ]
    }
  },
  {
    "name": "2E",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "L.ING"
        },
        {
          "time": "08:00",
          "subject": "L.ING"
        },
        {
          "time": "08:50",
          "subject": "ART"
        },
        {
          "time": "10:00",
          "subject": "ART"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "FIS"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "ED FIN"
        },
        {
          "time": "08:00",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "ED FIN"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "08:50",
          "subject": "HIS"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "FIL"
        },
        {
          "time": "11:40",
          "subject": "FIL"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "HIS"
        },
        {
          "time": "08:00",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "08:50",
          "subject": "SOC"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "SOC"
        },
        {
          "time": "11:40",
          "subject": "LIT E PROD DE TEXTO"
        }
      ]
    }
  },
  {
    "name": "2F",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "ART"
        },
        {
          "time": "08:00",
          "subject": "ART"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "HIS"
        },
        {
          "time": "08:50",
          "subject": "FIL"
        },
        {
          "time": "10:00",
          "subject": "FIL"
        },
        {
          "time": "10:50",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "11:40",
          "subject": "LIT E PROD DE TEXTO"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "ED FIN"
        },
        {
          "time": "08:00",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "08:50",
          "subject": "L.ING"
        },
        {
          "time": "10:00",
          "subject": "SOC"
        },
        {
          "time": "10:50",
          "subject": "HIS"
        },
        {
          "time": "11:40",
          "subject": "ED FIN"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "L.ING"
        },
        {
          "time": "08:00",
          "subject": "SOC"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "10:50",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "11:40",
          "subject": "SOCIO: GOV CIDAD E SOC"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "FIS"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ]
    }
  },
  {
    "name": "2G",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "L.ING"
        },
        {
          "time": "08:50",
          "subject": "ED FIN"
        },
        {
          "time": "10:00",
          "subject": "ED FIN"
        },
        {
          "time": "10:50",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "11:40",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "L.ING"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "HIS"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "HIS"
        },
        {
          "time": "08:00",
          "subject": "SOC"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "ART"
        },
        {
          "time": "08:00",
          "subject": "ART"
        },
        {
          "time": "08:50",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "10:00",
          "subject": "SOC"
        },
        {
          "time": "10:50",
          "subject": "FIS"
        },
        {
          "time": "11:40",
          "subject": "LIT E PROD DE TEXTO"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "FIL"
        },
        {
          "time": "08:00",
          "subject": "FIL"
        },
        {
          "time": "08:50",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ]
    }
  },
  {
    "name": "2H",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "HIS"
        },
        {
          "time": "10:50",
          "subject": "FIS"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "SOC"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "HIS"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "L.ING"
        },
        {
          "time": "11:40",
          "subject": "ED FIN"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "FIL"
        },
        {
          "time": "08:00",
          "subject": "FIL"
        },
        {
          "time": "08:50",
          "subject": "SOC"
        },
        {
          "time": "10:00",
          "subject": "EDF"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "SOCIO: GOV CIDAD E SOC"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "08:00",
          "subject": "L.ING"
        },
        {
          "time": "08:50",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "10:00",
          "subject": "ED FIN"
        },
        {
          "time": "10:50",
          "subject": "ART"
        },
        {
          "time": "11:40",
          "subject": "ART"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ]
    }
  },
  {
    "name": "2I",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        },
        {
          "time": "08:00",
          "subject": "ED FIN"
        },
        {
          "time": "08:50",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "10:00",
          "subject": "FIL"
        },
        {
          "time": "10:50",
          "subject": "FIL"
        },
        {
          "time": "11:40",
          "subject": "SOC"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "SOCIO: GOV CIDAD E SOC"
        },
        {
          "time": "10:00",
          "subject": "EDF"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "FIL: ANAL DE TEXTOS FILO"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "08:00",
          "subject": "LIT E PROD DE TEXTO"
        },
        {
          "time": "08:50",
          "subject": "ART"
        },
        {
          "time": "10:00",
          "subject": "ART"
        },
        {
          "time": "10:50",
          "subject": "SOC"
        },
        {
          "time": "11:40",
          "subject": "L.ING"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "ED FIN"
        },
        {
          "time": "08:00",
          "subject": "HIS"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "HIS"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "FIS"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "L.ING"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "FIS"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ]
    }
  },
  {
    "name": "2J",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "ED FIN"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "FISICA E TECNOCIENCIA"
        },
        {
          "time": "10:00",
          "subject": "SOC"
        },
        {
          "time": "10:50",
          "subject": "FIS"
        },
        {
          "time": "11:40",
          "subject": "ED FIN"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "ART"
        },
        {
          "time": "08:00",
          "subject": "ART"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "SOC"
        },
        {
          "time": "08:00",
          "subject": "L.ING"
        },
        {
          "time": "08:50",
          "subject": "FIL"
        },
        {
          "time": "10:00",
          "subject": "FIL"
        },
        {
          "time": "10:50",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "11:40",
          "subject": "PROGRAMAÇÃO"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "ROBOTICA"
        },
        {
          "time": "10:00",
          "subject": "ROBOTICA"
        },
        {
          "time": "10:50",
          "subject": "HIS"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "L.ING"
        },
        {
          "time": "10:50",
          "subject": "HIS"
        },
        {
          "time": "11:40",
          "subject": "FISICA E TECNOCIENCIA"
        }
      ]
    }
  },
  {
    "name": "2K",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "FISICA E TECNOCIENCIA"
        },
        {
          "time": "10:50",
          "subject": "SOC"
        },
        {
          "time": "11:40",
          "subject": "FISICA E TECNOCIENCIA"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "ART"
        },
        {
          "time": "10:00",
          "subject": "ART"
        },
        {
          "time": "10:50",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "11:40",
          "subject": "PROGRAMAÇÃO"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "HIS"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "L.ING"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "ROBOTICA"
        },
        {
          "time": "11:40",
          "subject": "ROBOTICA"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "ED FIN"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "ED FIN"
        },
        {
          "time": "11:40",
          "subject": "L.ING"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "HIS"
        },
        {
          "time": "08:50",
          "subject": "SOC"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "FIL"
        },
        {
          "time": "11:40",
          "subject": "FIL"
        }
      ]
    }
  },
  {
    "name": "2L",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "FISICA E TECNOCIENCIA"
        },
        {
          "time": "11:40",
          "subject": "FIS"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "SOC"
        },
        {
          "time": "10:00",
          "subject": "ED FIN"
        },
        {
          "time": "10:50",
          "subject": "FIL"
        },
        {
          "time": "11:40",
          "subject": "FIL"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "L.ING"
        },
        {
          "time": "08:00",
          "subject": "ROBOTICA"
        },
        {
          "time": "08:50",
          "subject": "ROBOTICA"
        },
        {
          "time": "10:00",
          "subject": "ED FIN"
        },
        {
          "time": "10:50",
          "subject": "ART"
        },
        {
          "time": "11:40",
          "subject": "ART"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "08:00",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "08:50",
          "subject": "L.ING"
        },
        {
          "time": "10:00",
          "subject": "FISICA E TECNOCIENCIA"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "SOC"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "HIS"
        },
        {
          "time": "10:00",
          "subject": "HIS"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ]
    }
  },
  {
    "name": "2M",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "ART"
        },
        {
          "time": "08:50",
          "subject": "ART"
        },
        {
          "time": "10:00",
          "subject": "HIS"
        },
        {
          "time": "10:50",
          "subject": "ROBOTICA"
        },
        {
          "time": "11:40",
          "subject": "ROBOTICA"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "08:00",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "SOC"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "FISICA E TECNOCIENCIA"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "ED FIN"
        },
        {
          "time": "08:00",
          "subject": "ED FIN"
        },
        {
          "time": "08:50",
          "subject": "HIS"
        },
        {
          "time": "10:00",
          "subject": "L.ING"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "L.ING"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "SOC"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "FISICA E TECNOCIE"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "FIL"
        },
        {
          "time": "10:00",
          "subject": "FIL"
        },
        {
          "time": "10:50",
          "subject": "NCIA EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ]
    }
  },
  {
    "name": "2N",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "ROBOTICA"
        },
        {
          "time": "08:00",
          "subject": "ROBOTICA"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "ART"
        },
        {
          "time": "10:50",
          "subject": "ART"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "FISICA E TECNOCIENCIA"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "ED FIN"
        },
        {
          "time": "10:00",
          "subject": "ED FIN"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "SOC"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "FISICA E TECNOCIENCIA"
        },
        {
          "time": "11:40",
          "subject": "FIS"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "HIS"
        },
        {
          "time": "08:00",
          "subject": "L.ING"
        },
        {
          "time": "08:50",
          "subject": "HIS"
        },
        {
          "time": "10:00",
          "subject": "SOC"
        },
        {
          "time": "10:50",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "11:40",
          "subject": "PROGRAMAÇÃO"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "FIL"
        },
        {
          "time": "08:00",
          "subject": "FIL"
        },
        {
          "time": "08:50",
          "subject": "L.ING"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ]
    }
  },
  {
    "name": "2O",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "10:00",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "SOC"
        },
        {
          "time": "08:00",
          "subject": "FISICA E TECNOCIENCIA"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "ED FIN"
        },
        {
          "time": "11:40",
          "subject": "ED FIN"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "FISICA E TECNOCIENCI"
        },
        {
          "time": "08:00",
          "subject": "HIS"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "HIS"
        },
        {
          "time": "10:50",
          "subject": "L.ING"
        },
        {
          "time": "11:40",
          "subject": "SOC"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "A ART"
        },
        {
          "time": "08:00",
          "subject": "ART"
        },
        {
          "time": "08:50",
          "subject": "FIL"
        },
        {
          "time": "10:00",
          "subject": "FIL"
        },
        {
          "time": "10:50",
          "subject": "ROBOTICA"
        },
        {
          "time": "11:40",
          "subject": "ROBOTICA"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "L.ING"
        },
        {
          "time": "11:40",
          "subject": "FIS"
        }
      ]
    }
  },
  {
    "name": "2P",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "HIS"
        },
        {
          "time": "08:00",
          "subject": "FISICA E TECNOCIENCIA"
        },
        {
          "time": "08:50",
          "subject": "ROBOTICA"
        },
        {
          "time": "10:00",
          "subject": "ROBOTICA"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "FISICA E TECNOCIENCIA"
        },
        {
          "time": "08:00",
          "subject": "FIL"
        },
        {
          "time": "08:50",
          "subject": "FIL"
        },
        {
          "time": "10:00",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "FIS"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "SOC"
        },
        {
          "time": "10:00",
          "subject": "PROGRAMAÇÃO"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "ED FIN"
        },
        {
          "time": "08:00",
          "subject": "ED FIN"
        },
        {
          "time": "08:50",
          "subject": "ART"
        },
        {
          "time": "10:00",
          "subject": "ART"
        },
        {
          "time": "10:50",
          "subject": "FIS"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "HIS"
        },
        {
          "time": "08:00",
          "subject": "SOC"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "EDF"
        },
        {
          "time": "10:50",
          "subject": "L.ING"
        },
        {
          "time": "11:40",
          "subject": "L.ING"
        }
      ]
    }
  },
  {
    "name": "3A",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "10:50",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "11:40",
          "subject": "HISTORIA I"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "P VIDA"
        },
        {
          "time": "08:50",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "10:00",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "10:50",
          "subject": "HISTORIA I"
        },
        {
          "time": "11:40",
          "subject": "REC APREND L P"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "10:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "11:40",
          "subject": "REC APREND MAT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "ARTE II"
        },
        {
          "time": "10:00",
          "subject": "ARTE II"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "REC APREND L P"
        }
      ]
    }
  },
  {
    "name": "3B",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "11:40",
          "subject": "GEOGRAFIA I"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "10:50",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "11:40",
          "subject": "HISTORIA I"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "08:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:50",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "11:40",
          "subject": "HISTORIA I"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "LINGUA ESPANHOLA"
        },
        {
          "time": "10:50",
          "subject": "LINGUA ESPANHOLA"
        },
        {
          "time": "11:40",
          "subject": "P VIDA"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "ARTE II"
        },
        {
          "time": "08:00",
          "subject": "ARTE II"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "I EDF"
        },
        {
          "time": "10:50",
          "subject": "I REC APREND L P"
        },
        {
          "time": "11:40",
          "subject": "REC APREND L P"
        }
      ]
    }
  },
  {
    "name": "3C",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "P VIDA"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "10:50",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "11:40",
          "subject": "LINGUA ESPANHOLA I"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "11:40",
          "subject": "HISTORIA I"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:00",
          "subject": "ARTE II"
        },
        {
          "time": "08:50",
          "subject": "ARTE II"
        },
        {
          "time": "10:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "HISTORIA I"
        },
        {
          "time": "08:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "LINGUA ESPANHOLA"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "10:50",
          "subject": "REC APREND L P"
        },
        {
          "time": "11:40",
          "subject": "I ED FINANCEIRA"
        }
      ]
    }
  },
  {
    "name": "3D",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "08:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "GEOGRAFIA I"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "ARTE II"
        },
        {
          "time": "08:50",
          "subject": "ARTE II"
        },
        {
          "time": "10:00",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "LINGUA ESPANHOLA I"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "11:40",
          "subject": "REC APREND L P"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "08:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "HISTORIA I"
        },
        {
          "time": "10:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "11:40",
          "subject": "REC APREND MAT"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "08:50",
          "subject": "REC APREND L P"
        },
        {
          "time": "10:00",
          "subject": "HISTORIA I"
        },
        {
          "time": "10:50",
          "subject": "P VIDA"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ]
    }
  },
  {
    "name": "3E",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "10:00",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "10:50",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "HISTORIA I"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:00",
          "subject": "P VIDA"
        },
        {
          "time": "08:50",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "10:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "LINGUA ESPANHOLA"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "ARTE II"
        },
        {
          "time": "08:50",
          "subject": "ARTE II"
        },
        {
          "time": "10:00",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "10:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "11:40",
          "subject": "I LP"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "HISTORIA I"
        },
        {
          "time": "10:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "10:50",
          "subject": "REC APREND L P"
        },
        {
          "time": "11:40",
          "subject": "SOCIOLOGIA I"
        }
      ]
    }
  },
  {
    "name": "3F",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "HISTORIA I"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "GEOGRAFIA I"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:00",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "08:50",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "P VIDA"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "10:00",
          "subject": "ARTE II"
        },
        {
          "time": "10:50",
          "subject": "ARTE II"
        },
        {
          "time": "11:40",
          "subject": "REC APREND MAT"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:50",
          "subject": "SOCIOLOGIA I"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "FIS"
        },
        {
          "time": "11:40",
          "subject": "HISTORIA I"
        }
      ]
    }
  },
  {
    "name": "3G",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "10:00",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "10:50",
          "subject": "LINGUA ESPANHOLA I"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "HISTORIA I"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "HISTORIA I"
        },
        {
          "time": "10:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "10:50",
          "subject": "REC APREND L P"
        },
        {
          "time": "11:40",
          "subject": "SOCIOLOGIA I"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LINGUA ESPANHOLA"
        },
        {
          "time": "10:50",
          "subject": "ARTE II"
        },
        {
          "time": "11:40",
          "subject": "ARTE II"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "GEOGRAFIA I"
        },
        {
          "time": "08:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:00",
          "subject": "I SOCIOLOGIA I"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "11:40",
          "subject": "P VIDA"
        }
      ]
    }
  },
  {
    "name": "3H",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "10:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:50",
          "subject": "MAT II"
        },
        {
          "time": "11:40",
          "subject": "MAT II"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "QUIMICA I"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "10:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "FISICA III"
        },
        {
          "time": "08:00",
          "subject": "FISICA III"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "EDF"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "REC APREND MAT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:50",
          "subject": "P VIDA"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "QUIMICA I"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "FISICA II"
        },
        {
          "time": "11:40",
          "subject": "FISICA II"
        }
      ]
    }
  },
  {
    "name": "3I",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:50",
          "subject": "MAT II"
        },
        {
          "time": "10:00",
          "subject": "MAT II"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "QUIMICA I"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "QUIMICA I"
        },
        {
          "time": "10:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "11:40",
          "subject": "BIOLOGIA II"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:50",
          "subject": "P VIDA"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "FISICA III"
        },
        {
          "time": "08:00",
          "subject": "FISICA III"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "FISICA II"
        },
        {
          "time": "11:40",
          "subject": "FISICA II"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "08:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "10:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ]
    }
  },
  {
    "name": "3J",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "MAT II"
        },
        {
          "time": "08:00",
          "subject": "MAT II"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "10:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "11:40",
          "subject": "ED FINANCEIRA"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "FISICA III"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "P VIDA"
        },
        {
          "time": "08:50",
          "subject": "FISICA II"
        },
        {
          "time": "10:00",
          "subject": "FISICA II"
        },
        {
          "time": "10:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "11:40",
          "subject": "FISICA III"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "QUIMICA I"
        },
        {
          "time": "10:50",
          "subject": "FIS"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:50",
          "subject": "QUIMICA I"
        },
        {
          "time": "11:40",
          "subject": "BIOLOGIA II"
        }
      ]
    }
  },
  {
    "name": "3K",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "P VIDA"
        },
        {
          "time": "08:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:50",
          "subject": "REC APREND L P"
        },
        {
          "time": "10:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:50",
          "subject": "QUIMICA I"
        },
        {
          "time": "11:40",
          "subject": "BIOLOGIA II"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "QUIMICA I"
        },
        {
          "time": "10:00",
          "subject": "MAT II"
        },
        {
          "time": "10:50",
          "subject": "MAT II"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "FISICA III"
        },
        {
          "time": "10:00",
          "subject": "FISICA III"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "ED FINANCEIRA"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "FISICA II"
        },
        {
          "time": "08:00",
          "subject": "FISICA II"
        },
        {
          "time": "08:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:00",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "10:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ]
    }
  },
  {
    "name": "3L",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "08:00",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "08:50",
          "subject": "QUIMICA I"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "MAT II"
        },
        {
          "time": "08:00",
          "subject": "MAT II"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "P VIDA"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "11:40",
          "subject": "REC APREND MAT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "FISICA III"
        },
        {
          "time": "11:40",
          "subject": "FISICA III"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "08:00",
          "subject": "QUIMICA I"
        },
        {
          "time": "08:50",
          "subject": "REC APREND L P"
        },
        {
          "time": "10:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "10:50",
          "subject": "FISICA II"
        },
        {
          "time": "11:40",
          "subject": "FISICA II"
        }
      ]
    }
  },
  {
    "name": "3M",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "QUIMICA I"
        },
        {
          "time": "10:00",
          "subject": "P VIDA"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "FISICA III"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "08:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "FISICA II"
        },
        {
          "time": "08:00",
          "subject": "FISICA II"
        },
        {
          "time": "08:50",
          "subject": "QUIMICA I"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "11:40",
          "subject": "BIOLOGIA II"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "REC APREND MAT"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "MAT II"
        },
        {
          "time": "08:00",
          "subject": "MAT II"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "FISICA III"
        },
        {
          "time": "10:50",
          "subject": "REC APREND L P"
        },
        {
          "time": "11:40",
          "subject": "REC APREND L P"
        }
      ]
    }
  },
  {
    "name": "3N",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "FISICA III"
        },
        {
          "time": "08:00",
          "subject": "FISICA III"
        },
        {
          "time": "08:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "11:40",
          "subject": "FISICA II"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:00",
          "subject": "QUIMICA I"
        },
        {
          "time": "08:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "10:00",
          "subject": "P VIDA"
        },
        {
          "time": "10:50",
          "subject": "MAT II"
        },
        {
          "time": "11:40",
          "subject": "MAT II"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "QUIMICA I"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "REC APREND L P"
        },
        {
          "time": "08:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:50",
          "subject": "FISICA II"
        },
        {
          "time": "10:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "REC APREND L P"
        }
      ]
    }
  },
  {
    "name": "3O",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "EDF"
        },
        {
          "time": "10:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "REC APREND L P"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "QUIMICA I"
        },
        {
          "time": "08:00",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "08:50",
          "subject": "P VIDA"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "FISICA II"
        },
        {
          "time": "11:40",
          "subject": "FISICA II"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "QUIMICA I"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "MAT II"
        },
        {
          "time": "10:50",
          "subject": "MAT II"
        },
        {
          "time": "11:40",
          "subject": "ED FINANCEIRA"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "10:50",
          "subject": "FISICA III"
        },
        {
          "time": "11:40",
          "subject": "FISICA III"
        }
      ]
    }
  },
  {
    "name": "3P",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "QUIMICA I"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "10:50",
          "subject": "P VIDA"
        },
        {
          "time": "11:40",
          "subject": "BIOLOGIA II"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "FISICA III"
        },
        {
          "time": "08:00",
          "subject": "FISICA II"
        },
        {
          "time": "08:50",
          "subject": "FISICA II"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "08:00",
          "subject": "FISICA III"
        },
        {
          "time": "08:50",
          "subject": "MAT II"
        },
        {
          "time": "10:00",
          "subject": "MAT II"
        },
        {
          "time": "10:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "11:40",
          "subject": "REC APREND MAT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "QUIMICA I"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "11:40",
          "subject": "REC APREND L P"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "REC APREND L P"
        },
        {
          "time": "11:40",
          "subject": "ED FINANCEIRA"
        }
      ]
    }
  },
  {
    "name": "3Q",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "MAT II"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "FISICA II"
        },
        {
          "time": "11:40",
          "subject": "FISICA II"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "P VIDA"
        },
        {
          "time": "08:00",
          "subject": "FISICA III"
        },
        {
          "time": "08:50",
          "subject": "FISICA III"
        },
        {
          "time": "10:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "10:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "REC APREND MAT"
        },
        {
          "time": "08:50",
          "subject": "REC APREND MAT"
        },
        {
          "time": "10:00",
          "subject": "REC APREND L P"
        },
        {
          "time": "10:50",
          "subject": "BIOLOGIA II"
        },
        {
          "time": "11:40",
          "subject": "BIOLOGIA II"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "REC APREND L P"
        },
        {
          "time": "10:00",
          "subject": "MAT II"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "QUIMICA I"
        },
        {
          "time": "11:40",
          "subject": "QUIMICA I"
        }
      ]
    }
  },
  {
    "name": "2DS",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "BANCO DE DADOS II"
        },
        {
          "time": "08:00",
          "subject": "FIL"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "HIS"
        },
        {
          "time": "10:50",
          "subject": "INOV TECNOL E EMPREEND"
        },
        {
          "time": "11:40",
          "subject": "INOV TECNOL E EMPREEND"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "BANCO DE DADOS II"
        },
        {
          "time": "08:00",
          "subject": "BANCO DE DADOS II"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "SOC"
        },
        {
          "time": "11:40",
          "subject": "L.ING"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "L.ING"
        },
        {
          "time": "08:00",
          "subject": "FIL"
        },
        {
          "time": "08:50",
          "subject": "ED FIN"
        },
        {
          "time": "10:00",
          "subject": "INOV TECNOL E EMPREEND"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "EDF"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "SOC"
        },
        {
          "time": "11:40",
          "subject": "HIS"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "PROG FRONT-END"
        },
        {
          "time": "08:00",
          "subject": "PROG FRONT-END"
        },
        {
          "time": "08:50",
          "subject": "PROG FRONT-END"
        },
        {
          "time": "10:00",
          "subject": "PROG BACK-END I"
        },
        {
          "time": "10:50",
          "subject": "PROG BACK-END I"
        },
        {
          "time": "11:40",
          "subject": "PROG BACK-END I"
        }
      ]
    }
  },
  {
    "name": "3DS",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "EDF"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "FIS"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "—"
        },
        {
          "time": "11:40",
          "subject": "ED FINANCEIRA"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:50",
          "subject": "-- MAT"
        },
        {
          "time": "10:00",
          "subject": "-- MAT"
        },
        {
          "time": "10:50",
          "subject": "-- LP"
        },
        {
          "time": "11:40",
          "subject": "-- LP"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "08:00",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ]
    }
  },
  {
    "name": "3DS(FTP)",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "PROG BACK-END"
        },
        {
          "time": "08:00",
          "subject": "PROG BACK-END"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "—"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "PROG MOBILE"
        },
        {
          "time": "08:00",
          "subject": "PROG MOBILE"
        },
        {
          "time": "08:50",
          "subject": "-- ANALISE E PROJ SISTEMAS"
        },
        {
          "time": "10:00",
          "subject": "-- CIÊNCIA DE DADOS"
        },
        {
          "time": "10:50",
          "subject": "-- CIÊNCIA DE DADOS"
        },
        {
          "time": "11:40",
          "subject": "-- -----------------------------------------"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "BANCO DE DADOS"
        },
        {
          "time": "08:00",
          "subject": "BANCO DE DADOS"
        },
        {
          "time": "08:50",
          "subject": "COMP. GRÁFICA"
        },
        {
          "time": "10:00",
          "subject": "COMP. GRÁFICA"
        },
        {
          "time": "10:50",
          "subject": "ANALISE E PROJ SISTEMAS"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "PROG DESENV SISTEMAS"
        },
        {
          "time": "08:00",
          "subject": "PROG DESENV SISTEMAS"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "—"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "PROG BACK-END"
        },
        {
          "time": "08:00",
          "subject": "PROG BACK-END"
        },
        {
          "time": "08:50",
          "subject": "-- PROG DESENV SISTEMAS"
        },
        {
          "time": "10:00",
          "subject": "-- PROG DESENV SISTEMAS"
        },
        {
          "time": "10:50",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- ----------------------------------------------"
        }
      ]
    }
  },
  {
    "name": "2PD",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "PT P"
        },
        {
          "time": "08:00",
          "subject": "PT P"
        },
        {
          "time": "08:50",
          "subject": "PT P"
        },
        {
          "time": "10:00",
          "subject": "FIL"
        },
        {
          "time": "10:50",
          "subject": "PF P"
        },
        {
          "time": "11:40",
          "subject": "PF P"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "HIS"
        },
        {
          "time": "08:00",
          "subject": "L.ING"
        },
        {
          "time": "08:50",
          "subject": "L.ING"
        },
        {
          "time": "10:00",
          "subject": "ED FIN"
        },
        {
          "time": "10:50",
          "subject": "PPR P"
        },
        {
          "time": "11:40",
          "subject": "PPR P"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "PO"
        },
        {
          "time": "08:00",
          "subject": "PO"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "FIL"
        },
        {
          "time": "10:50",
          "subject": "SOC"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "ANAT E ESCUL DENTAL T"
        },
        {
          "time": "08:00",
          "subject": "ANAT E ESCUL DENTAL T"
        },
        {
          "time": "08:50",
          "subject": "ANAT E ESCUL DENTAL T"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "HIS"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "SOC"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ]
    }
  },
  {
    "name": "3PD",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "FIS"
        },
        {
          "time": "10:00",
          "subject": "MAT"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "LP"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "—"
        },
        {
          "time": "11:40",
          "subject": "P VIDA"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "-- LP"
        },
        {
          "time": "08:00",
          "subject": "-- LP"
        },
        {
          "time": "08:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- --------------------------------------------"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "10:00",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "10:50",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- MAT"
        }
      ]
    }
  },
  {
    "name": "3PD(FTP)",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "—"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "-- PT P"
        },
        {
          "time": "08:00",
          "subject": "-- PT P"
        },
        {
          "time": "08:50",
          "subject": "-- PT P"
        },
        {
          "time": "10:00",
          "subject": "-- PT P"
        },
        {
          "time": "10:50",
          "subject": "-- PT P"
        },
        {
          "time": "11:40",
          "subject": "-- --------------------------------------------"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "PO"
        },
        {
          "time": "10:00",
          "subject": "PO"
        },
        {
          "time": "10:50",
          "subject": "PO"
        },
        {
          "time": "11:40",
          "subject": "-- PO"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:50",
          "subject": "PF P"
        },
        {
          "time": "10:00",
          "subject": "PF P"
        },
        {
          "time": "10:50",
          "subject": "PF P"
        },
        {
          "time": "11:40",
          "subject": "PF P"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "-- PPR P"
        },
        {
          "time": "08:00",
          "subject": "-- PPR P"
        },
        {
          "time": "08:50",
          "subject": "PPR P"
        },
        {
          "time": "10:00",
          "subject": "PPR P"
        },
        {
          "time": "10:50",
          "subject": "PPR P"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ]
    }
  },
  {
    "name": "3TE",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "—"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "-- LP"
        },
        {
          "time": "08:00",
          "subject": "-- MAT"
        },
        {
          "time": "08:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- --------------------------------------------"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- --------------------------------------------"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "-- MAT"
        },
        {
          "time": "08:00",
          "subject": "-- LP"
        },
        {
          "time": "08:50",
          "subject": "-- MAT"
        },
        {
          "time": "10:00",
          "subject": "-- LP"
        },
        {
          "time": "10:50",
          "subject": "-- MAT"
        },
        {
          "time": "11:40",
          "subject": "-- FIS"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ]
    }
  },
  {
    "name": "3TE(FTP)",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "MC"
        },
        {
          "time": "08:00",
          "subject": "MC"
        },
        {
          "time": "08:50",
          "subject": "STCC"
        },
        {
          "time": "10:00",
          "subject": "TC"
        },
        {
          "time": "10:50",
          "subject": "TC"
        },
        {
          "time": "11:40",
          "subject": "INST P"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "ADM O"
        },
        {
          "time": "10:00",
          "subject": "SE"
        },
        {
          "time": "10:50",
          "subject": "PCC"
        },
        {
          "time": "11:40",
          "subject": "PCC"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "INST P"
        },
        {
          "time": "10:00",
          "subject": "INST P"
        },
        {
          "time": "10:50",
          "subject": "INSTALAÇÕES ELÉTRICAS"
        },
        {
          "time": "11:40",
          "subject": "I HIDR"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "—"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "-- MDS"
        },
        {
          "time": "08:00",
          "subject": "-- MDS"
        },
        {
          "time": "08:50",
          "subject": "-- I HIDR"
        },
        {
          "time": "10:00",
          "subject": "-- I HIDR"
        },
        {
          "time": "10:50",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- ----------------------------------------------"
        }
      ]
    }
  },
  {
    "name": "3TT",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "EDF"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "EDF"
        },
        {
          "time": "10:50",
          "subject": "—"
        },
        {
          "time": "11:40",
          "subject": "—"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "MAT"
        },
        {
          "time": "08:00",
          "subject": "P VIDA"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- --------------------------------------------"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- --------------------------------------------"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "-- LP"
        },
        {
          "time": "08:00",
          "subject": "-- LP"
        },
        {
          "time": "08:50",
          "subject": "-- FIS"
        },
        {
          "time": "10:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- --------------------------------------------"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "ED FINANCEIRA"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "LP"
        },
        {
          "time": "10:00",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "10:50",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "11:40",
          "subject": "-- ----------------------------------------------"
        }
      ]
    }
  },
  {
    "name": "3TT(FTP)",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "—"
        },
        {
          "time": "10:50",
          "subject": "ITE"
        },
        {
          "time": "11:40",
          "subject": "ITE"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:00",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "08:50",
          "subject": "-- --------------------------------------------"
        },
        {
          "time": "10:00",
          "subject": "-- OPT"
        },
        {
          "time": "10:50",
          "subject": "OPT"
        },
        {
          "time": "11:40",
          "subject": "OPT"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "-- INT"
        },
        {
          "time": "08:00",
          "subject": "-- INT"
        },
        {
          "time": "08:50",
          "subject": "-- INT"
        },
        {
          "time": "10:00",
          "subject": "INT"
        },
        {
          "time": "10:50",
          "subject": "LMT"
        },
        {
          "time": "11:40",
          "subject": "LMT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "—"
        },
        {
          "time": "08:00",
          "subject": "—"
        },
        {
          "time": "08:50",
          "subject": "—"
        },
        {
          "time": "10:00",
          "subject": "ICS"
        },
        {
          "time": "10:50",
          "subject": "ICS"
        },
        {
          "time": "11:40",
          "subject": "INDU. E CARACTERIZAÇÃO"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "08:00",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "08:50",
          "subject": "-- ----------------------------------------------"
        },
        {
          "time": "10:00",
          "subject": "TEC.EXPRESSÃO VOCAL"
        },
        {
          "time": "10:50",
          "subject": "TEC.EXPRESSÃO VOCAL"
        },
        {
          "time": "11:40",
          "subject": "INDU. E CARACTERIZAÇÃO"
        }
      ]
    }
  },
  {
    "name": "2TT",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "FIL"
        },
        {
          "time": "08:00",
          "subject": "MAT"
        },
        {
          "time": "08:50",
          "subject": "MAT"
        },
        {
          "time": "10:00",
          "subject": "LP"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "ED FIN"
        },
        {
          "time": "10:00",
          "subject": "L.ING"
        },
        {
          "time": "10:50",
          "subject": "L.ING"
        },
        {
          "time": "11:40",
          "subject": "LMT"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "ITE"
        },
        {
          "time": "08:00",
          "subject": "ITE"
        },
        {
          "time": "08:50",
          "subject": "FIL"
        },
        {
          "time": "10:00",
          "subject": "LMT"
        },
        {
          "time": "10:50",
          "subject": "INT"
        },
        {
          "time": "11:40",
          "subject": "INT"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "FIS"
        },
        {
          "time": "08:50",
          "subject": "HIS"
        },
        {
          "time": "10:00",
          "subject": "EXPRESSÃO CORPORAL"
        },
        {
          "time": "10:50",
          "subject": "EXPRESSÃO CORPORAL"
        },
        {
          "time": "11:40",
          "subject": "SOC"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "SOC"
        },
        {
          "time": "08:00",
          "subject": "HIS"
        },
        {
          "time": "08:50",
          "subject": "ICS"
        },
        {
          "time": "10:00",
          "subject": "INT"
        },
        {
          "time": "10:50",
          "subject": "INT"
        },
        {
          "time": "11:40",
          "subject": "TEC.EXPRESSÃO VOCAL"
        }
      ]
    }
  },
  {
    "name": "2TE",
    "schedule": {
      "Segunda": [
        {
          "time": "07:10",
          "subject": "FIS"
        },
        {
          "time": "08:00",
          "subject": "SOC"
        },
        {
          "time": "08:50",
          "subject": "FIL"
        },
        {
          "time": "10:00",
          "subject": "L.ING"
        },
        {
          "time": "10:50",
          "subject": "MAT"
        },
        {
          "time": "11:40",
          "subject": "MAT"
        }
      ],
      "Terça": [
        {
          "time": "07:10",
          "subject": "ED FIN"
        },
        {
          "time": "08:00",
          "subject": "MDS"
        },
        {
          "time": "08:50",
          "subject": "HIS"
        },
        {
          "time": "10:00",
          "subject": "MDS"
        },
        {
          "time": "10:50",
          "subject": "SE"
        },
        {
          "time": "11:40",
          "subject": "SE"
        }
      ],
      "Quarta": [
        {
          "time": "07:10",
          "subject": "FIL"
        },
        {
          "time": "08:00",
          "subject": "INST P"
        },
        {
          "time": "08:50",
          "subject": "PCC"
        },
        {
          "time": "10:00",
          "subject": "PCC"
        },
        {
          "time": "10:50",
          "subject": "LP"
        },
        {
          "time": "11:40",
          "subject": "CPA"
        }
      ],
      "Quinta": [
        {
          "time": "07:10",
          "subject": "LP"
        },
        {
          "time": "08:00",
          "subject": "LP"
        },
        {
          "time": "08:50",
          "subject": "L.ING"
        },
        {
          "time": "10:00",
          "subject": "FIS"
        },
        {
          "time": "10:50",
          "subject": "EDF"
        },
        {
          "time": "11:40",
          "subject": "EDF"
        }
      ],
      "Sexta": [
        {
          "time": "07:10",
          "subject": "HIS"
        },
        {
          "time": "08:00",
          "subject": "SOC"
        },
        {
          "time": "08:50",
          "subject": "ADM O"
        },
        {
          "time": "10:00",
          "subject": "TC"
        },
        {
          "time": "10:50",
          "subject": "TC"
        },
        {
          "time": "11:40",
          "subject": "INST P"
        }
      ]
    }
  }
];

export const classGroups = {
  "2ª série": classSchedules.filter((item) => item.name.startsWith("2") && !item.name.includes("FTP")),
  "3ª série": classSchedules.filter((item) => item.name.startsWith("3") && !item.name.includes("FTP")),
  "Formação técnica": classSchedules.filter((item) => item.name.includes("FTP")),
};
