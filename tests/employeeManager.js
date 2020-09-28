var testPage={}
var validEmployeeData=require('../testAssets/validEmployee')
var invalidName=require('../testAssets/invalidName')
var invalidPhone=require('../testAssets/invalidPhone')
var invalidEmail=require('../testAssets/invalidEmail')
var invalidTitle=require('../testAssets/invalidTitle')

module.exports={
    before:browser=>{
        testPage=browser.page.employeePage()
        testPage.navigate()
    },
    after:browser=>{
        testPage.end()

    },
    'Add Valid Employee Test, verify if information persist':browser=>{
        validEmployeeData.forEach(test=>{
            testPage.inputEmployee(test)
        })
    },


    'Delete Employee Test':browser=>{
                testPage.deleteEmployee()
    },


    'Invalid Name Input':browser=>{
        testPage
            .pause(2000)
            .verify.not.elementPresent('@newEmployee',(result)=>{
            if(result===true){testPage.click('@addEmployee').click('@newEmployee')} else{testPage.click('@newEmployee')}
            })
        invalidName.forEach(test=>{
            testPage.inputName(test)
        })
    },


    'Invalid Phone Input Test':browser=>{
        testPage
            .pause(2000)
            .verify.not.elementPresent('@newEmployee',(result)=>{
            if(result===true){testPage.click('@addEmployee').click('@newEmployee')} else{testPage.click('@newEmployee')}
            })
        invalidPhone.forEach(test=>{
            testPage.inputPhone(test)
        })

    },


    'Invalid Email Input Test':browser=>{
        testPage
            .pause(2000)
            .verify.not.elementPresent('@newEmployee',(result)=>{
            if(result===true){testPage.click('@addEmployee').click('@newEmployee')} else{testPage.click('@newEmployee')}
            })
        invalidEmail.forEach(test=>{
            testPage.inputEmail(test)
        })

    },

    
    'Invalid Title Input Test':browser=>{
        testPage
            .pause(2000)
            .verify.not.elementPresent('@newEmployee',(result)=>{
            if(result===true){testPage.click('@addEmployee').click('@newEmployee')} else{testPage.click('@newEmployee')}
            })
        invalidTitle.forEach(test=>{
            testPage.inputTitle(test)
        })

    }
}