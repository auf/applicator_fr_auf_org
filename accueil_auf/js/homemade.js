$("[rel='tooltip']").tooltip();

            $('#hover-img .thumbnail').hover(

                    function () {
                        $(this).find('.caption1').slideDown(250);
                        $(this).find('.caption1-btm').hide(250);
                    },

                    function () {
                        $(this).find('.caption1').slideUp(250);
                        $(this).find('.caption1-btm').show(250);
                    });
