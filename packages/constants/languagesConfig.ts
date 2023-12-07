export interface Language {
  code: string
  voice: string
  language: string
  language2?: string
  goLearn: string
}

interface Languages {
  [key: string]: Language
}

export const languages: Languages = {
  en: {
    code: "en-us",
    voice: "en-US-Wavenet-H",
    language: "English",
    goLearn: "Train your vocabulary. Let's go!",
  }, // United States
  // 'en': {code: 'en-gb', voice: 'Nancy', language:  'English'} // Great Britain
  es: {
    code: "es-es",
    voice: "es-ES-Wavenet-D",
    language: "Spanish",
    goLearn: "Entrenar tu vocabulario. ¡Vamos!",
  },
  de: {
    code: "de-de",
    voice: "de-DE-Wavenet-B",
    language: "German",
    goLearn: "Lerne deine Vokabeln. Los geht's!",
  },
  fr: {
    code: "fr-fr",
    voice: "fr-FR-Wavenet-E",
    language: "French",
    goLearn: "Apprenez vos vocabulaires. Allons!",
  },
  "pt-br": {
    code: "pt-br",
    voice: "pt-BR-Wavenet-B",
    language: "Portuguese",
    language2: "Brazilian",
    goLearn: "Treine seu vocabulário. Vamos!",
  }, // Brazilian Portuguese
  "pt-pt": {
    code: "pt-pt",
    voice: "pt-PT-Wavenet-A",
    language: "Portuguese",
    goLearn: "Treine seu vocabulário. Vamos!",
  }, // Portuguese from Portugal
  it: {
    code: "it-IT",
    voice: "it-IT-Wavenet-A",
    language: "Italian",
    goLearn: "Scopri i tuoi vocabolari. Vai!",
  },
  nl: {
    code: "nl-nl",
    voice: "",
    language: "Dutch",
    goLearn: "Leren je vocabulaire. Ga naar!",
  },
  ru: {
    code: "ru-ru",
    voice: "",
    language: "Russian",
    goLearn: "Расскажите свой словарь. Приходите!",
  },
  ar: {
    code: "ar-eg",
    voice: "",
    language: "Arabic",
    goLearn: "أعرف أسماءك. يرجى الاستمرار",
  },
  ko: {
    code: "ko-kr",
    voice: "",
    language: "Korean",
    goLearn: "한국어를 알고 싶으신가요?",
  },
  ja: {
    code: "ja-jp",
    voice: "",
    language: "Japanese",
    goLearn: "言いたい言葉を入力してください",
  },
  zh: {
    code: "zh-cn",
    voice: "",
    language: "Chinese",
    goLearn: "输入你想学的单词",
  },

  ca: {
    code: "ca-es",
    voice: "",
    language: "Catalan",
    goLearn: "Tren la vobocació. Vols!",
  },
  cs: {
    code: "cs-cz",
    voice: "",
    language: "Czech",
    goLearn: "Zobrazit slovo. Zkusit!",
  },
  da: {
    code: "da-dk",
    voice: "",
    language: "Danish",
    goLearn: "Lær dit vocab. Gå!",
  },
  he: {
    code: "he-il",
    voice: "",
    language: "Hebrew",
    goLearn: "תרגום את המילים במילים. לאחר",
  },
  hr: {
    code: "hr-hr",
    voice: "",
    language: "Croatian",
    goLearn: "Pronać svoje slova. Želite li",
  },
  hu: {
    code: "hu-hu",
    voice: "",
    language: "Hungarian",
    goLearn: "Nézd meg az adatokat. Keress!",
  },
  id: {
    code: "id-id",
    voice: "",
    language: "Indonesian",
    goLearn: "Latih kosakata Anda. Ayo pergi!",
  },
  lt: {
    code: "lt-lt",
    voice: "",
    language: "Lithuanian",
    goLearn: "Lietuvių kalba. Jūs turite",
  },
  nb: {
    code: "nb-no",
    voice: "",
    language: "Norwegian (Bokmål)",
    goLearn: "Lær deg vocab. Gå!",
  },
  pl: {
    code: "pl-pl",
    voice: "pl-PL-Wavenet-E",
    language: "Polish",
    goLearn: "Trenuj swoje słownictwo. Chodźmy!",
  },
  ro: {
    code: "ro-ro",
    voice: "",
    language: "Romanian",
    goLearn: "Antrenează-ți vocabularul. Să mergem!",
  },
  fi: {
    code: "fi-fi",
    voice: "fi-FI-Wavenet-A",
    language: "Finnish",
    goLearn: "Tulosta tuotteita. Haluatko",
  },
  el: {
    code: "el-gr",
    voice: "",
    language: "Greek",
    goLearn: "Προσθέστε τα στοιχεία σας. Ευχαριστούμε",
  },
  bg: {
    code: "bg-bg",
    voice: "",
    language: "Bulgarian",
    goLearn: "Използване на съществуващите си слои. Искате ли да",
  },
  et: {
    code: "et-ee",
    voice: "",
    language: "Estonian",
    goLearn: "Treenige oma sõnavara. Lähme!",
  },
  sk: {
    code: "sk-sk",
    voice: "",
    language: "Slovak",
    goLearn: "Zobraziť slovo. Chcete si",
  },
  sl: {
    code: "sl-si",
    voice: "",
    language: "Slovenian",
    goLearn: "Izberite slovo. Želite si",
  },
  sv: {
    code: "sv-se",
    voice: "",
    language: "Swedish",
    goLearn: "Träna ditt ordförråd. Nu går vi!",
  },
  tr: {
    code: "tr-tr",
    voice: "",
    language: "Turkish",
    goLearn: "Sözlerini öğren!",
  },
  uk: {
    code: "uk-ua",
    voice: "",
    language: "Ukrainian",
    goLearn: "Тренуйте свій словниковий запас. Ходімо!",
  },
  lv: {
    code: "lv-lv",
    voice: "",
    language: "Latvian",
    goLearn: "Izvēlēties šo slova. Izvēlieties!",
  },
}
