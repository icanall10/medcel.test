(function ($) {

    function behaviors() {

        $('[data-modal-link]')
            .once('modal-link')
            .click(function (e) {
                e.preventDefault();

                let $this = $(this);
                let key = $this.attr('data-modal-link');
                let modal = $('[data-modal=' + key + ']');

                if (modal.length === 0) return;

                let title = modal.attr('data-modal-title');

                modal
                    .dialog({
                        modal: true,
                        title: title
                    })
                    .position({
                        my: 'center',
                        at: 'center',
                        of: window,
                    });
            });


        $('[data-modal-close]')
            .once('modal-close')
            .click(function (e) {
                e.preventDefault();

                $(this)
                    .closest('[data-modal]')
                    .dialog('close');
            });

    }


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);