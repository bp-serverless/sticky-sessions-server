const notesFromSessionURL = '/notes/'
const sessionURL = '/sessions/'
const NotesRouter = require('./notesRouter')

class RouterProvider {
  constructor (app, controllers) {
    this.app = app
    this.controllers = controllers
  }

  init () {
    var notesRouter = new NotesRouter(this.controllers.getNotesController())
    this.app.use(notesFromSessionURL, notesRouter.getRoutes())

    var sessionsRouter = require('./sessionsRouter')(this.controllers.getSessionsController())
    this.app.use(sessionURL, sessionsRouter)
  }
}

module.exports = RouterProvider
