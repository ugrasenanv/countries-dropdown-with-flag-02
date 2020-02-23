# countries-dropdown-with-flag-02

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/countries-dropdown-with-flag-02)


Properties	 	Please note: For setting properties. Please use set() method.
Name	Type	Description
disabled	boolean	To check if control is disabled or not. If it is disabled, it does not accept clicks.
form	HTMLFormElement	Get the current associated form element.
length	number	The number of <option> elements in this select element.
multiple	boolean	Get the curernt state of the control, which indicates whether multiple items can be selected.
name	string	Get the name of the control.
options	HTMLOptionsCollection	Get the all <option> elements. Read only.
selectedIndex	number	The index of the first selected <option> element.
selectedOptions	HTMLOptionsCollection	The set of options that are selected. Returns as an array.
size	number	Get the size of the element. which contains the number of visible items in the control.
type	string	Get the control's type. When multiple is true, it returns select-multiple; otherwise, it returns select-one. Read only.
value	string	The value of this select control, that is, of the first selected option.
selectedText	string	Get the current selected text.
uiData	object	
Returns the following data.
data:{className,description,image,text,title,value}
index: Number
option: HTMLOptionElement
ui: LI Object

And all available properties can be accessed from this control. i.e. children etc.
 	Reaad only properties can't be set by set() method.