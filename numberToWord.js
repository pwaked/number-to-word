
// ------------------ Convert Number to Words --------------------

var buf = " ";
var num = 0;
var xfrac = 0;

function convertNumberToWord() {
 
  var e = document.getElementById("ddlang");
  var selectedLang = e.selectedIndex;
  var language = e.options[e.selectedIndex].text;
  var number = document.getElementById("number"); 
 
  isValid(number.value,0,11);
  isNumeric(number.value);  
  convertNumberByLanguage(number, selectedLang);
}

function convertNumberByLanguage(number, lang) {
  const thousand = 1000;	
  var million = thousand * thousand;
  var billion = thousand * million;
  var trillion = thousand * billion;
  
  num = number.value;
  
  var frac = Math.abs(num - parseInt(num));
  
  if (num < 0 || frac != 0) 
     num = Math.abs(parseInt(num)); 
 
  if (num >= billion){
    convertHundreds(parseInt(num/billion), lang);
    buf += " billion";
    num = num % billion;       
  }  
  
  if (num >= million){
    convertHundreds(parseInt(num/million), lang);
    buf += " million";
    num = num % million;        
  } 
  
  if (num >= 10000){
	convertHundreds(parseInt(num/1000), lang);	
	switch (lang) {
     case 0:
      buf +=  " thousand";	   
      break;
     case 1:
      buf +=  " mille";
      break;
     case 2: 
      buf +=  " mil";
     }	
	 
    num = num % 1000;         
  } 
  
  if (num >= 1000 && num <10000){ 
     switch (lang) {
     case 0:
      buf +=  convertOneToNine(parseInt(num/1000), lang) + " thousand";	   
      break;
     case 1:
      buf +=  convertOneToNine(parseInt(num/1000), lang) + " mille";
      break;
     case 2: 
      buf +=  convertOneToNine(parseInt(num/1000), lang) + " mil";
     }		
     num = num % 1000;         	
  } 
  
  convertHundreds(num, lang);

  // process the fraction
  if (frac != 0) {
	 xfrac = Math.round(frac * 100);
     buf += " and " + xfrac + "/100"; 
  }	
  
 FixFrenchNumber();
 
 var formattedNum = formatNumber(number.value);
 document.getElementById('divNum').innerHTML = formattedNum;  
 document.getElementById('result').innerHTML = buf;
 buf="";
}

function FixFrenchNumber() {	
 buf = buf.replace("dix six", "seize");
 buf = buf.replace("dix un", "onze");
 buf = buf.replace("dix deux", "douze");
 buf = buf.replace("dix trois", "treize");
 buf = buf.replace("dix quatre", "quatorze");
 buf = buf.replace("dix cinq", "quinze");
 buf = buf.replace("un cents", "cents");
 buf = buf.replace("un mille", "mille");
 
return buf;
}

function convertHundreds(n, lang){
  if (n >= 100){
    switch (lang) {
     case 0:
      buf +=  convertOneToNine(parseInt(n/100), lang) + " hundred";
      break;
     case 1:
      buf +=   convertOneToNine(parseInt(n/100), lang) + " cents";
      break;
     case 2: 
      buf +=  convertOneToNine(parseInt(n/100), lang) + " ciento";
    }	  
    n = n % 100;   
  } 
  if (n >= 20 && n <=99){
	buf += convertTwentyToNinety(parseInt(n/10), lang);	
    n= n % 10;         
  } 
  if (n >= 10 && n <=19)
    buf += convertTenToNineteen(parseInt(n), lang);

  if (n >= 1 && n <=9) 
    buf += convertOneToNine(n, lang); 
}

// convert 1 to 9
// we eliminate the switch statement and use nested Object literal
function convertOneToNine (n, lang) {	
  var oneToNine = {
	0:'',
    1: function (){		
		var language = {
			0: 'one',
			1: 'un',
			2: 'uno'						
		};		
		return language[lang];			
    },
    2: function (){		
		var language = {
			0: 'two',
			1: 'deux',
			2: 'dos'
		};		
		return language[lang];			
    },
    3:  function (){		
		var language = {
			0: 'three',
			1: 'trois',
			2: 'tres'						
		};		
		return language[lang];			
    },
	4: function (){		
		var language = {
			0: 'four',
			1: 'quatre',
			2: 'cuatro'						
		};		
		return language[lang];			
    },
	5: function (){		
		var language = {
			0: 'five',
			1: 'cinq',
			2: 'cinco'						
		};		
		return language[lang];			
    },
	6: function (){		
		var language = {
			0: 'six',
			1: 'six',
			2: 'seis'						
		};		
		return language[lang];			
    },
	7: function (){		
		var language = {
			0: 'seven',
			1: 'sept',
			2: 'siete'						
		};		
		return language[lang];			
    },
	8: function (){		
		var language = {
			0: 'eight',
			1: 'huit',
			2: 'ocho'						
		};		
		return language[lang];			
    },
	9: function (){		
		var language = {
			0: 'nine',
			1: 'neuf',
			2: 'nueve'						
		};		
		return language[lang];			
    }
  };
  return ' ' + oneToNine[n]();
}

