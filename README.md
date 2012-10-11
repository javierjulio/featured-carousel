# Featured Carousel: A jQuery Plugin

The Featured Carousel is a simple, lightweight, CoffeeScript based jQuery plugin in which the selected content is retrieved using an AJAX call rather than having all the carousel content inline in the initial HTML response.

## Usage Example

To enable the plugin include the script at the bottom of your HTML, target the desired element(s) and call the plugin method. The following example shows all options with their default values:

    <script src="/js/featured-carousel.js"></script>
    <script type="text/javascript">
    $('.featured-carousel')
      .featuredcarousel({
        linkListSelector: '.featured-carousel-selection-list',
        linkListDelegatedSelector: 'a',
        activeClass: 'active',
        inactiveClass: 'inactive'
      });
    </script>

Include the compiled `featured-carousel.css` file which contains basic defaults. None of the CSS is required but most likely you'll need or want some of the rules anyway (e.g. relative positioning, basic fade transition). The plugin has options for the `activeClass` and `inactiveClass` so you can change to suit your naming conventions. The `item` class can be renamed to whatever you like and is simply the container for the current carousel item on display.

As far as HTML goes the only real requirement is that you have to render the first carousel item inline. All other items will be loaded through AJAX requests.

    <div class="featured-carousel">
      <div class="item">
        <!-- render first item -->
      </div>
    </div>
    
    <div class="carousel-selection-list">
      <a href="">Item 1</a>
      <a href="">Item 2</a>
    </div>