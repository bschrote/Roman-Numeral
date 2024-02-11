
function RomanNumerals (entry) {
    const num = [...`${entry}`]
    if ((typeof entry === 'number') === true ) {
        let ones, tens, hundreds, thousands;
        let onesLetter, tensLetter, hundredsLetter, thousandsLetter;
        let onesString, tensString, hundredsString, thousandsString;

        ones = num[num.length - 1]
        tens = num[num.length - 2]
        hundreds = num[num.length - 3]
        thousands = num[num.length - 4]
      
        ones === undefined ? ones = 0 : null
        tens === undefined ? tens = 0 : null
        hundreds === undefined ? hundreds = 0 : null
        thousands === undefined ? thousands = 0 : null

        onesString = ones.toString()
        onesLetter = 'I'.repeat(onesString)
        onesLetter = onesLetter.replace("IIIIIIIII", "IX")
        onesLetter = onesLetter.replace("IIIII", "V")
        onesLetter = onesLetter.replace("IIII", "IV")
                
        tensString = tens.toString()

        tensLetter = 'X'.repeat(tensString)
        tensLetter = tensLetter.replace("XXXXXXXXX", "XC")
        tensLetter = tensLetter.replace("XXXXX", "L")
        tensLetter = tensLetter.replace("XXXX", "XL")

        hundredsString = hundreds.toString()

        hundredsLetter = 'C'.repeat(hundredsString)
        hundredsLetter = hundredsLetter.replace("CCCCCCCCC", "CM")
        hundredsLetter = hundredsLetter.replace("CCCCC", "D")
        hundredsLetter = hundredsLetter.replace("CCCC", "CD")
        
        thousandsString = thousands.toString()
        thousandsLetter = "M".repeat(thousandsString)
          
        const CompleteLetter = thousandsLetter + hundredsLetter + tensLetter + onesLetter
 
        return (CompleteLetter)
    }
            
     let onesInclude4or9 = 0
     let tensIncluce4or9 = 0
     let hundredsInclude4or9 = 0
     
     !num.includes('I') ? null :
     num.indexOf('I') < num.indexOf('V') ? onesInclude4or9++ : 
     num.indexOf('I') < num.lastIndexOf('X') ? onesInclude4or9++ : null 
     
     !num.includes('X') ? null :
     num.indexOf('X') < num.indexOf('L') ? tensIncluce4or9++ : 
     num.indexOf('X') < num.lastIndexOf('C') ? tensIncluce4or9++ : null
     
     !num.includes('C') ? null :
     num.indexOf('C') < num.indexOf('D') ? hundredsInclude4or9++ : 
     num.indexOf('C') < num.lastIndexOf('M') ? hundredsInclude4or9++ : null
     
     
     OnesMinus = onesInclude4or9 * -2
     tensMinus = tensIncluce4or9 * -20
     hundredsMinus = hundredsInclude4or9 * -200
     
     const numString = num.toString(); 
     
     let convert1 = numString.replaceAll("I", 1)
     let convert5 = convert1.replaceAll("V", 5)
     let convert10 = convert5.replaceAll("X", 10)
     let convert50 = convert10.replaceAll("L", 50)
     let convert100 = convert50.replaceAll("C", 100)
     let convert500 = convert100.replaceAll("D", 500)
     let convert1000 = convert500.replaceAll("M", 1000)
     
     let strToArray = convert1000.split(",")
     let convertSum = parseInt(strToArray.reduce(function(total, num) {
         return parseFloat(total) + parseFloat(num)
     }))
     
     const CompleteNumber = convertSum + OnesMinus + tensMinus + hundredsMinus
     
     return CompleteNumber
    }

module.exports = RomanNumerals