import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'm5r6x922',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk5DFvWbnbAy3vrSiLlhtYIfYT1JyLLAo8WMPpLeT5knzDqqpZabwQVK9KbKtURp3xKsGeJppniYbmxgAY0hSQY344KqhNk3byLLMNZqu6057MJiCc8rBdTBz6njivDEXJAFKUIdloYFqddWn5o7lub5TaqYW9ul2xcB1WDxtqIopZ5domkT',
  useCdn: false,
})