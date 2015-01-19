ember-coco
=======================

**Ember** **Co**mmon **Co**mponents: tools for rapid prototyping with [Ember.js](http://emberjs.com/).

# Installation
```bash
# Bower
bower install git@github.com:jordanpatton/ember-coco.git --save
```

# Usage
```javascript
var App = Ember.Application.create({});
App.MySelectComponent = EmberCoco.CustomSelect.extend({ /*...*/ });
App.MyTextFieldComponent = EmberCoco.CustomTextField.extend({ /*...*/ });
App.MyDateFieldComponent = EmberCoco.CustomDateField.extend({ /*...*/ });
```