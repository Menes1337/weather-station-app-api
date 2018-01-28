const FhemApiFactory = require('./fhem-api/factory')

/**
 * @param {Context} context
 * @param {GetDeviceInput} input
 * @param {GetDeviceExtensionCallback} cb
 */
module.exports = async (context, input, cb) => {
  const fhemApiFactory = new FhemApiFactory()
  const fhemApiClient = fhemApiFactory.get(
    context.config.fhemApiUrl, {
      username: context.config.basicAuthUsername,
      password: context.config.basicAuthPassword
    }
  )
  cb(null, {devices: await fhemApiClient.getDevices()})
}
