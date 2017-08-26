/**
 * jQuery.pep.js (http://pep.briangonzalez.org/)
 * Copyright 2017 Brian Gonzalez
 * Licenced under the MIT License (https://tldrlegal.com/license/mit-license)
 */

$(function() {
    relativeIconLeft = $('#icon').offset().left / $(window).width();
    relativeIconTop = $('#icon').offset().top / $(window).height();

    $('#icon').pep({
        revert: true,
        revertAfter: 'ease',
        revertIf: function() {
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var x = $('#icon').offset().left;
            var y = $('#icon').offset().top;
            var iconWidth = $('#icon').width();
            var iconHeight = $('#icon').height();

            if (x < 0 || windowWidth < x + iconWidth
                || y < 0 || windowHeight < y + iconHeight) {
                this.initialPosition.left = relativeIconLeft * 100 + '%';
                this.initialPosition.top = relativeIconTop * 100 + '%';
                return true;
            } else {
                return false;
            }
        }
    });


    $(window).resize(function () {
        $('#icon').css('left', relativeIconLeft * 100 + '%');
        $('#icon').css('top', relativeIconTop * 100 + '%');
    });
});
