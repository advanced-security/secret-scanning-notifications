class Octokit {
  constructor() {
    this.rest = {
      secretScanning: {
        listAlertsForEnterprise: jest.fn(),
        listAlertsForOrg: jest.fn(),
        listAlertsForRepo: jest.fn()
      }
    }
  }

  paginate() {
    return Promise.resolve([])
  }

  request() {
    return Promise.resolve({})
  }
}

module.exports = {Octokit}
