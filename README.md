# Featured Carousel: A jQuery Plugin

The Featured Carousel is a simple, lightweight, CoffeeScript based jQuery plugin similiar to Twitter Bootstrap's Carousel plugin except the selected content is retrieved using an AJAX call rather than having all the carousel content inline. Only the first carousel item is rendered in the initial HTML response. The plugin does not impose any HTML structure whatsoever. Its just expected that the current carousel item on display is a child of the carousel container as the plugin will append new content as it loads.

## Usage Example

To enable the plugin include the script at the bottom of your HTML, target the desired element(s) and call the plugin method. The following example shows all options with their default values:

    <script src="/js/featured-carousel.js"></script>
    <script type="text/javascript">
    $('.featured-carousel')
      .featuredcarousel({
        linkListSelector: '.featured-carousel-selection-list',
        linkListDelegatedSelector: 'a',
        activeClass: 'active'
      });
    </script>

Include the compiled `featured-carousel.css` file which contains defaults. None of the CSS is required but most likely you'll need it anyway (e.g. relative positioning and basic fade transition). The plugin has options for the `activeClass` so you can change to suit your naming conventions. The `item` class can be renamed to whatever you like and is simply the container for the current carousel item on display but the plugin does not reference this class.

As far as HTML goes the only real requirement is that you have to render the first carousel item inline (all others are loaded through AJAX) and that it is a child of the carousel container.

    <div class="featured-carousel">
      <div class="item">
        <!-- render first item -->
      </div>
      <!-- new items will be appended here -->
    </div>
    
    <div class="featured-carousel-selection-list">
      <a href="item1.html">Item 1</a>
      <a href="item2.html">Item 2</a>
      <a href="item3.html">Item 3</a>
    </div>

Since the plugin provides the necessary selector options for the selection list, you can place that element wherever you like.