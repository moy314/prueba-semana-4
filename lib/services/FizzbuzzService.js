class FizzbuzzService {

    static applyValidationInExplorer(explorer){

        
        if(explorer.score % 3 === 0 && explorer.score % 5 === 0 ){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
            if(explorer.score % 3 === 0){
                explorer.trick = "FIZZ";
                return explorer;
            }
            
            if(explorer.score % 5 === 0){
                explorer.trick = "BUZZ";
                return explorer;
            }

            
            else{
                explorer.trick = explorer.score;
                return explorer;
            }

    }


    static applyValidationInNumber(number){

        var trick = "";


        if(number % 3 === 0 && number % 5 === 0 ){
            trick = "FizzBuzz";
            return {"score": number, "trick" : trick }
        }
            if(number % 3 === 0){
                trick = "Fizz";
                return {"score": number, "trick" : trick }
            
            }
            
            if(number % 5 === 0){
                trick = "Buzz";
                
                return {"score": number, "trick" : trick }

            }

            
            else{
                trick = number
                return {"score": number, "trick" : trick }

            }


        
    }

}


module.exports = FizzbuzzService;