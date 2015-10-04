/**
 * Created by ashwin on 2/10/15.
 */
/**
 * Created by ashwin on 1/10/15.
 */


$(document).ready(function(){
    var $fact=$('.parent');
    var $qwerty=$('.new-parent');
    var $map=$('#multi_markers');
    //$("table").toggle()
    $('#button-click').on('click',function(event){
        event.preventDefault();



        $.ajax({
            url: "",
            type:"GET",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',

            success:function(data){
                var dict={};
                // dict["a"]=1;
                $.each(data,function(i,info){
                    var qwe=info.location;
                    qwe=qwe.split(',');
                    qwe=qwe[1];
                    //console.log(qwe);
                    dict[qwe]?dict[qwe].value+=1:dict[qwe]={value:1};


                });
                $.each(dict,function(i,j){
                    console.log(i+":"+dict[i].value);
                });

                draw(data);

                if($("table").hasClass("parent")){

                    map(data);


                    $fact.append('<tr><th>Name</th><th>Date</th><th>Location</th></tr>');
                    $.each(data, function(i,info){

                        $fact.append('<tr><td>'+info.name+'</td><td>'+info.datesofevent+'</td><td>'+info.location+'</td></tr>');

                    });
                    $("table").removeClass("parent").addClass("new-parent");

                    //$("#multi_markers").removeClass("map").addClass("new-map");
                }
                else{
                    $map.remove()
                    $fact.empty()
                    $("#mapping").append('<div  id="multi_markers" style="width: 250px; height: 250px;"></div>');
                    $map=$('#multi_markers')

                    $("table").removeClass("new-parent").addClass("parent");

                }




            },
            error:function(response){
                console.log(status)

            }


        });
       /* function draw(data){
            var color= d3.scale.category20b();
            var width=420,
            barHeight=20;
            var x=d3.scale.linear()
                .range([0,width])
                .domain([0,d3.max(data)]);
            var chart=d3.select("#graph").attr("width",width).attr("height",barHeight*data.length);
            var bar=chart.selectAll("g").data(data).enter().append("g").attr("transform",function(d,i){
                return "translate(0,"+i*barHeight+")";
            });
            bar.append("rect").attr("width",x).attr("height",barHeight-1).style("fill",function(d){
                return color(d)
            })
            bar.append("text").attr("x",function(d){
                return x(d)-10;
            })
                .attr("y",barHeight/2)
                .attr("dy",".35em")
                .style("fill","white")
                .text(function(d){
                    return d;
                });
        }*/

        function map(data){
            var handler = Gmaps.build('Google');
            handler.buildMap({ internal: {id: 'multi_markers'}}, function(){
                var t=[];
                $.each(data,function(i,j){
                    t.push({lat: j.latitude,lng: j.longitude});

                });

                var markers = handler.addMarkers(t);
                handler.bounds.extendWith(markers);
                handler.fitMapToBounds();
            });
        }
        function draw(dict){


            var margin ={top:20,right:20,bottom:30,left:40},
                width=960-margin.left-margin.right,
                height=500-margin.top-margin.bottom;
            var y=d3.scale.linear()
                .domain([0,10])
                .range([0,1]);
            var x= d3.scale.ordinal()
                .rangeRoundBands([0,width],.1)
                .domain(d3.entries(dict).map(function(d){return d.key;}));
            var xAxis=d3.svg.axis()
                .scale(x)
                .orient("bootom");
            var yAxis=d3.svg.axis()
                .scale(y)
                .orient("left");

          /*  var dict={};
           // dict["a"]=1;
            $.each(data,function(i,info){
                var qwe=info.location;
                qwe=qwe.split(',');
                qwe=qwe[1];
                //console.log(qwe);
               dict[qwe]?dict[qwe].value+=1:dict[qwe]={value:1};


            });*/
          /*  $.each(dict,function(i,j){
               console.log(i+":"+dict[i].value);
            });*/
           /* var x=d3.scale.linear()
                .domain([0,d3.max(data)])
                .range([0,420]);
            d3.select(".chart")
                .selectAll("div")
                .data(data)
                .enter().append("div")
                .style("width",function(d){return x(d)+"px";})
                .text(function(d){return d;});*/
        }





    });
    //$fact.remove();



});
