
# load HTML

{map} = require './meta.coffee'
{html} = require 'lilyturf'
{$} = require 'zepto-browserify'

main_page = (data) ->
  html ->
    @div id: 'page',
      @div id: 'nav',
        for category of data
          @div class: 'direction', 'data-category': category,
            @text category
      @div id: 'body',
        for category, list of data
          @div class: 'category holder', 'data-category': category,
            @div class: 'show',
              for name, site of list
                @div class: 'place', 'data-name': name,
                  @div class: 'name',
                    @a href: site.url, target: '_blank',
                      @text site.name

$('body').html main_page map

$('#nav .direction').click ->
  the_category = $(@).attr('data-category')
  query_open = "[data-category=\"#{the_category}\"]"
  $('#body .category').filter(query_open).removeClass('hide').addClass 'open'
  $('#body .category').not(query_open).removeClass('open').addClass 'hide'

$('#nav .direction').first().click()