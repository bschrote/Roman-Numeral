function RomanNumerals (entry) {
    const num = [...`${entry}`]
    let ones;
    let tens;
    let hundreds;
    let thousands;
    let onesLetter;
    let onesMinus5;
    let tensLetter;
    let tensMinus50;
    let hundredsLetter;
    let hundredsMinus500;
    let thousandsLetter;
    
    if ((typeof entry === 'number') === true ) {
        ones = num[num.length - 1]
        tens = num[num.length - 2]
        hundreds = num[num.length - 3]
        thousands = num[num.length - 4]

        if (ones <= '3') {
            onesLetter = 'I'.repeat(ones)
        }
        else if (ones === '4') {
            onesLetter = 'IV'
        }
        else if (ones <= '8') {
            onesMinus5 = ones - 5
            onesLetter = 'V'.concat('I'.repeat(onesMinus5))
        }
        else if (ones === '9') {
            onesLetter = 'IX'
        } 

        if (tens <= '3') {
        tensLetter = 'X'.repeat(tens)
        }
        else if (tens === '4') {
            tensLetter = 'XL'
        }
        else if (tens <= '8') {
            tensMinus50 = tens - 5
            tensLetter = 'L'.concat('X'.repeat(tensMinus50))
        }
        else if (tens === '9') {
            tensLetter = 'XC'
        }
        else {
            tensLetter = '' 
        }
        if (hundreds <= '3') {
            hundredsLetter = 'C'.repeat(hundreds)
        }
        else if (hundreds === '4') {
            hundredsLetter = 'CD'
        }
        else if (hundreds <= '8') {
            hundredsMinus500 = hundreds - 5
            hundredsLetter = 'D'.concat('C'.repeat(hundredsMinus500))
        }
        else if (hundreds === '9') {
            hundredsLetter = 'CM'    
        }
        else {
            hundredsLetter = '' 
        }
        if (thousands <= '3') {
            thousandsLetter = 'M'.repeat(thousands)
        }
        else {
            thousandsLetter = '' 
        }
        const CompleteLetter = thousandsLetter + hundredsLetter + tensLetter + onesLetter
        return (CompleteLetter)
        } 
    
    let onesM;
    let onesNumber;
    let onesI;
    let onesV;
    let onesSlice;
    let onesSliceN;
    let tensSlice;
    let tensSliceN;
    let tensX;
    let tensL;
    let tensNumber;
    let hundredsSlice;
    let hundredsSliceN;
    let hundredsC;
    let hundredsD;
    let hundredsNumber;
    let thousandsM;
    let thousandsNumber;
    let thousandsSlice;
    let thousandsSliceN;
  

    if ((typeof entry ==='string') === true ) {
        onesI = num.indexOf('I')
        onesV = num.indexOf('V')
        tensL = num.indexOf('L')
        hundredsD = num.indexOf('D')
        if (((num.indexOf('X') < num.indexOf('I'))) || !num.includes('I')) {
            tensX = num.indexOf('X')
        }
        if (((num.indexOf('C') < num.indexOf('X'))) || !num.includes('X')) {
            hundredsC = num.indexOf('C')
        }
        if (((num.indexOf('M') < num.indexOf('C'))) || !num.includes('C')) {
            thousandsM = num.indexOf('M')
        }
        if (onesI > -1 || onesV > -1) {
            if (onesV > -1 && onesI > -1) {
            
                if (onesI < onesV) {
                    onesSliceN = onesI}
                else if (onesI > onesV) {
                    onesSliceN = onesV
                }
                else if (onesI = onesV) {
                    onesSliceN = 0
                }
            }
            else if (onesV === -1 && onesI > -1) {
                onesSliceN = onesI
            }
            else if (onesI === -1 && onesV > -1) {
                onesSliceN = onesV
            }
            else if (onesI === -1 && onesV === -1) {
                onesSlice = 0
            }
            if(onesSliceN > -1) {  
                onesSlice = num.slice(onesSliceN)
            }
            if ((onesSlice.indexOf('X') === onesSlice.length - 1) && (onesSlice.indexOf('I') === onesSlice.length - 2)) {
                onesNumber = 9
            }
            else if (!num.includes('V') && num.includes('I') ){
                onesNumber = (((onesSlice.lastIndexOf('I')) * 1) + 1)
            }

            else if (onesV === num.length - 1 && onesI === num.length - 2) {
                onesNumber = 4
            } 
            if(!num.includes('I') && num.includes('V')) {
                if (onesSlice.length === 1){
                    onesNumber = 5      
            } }
            if((num.includes('I')) && (num.includes('V'))) {
                if(onesI > onesV) {
                    onesNumber = (((onesSlice.lastIndexOf('I')) * 1) + 5);
                } }
            }
        else if (!num.includes('I') && !num.includes('V') ){
                onesNumber = 0
            }
        if (tensX > -1 || tensL > -1) {
            if (tensX > -1 && tensL > -1) {
                if (tensX < tensL) {
                    tensSliceN = tensX}
                else if (tensX > tensL) {
                    tensSliceN = tensL
                }
                else if (tensX = tensL) {
                    tensSliceN = 0
                }
            }
            else if (tensL === -1 && tensX > -1) {
                tensSliceN = tensX
            }
            else if (tensX === -1 && tensL > -1) {
                tensSliceN = tensL
            }
            else if (tensX === -1 && tensL === -1) {
                tensSlice = 0
            }
            if(onesSliceN > -1 && tensSliceN > -1) {  
                tensSlice = num.slice(tensSliceN,onesSliceN)
            }
            else if (onesSliceN === undefined && tensSliceN > -1 ){
                tensSlice = num.slice(tensSliceN)
            }
            if ((tensSlice.indexOf('C') === tensSlice.length - 1) && (tensSlice.indexOf('X') === tensSlice.length - 2)) {
                tensNumber = 90
            }
            else if (!num.includes('L') && num.includes('X') && ((num.indexOf('X') < num.indexOf('I')) || !num.includes('I'))){
                tensNumber = (((tensSlice.lastIndexOf('X')) * 10) + 10)
            }
            else if (tensSlice.indexOf('L') === tensSlice.length - 1 && tensSlice.indexOf('X') === tensSlice.length - 2) {
                tensNumber = 40
            } 
            if((!num.includes('X')) && (num.includes('L'))) {
                if (tensSlice.length === 1){
                    tensNumber = 50
            }}
            if((num.includes('X')) && (num.includes('L'))) {
                if(tensX > tensL) {
                    tensNumber = (((tensSlice.lastIndexOf('X')) * 10) + 50);
                } }
            }
        else if ((!num.includes('X') && !num.includes('L')) || ((num.indexOf('X') > num.indexOf('I')) && num.includes('I'))){
                tensNumber = 0
            }

// Hundreds Portions in Code
    if (hundredsC > -1 || hundredsD > -1) {
        if (hundredsC > -1 && hundredsD > -1) {
            if (hundredsC < hundredsD) {
                hundredsSliceN = hundredsC}
            else if (hundredsC > hundredsD) {
                hundredsSliceN = hundredsD
            }
            else if (hundredsC = hundredsD) {
                hundredsSliceN = 0
            }
        }
        else if (hundredsD === -1 && hundredsC > -1) {
            hundredsSliceN = hundredsC
        }
        else if (hundredsC === -1 && hundredsD > -1) {
            hundredsSliceN = hundredsD
        }
        else if (hundredsC === -1 && hundredsD === -1) {
            hundredsSliceN = 0
        }
        if(onesSliceN > -1 && hundredsSliceN > -1 && tensSliceN === undefined) {  
            hundredsSlice = num.slice(hundredsSliceN,onesSliceN)
        }
        else if(tensSliceN > -1 && hundredsSliceN > -1) {  
            hundredsSlice = num.slice(hundredsSliceN,tensSliceN)
        }
        else if (onesSliceN === undefined && tensSliceN === undefined && hundredsSliceN > -1 ){
            hundredsSlice = num.slice(hundredsSliceN)
        }
        if ((hundredsSlice.indexOf('M') === hundredsSlice.length - 1) && (hundredsSlice.indexOf('C') === hundredsSlice.length - 2)) {
            hundredsNumber = 900
        }
        else if (!num.includes('D') && num.includes('C') && ((num.indexOf('C') < num.indexOf('X')) || !num.includes('X'))){
            hundredsNumber = (((hundredsSlice.lastIndexOf('C')) * 100) + 100)
        }
        else if (hundredsSlice.indexOf('D') === hundredsSlice.length - 1 && hundredsSlice.indexOf('C') === hundredsSlice.length - 2) {
            hundredsNumber = 400
        } 
        if((!num.includes('C')) && (num.includes('D'))) {
            if (hundredsSlice.length === 1){
                hundredsNumber = 500
        } }

        if((num.includes('C')) && (num.includes('D'))) {
            if(hundredsC > hundredsD) {
                hundredsNumber = (((hundredsSlice.lastIndexOf('C')) * 100) + 500);
            } }
        }
    else if ((!num.includes('C') && !num.includes('D')) || ((num.indexOf('C') > num.indexOf('X')) && num.includes('X'))){
        hundredsNumber = 0
    }
    //Thousands
    if (thousandsM > -1 ) {

        thousandsSliceN = thousandsM
        if(onesSliceN > -1 && tensSliceN === undefined && hundredsSliceN === undefined && thousandsSliceN > -1) {  
            thousandsSlice = num.slice(thousandsSliceN,onesSliceN)
        }
        else if(tensSliceN > -1 && hundredsSliceN === undefined && thousandsSliceN > -1) {  
            thousandsSlice = num.slice(thousandsSliceN,tensSliceN)
        }
        else if(hundredsSliceN > -1 && thousandsSliceN > -1) {  
            thousandsSlice = num.slice(thousandsSliceN,hundredsSliceN)
        }
        else if (onesSliceN === undefined && tensSliceN === undefined && hundredsSliceN === undefined && thousandsSliceN > -1 ){
            thousandsSlice = num.slice(thousandsSliceN)
        }
        if (num.includes('M') && ((num.indexOf('M') < num.indexOf('C')) || !num.includes('C'))){
            thousandsNumber = (((thousandsSlice.lastIndexOf('M')) * 1000) + 1000)
        }
        }
    else if ((!num.includes('M')) || ((num.indexOf('M') > num.indexOf('C')) && num.includes('C'))){
        thousandsNumber = 0
    } }
    
    const CompleteNumber = thousandsNumber + hundredsNumber + tensNumber + onesNumber
    return CompleteNumber
     }
    


module.exports = RomanNumerals