# Sample Backbone view 'UserDetailView'.
#
# Instantiate an instance of it using:
#   detailView = new ULNS.UserDetailView
#
# The template for this view is in assets/templates/userDetailView.html
#
# Then render it and append it to the DOM:
#   $('body').append detailView.render().el

class ULNS.UserDetailView extends Backbone.View
  id: 'user-detail'
  tagName: 'tr'
  template: -> ULNS.Templates.userDetailView @model.toJSON()

  events:
    'click .btn-edit': 'userEdit'
    'click .btn-save': 'userSave'
    'click .btn-remove': 'userRemove'
    'click .btn-cancel': 'userCancel'

  initialize: (options) ->
    ULNS.info 'UserDetailView initializing', options
    @listenTo options.model, 'change:editing', @render
    @listenTo options.model, 'change:errors', @render
    @listenTo options.model, 'validated', @validated
    Backbone.Validation.bind @

  render: ->
    ULNS.info 'UserDetailView rendering'
    @$el.html @template()
    this

  userEdit: (event) ->
    ULNS.info event
    event.preventDefault()
    @model.set editing: true

  userSave: (event) ->
    event.preventDefault()
    @model.set
      name: @$('[name=name]').val()
      phone: @$('[name=phone]').val()
    @model.save()

  userRemove: (event) ->
    event.preventDefault()
    @model.destroy()
    @remove()

  userCancel: (event) ->
    event.preventDefault()
    @model.set editing: false

  validated: (isValid, model, errors) ->
    if isValid
      model.set editing: false
      model.unset 'errors'
    else
      @model.set 'errors', errors
