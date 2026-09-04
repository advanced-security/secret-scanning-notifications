import {Octokit} from '@octokit/action'
import {inputsReturned} from '../types/common/main'

interface ThrottleRequestOptions {
  method: string
  url: string
  request: {retryCount: number}
}

interface ThrottleOctokit {
  log: {warn: (message: string) => void}
}

export class MyOctokit extends Octokit {
  constructor(input: inputsReturned) {
    super({
      baseUrl: input.apiURL,
      auth: input.api_token,
      throttle: {
        onRateLimit: (
          retryAfter: number,
          options: ThrottleRequestOptions,
          octokit: ThrottleOctokit
        ) => {
          octokit.log.warn(
            `Request quota exhausted for request ${options.method} ${options.url}`
          )
          if (options.request.retryCount <= 2) {
            octokit.log.warn(`Retrying after ${retryAfter} seconds!`)
            return true
          }
        },
        onSecondaryRateLimit: (
          retryAfter: number,
          options: ThrottleRequestOptions,
          octokit: ThrottleOctokit
        ) => {
          octokit.log.warn(
            `Secondary rate limit for request ${options.method} ${options.url}`
          )
          if (options.request.retryCount <= 2) {
            octokit.log.warn(
              `Secondary Limit - Retrying after ${retryAfter} seconds!`
            )
            return true
          }
        }
      }
    })
  }
}
