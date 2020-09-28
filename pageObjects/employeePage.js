const { verify } = require("crypto")

var employeeCommands={
        inputEmployee:function(data){
            this
                .pause(2000)
                .verify.not.elementPresent('@newEmployee',(result)=>{
                console.log(result)
                if(result===true){this.click('@addEmployee').click('@newEmployee')} else{this.click('@newEmployee')}
            })
            this
                .clearValue('@nameInput')
                .setValue('@nameInput',data.name)
                .clearValue('@phoneInput')
                .setValue('@phoneInput',data.phone)
                .clearValue('@emailInput')
                .setValue('@emailInput',data.email)
                .clearValue('@titleInput')
                .setValue('@titleInput',data.title)
                .click('@saveBtn')
                .getText('@ID',result=>{
                var employeeNumber=Number(result.value.slice(4,8))
                var nextEmployee=employeeNumber-1
                var nextEmployeeNumber=nextEmployee.toString()
            this.click(`[name="employee${nextEmployeeNumber}"]`)
                .click(`[name="employee${employeeNumber}"]`)
            this
                .verify.containsText('@ID',employeeNumber)
                .verify.containsText('@employeeName',data.name)
                .verify.containsText(`[name="employee${employeeNumber}"]`,data.name)
                .verify.valueContains('@phoneInput',data.phone)
                .verify.valueContains('@emailInput',data.email)
                .verify.valueContains('@titleInput',data.title)
            })
        
        },
        deleteEmployee:function(){
            this
                .pause(2000)
                .verify.not.elementPresent('@newEmployee',(result)=>{
                console.log(result)
                if(result===true){this.click('@addEmployee').click('@newEmployee')} else{this.click('@newEmployee')}
            })
            this
                .click('@newEmployee')
                .getText('@ID',result=>{
                    var employeeNumber=Number(result.value.slice(4,8))
                    var nextEmployee1=employeeNumber-1
                    var nextEmployee2=employeeNumber-2
                    var nextEmployee3=employeeNumber-3
                    var nextEmployee4=employeeNumber-4
                    var nextEmployee5=employeeNumber-5
                    var nextEmployeeNumber1=nextEmployee1.toString()
                    var nextEmployeeNumber2=nextEmployee2.toString()
                    var nextEmployeeNumber3=nextEmployee3.toString()
                    var nextEmployeeNumber4=nextEmployee4.toString()
                    var nextEmployeeNumber5=nextEmployee5.toString()

                this
                    .click('@deleteBtn')
                    .api.acceptAlert()
                this.pause(2000)
                    .click(`[name="employee${nextEmployeeNumber1}"]`)
                    .click('@deleteBtn')
                    .api.acceptAlert()
                this.pause(2000)
                    .click(`[name="employee${nextEmployeeNumber2}"]`)
                    .click('@deleteBtn')
                    .api.acceptAlert()
                this.pause(2000)
                    .click(`[name="employee${nextEmployeeNumber3}"]`)
                    .click('@deleteBtn')
                    .api.acceptAlert()
                this.pause(2000)
                    .click(`[name="employee${nextEmployeeNumber4}"]`)
                    .click('@deleteBtn')
                    .api.acceptAlert()
                this.pause(2000)
                    .click(`[name="employee${nextEmployeeNumber5}"]`)
                    .click('@deleteBtn')
                    .api.acceptAlert()
                this.pause(2000)
                    .expect.element(`[name="employee${nextEmployeeNumber1}"]`).to.not.be.present
                this.expect.element(`[name="employee${nextEmployeeNumber2}"]`).to.not.be.present
                this.expect.element(`[name="employee${nextEmployeeNumber3}"]`).to.not.be.present
                this.expect.element(`[name="employee${nextEmployeeNumber4}"]`).to.not.be.present
                this.expect.element(`[name="employee${nextEmployeeNumber5}"]`).to.not.be.present

                
                })
        },
        inputName:function(data){
            this
                .clearValue('@nameInput')
                .setValue('@nameInput',data.input)
                .click('@saveBtn')
                .verify.visible('@errorMsg')
        },
        inputPhone:function(data){
            this
                .clearValue('@phoneInput')
                .setValue('@phoneInput',data.input)
                .click('@saveBtn')
                .verify.visible('@errorMsg')
        },
        inputEmail:function(data){
            this
                .clearValue('@emailInput')
                .setValue('@emailInput',data.input)
                .click('@saveBtn')
                .verify.visible('@errorMsg')
        },
        inputTitle:function(data){
            this
                .clearValue('@titleInput')
                .setValue('@titleInput',data.input)
                .click('@saveBtn')
                .verify.visible('@errorMsg')
        }

}
    



module.exports={
    url:'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands:[employeeCommands],
    elements:{
        addEmployee:'[name="addEmployee"]',
        newEmployee:{
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        nameInput:'[name="nameEntry"]',
        phoneInput:'[name="phoneEntry"]',
        emailInput:'[name="emailEntry"]',
        titleInput:'[name="titleEntry"]',
        saveBtn:'#saveBtn',
        cancelBtn:'[name="cancel]',
        deleteBtn:'[name="delete"]',
        searchBar:'[name="searchBox"]',
        clearBtn:'[name="clearSearch]',
        ID:'#employeeID',
        employeeName:'[name="employeeName"]',
        errorMsg:'.errorMessage'
    }
}