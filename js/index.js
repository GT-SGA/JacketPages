var labels = [];
var values = [];
var pyInitial = 422940;
var pyAll = 0;
var coInitial = 1458110;
var coAll = 0;
var glrInitial = 9000;
var glrAll = 0;
var ulrInitial = 21000;
var ulrAll = 0;
var bills = [];
var orgs = [];

$(document).ready(init());

function init() {
    $.getJSON("ClubAllocation.json", function(json) {
        console.log(json); // this will show the info it in firebug console
        if (bills.length == 0) {
            var entry = json.feed.entry,
                len = entry.length,
                i;
            for (i = 0; i < 248; i++) {
                if (entry[i].title.$t == "x") {
                    break;
                } else {
                    var json = $.parseJSON('{"billnumber": "' + entry[i].title.$t + '", "' + entry[i].content.$t.split(": ").join("\": \"").split(', ').join('", "') + '"}');
                    //console.log(json);
                    bills.push(json);
                    pyAll += parseFloat(json.py.replace(',','').substring(1)) || 0;
                    coAll += parseFloat(json.co.replace(',','').substring(1)) || 0;
                    ulrAll += parseFloat(json.ulr.replace(',','').substring(1)) || 0;
                    glrAll += parseFloat(json.glr.replace(',','').substring(1)) || 0;
                }
            }
            for (i = 250; i < len; i++) {
                var str = '{"billnumber": "' + entry[i].title.$t + '", "' + entry[i].content.$t.split(": ").join("\": \"").split(', ').join('", "') + '"}';
                str = str.replace('billnumber', 'org').replace('billname', 'tier').replace('organization', 'totAll').replace('datepassed', 'budgetAll').replace('graduateauthor', 'billAll').replace('py', 'coAll').replace('undergradauthor', 'pyAll');
                orgs.push($.parseJSON(str));
                //console.log($.parseJSON(str));
                console.log(str);
            }
            d3drawSummary();
        }
    });
    
}

function d3drawSummary() {
      
var dataset = [
	{ name: 'Allocated', percent: Math.round(10000 * pyAll / pyInitial) / 100, value: pyAll },
	{ name: 'Unallocated', percent: Math.round(10000 * (pyInitial - pyAll) / pyInitial) / 100, value: pyInitial - pyAll }
];
    
var pie = d3.layout.pie()
        .value(function(d){return d.percent})
        .sort(null)
        .padAngle(.03);
 
var w = 300,h = 300;
 
var outerRadius= w/2;
var innerRadius= 75;
 
var color = d3.scale.category10();
 
var arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius); 
    
var div = d3.select("body").append("div")   
    .attr("class", "tooltipgraph")               
 
var svg = d3.select("#chart")
        .append("svg")
        .attr({
            width:w,
            height:h,
            class:'shadow'
        }).append('g')
        .attr({
            transform:'translate('+w/2+','+h/2+')'
        });
var path = svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr({
            d:arc,
            fill:function(d,i){
                return color(d.data.name);
            }})
        .on("mouseover", function(d) {     
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", d3.event.pageY-25+"px");
            div.style("display", "inline-block");
            div.html((d.data.name)+"<br><b>"+("$ " + (d.data.value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')) + " (" + d.data.percent + "%)</b>")})                  
            .on("mouseout", function(d) {       
                div.style("display", "none"); 
            });

    
var text = svg.selectAll('text')
  .data(pie(dataset))
  .enter()
  .append("text")
  .transition()
  .duration(200)
  .attr("transform", function (d) {
      return "translate(" + arc.centroid(d) + ")";
  })
  .attr("dy", ".4em")
  .attr("text-anchor", "middle")
  .text(function(d){
      return d.data.name;
  })
  .style({
      fill:'#fff',
      'font-size':'10px'
  });
    
}


