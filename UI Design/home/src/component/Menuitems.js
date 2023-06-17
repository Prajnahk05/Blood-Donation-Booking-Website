export const Menuitems = [
    {
        title : "Home",
        url : "/",
        className : "nav-links"
    },
    
    {
        title : "Learn",
        url : "/learn",
        className : "nav-links",

        subMenuItems: [
            {
              title: "About Blood",
              url: "learn/AboutBlood",
              className: "sub-menu-links"
            },
            
            {
              title: "Blood and its Components",
              url: "learn/Donation",
              className: "sub-menu-links"
            },
            {
              title: "Indication for Transfusion",
              url: "learn/IOT",
              className: "sub-menu-links"
            },
            {
              title: "Maintenance of Hemoglobin Level",
              url: "learn/MOHL",
              className: "sub-menu-links"
            }
          ]
    
    },
    
    {
        title : "Blood Donation",
        url : "/eligibility",
        className : "nav-links",

        subMenuItems: [
          {
            title: "About Blood Donation",
            url: "eligibility/ABD",
            className: "sub-menu-links"
          },
          
          {
            title: "Blood Donation Process and Awareness",
            url: "eligibility/BDPA",
            className: "sub-menu-links"
          },
      
        ]
  
  
    },
    

    {
        title : "Sign Up",
        url : "/Signup",
        className : "nav-links-mobile",
    },
    
    
]