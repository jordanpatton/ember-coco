ember-striker
=======================

Custom parts for [Ember.js](http://emberjs.com/).

# Installation
```bash
# Bower
bower install git@github.com:jordanpatton/ember-striker.git --save
```

# Usage
```javascript
var App = Ember.Application.create({});
App.MySelectComponent = EmberStriker.CustomSelect.extend({ /*...*/ });
App.MyTextFieldComponent = EmberStriker.CustomTextField.extend({ /*...*/ });
```