
var data = [{
  type: 'pie',
  marker: {
    colors: ['#0D0630', '#43384F', '#8BBEB2','#E6F9AF','#DAB49D','#4D1930', '#A8CC9E', '#C1CE47']
  },
      values: [39, 67, 27, 5, 46, 5, 21, 7],
      text:['Humanities','Social Sciences', 'Physical Sciences',
      'Undeclared', 'Life Sciences', 'Theater, Film, and Television',
    'School of Engineering', 'School of the Arts and Architecture' ],
      hovertext: ['Humanities (Total): 39<br><br>Arts: 7<br>Blogging: 3<br>Copy: 7<br>Design: 1<br>Graphics: 1<br>Illustrations: 0<br>News: 7<br>Online: 2<br>Opinion: 4<br>Photo: 0<br>Sports: 2<br>Video: 5<br>',
      'Social Sciences (Total): 67<br><br>Arts: 3<br>Blogging: 0<br>Copy: 6<br>Design: 0<br>Graphics: 3<br>Illustrations: 3<br>News: 12<br>Online: 0<br>Opinion: 15<br>Photo: 3<br>Sports: 9<br>Video: 13<br>',
      'Physical Sciences (Total): 27<br><br>Arts: 0<br>Blogging: 2<br>Copy: 2<br>Design: 1<br>Graphics: 1<br>Illustrations: 1<br>News: 5<br>Online: 5<br>Opinion: 1<br>Photo: 1<br>Sports: 3<br>Video: 5<br>',
      'Undeclared (Total): 5<br><br>Arts: 1<br>Blogging: 0<br>Copy: 0<br>Design: 0<br>Graphics: 0<br>Illustrations: 0<br>News: 1<br>Online: 0<br>Opinion: 0<br>Photo: 1<br>Sports: 2<br>Video: 0<br>',
      'Life Sciences (Total): 46<br><br>Arts: 1<br>Blogging: 3<br>Copy: 6<br>Design: 4<br>Graphics: 5<br>Illustrations: 6<br>News: 8<br>Online: 0<br>Opinion: 5<br>Photo: 6<br>Sports: 1<br>Video: 1<br>',
      'Theater, Film, and Television (Total): 5<br><br>Arts: 2<br>Blogging: 0<br>Copy: 0<br>Design: 0<br>Graphics: 0<br>Illustrations: 0<br>News: 0<br>Online: 0<br>Opinion: 0<br>Photo: 1<br>Sports: 1<br>Video: 1<br>',
      'School of Engineering (Total): 21<br><br>Arts: 1<br>Blogging: 1<br>Copy: 1<br>Design: 3<br>Graphics: 0<br>Illustrations: 0<br>News: 2<br>Online: 11<br>Opinion: 0<br>Photo: 0<br>Sports: 1<br>Video: 1<br>',
      'School of the Arts and Architecture (Total): 7<br><br>Arts: 0<br>Blogging: 0<br>Copy: 0<br>Design: 1<br>Graphics: 0<br>Illustrations: 2<br>News: 0<br>Online: 0<br>Opinion: 0<br>Photo: 3<br>Sports: 0<br>Video: 1<br>'
      ],
      hoverinfo:'text',
      labels: ['Humanities','Social Sciences', 'Physical Sciences',
      'Undeclared', 'Life Sciences', 'Theater, Film, and Television',
    'School of Engineering', 'School of the Arts and Architecture' ]
}];

var layout = {
	title: '2018 Acceptances by Department',
	height: 700,
  width: 1100,
};
Plotly.newPlot('majors-graph', data, layout, {
  displayModeBar: false
}).then(gd => {
  gd.on('plotly_legendclick', () => true)
});
