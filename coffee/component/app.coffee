
React = require 'react'

HeaderComponent = require './header'
StreetComponent = require './street'

module.exports = React.createClass
  displayName: 'App'

  render: ->
    $.div
      className: 'app-component'
      HeaderComponent {}
      StreetComponent {}