({
    getBmi : function(component, event, helper) {

        let height = parseFloat(component.get('v.height'))/100;
        let weight = parseFloat(component.get('v.weight'));

        let bmi = weight / (height * height)

        component.set('v.outputBmi',bmi.toFixed(2));
    }
})
