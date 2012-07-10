function hideEverything() {
	$('.torrent_wrapper').fadeOut(100);
	$('.magnet_tools').fadeOut(100);
	$('.magnet-list_wrapper').fadeOut(100);	
	$('.add-site').fadeOut(100);
}
function showGadget() {
  $('.torrent_wrapper').delay(100).fadeIn(300);
	$('.magnet_tools').delay(100).fadeIn(300);
	$('.magnet-list_wrapper').delay(100).fadeIn(300);	
}
function showAddSite() {
  hideEverything();
  $('.add-site').delay(100).fadeIn(300);
}
function showAddUrl() {
  hideEverything();
  $('.add-url').delay(100).fadeIn(300);
}
function showAddFile() {
  hideEverything();
  $('.add-file').delay(100).fadeIn(300);
}
function showTorrentSettings() {
  hideEverything();
  $('.settings_torrents').fadeIn(300);
}
function showOnboarding() {
  $('.onboarding').fadeIn(300);
}
function hideOnboarding() {
  $('.onboarding').fadeOut(100);
}
function meatySearch() {
  
}
$(document).ready(function(){
	$('.magnet_add-site').click(function(){
	   showAddSite();
	});
	$('.torrent_settings').click(function(){
	   showTorrentSettings()
	});
	$('.add-site .button_url').click(function(){
     hideEverything();
     showGadget();
     $('.mininova').delay(100).fadeIn(300);
	});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	    console.log(tabs[0].url);
        url = tabs[0].url //this is the url of the current active tab
        if (url == "http://www.mininova.org/") {
          showAddSite();
          $('.site_link').val('www.mininova.org')
          }
        chrome.browserAction.getBadgeText({tabId:tabs[0].id}, function(badge){
            //badeg is the current badge for the active tab
            })
        });
});

