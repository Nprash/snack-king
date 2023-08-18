# Namaste React


# parcel
- dev build dependencies
- dev build and production build
- local server- creats
- HMR- hot module replacement (refreshes data as soon as enters)

- uses file watching algorithm - written in c++
- caching thngs for you - faster builds 

- image optimization
- minification coded file 
- bundling
- compressing
- consistent Hashing
- code splitting
- differential bundling (to support different type of older browers)
- diagnostics
- Error Handling
- hosts in HTTPS
- Tree shaking --- means remove commented lines, unused code

# READ parcel.org documentation


# namaste food

 <!-- header
 - logo
 -nav items

*body
 -search
 -Restaurant cards
    -img
    -name,-ratings, -cussions, delivery time
    
 -crads

* footer
 -Links
 -address
 -contact -->


# Two types of Export/Import

1. Default export/import :- 

 - export default (component nanme)
 - import (component name) from "path name"


2. Named Export/Import:-

 - export const component
 - import {component name} from "path"
 
 # React Hooks
 - (Normal js utility function)
 - useState() -  super powerful STATE variable

   to track a viariable updation )const [name, setName] = useState("hello")
   at first name  = "hello"
   to update the name variable we use setName("hii")

 - useEffect() ----> after rendering a component useEffect will apply
  - useEffect() takes 2 arguments: 1) callback function-arrow function
                                   2) dependency Array
 - this callback funtion wil be called after render our main component
 - useEffect(()=>{console.log("wooh")}, [])

