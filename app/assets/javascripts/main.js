/**
 * Created by ashwin on 2/10/15.
 */
/**
 * Created by ashwin on 1/10/15.
 */


$(document).ready(function(){
    var $fact=$('.parent');
    var $qwerty=$('.new-parent');
    var $d3=$('#graph');
    var $map=$('#multi_markers');
    //$("table").toggle()
    $('#button-click').on('click',function(event){
        event.preventDefault();

        //console.log("ffffffffff");
        $.ajax({
            url: "",
            type:"GET",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',

            success:function(data){




                if($("table").hasClass("parent")){

                    map(data);
                    drawd3();




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
                    $d3.remove()
                    $("#mapping").append('<div  id="multi_markers" style="width: 250px; height: 250px;"></div>');
                    $map=$('#multi_markers')
                    $(".graphing").append('<svg id="graph" width="400" height="400"></svg>')
                    $d3=$('#graph')

                    $("table").removeClass("new-parent").addClass("parent");

                }




            },



        });



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


      /*  function drawd3(){

            var bardata=[{
                'x':'2012',
                'y':'20'
            },
                {
                    'x':'2013',
                    'y':'19'
                },
                {
                    'x':'2014',
                    'y':'24'
                },
                {
                    'x':'2015',
                    'y':'19'
                }];
            var vis=d3.select("#visualisation"),
                width=1000,
                height=500,
                margins={
                    top:20,
                    right:20,
                    bottom:20,
                    left:50
                },
                xrange=d3.select.ordinal().rangeRoundBands([margins.left,width-margins.right],0.1).domain(bardata.map(function(d){
                    return d.x;
                })),
                yrange=d3.scale.linear().range([height-margins.top,margins.bottom]).domain([0,d3.max(bardata,function(d){
                    return d.y;
                })
                ]),
                xaxis=d3.svg.axis()
                    .scale(xrange)
                    .tickSize(5)
                    .tickSubdivide(true),
                yaxis=d3.svg.axis()
                    .scale(yrange)
                    .tickSize(5)
                    .orient("left")
                    .tickSubdivide(true);
            vis.append('svg:g')
                .attr('class','x axis')
                .attr('transform','translate(0,'+(height-margins.bottom)+')')
                .call(xaxis);
            vis.append('svg:g')
                .attr('class','y axis')
                .attr('transform','translate('+(margins.left)+',0)')
                .call(yaxis);
            vis.selectAll('rect')
                .data(bardata)
                .enter()
                .append('rect')
                .attr('x',function(d){
                    return xrange(d.x);
                })
                .attr('y',function(d){
                    return yrange(d.y);
                })
                .attr('width',xrange.rangeBand())
                .attr('height',function(d){
                    return ((height-margins.bottom)-yrange(d.y));
                })
                .attr('fill','grey')
                .on('mouseover',function(d){
                    d3.select(this)
                        .attr('fill','blue');
                })
                .on('mouseout',function(d){
                    d3.select(this)
                        .attr('fill','grey');

                });


        }*/

        function drawd3(){

        var barData = [{
            'x': 2012,
            'y': 19
        }, {
            'x': 2013,
            'y': 25
        }, {
            'x': 2014,
            'y': 14
        }, {
            'x': 2015,
            'y': 27
        }];

        //alert("bbbbbbbbbbbbbbbbb")

        var map = d3.select('#graph'),
            WIDTH = 400,
            HEIGHT = 400,
            MARGINS = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 50
            },
            xRange = d3.scale.ordinal().rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.5).domain(barData.map(function (d) {
                return d.x;
            })),


            yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,
                d3.max(barData, function (d) {
                    return d.y;
                })
            ]),

            xAxis = d3.svg.axis()
                .scale(xRange)
                .tickSize(2)
                .orient("bottom")
                .tickSubdivide(true),

            yAxis = d3.svg.axis()
                .scale(yRange)
                .tickSize(2)
                .orient("left")
                .tickSubdivide(true);


        map.append('svg:g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
            .call(xAxis);
        map.append("text")
            .attr("x",WIDTH/2)
            .attr("y",(MARGINS.left-MARGINS.right)/2)
            .style("text-anchor","middle")
            .text("Hackathons in each year");
            map.append("text")
                .attr("x",WIDTH/2)
                .attr("y",HEIGHT+MARGINS.bottom)
                .style("text-anchor","middle")
                .text("years");

        map.append('svg:g')

            .attr('class', 'y axis')
            .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
            .call(yAxis);

            map.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - (MARGINS.left))
                .attr("x", 0 -(HEIGHT / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Value");
        /*map.append("text")
            .attr("transform","rotate(-90)")
            .attr("y",0-MARGINS.left)
            .attr("x",0-HEIGHT)
            .attr("dy","1em")
            .style("text-anchor","middle")
            .text("number of hackathons");*/
        map.selectAll('rect')
            .data(barData)
            .enter()
            .append('rect')
            .attr('x', function (d) {
                return xRange(d.x);
            })
            .attr('y', function (d) {
                return yRange(d.y);
            })
            .attr('width', xRange.rangeBand())
            .attr('height', function (d) {
                return ((HEIGHT - MARGINS.bottom) - yRange(d.y));
            })
            .attr('fill', 'red')
            .on('mouseover',function(d){
                d3.select(this)
                    .attr('fill','blue');
            })
            .on('mouseout',function(d){
                d3.select(this)
                    .attr('fill','red');
            });

    }


    });
    //$fact.remove();



});
