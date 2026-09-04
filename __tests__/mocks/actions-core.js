module.exports = {
  debug: () => {},
  getInput: name => process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '',
  info: () => {},
  setFailed: () => {}
}
