
React = require 'react'

module.exports = React.createClass
  displayName: 'StreetComponent'

  render: ->
    $.div {}, 'this is street'