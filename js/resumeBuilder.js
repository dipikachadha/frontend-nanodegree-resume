var bio = {
    "name" : "Dipika Chadha",
    "role" : "Web Developer",
    "contacts" : {
        "mobile":"987654321",
        "email":"dipika.chadha@gmail.com",
        "github":"https://github.com/dipikachadha",
        "location":"North Carolina, United States"
    },
    "welcomeMessage": "Hello, This is my Resume",
    "skills" : ["HTML", "CSS", "Bootstrap", "JS", "SQL", "Visual Basic"],
    "biopic" : "images/fry.jpg"
};

var education = {
  "schools" :  [
      {
        "name": "Central School",
        "location":"India",
        "degree" :"SSC",
        "majors" :["Maths","Physics","Chemistry"],
        "dates" : "24-11-2006"
      },
      {
        "name" : "RGPV",
        "location":"India",
        "degree" :"BTech",
        "majors" : "Electrical & Eclectronics",
        "dates" : "24-06-2010"
      }
  ],
  "onlineCourses" : [
      {
        "title" : "Front-end nanodegree",
        "school" : "Udacity",
        "dates" :"1 month",
        "url" :"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
      }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "Allahabad Bank India",
      "title" : "Assistant Manager",
      "location" : "India",
      "dates" : "In Progress",
      "descripton" : ["Credit Monitoring", "Risk Management","Operations"]
    }
  ]
};

var projects  = {
  "projects" : [
    {
      "title": "Building Portfolio",
      "dates": "10 days",
      "description": "Portfolio",
      "images": ["images/197x148.gif"]
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").append(formattedbioPic);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#topContacts , #footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts , #footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  $("#topContacts , #footerContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts , #footerContacts").append(formattedLocation);
  var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedwelcomeMessage);

  $("#header").append(HTMLskillsStart);
  for(var i = 0;i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append(formattedSkills);
  }
};

education.display = function() {
  for(var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedschoolTitle = formattedschoolName + formattedschoolDegree;
    $(".education-entry:last").append(formattedschoolTitle);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedschoolDates);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $(".education-entry:last").append(formattedschoolMajor);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedLocation);
  }

  $("#education").append(HTMLonlineClasses);
  for(i = 0; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineName = HTMLschoolName.replace("%data%", education.onlineCourses[i].school);
    var formattedOnlineDegree = HTMLschoolDegree.replace("%data%", education.onlineCourses[i].title);
    var formattedOnlineTitle = formattedOnlineName + formattedOnlineDegree;
    $(".education-entry:last").append(formattedOnlineTitle);
    var formattedOnlineDates = HTMLschoolDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedOnlineURL);
  }
};

work.display  = function () {
  for(var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].descripton);
    $(".work-entry:last").append(formattedDescription);
  }
};

projects.display = function () {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[i].images.length > 0) {
      for (var image in projects.projects[i].images) {
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();

function locationizer(work_obj) {
  var locationArray = [];
    for(var job in work_obj.jobs) {
      var newLocation = work_obj.jobs[job].location;
      locationArray.push(newLocation);
    }
    return locationArray();
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
