
# load HTML

map = require('./meta.coffee').map
html = require('lilyturf').html

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
                  @text site.name
            @div class: 'detail',
              for name, site of list
                @div class: 'card holder', 'data-name': name,
                  @div class: 'name', (@text site.name)
                  @div class: 'link',
                    @a href: site.url,  (@text site.url)
                  if site.logo?
                    @div class: 'logo', style: "background-color: #{site.bg_color}",
                      @img src: 'pic/' + site.logo
                  @div class: 'desc', (@text site.desc or '')

$('body').html main_page map

$('#nav .direction').click ->
  the_category = $(@).attr('data-category')
  query_open = "[data-category=\"#{the_category}\"]"
  $('#body .category').filter(query_open).removeClass('hide').addClass 'open'
  $('#body .category').not(query_open).removeClass('open').addClass 'hide'

$('#nav .direction').first().click()