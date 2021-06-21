({
    removeItem : function(component, event, helper) {
        console.log('1.');

        let itemIndex = component.get('c.indexNum');
        console.log('2..');

        // var indexPosition = event.target.name;
        let eduList = component.get('c.eduList');
        eduList.splice(itemIndex);
        component.set('c.eduList',eduList);
    }
})
