
React = require 'react'

module.exports = React.createClass
  displayName: 'HeaderComponent'

  render: ->
    $.div {}, 'this header'