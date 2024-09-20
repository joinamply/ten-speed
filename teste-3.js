   const momentsComponent = $(".podcast-moments_component");
    const momentsItem = $('[moments-item]');
    const momentsContent = $('[moments-content]');

    let time, title;

    momentsContent.children().each(function (index, element) {
        if ($(element).is("h2")) {
            time = $(element).text();
        }
        else {
            title = $(element).text();
            let item = momentsItem.clone().appendTo(momentsComponent);
            item.removeAttr("moments-delete");
            item.find("[moments-time]").text(time);
            item.find("[moments-title]").text(title);
        }
    });

    $('[moments-delete]').remove();