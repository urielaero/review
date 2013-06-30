$(document).on('ready',function(){

    $('.tags').on('click',review.showTags);//los mobils no tienen hover
    //$('.tags').hover(review.showTags,review.showTags);
    $('.tags').on({
        mouseenter:review.showTags,
        mouseleave:review.showTags
    })
    $('.loadMore').on('click',review.loadMore);
});




var review = {};
(function(){
    test = function(param){
        param = param || '';
        console.log('test',param);
    }
    
    removeOtherClass = function(obj,c){
        var selector = obj.context.className;
        if(selector && c){
            $('.'+selector+'.'+c).toggleClass(c);
        }
    }

    this.showTags = function(e){
        e.preventDefault();
        $this = $(this);
        removeOtherClass($this,'on');//mobile
        $this.toggleClass('on');
        $this.off('click');//mobile
    }
    
    appEndReview = function(data){
        if(data){
            $('.content.home .reviews').append(data);
        }
    }

    this.loadMore = function(e){
        e.preventDefault();
        $.get('/moreReviews',appEndReview);        
    }
}).apply(review);


