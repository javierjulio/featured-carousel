// Generated by CoffeeScript 1.3.3
(function() {
  var FeaturedCarousel,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  FeaturedCarousel = (function() {

    function FeaturedCarousel(element, options) {
      this.loadItem = __bind(this.loadItem, this);

      this.listClickHandler = __bind(this.listClickHandler, this);
      this.el = $(element);
      this.settings = $.extend({}, $.fn.featuredcarousel.defaults, options, this.el.data());
      $(this.settings.linkListSelector).on('click', this.settings.linkListDelegatedSelector, this.listClickHandler);
    }

    FeaturedCarousel.prototype.listClickHandler = function(event) {
      event.preventDefault();
      return this.loadItem($(event.target));
    };

    FeaturedCarousel.prototype.loadItem = function(item) {
      var _this = this;
      $('#loading').show();
      return setTimeout(function() {
        return $.ajax({
          url: item.attr('href'),
          type: 'GET',
          dataType: 'html',
          cache: false,
          error: function(jqXHR, textStatus, errorThrown) {
            return console.log('error loading item');
          },
          success: function(data, textStatus, jqXHR) {
            var container, existingItem;
            item = $(data);
            existingItem = $("#" + (item.attr('id')));
            container = _this.el;
            container.find('.active').removeClass('active').addClass('inactive');
            if (existingItem.length === 0) {
              item.appendTo(container);
              item[0].offsetWidth;
              item.removeClass('inactive').addClass('active');
            } else {
              existingItem.removeClass('inactive').addClass('active');
            }
            return $('#loading').hide();
          }
        });
      }, 1000);
    };

    return FeaturedCarousel;

  })();

  $.fn.featuredcarousel = function(options) {
    return this.each(function() {
      var $el, data;
      $el = $(this);
      data = $el.data('featuredcarousel');
      if (!data) {
        return $el.data('featuredcarousel', (data = new FeaturedCarousel(this, options)));
      }
    });
  };

  $.fn.featuredcarousel.Constructor = FeaturedCarousel;

  $.fn.featuredcarousel.defaults = {
    containerSelector: '.featured-carousel',
    linkListSelector: '.featured-carousel-selection-list',
    linkListDelegatedSelector: 'a'
  };

}).call(this);
