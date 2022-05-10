const FizzbuzzService = require('../../lib/services/FizzbuzzService');


describe('test for fizzbuzz service',() =>{

    test('creating explorer objects to test',()=>{
        const explorer1 = {name: "Explorer1", score: 1}
        const explorer3 = {name: "Explorer3", score: 3}
        const explorer5 = {name: "Explorer5", score: 5}
        const explorer15 = {name: "Explorer15", score: 15}

        expect(FizzbuzzService.applyValidationInExplorer(explorer1)).toStrictEqual({name: "Explorer1", score: 1, trick: 1})

        expect(FizzbuzzService.applyValidationInExplorer(explorer3)).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"})

        expect(FizzbuzzService.applyValidationInExplorer(explorer5)).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"})

        expect(FizzbuzzService.applyValidationInExplorer(explorer15)).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"})


    })


    test('testting applyValidationInNumber',()=>{

        expect(FizzbuzzService.applyValidationInNumber(1)).toEqual({"score": 1, "trick" : 1 });
        expect(FizzbuzzService.applyValidationInNumber(3)).toEqual({"score": 3, "trick" : "Fizz" })
        expect(FizzbuzzService.applyValidationInNumber(5)).toEqual({"score": 5, "trick" : "Buzz" })
        expect(FizzbuzzService.applyValidationInNumber(15)).toEqual({"score": 15, "trick" : "FizzBuzz" })


    })




})


//applyValidationInNumber(number)