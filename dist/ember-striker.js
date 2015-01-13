"use strict";
var Ember = window.Ember;

var EmberCustomSelect = Ember.Component.extend({
  
  __globalEventListener: null,
  classNameBindings:     ['isDisabled','isExpanded'],
  classNames:            'custom-select',
  isDisabled:            false,
  isExpanded:            false,
  options:               [{value: "value", title: "Title", isSelected: false}],
  placeholder:           'Select an option...',
  value:                 null,
  
  selection: function (key, newVal, oldVal) {
    // setter
    if(arguments.length > 1 && typeof newVal !== 'undefined' && typeof newVal.value !== 'undefined') {this.set('value',newVal.value);}
    // getter
    var options = this.get('options');
    for(var i=0;i<options.length;i++) {if(typeof options[i].value !== 'undefined' && options[i].value === this.get('value')) {return options[i];}}
    return null;
  }.property('options','value'),
  
  layout: Ember.Handlebars.compile(''
    +'<ul class="options" {{action "toggleExpanded" bubbles=false}}>'
    +'  {{#if isExpanded}}'
    +'    <li class="placeholder">{{placeholder}}</li>'
    +'    {{#each option in options}}'
    +'      <li {{bind-attr class=":option option.isSelected:selected" data-value="option.value"}} {{action "changeSelection" option}}>{{option.title}}</li>'
    +'    {{/each}}'
    +'  {{else}}'
    +'    {{#if selection}}'
    +'      <li {{bind-attr class=":option :selected" data-value="selection.value"}}>{{selection.title}}</li>'
    +'    {{else}}'
    +'      <li class="placeholder">{{placeholder}}</li>'
    +'    {{/if}}'
    +'  {{/if}}'
    +'</ul>'
  ),
  
  didInsertElement: function () {
    var self = this;
    // initialize options array
    this.get('options').forEach(function(item,index,enumerable){
      Ember.set(item, 'value',      (item.value || null));
      Ember.set(item, 'title',      (item.title || item.value || null));
      Ember.set(item, 'isSelected', (item.value === self.get('value') ? true : false));
    });
    // define global event listener
    this.set('__globalEventListener', function(e){if(self.get('isExpanded')){self.set('isExpanded',false);}return false;});
    // bind global event listener
    window.document.addEventListener('click', this.get('__globalEventListener'), false);
    // run super
    return this._super();
  },
  
  willDestroyElement: function () {
    // unbind global event listener
    window.document.removeEventListener('click', this.get('__globalEventListener'), false);
    // run super
    return this._super();
  },
  
  actions: {
    changeSelection: function (option) {
      if(!this.get('isDisabled')) {
        if(this.get('selection')) {this.set('selection.isSelected',false);}
        this.set('selection',option);
        this.set('selection.isSelected',true);
      }
      return false;
    },
    toggleExpanded: function () {
      if(!this.get('isDisabled')) {
        this.toggleProperty('isExpanded');
      }
      return false;
    }
  }
  
});
