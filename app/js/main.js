$(document).ready(function () {




    $('#SearchResultTable').basictable({
        breakpoint: 768,
    });

    try {
        $('.edit-profile-select,.custom-select').customSelect()
    } catch (e) {

    }
    try {
        $('.date-birth-blog-select').customSelect()
    } catch (e) {

    }

    $('.requests-rate-card-form-day').datepicker({format: 'dd.mm.yyyy'});

    $('.datepicker-form-element-before,.datepicker-form-element-from.timepicker').timepicker({});

    $('.requests-rate-card-form-hours.timepicker').timepicker({timeFormat: 'HH:mm'});


    $('.burger').on('click', function () {
        var menu = $('.header-nav-list');
        menu.find('.header-nav-list-menu').slideToggle(1000);

        menu.find('.header-nav-list-menu').toggleClass('open');

        $(this).find('svg').toggleClass('cross');
    });

    $('.faq-blog-element-card').click(function () {
        var wrap = $(this).closest('.faq-blog-element');
        wrap.toggleClass('faq-blog-element-active');
        wrap.find('.faq-blog-element-text').slideToggle()

    })


    /* video main play*/
    var videoTeg = $('#video-teg')[0];
    var videoButton = $('#video-teg-button');
    var play = false;
    // var videoOffset = $('#video-teg').offset().top;

    $('.video-element').on('click', function () {
        if (play) {
            videoTeg.pause()
            play = false;
            videoButton.css('opacity', 1);
        } else {
            videoTeg.play();
            play = true;
            videoButton.css('opacity', 0);
        }
    });

    /* video main play*/

// video select
    $('.video-card').on('click', function () {
        var videoUrl = $(this).data('videourl');
        var videoTeg = $('#video-teg');
        videoTeg.attr('src', videoUrl);
    })

// video select

});






$('.search-caregiver-checkbox input').on('change', function () {
    var node = $(this).closest('.available-work-blog-inner').find('.available-work-card-item input');

    var show = $(this).is(':checked')
    if(show){
        node.prop('checked', true)
    }
    else {
        node.prop('checked', false)
    }

})







var uploadInput = $('#uploadImage');


uploadInput.on('change', function () {
    var wrap = $(this).closest('.edit-profile-upload')
    var fileReader = new FileReader();
    var file = $(this)[0].files[0];
    wrap.find('.edit-profile-upload-no-file').css('display', 'none')
    var image = wrap.find('.edit-profile-upload-image')
    fileReader.onloadend = function () {
        image.attr('src', fileReader.result)
    }

    if (file) {
        fileReader.readAsDataURL(file)
    }

})


function searchShowItemTableFunction() {
    var modal = $('.search-caregiver-modal');

    function showModal(node) {
        modal.fadeIn();
        $(node).css('display', 'block');
        $('body').css('overflow', 'hidden')
    }

    function hideModal(node) {
        modal.fadeOut();
        changePosition(node, '-100%', '-100%');
        $(node).css('display', 'none');
        $('body').css('overflow', 'initial')
    }

    function changePosition (node, x, y) {
        node.css({
            left: x,
            top: y
        });
    }

    function showCaregiver (id, x, y) {
        var caregiver = $(id),
            closeButton = caregiver.find('.caregiver-close-button');
        changePosition(caregiver, x + 'px', y + 'px')
        closeButton.on('click', function () {
            hideModal(caregiver)
        })
    }

    $('#SearchResultTable,#accept-page-modal').find('.search-result-item').each(function () {
        $(this).on('mouseover', function (e) {
            var offset = 50,
                xPos = e.clientX - offset,
                caregiver = $(this).data('caregiver'),
                yPos = $(this).offset().top - $(window).scrollTop() ;
            showModal(caregiver);
            showCaregiver(caregiver, xPos, yPos);
            modal.on('click', function (e) {
                if(!$(e.target).is('.search-caregiver-modal-inner') && !$(e.target).is('.search-caregiver-modal-inner *')) {
                    hideModal($(caregiver));
                }
            })
        })
    })
}
searchShowItemTableFunction()

$('.password-show-toggle-btn').on('click', function (e) {
    e.preventDefault();
    var input = $(this).parent().find('input');

    if(input.attr('type') === 'password') {
        input.attr('type', 'text')
    } else {
        input.attr('type', 'password')
    }
})