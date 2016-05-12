# Sample Backbone model 'User'.
# #
# # Instantiate instances of it using:
# #   user_1 = new ULNS.User
# #   user_2 = new ULNS.User
# #   user_3 = new ULNS.User

class ULNS.User extends Backbone.Model
  initialize: ->
      ULNS.info 'User model initialized'

  validation:
    name:
      required: true
      msg: 'Пожалуйста, напишите имя пользователя'
    phone: [
        required: true
        msg: 'Пожалуйста, напишите телефон'
      ,
        pattern: /^\+?([-. 0-9]{6,60})$/
        msg: 'Напишите, правильный телефон'
    ]

