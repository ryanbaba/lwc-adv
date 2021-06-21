({
    addEduRow : function(component, event, helper) {
        let eduArray = component.get('v.eduList');
        eduArray.push('hi');
        console.log('eduArray');
        console.log(JSON.stringify(eduArray));

        component.set('v.eduList', eduArray);
    }
})