// convert 10 to 19
function convertTenToNineteen (n,lang) {
  var tenToNineteen = {
	0:'',
	10:function (){		
		var language = {
			0: 'ten',
			1: 'dix',
			2: 'diez'						
		};		
		return language[lang];			
    },
	11:function (){		
		var language = {
			0: 'eleven',
			1: 'onze',
			2: 'once'						
		};		
		return language[lang];			
    },
	12:function (){		
		var language = {
			0: 'twelve',
			1: 'douze',
			2: 'doce'						
		};		
		return language[lang];			
    },
	13:function (){		
		var language = {
			0: 'thirteen',
			1: 'treize',
			2: 'trece'						
		};		
		return language[lang];			
    },
	14:function (){		
		var language = {
			0: 'fourteen',
			1: 'quatorze',
			2: 'catorce'						
		};		
		return language[lang];			
    },
	15:function (){		
		var language = {
			0: 'fifteen',
			1: 'quinze',
			2: 'quince'						
		};		
		return language[lang];			
    },
	16:function (){		
		var language = {
			0: 'sixteen',
			1: 'seize',
			2: 'diez y seis'						
		};		
		return language[lang];			
    },
	17:function (){		
		var language = {
			0: 'seventeen',
			1: 'dix sept',
			2: 'diez y siete'						
		};		
		return language[lang];			
    },
	18:function (){		
		var language = {
			0: 'eighteen',
			1: 'dix huit',
			2: 'diez y ocho'						
		};		
		return language[lang];			
    },
	19:function (){		
		var language = {
			0: 'nineteen',
			1: 'dix neuf',
			2: 'diez y nueve'						
		};		
		return language[lang];			
    }	
  };
  return ' ' + tenToNineteen[n]();
}

// convert 20 to 90
function convertTwentyToNinety(n,lang) {	
 var twentyToNinety = {
	0:'',
	2:function (){		
		var language = {
			0: 'twenty',
			1: 'vingt',
			2: 'veinte'						
		};		
		return language[lang];			
    },
    3:function (){		
		var language = {
			0: 'thirty',
			1: 'trente',
			2: 'treinta'						
		};		
		return language[lang];			
    },
    4:function (){		
		var language = {
			0: 'forty',
			1: 'quarante',
			2: 'cuarenta'						
		};		
		return language[lang];			
    },
	5:function (){		
		var language = {
			0: 'fifty',
			1: 'cinquante',
			2: 'cincuenta'						
		};		
		return language[lang];			
    },
	6:function (){		
		var language = {
			0: 'sixty',
			1: 'soixante',
			2: 'sesenta'						
		};		
		return language[lang];			
    },
	7:function (){		
		var language = {
			0: 'seventy',
			1: 'soixante dix',
			2: 'setenta'						
		};		
		return language[lang];			
    },
	8:function (){		
		var language = {
			0: 'eighty',
			1: 'quatre vingts',
			2: 'ochenta'						
		};		
		return language[lang];			
    },
	9:function (){		
		var language = {
			0: 'ninety',
			1: 'quatre vingt dix',
			2: 'noventa'						
		};		
		return language[lang];			
    }	
  };
  return ' ' + twentyToNinety[n]();
}

// format the number
function formatNumber(number, sign = '$') {
  // Convert the number into a string, keeping only two decimals and
  // split the number into an array of strings
  const parts = parseFloat(number).toFixed(2).split('')
  let pos = parts.length - 3 
  while ((pos-=3) > 0) {	 
	// add a comma after 3 digits
    parts.splice(pos, 0, ',')
  }
  return sign + parts.join('')
}

function isValid(num,min,max)  
{  
	var numLen = num.length;	
	if (numLen == 0 || numLen <= min || numLen >= max)  {  
		document.getElementById("result").innerHTML = "number should not be empty / length should be between " + min + " to "+ max;  
		num.focus();  
		return false;  
	}  
	else {
		return true;  
	}
}  

// validate the input
function isNumeric(num)  
{   
	var numbers = /^[0-9.]+$/;  
	if(num.match(numbers)) {			
		return true;  
	}  
	else {
		document.getElementById("result").innerHTML = "number must have numeric characters only";	  	
		num.focus();				
		return false;  
	}  
}  

$( document ).ready(function() {
  // clear the result on focus
  $("#number").focus(function() {
  this.value="";
  document.getElementById("divNum").innerHTML="";
  document.getElementById("result").innerHTML="";
  });
  
  $('#ddlang').change(function(){
    convertNumberToWord();
  });

$("#number").keypress(function(e) {
	if (e.which == 13) { 
	 convertNumberToWord();
     return false;	
    }
  });
  
});





