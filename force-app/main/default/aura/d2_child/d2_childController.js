({
    removeItem : function(component, event, helper) {

        let itemIndex = component.get('v.indexNo');
        let eduList = component.get('v.eduList2');
        if(itemIndex>-1){
            eduList.splice(itemIndex,1);
        }
        component.set('v.eduList2',eduList);
    }
    
})