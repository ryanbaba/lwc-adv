({
    add : function(component, event, helper) {
        let firstVal = component.get('v.fistValue');
        let secoundVal = component.get('v.secondValue');
        let output = parseInt(firstVal)+parseInt(secoundVal); //using parser to convert the js string to js number dataType
        component.set('v.outputValue',output);
    },
    sub : function(component, event, helper) {
        let firstVal = component.get('v.fistValue');
        let secoundVal = component.get('v.secondValue');
        let output = parseInt(firstVal)-parseInt(secoundVal); //using parser to convert the js string to js number dataType
        component.set('v.outputValue',output);
    },
    multi : function(component, event, helper) {
        let firstVal = component.get('v.fistValue');
        let secoundVal = component.get('v.secondValue');
        let output = parseInt(firstVal)*parseInt(secoundVal); //using parser to convert the js string to js number dataType
        component.set('v.outputValue',output);
    },
    divi : function(component, event, helper) {
        let firstVal = component.get('v.fistValue');
        let secoundVal = component.get('v.secondValue');
        let output = parseInt(firstVal)/parseInt(secoundVal); //using parser to convert the js string to js number dataType
        component.set('v.outputValue',output);
    }
})