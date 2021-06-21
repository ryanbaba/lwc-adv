({
    removeItem : function(component, event, helper) {
        console.log('hi..');

        // let itemIndex = component.get('c.indexNum');
        var indexPosition = event.target.name;
        console.log('hi..');
        let eduList = component.get('c.eduList');
        eduList.splice(indexPosition);
        component.set('c.eduList',eduList);
    }
})
