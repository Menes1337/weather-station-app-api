const FhemApiFactory = require('./fhem-api/factory')

/**
 * @param {Context} context
 * @param {GetReadingValuesInput} input
 * @param {GetReadingValuesExtensionCallback} cb
 */
module.exports = async (context, input, cb) => {
  const fhemApiFactory = new FhemApiFactory()
  const fhemApiClient = fhemApiFactory.get(context.config.fhemApiUrl, {
    username: context.config.basicAuthUsername,
    password: context.config.basicAuthPassword
  })

  cb(null, {
      readingValues: await fhemApiClient.getReadingValues(
        input.device,
        input.reading ? input.reading : null,
        input.fromTimestamp ? input.fromTimestamp : null,
        input.toTimestamp ? input.toTimestamp : null
      )
    }
  )
}
