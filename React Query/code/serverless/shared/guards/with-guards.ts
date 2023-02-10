import type { Handler, HandlerContext, HandlerEvent, HandlerResponse } from '@netlify/functions'

export type FunctionGuard = (event: HandlerEvent, context: HandlerContext) => boolean

export function withGuards(handler: Handler, guards: FunctionGuard[] = []) {
  return async (event: HandlerEvent, context: HandlerContext) => {
    const isAllowedToRunFunction = guards.every((guard) => guard(event, context))

    const unauthorizedResponse: HandlerResponse = {
      statusCode: 401,
      body: JSON.stringify({
        message: 'You are not authorized to use this function.',
      }),
    }

    return isAllowedToRunFunction ? handler(event, context) : unauthorizedResponse
  }
}
