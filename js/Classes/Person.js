/* Definition of Class: People,
    - Used for storing, processing and displaying team member details. 
  
  Written by Andrew Bates for ICLR March 2019.
    - Additional contributions:
        -
*/

class Person    {
    // Class variables:
    valid = true;
    
    // College username - unique identifier:
    username;
    
    prename;
    surname;

    nRoles;         // Number of roles person has
    roles;          // List of roles
    roleDesc;       // Dictionary relating role name to role description

    imgDir = "images/";     // Path to relevant images folder
    img1;                   // Primary image filename
    img2;                   // Secondart image filename (optional)

    constructor(ele)   {
        // Constructor functions role is to parse data from an xml <person> tag, ele into the class.

        /* Input data validation, ele must: 
            - Be of the correct data type,
                * Check node type = 1 - element node type*
                * Other node types will return an integer from 2-12^ *
                * Other datatypes will return "undefined"
            - Be a tier 2 element (where tier 1 is the root element <people>)
                * Check parent nodetype = 9 - document node type *

            (^ node types: https://www.w3schools.com/xml/dom_nodetype.asp)
        */     
        
        
        // Validation of ele:
        if (ele != undefined)   {
            if (!ele.nodeType === 1)    {
                this.valid = false;

                console.log("Invalid node type parsed to instance of Person class - instanced deemed invalid.");
                console.log("Node of type: " + ele.nodeType + " parsed.");
            }
        }   
        else    {
            this.valid = false;
            
            console.log("Item parsed to instance of Person class not a valid node object - instance deemed invalid.");
        }
        
        if (ele.parentNode != undefined && !ele.parentNode.nodeType === 9)  {
            this.valid = false;

            console.log("Node parsed to instance of Person class is not a member of a tier 2 element - instance deemed invalid.");
        }

        // Loop through child nodes:
        var childs = ele.childNodes;
        //console.log(childs.length);
        
        for (var i = 0; i < childs.length; i++) {
            
            if (childs[i].nodeName != "#text")  {
                console.log(i + " " + childs[i].nodeName); //+ " " + childs[i].textContent    
                switch (childs[i].nodeName)   {
                    case "name":
                        if (this.valid === true)    {this.valid = this.setPrename(childs[i].textContent);}
                        break;
                }
            }
        }
        
        // Assign member values:
        

    }

    validate(ele)  {
        // Data validation function goes here:
    }

    // Define getter functions:
    isValid()  {
        // Whilst usually we would start getter functions with 'get', 'isValid' conveys the behaviour of the function better.
        return this.valid;
    }

    get prename()    {
        // Sample getter function:
        return this.prename;
    }

    get surname()    {
        // Sample getter function:
        return this.surname;
    }

    // Define setter functions:
        // - strictly not necessary for our use as I don't think we will ever be setting 
        //   variable values from outside the class but good practice regardless.
    
    set prename(val)    {
        // Sample setter function:
            // - requires some data validation i.e. check names are strings etc and return 
            //   true/false based on validity:
        
        // * validation here *
        
        if (typeof val != "string") {
            return false;
        }
        
        this.prename = val;
        
        return true;
    }

    set surname(val) {
                // Sample setter function:
            // - requires some data validation i.e. check names are strings etc and return 
            //   true/false based on validity:
        
        // * validation here *
        
        if (typeof val != "string") {
            return false;
        }
        
        this.surname = val;
        
        return true;
    }
}
