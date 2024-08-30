/**
 * Auto Play Tabs.
 * 
 * @author <cabal@digerati.design>
 */
export const autoPlayTabs = () => {
    /* Start Tabs */
    var tabInterval;
    clearInterval(tabInterval);
    tabLoop2();
    /* Connect your class names to elements */
    function tabLoop2() {
        tabInterval = setInterval(function () {
            var $allImages = $('.w-tab-pane');
            var $allTabs = $('.tabs-link');
            var $currentImage = $('.w-tab-content').children('.w--tab-active:first');
            var $nextImage = $currentImage.next();
            var $current = $('.tabs-menu').children('.w--current:first');
            var $next = $current.next();
            if ($next.length) {
                $allTabs.attr('aria-selected', false);
                $next.attr('aria-selected', true);
                $allTabs.removeClass('w--current');
                $next.addClass('w--current');
                $allImages.removeClass('w--tab-active');
                $nextImage.addClass('w--tab-active');
            } else {
                $allTabs.removeClass('w--current');
                $('.tabs-link:first').addClass('w--current');
                $allTabs.attr('aria-selected', false);
                $('.tabs-link:first').attr('aria-selected', true);
                $allImages.removeClass('w--tab-active');
                $('.w-tab-pane:first').addClass('w--tab-active');
            };
        }, 5000); /* 5 Second Rotation */
    };
    /*
    |---------------------------------------------
    | Reset Loops
    |---------------------------------------------
    | IDK why buy i could not click on first tab
    | after interval starts. so manually set them
    | all on click...
    |---------------------------------------------
    */
    $('.tabs-link').click(function (e) {
        e.preventDefault();
        $tab = $(this).data('wTab');
        $image = $(`.w-tab-pane[data-w-tab="${$tab}"]`);
        $('.tabs-link').removeClass('w--current');
        $('.w-tab-pane').removeClass('w--tab-active');
        $(this).addClass('w--current');
        $($image).addClass('w--tab-active');
        clearInterval(tabInterval);
        tabLoop2();
    });
};
