class Octokit {
  constructor() {
    this.rest = {}
  }

  paginate() {
    return Promise.resolve([])
  }

  request() {
    return Promise.resolve({})
  }
}

module.exports = {Octokit}
