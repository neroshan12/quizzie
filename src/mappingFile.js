const mappingFile = {
  flags: {
    name: 'flags',
    icon: 'flags.png',
    path: {
      quiz: {
        description: 'Which country does this flag belong to?',
        icon: 'flags-alt.png',
      },
      learn: {
        description: '...is the national flag of...',
      },
    },
  },
  currencies: {
    name: 'currencies',
    icon: 'currencies.png',
    path: {
      quiz: {
        description: 'What currency or currencies are used in the following country?',
        icon: 'currencies-alt.png',
      },
      learn: {
        description: '...uses the following currency or currencies....',
      },
    },
  },
  capitals: {
    name: 'capitals',
    icon: 'capitals.png',
    path: {
      quiz: {
        description: 'What is the capital of the following country?',
        icon: 'capitals-alt.png',
      },
      learn: {
        description: '...is the capital of...',
      },
    },
  },
  languages: {
    name: 'languages',
    icon: 'languages.png',
    path: {
      quiz: {
        description: 'What language(s) do they speak in the following country?',
        icon: 'languages-alt.png',
      },
      learn: {
        description: '...is/are spoken in...',
      },
    },
  },
  continents: {
    name: 'continents',
    icon: 'continents.png',
    path: {
      quiz: {
        description: 'What continent is the following country in?',
        icon: 'continents-alt.png',
      },
      learn: {
        description: '...is in the following continent...',
      },
    },
  },
}

export default mappingFile
