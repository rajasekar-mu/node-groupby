let OutputA = [{
    "module": "nodejs",
    "viewDefaults" : {      
      "login-app":"system",
      "domain-app":"user"
    }
  },
  {
    "module": "java",
    "viewDefaults" : {      
      "cloud-config":"system"
    }
  }];

 let OutputB = [{
    "module": "nodejs",
    "viewDefaults" : {
      "domain-app":"user"
    }
  },
  {
    "module": "java",
    "viewDefaults" : {      
      "cloud-config":"system"
    }
  }];

  let OutputC = [{
    "module": "nodejs",
    "viewDefaults" : {
      "domain-app":"user"
    }
  }];

  export {OutputA,OutputB,OutputC}