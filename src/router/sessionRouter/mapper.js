const Session = require('../../model/session')

class SessionMapper {
  mapToDomain (req) {
    return new Session(
      req.params.id,
      req.body.topics,
      req.body.timestamp
    )
  }
}

module.exports = SessionMapper
