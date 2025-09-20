import { type GatewayModelId } from '@ai-sdk/gateway'

export enum Models {
  OpenAIGPT5 = 'gpt-5',
}

export const DEFAULT_MODEL = Models.OpenAIGPT5

export const SUPPORTED_MODELS: GatewayModelId[] = [
  Models.OpenAIGPT5,
]

export const TEST_PROMPTS = [
  'Generate a Next.js app that allows to list and search Pokemons',
  'Create a `golang` server that responds with "Hello World" to any request',
]
