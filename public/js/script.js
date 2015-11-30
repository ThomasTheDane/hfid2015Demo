window.addEventListener("load",run,false);

var COLORS = {
  selected: "#156999",
  unselected: "#D3D3D3"
}
var activityObject = {};
var states = ['Afghanistan','Angola','Albania','United Arab Emirates',
  'Argentina','Armenia','Antarctica','French Southern and Antarctic Lands',
  'Australia','Austria','Azerbaijan','Burundi','Belgium','Benin','Burkina Faso',
  'Bangladesh','Bulgaria','The Bahamas','Bosnia and Herzegovina','Belarus','Belize'
  ,'Bolivia','Brazil','Brunei','Bhutan','Botswana','Central African Republic','Canada',
  'Switzerland','Chile','China','Ivory Coast','Cameroon','Democratic Republic of the Congo',
  'Republic of the Congo','Colombia','Costa Rica','Cuba','Northern Cyprus','Cyprus','Czech Republic',
  'Germany','Djibouti','Denmark','Dominican Republic','Algeria','Ecuador','Egypt','Eritrea','Spain',
  'Estonia','Ethiopia','Finland','Fiji','Falkland Islands','France','French Guiana','Gabon',
  'United Kingdom','Georgia','Ghana','Guinea','Gambia','Guinea Bissau','Equatorial Guinea',
  'Greece','Greenland','Guatemala','Guyana','Honduras','Croatia','Haiti','Hungary','Indonesia',
  'India','Ireland','Iran','Iraq','Iceland','Israel','Italy','Jamaica','Jordan','Japan','Kazakhstan',
  'Kenya','Kyrgyzstan','Cambodia','South Korea','Kosovo','Kuwait','Laos','Lebanon','Liberia','Libya',
  'Sri Lanka','Lesotho','Lithuania','Luxembourg','Latvia','Morocco','Moldova','Madagascar','Mexico',
  'Macedonia','Mali','Myanmar','Montenegro','Mongolia','Mozambique','Mauritania','Malawi','Malaysia',
  'Namibia','New Caledonia','Niger','Nigeria','Nicaragua','Netherlands','Norway','Nepal','New Zealand',
  'Oman','Pakistan','Panama','Peru','Philippines','Papua New Guinea','Poland','Puerto Rico','North Korea',
  'Portugal','Paraguay','Qatar','Romania','Russia','Rwanda','Western Sahara','Saudi Arabia','Sudan',
  'South Sudan','Senegal','Solomon Islands','Sierra Leone','El Salvador','Somaliland','Somalia',
  'Republic of Serbia','Suriname','Slovakia','Slovenia','Sweden','Swaziland','Syria','Chad','Togo',
  'Thailand','Tajikistan','Turkmenistan','East Timor','Trinidad and Tobago','Tunisia','Turkey',
  'Taiwan','United Republic of Tanzania','Uganda','Ukraine','Uruguay','United States of America',
  'Uzbekistan','Venezuela','Vietnam','Vanuatu','West Bank','Yemen','South Africa','Zambia','Zimbabwe'];
var selectedCountries = [];
var stateToCode = {'Afghanistan':'AFG','Angola':'AGO','Albania':'ALB','United Arab Emirates':'ARE',
  'Argentina':'ARG','Armenia':'ARM','Antarctica':'ATA','French Southern and Antarctic Lands':'ATF',
  'Australia':'AUS','Austria':'AUT','Azerbaijan':'AZE','Burundi':'BDI','Belgium':'BEL','Benin':'BEN',
  'Burkina Faso':'BFA','Bangladesh':'BGD','Bulgaria':'BGR','The Bahamas':'BHS',
  'Bosnia and Herzegovina':'BIH','Belarus':'BLR','Belize':'BLZ','Bolivia':'BOL','Brazil':'BRA','Brunei':'BRN',
  'Bhutan':'BTN','Botswana':'BWA','Central African Republic':'CAF','Canada':'CAN','Switzerland':'CHE',
  'Chile':'CHL','China':'CHN','Ivory Coast':'CIV','Cameroon':'CMR','Democratic Republic of the Congo':'COD',
  'Republic of the Congo':'COG','Colombia':'COL','Costa Rica':'CRI','Cuba':'CUB',
  'Cyprus':'CYP','Czech Republic':'CZE','Germany':'DEU','Djibouti':'DJI','Denmark':'DNK','Dominican Republic':'DOM',
  'Algeria':'DZA','Ecuador':'ECU','Egypt':'EGY','Eritrea':'ERI','Spain':'ESP','Estonia':'EST','Ethiopia':'ETH'
  ,'Finland':'FIN','Fiji':'FJI','Falkland Islands':'FLK','France':'FRA','French Guiana':'GUF','Gabon':'GAB',
  'United Kingdom':'GBR','Georgia':'GEO','Ghana':'GHA','Guinea':'GIN','Gambia':'GMB','Guinea Bissau':'GNB',
  'Equatorial Guinea':'GNQ','Greece':'GRC','Greenland':'GRL','Guatemala':'GTM','Guyana':'GUY','Honduras':'HND',
  'Croatia':'HRV','Haiti':'HTI','Hungary':'HUN','Indonesia':'IDN','India':'IND','Ireland':'IRL','Iran':'IRN',
  'Iraq':'IRQ','Iceland':'ISL','Israel':'ISR','Italy':'ITA','Jamaica':'JAM','Jordan':'JOR','Japan':'JPN',
  'Kazakhstan':'KAZ','Kenya':'KEN','Kyrgyzstan':'KGZ','Cambodia':'KHM','South Korea':'KOR',
  'Kuwait':'KWT','Laos':'LAO','Lebanon':'LBN','Liberia':'LBR','Libya':'LBY','Sri Lanka':'LKA','Lesotho':'LSO',
  'Lithuania':'LTU','Luxembourg':'LUX','Latvia':'LVA','Morocco':'MAR','Moldova':'MDA','Madagascar':'MDG',
  'Mexico':'MEX','Macedonia':'MKD','Mali':'MLI','Myanmar':'MMR','Montenegro':'MNE','Mongolia':'MNG','Mozambique':'MOZ',
  'Mauritania':'MRT','Malawi':'MWI','Malaysia':'MYS','Namibia':'NAM','New Caledonia':'NCL','Niger':'NER','Nigeria':'NGA',
  'Nicaragua':'NIC','Netherlands':'NLD','Norway':'NOR','Nepal':'NPL','New Zealand':'NZL','Oman':'OMN','Pakistan':'PAK',
  'Panama':'PAN','Peru':'PER','Philippines':'PHL','Papua New Guinea':'PNG','Poland':'POL','Puerto Rico':'PRI',
  'North Korea':'PRK','Portugal':'PRT','Paraguay':'PRY','Qatar':'QAT','Romania':'ROU','Russia':'RUS','Rwanda':'RWA',
  'Western Sahara':'ESH','Saudi Arabia':'SAU','Sudan':'SDN','South Sudan':'SSD','Senegal':'SEN','Solomon Islands':'SLB',
  'Sierra Leone':'SLE','El Salvador':'SLV','Somalia':'SOM','Republic of Serbia':'SRB','Suriname':'SUR',
  'Slovakia':'SVK','Slovenia':'SVN','Sweden':'SWE','Swaziland':'SWZ','Syria':'SYR','Chad':'TCD','Togo':'TGO',
  'Thailand':'THA','Tajikistan':'TJK','Turkmenistan':'TKM','East Timor':'TLS','Trinidad and Tobago':'TTO','Tunisia':'TUN',
  'Turkey':'TUR','Taiwan':'TWN','United Republic of Tanzania':'TZA','Uganda':'UGA','Ukraine':'UKR','Uruguay':'URY',
  'United States of America':'USA','Uzbekistan':'UZB','Venezuela':'VEN','Vietnam':'VNM','Vanuatu':'VUT','West Bank':'PSE',
  'Yemen':'YEM','South Africa':'ZAF','Zambia':'ZMB','Zimbabwe':'ZWE'};

