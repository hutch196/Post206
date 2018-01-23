/**
 * Created by Hutch on 2/12/17.
 */
var leaders = data.Leaders;

var resources = data.Resources;

var newsItems = data.NewsItems;

var isIE = !!document.documentMode;

$(document).ready(function(){
    if(isIE) {
        $('body').append(
            '<div class="browser-warning">*It seems that you are using an unsupported browser. For the best experience, ' +
            'try upgrading to a modern web browser like Microsoft Edge, Google Chrome, Mozilla Firefox, or Apple Safari.</div>'
        );
    }
    $("footer").append(
        '<div class="col-sm-12">' +
            '<div class="col-sm-4"></div>' +
            '<div class="col-sm-4">' +
                '<div class="col-sm-3"></div>' +
                '<div class="col-sm-3">' +
                    '<a href="https://www.facebook.com/willstaceypost206/">' +
                        '<span class="fa fa-3x fa-facebook"></span>' +
                    '</a>' +
                '</div>' +
                '<div class="col-sm-3">' +
                    '<a href="https://www.flickr.com/gp/148102224@N03/WS157P"><span class="fa fa-3x fa-flickr"></span></a>' +
                '</div>' +
                '<div class="col-sm-3"></div>' +
                //'<div class="col-sm-3">' +
                //    '<a href="#"><span class="fa fa-3x fa-youtube"></span></a>' +
                //'</div>' +
                //'<div class="col-sm-3">' +
                //    '<a href="#"><span class="fa fa-3x fa-snapchat-ghost"></span></a>' +
                //'</div>' +
                '<div class="col-sm-12">' +
                    '<a href="#">Privacy Policy</a>' +
                    '<span>|</span>' +
                    '<a href="#">Terms of Service</a>' +
                '</div>' +
                '<div class="col-sm-12"><span class="fa fa-copyright"></span>2017 Post 206</div>' +
            '</div>' +
            '<div class="col-sm-4"></div>' +
        '</div>'
    );

    $("nav").append(
        '<div class="container-fluid">' +
            '<div class="navbar-header">' +
                '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">' +
                '<span class="sr-only">Toggle navigation</span>' +
                '<span class="icon-bar"></span>' +
                '<span class="icon-bar"></span>' +
                '<span class="icon-bar"></span>' +
                '</button>' +
                '<a class="navbar-brand" href="#"><h1>POST 206</h1><h3>William C. Stacey</h3></a>' +
            '</div>' +
            '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
                '<ul class="nav navbar-nav">' +
                    '<li class=""><a href="index.html">Home </a></li>' +
                    '<li class="">' +
                        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' +
                            'About <span class="caret"></span>' +
                            '<ul class="dropdown-menu">' +
                                '<li><a class="nav-dropdown-item" href="mission.html">Mission, Values, Vision </a></li>' +
                                '<li><a class="nav-dropdown-item" href="leadership.html">Leadership </a></li>' +
                                '<li><a class="nav-dropdown-item" href="calendar.html">Calendar </a></li>' +
                            '</ul>' +
                        '</a>' +
                    '</li>' +
                    '<li class=""><a href="news.html">News </a></li>' +
                    '<li class=""><a href="resources.html">Resources </a></li>' +
                    '<li class=""><a href="contact.php">Contact </a></li>' +
                    '<li class="header-donate">' +
                        '<a>' +
                        //'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">' +
                        //    '<input type="submit" name="submit" value="Donate"></input>' +
                        //    '<input type="hidden" name="cmd" value="_s-xclick">' +
                        //    '<input type="hidden" name="hosted_button_id" value="XGQ966JSWVELU">' +
                        //    '<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
                        //    '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
                        //'</form>' +
                            '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
                                '<input type="hidden" name="cmd" value="_s-xclick">' +
                                '<input type="hidden" name="hosted_button_id" value="N55G5HTDT9J76">' +
                                '<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
                                '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
                            '</form>' +
                        '</a>' +
                        //'<a href="https://www.paypal.com/donate/?token=JM57jIZuvd7iAxGHwCBIvKqtHkTB-5Ma9neJHckpcmKy2PmfaALUaTzsIBhR_GdIkzsKFm" target="_blank">Donate </a>' +
                    '</li>' +
                    // '<li>' +
                    //     '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"> ' +
                    //         '<input type="submit" name="submit" value="Donate">' +
                    //         '<input type="hidden" name="cmd" value="_s-xclick">' +
                    //         '<input type="hidden" name="hosted_button_id" value="XGQ966JSWVELU">' +
                    //         '<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
                    //         '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
                    //     '</form>' +
                    // '</li>' +
                '</ul>' +
            '</div>' +
        '</div>'
    );

    function getNewsItem(id){
        for(var i = 0; i < newsItems.length; i++){
            var item = newsItems[i];
            var parsedId = parseInt(id);
            if(item.Id === parsedId){
                return item;
            }
        }
        return null;
    };

    function activateNewsItem(event, id){
        event.preventDefault();
        var item = getNewsItem(id);
        if(!!item){
            $("#news-item-modal-container").show();
        }
    };

    var counter = 0;
    var itemArray = [];
    $.each(newsItems, function(index){
       var item = newsItems[index];
       $('#news-mobile-container').append(
           '<div class="row">' +
               '<div class="col-sm-6">' +
                    '<img src="img/' + item.Thumbnail + '" alt="thumbnail">' +
               '</div>' +
               '<div class="col-sm-6">' +
                    '<h4>' + item.Title + '</h4>' +
                    '<p class="abstract">' +
                         item.Abstract +
                    '</p>' +
                    '<span id="' + item.Id + '" class="read-more-link" >Read more...</span>' +
               '</div>' +
               '<hr />' +
           '</div>'
       );
       itemArray.push(item);
       counter++;
       if(counter === 4){
           counter = 0;
           var item1 = itemArray[0];
           var item2 = itemArray[1];
           var item3 = itemArray[2];
           var item4 = itemArray[3];
           if(!!item1 && !!item2 && !!item3 && !!item4){
               $("#news-container").append(
                   '<div class="col-sm-2 news-item-spacer">&nbsp;</div>' +
                   '<div class="col-sm-2 news-item">' +
                       '<h4>' + item1.Title + '</h4>' +
                       '<div class="col-sm-12">' +
                       '<img src="img/' + item1.Thumbnail + '" alt="thumbnail">' +
                       '</div>' +
                       '<div class="col-sm-12">' +
                       '<p class="abstract">' +
                       item1.Abstract +
                       '</p>' +
                       '<span id="' + item1.Id + '" class="read-more-link" >Read more...</span>' +
                       '</div>' +
                   '</div>' +
                   '<div class="col-sm-2 news-item">' +
                       '<h4>' + item2.Title + '</h4>' +
                       '<div class="col-sm-12">' +
                       '<img src="img/' + item2.Thumbnail + '" alt="thumbnail">' +
                       '</div>' +
                       '<div class="col-sm-12">' +
                       '<p class="abstract">' +
                       item2.Abstract +
                       '</p>' +
                       '<span id="' + item2.Id + '" class="read-more-link" >Read more...</span>' +
                       '</div>' +
                   '</div>' +
                   '<div class="col-sm-2 news-item">' +
                       '<h4>' + item3.Title + '</h4>' +
                       '<div class="col-sm-12">' +
                       '<img src="img/' + item3.Thumbnail + '" alt="thumbnail">' +
                       '</div>' +
                       '<div class="col-sm-12">' +
                       '<p class="abstract">' +
                       item3.Abstract +
                       '</p>' +
                       '<span id="' + item3.Id + '" class="read-more-link" >Read more...</span>' +
                       '</div>' +
                   '</div>' +
                   '<div class="col-sm-2 news-item">' +
                       '<h4>' + item4.Title + '</h4>' +
                       '<div class="col-sm-12">' +
                       '<img src="img/' + item4.Thumbnail + '" alt="thumbnail">' +
                       '</div>' +
                       '<div class="col-sm-12">' +
                       '<p class="abstract">' +
                       item4.Abstract +
                       '</p>' +
                       '<span id="' + item4.Id + '" class="read-more-link" >Read more...</span>' +
                       '</div>' +
                   '</div>' +
                   '<div class="col-sm-2 news-item-spacer">&nbsp;</div>' +
                    '<div class="col-sm-12"><hr /></div>'
               );
           }

           itemArray = [];
       }
    });

    function isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

    $(document).on('click', '.read-more-link', function(event){
        var id = this.id;
        var item = getNewsItem(id);
        var link = item.Link;

        if(!!item && (!link || isEmptyOrSpaces(link))){
            $("#news-item-modal-container").show();
            $("body").css("overflow", "hidden");
            $(".active-news-item-container").html(
                '<span class="exit-icon fa fa-close fa-2x"></span>' +
                '<div class="row">' +
                    '<div class="col-sm-12">' +
                        '<h1>' + item.Title + '</h1>' +
                        '<h4>' + item.Date + '</h4>' +
                    '</div>' +
                '</div>' +
                '<hr>' +
                '<div class="row">' +
                    '<div class="col-sm-12">' +
                        '<img src="http://placehold.it/600x350" alt="">' +
                    '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-sm-12">' +
                        '<p>' + item.FullStory + '</p>' +
                '</div>'
            );
        } else {
            var win = window.open(link, '_blank');
            win.focus();
        }
    });

    $(document).on('click', '.exit-icon', function(){
        $("body").css("overflow", "inherit");
        $("#news-item-modal-container").hide();
        $(".active-news-item-container").html('<span class="exit-icon fa fa-close fa-2x"></span>')
    });

    $.each(resources, function(index){
        var resource = resources[index];
        $("#resources-container .row .resources").append(
            '<div id="resource-' + resource.Id + '" class="resource col-sm-4">' +
                '<div class="flip-container" ontouchstart="this.classList.toggle("hover");">' +
                    '<div class="flipper">' +
                        '<div class="front">' +
                             // <!-- front content -->
                            '<img src="img/' + resource.Picture + '" alt="' + resource.Alt + '"/>' +
                        '</div>' +
                        '<div class="back active-resource">' +
                            //<!-- back content -->
                            //'<img src="img/' + leader.ServicePicture + '">' +
                            '<h2>' + resource.Name + '</h2><p>' + resource.Snippet + '</p><br /><a href="' + resource.Link + '" target="_blank">Check it out >></a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
        $('#resources-mobile-container').append(
            '<div id="resource-' + resource.Id + '" class="resource col-sm-4">' +
                /*'<h2>' + resource.Name + '</h2>*/'<img src="img/' + resource.Picture + '" alt="' + resource.Alt + '"/><p>' + resource.Snippet + '</p><br /><a href="' + resource.Link + '" target="_blank">Check it out >></a>' +
            '</div>' +
            '<hr />'
        );
    });

    function findResource(id){
        for(var i = 0; i < resources.length; i++){
            var resource = resources[i];
            if(id.indexOf(resource.Id) > -1){
                return resource;
            }
        }
        return null;
    };

    //$(".resource").hover(function(){
    //    var id = this.id;
    //    var resource = findResource(id);
    //    if(resource != null){
    //        var elem = $("#" + id);
    //        elem.addClass("active-resource");
    //        this.innerHTML = '<h1>' + resource.Name + '</h1><p>' + resource.Snippet + '</p><br /><a href="' + resource.Link + '" target="_blank">Check it out</a>';
    //    }
    //},
    //function(){
    //    var id = this.id;
    //    var resource = findResource(id);
    //    if(resource != null){
    //        var elem = $("#" + id);
    //        elem.removeClass("active-resource");
    //        this.innerHTML = '<img src="img/' + resource.Picture + '" alt="' + resource.Alt + '"/>';
    //    }
    //});

    $.each(leaders, function(index){
        var leader = leaders[index];
        var bioArray = leader.Bio.split("|||");
        var bioString = "";
        for(var i = 0; i < bioArray.length; i++){
            bioString += "<p>" + bioArray[i] + "</p><br />";
        }
        $("#leadership-container").append(
            '<div class="row profile">' +
                '<div class="col-sm-3">' +
                    '<div class="flip-container" ontouchstart="this.classList.toggle("hover");">' +
                        '<div class="flipper">' +
                            '<div class="front">' +
                                // <!-- front content -->
                                '<img src="img/' + leader.Picture + '">' +
                            '</div>' +
                            '<div class="back">' +
                                //<!-- back content -->
                                '<img src="img/' + leader.ServicePicture + '">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-sm-8">' +
                    '<h2>' + leader.Name + '</h2>' +
                    '<h3>' + leader.Rank + '</h3>' +
                    bioString +
                '</div>' +
            '</div>' +
            '<hr />'
        );
    });

    window.addEventListener('scroll', function(e){
        var screenWidth = document.documentElement.clientWidth;
        if(screenWidth <= 767){
            return;
        }
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            var shrinkOn = 300;
            header = $(".navbar.navbar-default");
        if (distanceY > shrinkOn) {
            header.addClass("smaller");
        } else {
            if (header.hasClass("smaller")) {
                header.removeClass("smaller");
            }
        }
    });
});