import RequestService from './RequestService';

const SteamService = {

    //Call each separate STEAM service 
    userInformationService: request => {
       return RequestService.getService(request);
        //Return the promise as required. 
    },
    userStatsService: request => {
       return RequestService.postService(request);
        //return promise as required
    },
    webNewsService: request => {
        return RequestService.postService(request);
    },
}

export default SteamService;