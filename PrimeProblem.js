//Progrmam to check if a number is Prime or not.

let num=23;

for(let i=1;i<=num/2;i++){
	if(num%i==0){
		count--;		//Error
	}
}
if(count==1){
	console.log("Given number:",num,"is Prime");
}
else{
	console.log("Given number:",num,"is NOT Prime");
}