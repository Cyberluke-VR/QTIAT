define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Luke', //Will appear in the data.
		    title : {
		      media : {word : 'Luke'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'black1.jpg'}, 
    			{image : 'black2.jpg'}, 
    			{image : 'black3.jpg'}, 
    			{image : 'black4.jpg'}, 
    			{image : 'black5.jpg'}, 
    			{image : 'black6.jpg'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'dwqdwqdwqdwqd', //Attribute label
			title : {
				media : {word : 'dwqdqwdwqd'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'A'},
				{word: 'B'},
				{word: 'C'},
				{word: 'dqwqwd'},
				{word: 'dwqwqd'},
				{word: 'fqw'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'asdasdsadsa', //Attribute label
			title : {
				media : {word : 'sadasdasd'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'ds'},
				{word: 'asd'},
				{word: 'dasdas'},
				{word: 'asdasd'},
				{word: 'asdsad'},
				{word: 'asdasdsa'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
