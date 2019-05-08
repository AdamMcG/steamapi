import RequestService from 'RequestService';

const SteamService = {

    //Call each separate STEAM service 
    userInformationService: request => {
        RequestService.getService(request);
        //Return the parsed data as per requirement. 
    },
    userStatsService: request => {
        RequestService.postService(request);
    },
    webNewsService: request => {
        RequestService.postService(request);
    },
}