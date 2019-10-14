
//import domainAuth from './domainAuth';
//var domainAuth = require('./domainAuth');

function getDomainGroupsAuth(service, auth, domain, callback) {
    /*console.log('Carregant grups del domini...');
    var domaingroups = {};
  
    service.groups.list({
      auth: auth,
      customer: 'my_customer',
      maxResults: 100000
    }, function(err, response) {
      if (err) {
        console.log("L'API ha retornat un error: " + err);
        return;
      }
  
      var groups = response.groups;
      var membersok = 0;
      for (var i = 0; i < groups.length; i++) {
        // Llegim els membres d'aquest grup
        var group = groups[i];
  
        // Carregam nomes grups de alumnat, equip educatiu i tutors
        if (group.email.startsWith("alumnat.") || group.email.startsWith("ee.") || group.email.startsWith("tutors")) {
          // We read the members of this group

        } else {
          membersok++;
        }
      }
    });*/
  }


  function getDomainGroups(domain, callback) {
    /*domainAuth.getDomainAuthorization(function(service, auth) {
       // getDomainGroupsAuth(service, auth, domain, callback);
    })*/
  }
  
  module.exports = {
    getDomainGroups: getDomainGroups
  }