class Octokit {
  constructor() {
    this.rest = {
      secretScanning: {
        listAlertsForEnterprise: jest.fn(),
        listAlertsForOrg: jest.fn(),
        listAlertsForRepo: jest.fn()
      }
    }
    this.paginate = jest.fn(() => Promise.resolve([]))
    this.request = jest.fn(() => Promise.resolve({}))
  }
}

module.exports = {Octokit}
