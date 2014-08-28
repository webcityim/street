
require './utils/extend'
React = require 'react'
meta = require './meta'

AppComponent = require './component/app'
siteStore = require './store/site'

React.renderComponent AppComponent({data: siteStore.get()}),
  document.body