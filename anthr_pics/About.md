# Anthr_pics exercise 

___Vanilla JavaScript___ • ___HTML___ • ___CSS___

> open ***index.html*** in browser and enter an ***`sid`***, ***`eid`*** and ***`version`*** number in form


## Anthropics Software:

1. PortraitPro (sid: PP)
2. PortraitPro Body (sid: PPB)
3. LandscapePro (sid: LP)
4. Smart Photo Editor (sid: SPE)


## Edition Ids

-  Standard Edition (eid: Std)
-  Trial Version (eid: StdTrial)
-  Studio Version (eid: Studio)

### Sample version

- 18.3.2




#### step 1

- rename index.txt to index.js √
- open index.html in browser √
- it shows `output here` in browser √

#### step 2

- console shows error message `cannot set property innerHTML of null`
- added `DOMContentLoaded` event listener to make sure changes are only
  written once the page has loaded


#### step 3

- Give params 
    sid 'PPB'
    eid 'Std'
    version '2.3.1'

- it should return 'PortraitPro Body (Standard Edition) v2.3.1'  √


#### step 4

- new software name 'FoodscapePro'
- new sid 'FP'
- given a sid without an eid returns 'to be written' √

#### step 5

- internal releases have 4 segments  
    ex: "2.3.0.1"
- public releases have 3 segments
    ex: "2.3.1"

- fn `is_internal_release`
    takes 1 param type string
    returns a boolean   √

#### step 6

-  update `generate_software_description` to include internal releases
-  should return similar to  
    `PortraitPro Body (Standard Edition) v2.3.0.3 [internal]`  √

#### step 7

- params: 'software_id', 'edition_id' and version
- fetch the params from an html form √

#### step 8
- refactored code √
- created helper functions √
- added general styles file √


#### how to
1. enter software id
2. enter edition id
3. enter version
4. submit form to render information on page
    -  if no software id match returns 'to be written'
    -  if no edition id match returns 'to be written'
    -  software id / edition id required fields ()
    -  version not required and if none entered it defaults to v1.0.0
    -  assuming ids need to be case sensitive

5. other things that might need to be improved:
    -    input data validation