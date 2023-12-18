const RomanNumerals = require ('./RomanNumerals')


describe ('Numbers', () =>{
    //Ones
    it ('1', () => {
        let Index = RomanNumerals(1)

        expect(Index).toEqual("I")
    })
    it ('3', () => {
        let Index = RomanNumerals(3)

        expect(Index).toEqual("III")
    })
    it ('4', () => {
        let Index = RomanNumerals(4)

        expect(Index).toEqual("IV")
    })
    it ('5', () => {
        let Index = RomanNumerals(5)

        expect(Index).toEqual("V")
    })
    it ('8', () => {
        let Index = RomanNumerals(8)

        expect(Index).toEqual("VIII")
    })
    it ('9', () => {
        let Index = RomanNumerals(9)

        expect(Index).toEqual("IX")
    })
    
    //Tens

    it ('10', () => {
        let Index = RomanNumerals(10)

        expect(Index).toEqual("X")
    })
    it ('30', () => {
        let Index = RomanNumerals(30)

        expect(Index).toEqual("XXX")
    })
    it ('40', () => {
        let Index = RomanNumerals(40)
    
        expect(Index).toEqual("XL")
    })
    it ('50', () => {
        let Index = RomanNumerals(50)

        expect(Index).toEqual("L")
    })
    it ('80', () => {
        let Index = RomanNumerals(80)

        expect(Index).toEqual("LXXX")
    })
    it ('90', () => {
        let Index = RomanNumerals(90)

        expect(Index).toEqual("XC")
    })
    
    //Tens, Ones

    it ('13', () => {
        let Index = RomanNumerals(13)

        expect(Index).toEqual("XIII")
    })
    it ('44', () => {
        let Index = RomanNumerals(44)

        expect(Index).toEqual("XLIV")
    })
    it ('55', () => {
        let Index = RomanNumerals(55)

        expect(Index).toEqual("LV")
    })
    it ('88', () => {
        let Index = RomanNumerals(88)

        expect(Index).toEqual("LXXXVIII")
    })
    it ('99', () => {
        let Index = RomanNumerals(99)

        expect(Index).toEqual("XCIX")
    })

    //Hundreds

    it ('100', () => {
        let Index = RomanNumerals(100)

        expect(Index).toEqual("C")
    })
    it ('300', () => {
        let Index = RomanNumerals(300)

        expect(Index).toEqual("CCC")
    })
    it ('400', () => {
        let Index = RomanNumerals(400)
    
        expect(Index).toEqual("CD")
    })
    it ('500', () => {
        let Index = RomanNumerals(500)

        expect(Index).toEqual("D")
    })
    it ('800', () => {
        let Index = RomanNumerals(800)

        expect(Index).toEqual("DCCC")
    })
    it ('900', () => {
        let Index = RomanNumerals(900)

        expect(Index).toEqual("CM")
    })
     
    //Hundreds, Tens

    it ('310', () => {
        let Index = RomanNumerals(310)

        expect(Index).toEqual("CCCX")
    })
    it ('440', () => {
        let Index = RomanNumerals(440)

        expect(Index).toEqual("CDXL")
    })
    it ('550', () => {
        let Index = RomanNumerals(550)

        expect(Index).toEqual("DL")
    })
    it ('680', () => {
        let Index = RomanNumerals(680)

        expect(Index).toEqual("DCLXXX")
    })
    it ('990', () => {
        let Index = RomanNumerals(990)

        expect(Index).toEqual("CMXC")
    })
    
    //Hundreds, Ones

    it ('303', () => {
        let Index = RomanNumerals(303)

        expect(Index).toEqual("CCCIII")
    })
    it ('404', () => {
        let Index = RomanNumerals(404)

        expect(Index).toEqual("CDIV")
    })
    it ('505', () => {
        let Index = RomanNumerals(505)

        expect(Index).toEqual("DV")
    })
    it ('708', () => {
        let Index = RomanNumerals(708)

        expect(Index).toEqual("DCCVIII")
    })
    it ('909', () => {
        let Index = RomanNumerals(909)

        expect(Index).toEqual("CMIX")
    })
    
    // Hundreds, Tens, Ones

    it ('123', () => {
        let Index = RomanNumerals(123)

        expect(Index).toEqual("CXXIII")
    })
    it ('434', () => {
        let Index = RomanNumerals(434)

        expect(Index).toEqual("CDXXXIV")
    })
    it ('485', () => {
        let Index = RomanNumerals(485)

        expect(Index).toEqual("CDLXXXV")
    })
    it ('557', () => {
        let Index = RomanNumerals(557)

        expect(Index).toEqual("DLVII")
    })
    it ('779', () => {
        let Index = RomanNumerals(779)

        expect(Index).toEqual("DCCLXXIX")
    })
    it ('999', () => {
        let Index = RomanNumerals(999)

        expect(Index).toEqual("CMXCIX")
    })
   
    //Thousands
    
    it ('1000', () => {
        let Index = RomanNumerals(1000)

        expect(Index).toEqual("M")
    })
    it ('3000', () => {
        let Index = RomanNumerals(3000)

        expect(Index).toEqual("MMM")
    })
        
    //Thousands, Hundreds

    it ('1100', () => {
        let Index = RomanNumerals(1100)

        expect(Index).toEqual("MC")
    })
    it ('2400', () => {
        let Index = RomanNumerals(2400)

        expect(Index).toEqual("MMCD")
    })
    it ('2500', () => {
        let Index = RomanNumerals(2500)

        expect(Index).toEqual("MMD")
    })
    it ('2800', () => {
        let Index = RomanNumerals(2800)

        expect(Index).toEqual("MMDCCC")
    })
    it ('2900', () => {
        let Index = RomanNumerals(2900)

        expect(Index).toEqual("MMCM")
    })
    
    //Thousands, Tens

    it ('1030', () => {
        let Index = RomanNumerals(1030)

        expect(Index).toEqual("MXXX")
    })
    it ('1040', () => {
        let Index = RomanNumerals(1040)

        expect(Index).toEqual("MXL")
    })
    it ('2050', () => {
        let Index = RomanNumerals(2050)

        expect(Index).toEqual("MML")
    })
    it ('2070', () => {
        let Index = RomanNumerals(2070)

        expect(Index).toEqual("MMLXX")
    })
    it ('2090', () => {
        let Index = RomanNumerals(2090)

        expect(Index).toEqual("MMXC")
    })

    // Thousands, Ones
    
    it ('1003', () => {
        let Index = RomanNumerals(1003)

        expect(Index).toEqual("MIII")
    })
    it ('1004', () => {
        let Index = RomanNumerals(1004)

        expect(Index).toEqual("MIV")
    })
    it ('2005', () => {
        let Index = RomanNumerals(2005)

        expect(Index).toEqual("MMV")
    })
    it ('2008', () => {
        let Index = RomanNumerals(2008)

        expect(Index).toEqual("MMVIII")
    })
    it ('2009', () => {
        let Index = RomanNumerals(2009)

        expect(Index).toEqual("MMIX")
    })

    //Thousands, Hundreds, Tens
    
    it ('1330', () => {
        let Index = RomanNumerals(1330)

        expect(Index).toEqual("MCCCXXX")
    })
    it ('1440', () => {
        let Index = RomanNumerals(1440)

        expect(Index).toEqual("MCDXL")
    })
    it ('1550', () => {
        let Index = RomanNumerals(1550)

        expect(Index).toEqual("MDL")
    })
    it ('2780', () => {
        let Index = RomanNumerals(2780)

        expect(Index).toEqual("MMDCCLXXX")
    })
    it ('2990', () => {
        let Index = RomanNumerals(2990)

        expect(Index).toEqual("MMCMXC")
    })
    
    //Thousands, Hundreds, Ones
    
    it ('1303', () => {
        let Index = RomanNumerals(1303)

        expect(Index).toEqual("MCCCIII")
    })
    it ('1404', () => {
        let Index = RomanNumerals(1404)

        expect(Index).toEqual("MCDIV")
    })
    it ('1505', () => {
        let Index = RomanNumerals(1505)

        expect(Index).toEqual("MDV")
    })
    it ('2708', () => {
        let Index = RomanNumerals(2708)

        expect(Index).toEqual("MMDCCVIII")
    })
    it ('2909', () => {
        let Index = RomanNumerals(2909)

        expect(Index).toEqual("MMCMIX")
    })
    
    //Thousands, Tens, Ones
    
    it ('1031', () => {
        let Index = RomanNumerals(1031)

        expect(Index).toEqual("MXXXI")
    })
    it ('1044', () => {
        let Index = RomanNumerals(1044)

        expect(Index).toEqual("MXLIV")
    })
    it ('2055', () => {
        let Index = RomanNumerals(2055)

        expect(Index).toEqual("MMLV")
    })
    it ('2078', () => {
        let Index = RomanNumerals(2078)

        expect(Index).toEqual("MMLXXVIII")
    })
    it ('2099', () => {
        let Index = RomanNumerals(2099)

        expect(Index).toEqual("MMXCIX")
    })

    //Thousands, Hundreds, Tens, Ones
    
    it ('1233', () => {
        let Index = RomanNumerals(1233)

        expect(Index).toEqual("MCCXXXIII")
    })
    it ('1444', () => {
        let Index = RomanNumerals(1444)

        expect(Index).toEqual("MCDXLIV")
    })
    it ('2555', () => {
        let Index = RomanNumerals(2555)

        expect(Index).toEqual("MMDLV")
    })
    it ('2678', () => {
        let Index = RomanNumerals(2678)

        expect(Index).toEqual("MMDCLXXVIII")
    })

    it ('2999', () => {
        let Index = RomanNumerals(2999)

        expect(Index).toEqual("MMCMXCIX")
    })

    //Convert from Roman Numerals to Numbers

    //Ones
    it ("I", () => {
        let Index = RomanNumerals("I")

        expect(Index).toEqual(1)
    })
    it ("III", () => {
        let Index = RomanNumerals("III")

        expect(Index).toEqual(3)
    })
    it ("IV", () => {
        let Index = RomanNumerals("IV")

        expect(Index).toEqual(4)
    })
    it ("V", () => {
        let Index = RomanNumerals("V")

        expect(Index).toEqual(5)
    })
    it ("VIII", () => {
        let Index = RomanNumerals("VIII")

        expect(Index).toEqual(8)
    })
    it ("IX", () => {
        let Index = RomanNumerals("IX")

        expect(Index).toEqual(9)
    })

    //Tens

    it ("X", () => {
        let Index = RomanNumerals("X")

        expect(Index).toEqual(10)
    })
    it ("XXX", () => {
        let Index = RomanNumerals("XXX")

        expect(Index).toEqual(30)
    })
    it ("XL", () => {
        let Index = RomanNumerals("XL")
    
        expect(Index).toEqual(40)
    })
    it ("L", () => {
        let Index = RomanNumerals("L")

        expect(Index).toEqual(50)
    })
    it ("LXXX", () => {
        let Index = RomanNumerals("LXXX")

        expect(Index).toEqual(80)
    })
    it ("XC", () => {
        let Index = RomanNumerals("XC")

        expect(Index).toEqual(90)
    })

    // Tens, Ones

    it ("XIII", () => {
        let Index = RomanNumerals("XIII")

        expect(Index).toEqual(13)
    })
    it ("XLIV", () => {
        let Index = RomanNumerals("XLIV")

        expect(Index).toEqual(44)
    })
    it ("LV", () => {
        let Index = RomanNumerals("LV")

        expect(Index).toEqual(55)
    })
    it ("LXXXVIII", () => {
        let Index = RomanNumerals("LXXXVIII")

        expect(Index).toEqual(88)
    })
    it ("XCIX", () => {
        let Index = RomanNumerals("XCIX")

        expect(Index).toEqual(99)
    })
   
    //Hundreds

    it ("C", () => {
        let Index = RomanNumerals("C")

        expect(Index).toEqual(100)
    })
    it ("CCC", () => {
        let Index = RomanNumerals("CCC")

        expect(Index).toEqual(300)
    })
        it ("CD", () => {
        let Index = RomanNumerals("CD")
    
        expect(Index).toEqual(400)
    })
    it ("D", () => {
        let Index = RomanNumerals("D")

        expect(Index).toEqual(500)
    })
    it ("DCCC", () => {
        let Index = RomanNumerals("DCCC")

        expect(Index).toEqual(800)
    })
    it ("CM", () => {
        let Index = RomanNumerals("CM")

        expect(Index).toEqual(900)
    })
 
    //Hundreds, Tens

    it ("CCCX", () => {
        let Index = RomanNumerals("CCCX")

        expect(Index).toEqual(310)
    })
    it ("CDXL", () => {
        let Index = RomanNumerals("CDXL")

        expect(Index).toEqual(440)
    })
    it ("DL", () => {
        let Index = RomanNumerals("DL")

        expect(Index).toEqual(550)
    })
    it ("DCLXXX", () => {
        let Index = RomanNumerals("DCLXXX")

        expect(Index).toEqual(680)
    })
    it ("CMXC", () => {
        let Index = RomanNumerals("CMXC")

        expect(Index).toEqual(990)
    })
    
    //Hundreds, Ones

    it ("CCCIII", () => {
        let Index = RomanNumerals("CCCIII")

        expect(Index).toEqual(303)
    })
    it ("CDIV", () => {
        let Index = RomanNumerals("CDIV")

        expect(Index).toEqual(404)
    })
    it ("DV", () => {
        let Index = RomanNumerals("DV")

        expect(Index).toEqual(505)
    })
    it ("DCCVIII", () => {
        let Index = RomanNumerals("DCCVIII")

        expect(Index).toEqual(708)
    })
    it ("CMIX", () => {
        let Index = RomanNumerals("CMIX")

        expect(Index).toEqual(909)
    })
    
    //Hundreds, Tens, Ones

    it ("CXXIII", () => {
        let Index = RomanNumerals("CXXIII")

        expect(Index).toEqual(123)
    })
    it ("CDXXXIV", () => {
        let Index = RomanNumerals("CDXXXIV")

        expect(Index).toEqual(434)
    })
    it ("CDLXXXV", () => {
        let Index = RomanNumerals("CDLXXXV")

        expect(Index).toEqual(485)
    })
    it ("DLVII", () => {
        let Index = RomanNumerals("DLVII")

        expect(Index).toEqual(557)
    })
    it ("DCCLXXIX", () => {
        let Index = RomanNumerals("DCCLXXIX")

        expect(Index).toEqual(779)
    })
    it ("CMXCIX", () => {
        let Index = RomanNumerals("CMXCIX")

        expect(Index).toEqual(999)
    })
    
    //Thousands

    it ('M', () => {
        let Index = RomanNumerals("M")

        expect(Index).toEqual(1000)
    })
    it ("MMM", () => {
        let Index = RomanNumerals("MMM")

        expect(Index).toEqual(3000)
    })

    // Thousands, Hundreds

    it ("MC", () => {
        let Index = RomanNumerals("MC")

        expect(Index).toEqual(1100)
    })
    it ("MMCD", () => {
        let Index = RomanNumerals("MMCD")

        expect(Index).toEqual(2400)
    })
    it ("MMD", () => {
        let Index = RomanNumerals("MMD")

        expect(Index).toEqual(2500)
    })
    it ("MMDCCC", () => {
        let Index = RomanNumerals("MMDCCC")

        expect(Index).toEqual(2800)
    })
    it ("MMCM", () => {
        let Index = RomanNumerals("MMCM")

        expect(Index).toEqual(2900)
    })
    
    // Thousands, Tens

    it ("MCCCXXX", () => {
        let Index = RomanNumerals("MCCCXXX")

        expect(Index).toEqual(1330)
    })
    it ("MXL", () => {
        let Index = RomanNumerals("MXL")

        expect(Index).toEqual(1040)
    })
    it ("MML", () => {
        let Index = RomanNumerals("MML")

        expect(Index).toEqual(2050)
    })
    it ("MMLXX", () => {
        let Index = RomanNumerals("MMLXX")

        expect(Index).toEqual(2070)
    })
    it ("MMXC", () => {
        let Index = RomanNumerals("MMXC")

        expect(Index).toEqual(2090)
    })
    
    // Thousands, Ones

    it ("MIII", () => {
        let Index = RomanNumerals("MIII")

        expect(Index).toEqual(1003)
    })
    it ("MIV", () => {
        let Index = RomanNumerals("MIV")

        expect(Index).toEqual(1004)
    })
    it ("MMV", () => {
        let Index = RomanNumerals("MMV")

        expect(Index).toEqual(2005)
    })
    it ("MMVIII", () => {
        let Index = RomanNumerals("MMVIII")

        expect(Index).toEqual(2008)
    })
    it ("MMIX", () => {
        let Index = RomanNumerals("MMIX")

        expect(Index).toEqual(2009)
    })
    
    //Thousands, Hundreds, Tens

    it ("MCCCXXX", () => {
        let Index = RomanNumerals("MCCCXXX")

        expect(Index).toEqual(1330)
    })
    it ("MCDXL", () => {
        let Index = RomanNumerals("MCDXL")

        expect(Index).toEqual(1440)
    })
    it ("MDL", () => {
        let Index = RomanNumerals("MDL")

        expect(Index).toEqual(1550)
    })
    it ("MMDCCLXXX", () => {
        let Index = RomanNumerals("MMDCCLXXX")

        expect(Index).toEqual(2780)
    })
    it ("MMCMXC", () => {
        let Index = RomanNumerals("MMCMXC")

        expect(Index).toEqual(2990)
    })
    
    //Thousands, Hundreds, Ones

    it ("MCCCIII", () => {
        let Index = RomanNumerals("MCCCIII")

        expect(Index).toEqual(1303)
    })
    it ("MCDIV", () => {
        let Index = RomanNumerals("MCDIV")

        expect(Index).toEqual(1404)
    })
    it ("MDV", () => {
        let Index = RomanNumerals("MDV")

        expect(Index).toEqual(1505)
    })
    it ("MMDCCVIII", () => {
        let Index = RomanNumerals("MMDCCVIII")

        expect(Index).toEqual(2708)
    })
    it ("MMCMIX", () => {
        let Index = RomanNumerals("MMCMIX")

        expect(Index).toEqual(2909)
    })
    
    //Thousands, Tens, Ones
    
    it ("MXXXI", () => {
        let Index = RomanNumerals("MXXXI")

        expect(Index).toEqual(1031)
    })
    it ("MXLIV", () => {
        let Index = RomanNumerals("MXLIV")

        expect(Index).toEqual(1044)
    })
    it ("MMLV", () => {
        let Index = RomanNumerals("MMLV")

        expect(Index).toEqual(2055)
    })
    it ("MMLXXVIII", () => {
        let Index = RomanNumerals("MMLXXVIII")

        expect(Index).toEqual(2078)
    })
    it ("MMXCIX", () => {
        let Index = RomanNumerals("MMXCIX")

        expect(Index).toEqual(2099)
    })
    
    //Thousands, Hundreds, Tens, Ones

    it ("MCCXXXIII", () => {
        let Index = RomanNumerals("MCCXXXIII")

        expect(Index).toEqual(1233)
    })
    it ("MCDXLIV", () => {
        let Index = RomanNumerals("MCDXLIV")

        expect(Index).toEqual(1444)
    })
    it ("MMDLV", () => {
        let Index = RomanNumerals("MMDLV")

        expect(Index).toEqual(2555)
    })
    it ("MMDCLXXVIII", () => {
        let Index = RomanNumerals("MMDCLXXVIII")

        expect(Index).toEqual(2678)
    })

    it ("MMCMXCIX", () => {
        let Index = RomanNumerals("MMCMXCIX")

        expect(Index).toEqual(2999)
    }) 
})