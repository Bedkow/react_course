JSX - syntax for React, combines html in JS and stuff...

components - custom html elements

BEST practice - 1 file for 1 component

App.js is like a main component to bundle all the components and then get exported to index.js and mounted as "root"

component file names - double _CamelCase_ 1st letter capitalized also

a component in React is just a JS function returning JSX code

component after inporting can be used as HTML tag

custom component names MUST start with upper case

component has to always return 1 root statement > easy fix >> wrap everyting in a div

add CSS file with the same name as the component in the component folder

import css into the designated component

"class" property in components == "className"

{} - in components u can run basic JS expressions like "1+1"

props -an object holding all the values we need to use and pass to a component to then duplicate it, a way to reuse components with different dynamic data
component > custom html tag // object property > custom attribute of the html tag. key + value pairs > key attribute name, value > value of attribute, passed automatically, after passing to the functyon, if named "props" u access props.xyz

splitting components into multiple components
data path: App > ExpenseItem > ExpenseDate
data is passed from parent component to child component so no need to import data to children, but need to import children to parent to pass the data lol
however, need to import CSS files directly to children

you can create a component and wrap it around another one like a normal html tag, but it has to be configured:
"props.children prop" - this built in prop is always passed to a component by default,?? remember to create classes in the wrapper component??

-------- 04 State and Events -----------------

on all built in HTML elements we have access to native DOM events. Instead of adding an event listener like in vanilla, we add a "prop" to the html element - an "attribute". All the props are "on+xyz" f ex onClick for click. Just the prop adds an event listener, then define what after the event. All the props want a function assigned but with no "()". We just point at it.

State - to update DOM components after they've been rendered so they react to events etc. to do it> import {useState} from 'react'. Then INSIDE the component function we call 'useState()'. We pass it a value and it creates a "special" value and returns a function that we can call and assign a value to that variable. useState() returns an ARRAY in which 1st value is the variable/value, 2nd is an updating function. Can put those in 2 variables by array destructuring.
event>variable and function returned>component updated
Each component instance has its own state

Hooks - Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

even handler functions get the event value in function arguments

possible to have multiple state pieces per component, can call useState multiple times, can use ONE state instead -> by passing an OBJECT as a value, and then have to update all values so they aren ot lost
whenever you update state and have to depend on previous state
React schedules state update so if u use the "bad" approach in line 19 of ExpenseForm, you may depend on an outdated state

data binding

props can only be passed from parent to child, cant skip components

passing data up through props - passing a function from parent to child via props and calling the function in child with parameters
