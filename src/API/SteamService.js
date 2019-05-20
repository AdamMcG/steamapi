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
        const url = `${request.url}/ISteamNews/GetNewsForApp/v0002/`;
        request.url = url;
        return RequestService.getService(request);
    },
    supportedAPIService: request => {
        const url = `${request.url}/ISteamWebAPIUtil/GetSupportedAPIList/v0001/`;
        request.url = url;
        return RequestService.getService(request);
    }
}

export default SteamService;