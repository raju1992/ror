/**
 * Created by ashwin on 2/10/15.
 */
/**
 * Created by ashwin on 1/10/15.
 */


$(document).ready(function(){
    var $fact=$('.parent');
    var $qwerty=$('.new-parent');
    //$("table").toggle()
    $('#button-click').on('click',function(event){
        event.preventDefault();



        $.ajax({
            url: "",
            type:"GET",

            dataType: 'json',

            success:function(data){

                if($("table").hasClass("parent")){
                    $fact.append('<tr><th>Name</th><th>Date</th><th>Location</th></tr>');
                    $.each(data, function(i,info){

                        $fact.append('<tr><td>'+info.name+'</td><td>'+info.datesofevent+'</td><td>'+info.location+'</td></tr>');

                    });
                    $("table").removeClass("parent").addClass("new-parent");
                }
                else{
                    $fact.empty()

                    $("table").removeClass("new-parent").addClass("parent");
                }




            },
            error:function(response){
                console.log(status)

            }


        });




    });
    //$fact.remove();



});
