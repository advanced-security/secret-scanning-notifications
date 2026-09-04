const summary = {
  addBreak: jest.fn(() => summary),
  addHeading: jest.fn(() => summary),
  addTable: jest.fn(() => summary),
  stringify: jest.fn(() => ''),
  write: jest.fn(() => Promise.resolve())
}

module.exports = {
  debug: jest.fn(),
  error: jest.fn(),
  getInput: jest.fn((name, options = {}) => {
    const value =
      process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`]?.trim() ||
      ''
    if (options.required && !value) {
      throw new Error(`Input required and not supplied: ${name}`)
    }
    return value
  }),
  info: jest.fn(),
  setFailed: jest.fn(),
  setOutput: jest.fn(),
  summary,
  warning: jest.fn()
}