function indicateHeatMap() {
  var heatColors = ["#EEEEEE","#E5E5FF","#CCCCFF","#B2B2FF", "#9999FF","#7F7FFF","#6666FF","#4C4CFF"];

  for (key in stateToCode) {
    activityObject[stateToCode[key]]  = heatColors[Math.floor(Math.random()*heatColors.length)];;

  }
  map.updateChoropleth(activityObject);
}


function classifyCountry(name) {
  var test =  name.replace(/ /g, "-");
  return test;
}

var deselectMap = function(name) {
  var testObj = {};
  testObj[name] = activityObject[name];
  console.log(testObj);
  map.updateChoropleth(testObj);
};

var selectMap = function(name) {
  var testObj = {};
  testObj[name] = COLORS.selected;
  map.updateChoropleth(testObj);
}

var removeFromList = function(element) {
  var $item = element.closest("tr")   // Finds the closest row <tr> 
    .find(".ourLabel")     // Gets a descendent with class="nr"
    .text();         // Retrieves the text within <td>
  selectedCountries.splice($item,1);
  console.log($item);
  element.parent().remove();
  var code = stateToCode[$item];
  var testObj = {};
  return code;
}

var addToList = function(name) {
  selectedCountries.push(name);
  var newRow = d3.select("#selectedCountries").append("tr");
  newRow.attr("height","30px");
  console.log("ANOTHER TEST " + classifyCountry(name));
  newRow.classed(classifyCountry(name)+"-row",true);
  newRow.append("td")
    .classed("ourLabel", true)
    .html(name);
  newRow.append("td")
    .classed("test",true)
    .html("X")
    .on("click", function(element) {
      deselectMap(removeFromList($(this)));

    });

}


function search(ele) {
  if(event.keyCode == 13) {
    var code = stateToCode[ele.value];
    if (code != undefined) {
      var testObj = {};
      testObj[code] = COLORS.selected;
      map.updateChoropleth(testObj);
      addToList(ele.value);
      console.log(ele);
      $('.typeahead').typeahead('setQuery', '');
    }

  }
}
var map;
var mapSvg;


  
function run() {
  $(".test").click(function() {
    var $item = $(this).closest("tr")   // Finds the closest row <tr> 
      .find(".ourLabel")     // Gets a descendent with class="nr"
      .text();         // Retrieves the text within <td>     // Outputs the answer
  });
  map = new Datamap({
    id:"map-svg",
    element: document.getElementById('map'),
    geographyConfig: {
      popupOnHover: false, //disable the popup while hovering
      highlightOnHover: false,
//      borderColor: '#000000'
    },
    fills: {
      defaultFill: COLORS.unselected
    },
    done: function(datamap) {

      datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));
      function redraw() {
        datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
      }

      datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {

        console.log(selectedCountries);
        if (selectedCountries.indexOf(geography.properties.name) >= 0) {
          deselectMap(geography.id);
          selectedCountries.splice(selectedCountries.indexOf(geography.properties.name),1);
          d3.selectAll("." + classifyCountry(geography.properties.name) + "-row").remove();

        } else {
          selectMap(geography.id);
          addToList(geography.properties.name);
        }

      });

      datamap.svg.selectAll('.datamaps-subunit').on('hover', function(geography) {
      });

    }});


  indicateHeatMap();

  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  };





  $('#the-basics .typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      source: substringMatcher(states)
    });









};	






