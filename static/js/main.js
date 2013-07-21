$(document).on('ready',function(){

    $('.content.home').on('click',review.showTags,'.tags');//los mobiles no tienen hover
    //$('.tags').hover(review.showTags,review.showTags);
    /*
    $('.content.home').on({
        mouseenter:review.showTags,
        mouseleave:review.showTags
    },'.tags');//modo 'vivo' por los que se cargan despues
    */
    //header
    $('form#search .triangle').on('click',function(){
        $(this).parent().submit();
    });

    $('.loadMore').on('click',review.loadMore);

});




var review = {};
(function(){
    //metodos privados
    var
        test = function(param){
            param = param || '';
            console.log('test',param);
        },
    
        removeOtherClass = function(obj,c){
            var selector = obj.context.className;
            if(selector && c){
                $('.'+selector+'.'+c).toggleClass(c);
            }
        },

        appEndReview = function(data){
            if(data){
                $('.content.home .reviews').append(data);
            }
        };

    this.showTags = function(e){
        e.preventDefault();
        var $this = $(this);
        removeOtherClass($this,'on');//mobile
        $this.toggleClass('on');
        $this.off('click');//mobile
    };
    
    this.loadMore = function(e){
        e.preventDefault();
        $.get('/moreReviews',appEndReview);        
    };
}).apply(review);


