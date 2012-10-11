class FeaturedCarousel
  
  constructor: (element, options) ->
    @element = $(element)
    @settings = $.extend {}, $.fn.featuredcarousel.defaults, options, @element.data()
    
    $(@settings.linkListSelector).on 'click', @settings.linkListDelegatedSelector, @listClickHandler

  listClickHandler: (event) =>
    event.preventDefault()
    @selectedListItem = $(event.target)
    @element.trigger('click.itemselected.featuredcarousel')
    @loadContent(@selectedItem.attr('href'))

  loadContent: (url) =>
    $.ajax
      url: url
      type: 'GET'
      dataType: 'html'
      cache: false
      error: (jqXHR, textStatus, errorThrown) =>
        console.log('error loading item')
      success: (data, textStatus, jqXHR) =>
        item = $(data)
        existingItem = $("##{item.attr('id')}")
        
        container = @element#$(@settings.containerSelector)
        container.find('.active').removeClass('active').addClass('inactive')
        
        if existingItem.length == 0
          item.appendTo(container)
          
          # force redraw otherwise element will just pop in rather than fade in
          item[0].offsetWidth
          
          item.removeClass('inactive').addClass('active')
        else
          existingItem.removeClass('inactive').addClass('active')
        
        @element.trigger('itemloaded.featuredcarousel')

$.fn.featuredcarousel = (options) ->
  this.each ->
    $el = $(this)
    data = $el.data 'featuredcarousel'
    if !data then $el.data 'featuredcarousel', (data = new FeaturedCarousel this, options)

$.fn.featuredcarousel.Constructor = FeaturedCarousel

$.fn.featuredcarousel.defaults =
  containerSelector: '.featured-carousel'
  linkListSelector: '.featured-carousel-selection-list'
  linkListDelegatedSelector: 'a'
