# Featured Carousel: A jQuery Plugin

The Featured Carousel is a simple, lightweight, CoffeeScript based jQuery plugin in which the selected content is retrieved using an AJAX call rather than having all the carousel content inline in the initial HTML response.

## Usage

    <script type="text/javascript">
    $('.featured-carousel')
      .featuredcarousel({
        linkListSelector: '.featured-carousel-list',
        linkListDelegatedSelector: 'a'
      });
    </script>