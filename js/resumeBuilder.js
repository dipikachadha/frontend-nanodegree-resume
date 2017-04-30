// /*
// This is empty on purpose! Your code to build the resume will go here.
//  */



var bio = {
    "name" : "Dipika Chadha",
    "role" : "Web Developer",
    "contacts" : {
        "mobile":"987654321",
        "email":"dipika.chadha@gmail.com",
        "github":"link",
        "location":"United States"
    },
    "Welcomemsg": "Hello, This is my Resume",
    "skills" : ["HTML", "CSS", "JAVASCRIPT"],
    "biopic" : "images/fry.jpg"
};

var education = {
  "school" :  [
      {
        "name": "Central School",
        "location":"India",
        "degree" :"SSC",
        "major" :["Maths","Physics","Chemistry"],
        "dates" : "24-11-2006"
      },
      {
        "name" : "RGPV",
        "location":"India",
        "degree" :"BTech",
        "major" : "Electrical & Eclectronics",
        "dates" : "24-06-2010"
      }
  ],
  "onlineCourses" : [
      {
        "degree" : "Front-end nanodegree",
        "name" : "Udacity",
        "Dates" :"1 month",
        "URL" :"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
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
      "images": ["images/blue_rose_1x.jpeg","images/pink_rose_1x.jpeg"]
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
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.Welcomemsg);
  $("#header").append(formattedMessage);
};
bio.display();


education.display = function() {
  for(var i = 0; i < education.school.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%", education.school[i].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.school[i].degree);
    var formattedschoolTitle = formattedschoolName + formattedschoolDegree;
    $(".education-entry:last").append(formattedschoolTitle);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.school[i].dates);
    $(".education-entry:last").append(formattedschoolDates);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.school[i].major);
    $(".education-entry:last").append(formattedschoolMajor);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[i].location);
    $(".education-entry:last").append(formattedLocation);
}

    $("#education").append(HTMLonlineClasses);
    for(var i = 0; i < education.onlineCourses.length; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedschoolName = HTMLschoolName.replace("%data%", education.onlineCourses[i].name);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.onlineCourses[i].degree);
      var formattedschoolTitle = formattedschoolName + formattedschoolDegree;
      $(".education-entry:last").append(formattedschoolTitle);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", education.onlineCourses[i].Dates);
      $(".education-entry:last").append(formattedschoolDates);
      var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].URL);
      $(".education-entry:last").append(formattedonlineURL);
    }
};
education.display();


work.display  = function () {
  for(var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].descripton);
    $(".work-entry:last").append(formattedDescription);
  }
};
work.display();


if (bio.skills.length>0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkills);
}


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
      for (image in projects.projects[i].images) {
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  }
};
projects.display();


function locationizer(work_obj) {
  var locationArray = [];
    for(job in work_obj.jobs) {
      var newLocation = work_obj.jobs[job].location;
      locationArray.push(newLocation);
    }
    return locationArray();
}

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#footerContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#footerContacts").append(formattedLocation);


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
