const summary = {
  addBreak: () => summary,
  addHeading: () => summary,
  addTable: () => summary,
  stringify: () => '',
  write: () => Promise.resolve()
}

module.exports = {
  debug: () => {},
  error: () => {},
  getInput: name => process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '',
  info: () => {},
  setFailed: () => {},
  setOutput: () => {},
  summary,
  warning: () => {}
}
