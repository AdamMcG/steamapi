import RequestService from './RequestService';

const SteamService = {
    userInformationService: request => { 
        const url = `${request.url}/ISteamUser/GetPlayerSummaries/v0002/`;
        request.url = url;
        return RequestService.getService(request);
        //Return the promise as required. 
    },
    //TODO: Modify service to handle specific endpoints separately - perhaps append the function call 
    userStatsService: request => {
        const url = `${request.url}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/`;
        request.url = url;
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