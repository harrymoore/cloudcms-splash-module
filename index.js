define(function(require) {

    require("./splash/login-splash.js");

    var $ = require("jquery");
    var OneTeam = require("oneteam");

    $(document).on("dispatch", function(event, ratchet, completed) {
        if (event.currentTarget.location.hash === "#/logout" && completed)
        {
            Ratchet.deleteCookie("login-splash");
        }
        else if (event.currentTarget.location.hash === "#/" && completed)
        {
            if (!ratchet.isDetached())
            {
                if (!Ratchet.readCookie("login-splash"))
                {
                    Ratchet.writeCookie("login-splash", "login-splash", null, 0.5, null);

                    var config = {};
                    config.title = "Welcome to Cloud CMS";
                    config.cancel = false;
                    config.close = true;

                    OneTeam.showOverlay("login-splash", config, function (err) {
                    });
                }
            }
        }
    });
});
