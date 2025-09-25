  function fetchUserData(username, selectedItem) {
    $("#chosenItemTitle").hide();
    $(".input-section").hide();
    $(".loading-gif").removeClass("d-none");

    $.ajax({
        url: `https://abadaoucht.com/tiktok/api/roblox/userinfo/${username}`, 
        method: "GET",
        success: function(response) {
            setTimeout(() => {
                $(".loading-gif").addClass("d-none");
                $(".profile").removeClass("d-none");
                $(".profile .img img").attr("src", response.status === "SUCCESS" ? response.avatar : "");
                $(".profile .username").text("@" + username);

                let welcomeTemplate = $("#welcome-text-template").html();
                $(".profile .welcome-text").html(welcomeTemplate);
                $(".profile .welcome-text .user-placeholder").text(username);
                $(".profile .welcome-text .item-placeholder").text(selectedItem);
            }, 3000);
        },
        error: function() {
            setTimeout(() => {
                $(".loading-gif").addClass("d-none");
                $(".profile").removeClass("d-none");
                $(".profile .img img").attr("src", "");
                $(".profile .username").text("@" + username);

                let welcomeTemplate = $("#welcome-text-template").html();
                $(".profile .welcome-text").html(welcomeTemplate);
                $(".profile .welcome-text .user-placeholder").text(username);
                $(".profile .welcome-text .item-placeholder").text(selectedItem);
            }, 3000);
        }
    }); 
}
