# Let's create a Backbone router here, for mapping URLs to states in the app.
# 
class ULNS.Router extends Backbone.Router
  routes:
    '': 'root'

  initialize: ->
    ULNS.log 'Router init'
    ULNS.app.events.t 'router:init:end'

  # Root is the route that is initiated when we hit the root of our app.
  root: ->
    ULNS.log 'init root route'
    ULNS.app.root()
