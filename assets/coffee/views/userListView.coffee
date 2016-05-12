# Sample Backbone view 'UserListView'.
#
# Instantiate an instance of it using:
#   userListView = new ULNS.UserListView
#
# The template for this view is in assets/templates/userListView.html
#
# Then render it and append it to the DOM:
#   $('body').append userListView.render().el

class ULNS.UserListView extends Backbone.View
  id: 'user-list'
  template: -> ULNS.Templates.userListView

  initialize: (options) ->
    ULNS.info 'UserListView initializing'
    @listenTo options.collection, 'add', @renderUser
    @listenTo options.collection, 'new:user:add', @renderUserAddView

  renderUserAddView: ->
    userAddView = new ULNS.UserAddView
      collection: @collection
      model: new ULNS.User
    @$('#user-add-form').html userAddView.render().el

  renderUser: (model) ->
    userDetailView = new ULNS.UserDetailView model: model
    @$('tbody').append userDetailView.render().el

  render: ->
    ULNS.info 'UserListView rendering'
    @$el.html @template()
    @renderUserAddView()
    @collection.each (model) => @renderUser model
    this
