var mini = true;

function toggleSidebar() {
  if (mini) {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    moveSocials();
    this.mini = false;
  } else {
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    moveSocials();
    this.mini = true;
  }
}

function moveSocials(){
  if(mini){
    document.getElementById("email").style.marginTop = "100px";
    document.getElementById("insta").style.marginLeft = "80px";
    document.getElementById("insta").style.marginTop = "-65px";
    document.getElementById("twit").style.marginLeft = "148px";
    document.getElementById("twit").style.marginTop = "-65px";

    document.getElementById("myContacts").bottom = "80px";
  }else {
    document.getElementById("email").style.marginTop = "0"
    document.getElementById("insta").style.marginLeft = "12px";
    document.getElementById("insta").style.marginTop = "0";
    document.getElementById("twit").style.marginLeft = "12px";
    document.getElementById("twit").style.marginTop = "0";
  }
}
