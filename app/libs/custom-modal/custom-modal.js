if (typeof window.jQuery === 'undefined') {
    throw new Error('Jquery plugin not inserted in site')
} else {
    jQuery.fn.customModal = function (customOptions) {
        var options = {
            width: 430,
            closeButtonClass: null
        };


        for (let option in customOptions) {
            if (options.hasOwnProperty(option)) {
                options[option] = customOptions[option]
            }
        }

        function addFunctionCloseModal(modal) {
            var classCloseButton = options.closeButtonClass? $(options.closeButtonClass) : null;

            if(classCloseButton) {
                classCloseButton.on('click', function (e) {
                    e.preventDefault();
                    modal.fadeOut();
                })
            }
        }

        function setWidth(node) {
            node.css('width', options.width + 'px')
        }

        function closeOutside(e) {
            var target = $(e.target);
            if (!(target.is('.custom-modal-inner') || target.is('.custom-modal-inner *'))) {
                $(this).fadeOut();
            }
        }

        this.each(function () {
            var button = $(this);
            var modalWindow = $(button.attr('data-nodeModal'));
            var modalWindowInner = modalWindow.find('.custom-modal-inner');

            setWidth(modalWindowInner);
            button.on('click', function (e) {
                e.preventDefault()
                modalWindow.fadeIn();
                modalWindow.css('display', 'flex')
                $('.main-page-modal-btn-element').click(function () {
                    $(this).closest('#main-modal').fadeOut()
                })
            })

            modalWindow.on('click', closeOutside);

            addFunctionCloseModal(modalWindow)
        })
    };
    $('button[data-nodeModal],a[data-nodeModal]').customModal({
        width: 500,
        closeButtonClass: '.close-modal'
    })
}



