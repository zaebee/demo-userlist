# Sample master class called 'App' that holds everything together.
# You call this one in the init.js.coffee.

class ULNS.App
  # Debug levels.
  debug: 0

  # Use Backbone's events in your master class.
  events: _.extend(ULNS.Events, Backbone.Events)

  ##
  ## INIT
  init: ->
    ULNS.log 'App init'
    @events.t 'init:start'

    # DOM dependent init.
    @events.on 'dom:onload', @dom_onload, this

    # Initialize main views.
    ULNS.root_view = new ULNS.UserListView
      collection: new ULNS.Users

    # When DOM finishes, all the initialization is done.
    @events.on 'init:dom:end', ->
      @events.t 'init:end'
    , this

  dom_onload: ->
    ULNS.log 'DOM loaded, proceeding'
    ULNS.app.dom_exists = true

    @events.t 'init:dom:start'

    # Setup DOM.
    $('#main').append ULNS.root_view.render().el

    # Setup router.
    @router = new ULNS.Router

    # Signal DOM setup end.
    @events.t 'init:dom:end'

  # The root method manipulates the view.
  root: ->
    data = [
        name: 'Ivan Ivanov'
        phone: '111111111'
      ,
        name: 'Petr Petrov'
        phone: '222222222'
      ,
        name: 'Sergei Serov'
        phone: '333333333'
      ,
        name: 'Ivan Ivanov'
        phone: '444444444'
      ,
        name: 'Ivan Ivanov'
        phone: '555555555'
    ]

    if ULNS.root_view.collection.url
      ULNS.root_view.collection.fetch()
    else
      ULNS.root_view.collection.add data
