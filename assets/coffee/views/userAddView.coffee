# Sample Backbone view 'UserAddView'.
#
# Instantiate an instance of it using:
#   addView = new ULNS.UserAddView
#
# The template for this view is in assets/templates/userAddView.html
#
# Then render it and append it to the DOM:
#   $('body').append addView.render().el

class ULNS.UserAddView extends Backbone.View
  tagName: 'form'
  className: 'form-inline'
  template: -> ULNS.Templates.userAddView @model.toJSON()

  events:
    'click .btn-add': 'userAdd'

  initialize: (options) ->
    ULNS.info 'UserAddView initializing', options
    @listenTo options.model, 'change:errors', @render
    @listenTo options.model, 'validated', @validated
    Backbone.Validation.bind @

  render: ->
    ULNS.info 'UserAddView rendering'
    @$el.html @template()
    this

  userAdd: (event) ->
    event.preventDefault()
    @model.set
      name: @$('#name').val()
      phone: @$('#phone').val()
    @model.save()

  validated: (isValid, model, errors) ->
    if isValid
      model.set editing: false
      model.unset 'errors'
      @collection.add model
      @collection.trigger 'new:user:add'
    else
      @model.set 'errors', errors
