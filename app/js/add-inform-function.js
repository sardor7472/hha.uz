$(document).ready(function () {


    $('#custom-select-btn').on('click', function () {
        var langSelectBlog = $('<div>', {class: 'languages-select-blog'}),
            langSelect = $('<div>', {class: 'languages-select'}),
            customSelect = $('<select>', {
                class: 'custom-select',
                name: 'region',
                "data-placeholder": 'Language'
            }),
            selectButton = $('<button>', {
                type: 'button',
                id: 'custom-select-close-btn',
                class: 'clon-lang-btn'
            }),
            languageSelectOptions = $('#languageSelect').children();
        selectButton.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="16px" height="16px"><path fill="#f78f8f" d="M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z"/><path fill="#c74343" d="M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z"/></svg>');
        selectButton.on('click', function () {
            $(this).parent().remove();
        })
        languageSelectOptions.each(function () {
            var option = $(this);
            customSelect.append(createOptionSelectLanguage(option.html(), option.val()));
        });
        langSelect.append(customSelect);
        langSelectBlog.append(langSelect);
        $('.languages-blog').append(langSelectBlog);
        langSelectBlog.append(selectButton);
        customSelect.customSelect();
    });









    function createOptionSelectLanguage (text, value) {
        var option = $('<option>', {value: value});

        return option.html(text)
    }


    $('.week-checkbox').on('change', function (e) {
        var value = $(this).prop('checked'),
            timePickerWrap = $(this).closest('.checkbox-form-blog').find('.checkbox-form-wrapper');

        if (value) {
            timePickerWrap.fadeIn()
        } else {
            timePickerWrap.fadeOut()
        }

    })

    $('.checkbox-form-element-plus button').on('click', addTimeHandler);

    function addTimeHandler(e) {
        e.preventDefault();
        var form = $(this).closest('.time-form'),
            clearTimePickerButton = createClearTimePickerButton();
        wrap = $('<div>', {class: 'checkbox-form-element', style: "position: relative"}),
            fromDatePicker = createTimePicker('From'),
            beforeDatePicker = createTimePicker('Before');

        console.log($(this.closest('.time-form')));
        wrap.append(fromDatePicker);
        wrap.append(beforeDatePicker);
        wrap.append(clearTimePickerButton);
        form.append(wrap);
        wrap.fadeIn(600);
    }

    function createTimePicker(text) {
        var wrap = $('<div>', {class: 'datepicker-form'}),
            paragraph = $('<p>', {class: 'checkbox-desc'}),
            innerDiv = $('<div>', {class: 'datepicker-form-wrap'}),
            input = $('<input>', {
                class: 'datepicker-form-element-from timepicker',
                type: 'text',
                readonly: true,
                placeholder: '12:45'
            });
        input.timepicker()
        innerDiv.append(input);
        wrap.append(paragraph.html(text))
        wrap.append(innerDiv);

        return wrap;
    }

    function createClearTimePickerButton() {
        var button = $('<button>', {class: 'clear-time-picker-btn'})
        button.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="16px" height="16px"><path fill="#f78f8f" d="M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z"/><path fill="#c74343" d="M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z"/></svg>');
        button.on('click', function (e) {
            e.preventDefault();
            $(this).parent().remove();
        })
        return button;
    }


});