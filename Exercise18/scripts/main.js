$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    $.get(appendUrl,function(result){
        var appendElm=$('#append');
        var fullHTML="";
        for(var i=0;i< result.length; i++){
            var post=result[i];
            var html='<li>Index'+ i +'title:'+post.title+'</li>';
            
            appendElm.append(html);

        }
    });
//

 var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';

 $.get(prependUrl,function(result){
        var prependElm=$('#prepend');
        var fullHTML="";
        for(var i=0;i < result.length; i++){
            var post=result[i];
            var html='<li>Index'+ i +'title:'+post.title+'</li>';
            
            prependElm.prepend(html);

        }
 });
});