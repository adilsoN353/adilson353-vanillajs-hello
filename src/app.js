/* eslint-disable */

  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  function generateDomains(pronoun, adj, noun, extensions) {
    let domains = [];
    for (let primero of pronoun) {
      for (let segundo of adj) {
        for (let tercero of noun) {
          for (let ext of extensions) {
            let domain = primero + segundo + tercero + ext;
           console.log(domain);
          }
        }
      }
    }
    return domains;
  }

  let generatedDomains = generateDomains(pronoun, adj, noun, extensions);
  console.log(generatedDomains);

  generatedDomains.forEach(function(domain) {
    console.log(domain);
  });

