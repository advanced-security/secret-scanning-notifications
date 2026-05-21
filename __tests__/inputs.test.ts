import {inputs} from '../src/utils/inputs'

describe('inputs', () => {
  it('should return an object with inputs when all environment variables are set', async () => {
    process.env.LOCAL_DEV = 'true'
    process.env.FREQUENCY = '30'
    process.env.SCOPE = 'org'
    process.env.GITHUB_TOKEN = 'test-token'
    process.env.GITHUB_API_URL = 'https://test-api-url.com'
    process.env.GITHUB_REPOSITORY = 'test-repo'
    process.env.GITHUB_OWNER = 'test-owner'
    process.env.GITHUB_ENTERPRISE = 'test-enterprise'
    process.env.CREATED_ALERTS_FILEPATH = 'test-new-alerts-filepath'
    process.env.CLOSED_ALERTS_FILEPATH = 'test-closed-alerts-filepath'

    const result = await inputs()
    expect(result).toHaveProperty('scope', 'org')
    expect(result).toHaveProperty('frequency', 30)
    expect(result).toHaveProperty('api_token', 'test-token')
    expect(result).toHaveProperty('apiURL', 'https://test-api-url.com')
    expect(result).toHaveProperty('repo', 'test-repo')
    expect(result).toHaveProperty('owner', 'test-owner')
    expect(result).toHaveProperty('enterprise', 'test-enterprise')
    expect(result).toHaveProperty(
      'new_alerts_filepath',
      'test-new-alerts-filepath'
    )
    expect(result).toHaveProperty(
      'closed_alerts_filepath',
      'test-closed-alerts-filepath'
    )

    delete process.env.LOCAL_DEV
    delete process.env.FREQUENCY
    delete process.env.SCOPE
    delete process.env.GITHUB_TOKEN
    delete process.env.GITHUB_API_URL
    delete process.env.GITHUB_REPOSITORY
    delete process.env.GITHUB_ACTOR
    delete process.env.GITHUB_ENTERPRISE
    delete process.env.CREATED_ALERTS_FILEPATH
    delete process.env.CLOSED_ALERTS_FILEPATH
  })

  it('should default frequency to 0 when no action input is provided', async () => {
    process.env.FREQUENCY = 'invalid-frequency'

    const result = await inputs()
    expect(result).toHaveProperty('frequency', 0)

    delete process.env.FREQUENCY
  })

  it('should default scope to an empty string when no action input is provided', async () => {
    process.env.SCOPE = 'invalid-scope'

    const result = await inputs()
    expect(result).toHaveProperty('scope', '')

    delete process.env.SCOPE
  })

  it('should default token to an empty string when no action input is provided', async () => {
    delete process.env.GITHUB_TOKEN

    const result = await inputs()
    expect(result).toHaveProperty('api_token', '')
  })
})
