# Sample Backbone collection 'Users'.
#
# Instantiate instances of it using:
#   users = new ULNS.Users

class ULNS.Users extends Backbone.Collection
  model: ULNS.User

  initialize: ->
      ULNS.info 'Users collection initialized'
