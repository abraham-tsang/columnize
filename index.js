const fs = require('fs')

var data = fs.readFileSync('English\ words.txt', 'utf8')
for(var i = 0; i < data.length; i++){
  if(data[i] == ' '){
    if(data[i+1] == '('){
      var temp = 0;
      for(var j = i+1; j < data.length; j++){
	if(data[j] == ')'){
	  temp = j;
          break;
        }
      }
      i = temp;
    }
    else{
      data = data.slice(0, i+1) + '\n' + data.slice(i+1);  
      i++;
    }
  }
}
fs.writeFileSync('English\ words.txt', data);
console.log(data)
