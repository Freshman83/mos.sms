var model = new Model();
var controller = new Controller(model);
$(controller.onLoaded);

function changeTheme(theme){   
    $("#converter").removeClass('ui-page-theme-a ui-page-theme-b').addClass('ui-page-theme-' + theme);
}