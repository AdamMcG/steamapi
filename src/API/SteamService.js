import RequestService from './RequestService';

const SteamService = {
    userInformationService: request => { 
        const url = `${request.url}/ISteamUser/GetPlayerSummaries/v0002/`;
        request.url = url;
        return RequestService.getService(request);
        //Return the promise as required. 
    },
    userFriendInformationService: request => {
        const url = `${request.url}/ISteamUser/GetFriendList/v0001/`;
        request.url = url;
        return RequestService.getService(request);
    },
    //TODO: Modify service to handle specific endpoints separately - perhaps append the function call 
    userStatsServiceForGames: request => {
        const url = `${request.url}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/`;
        request.url = url;
        return RequestService.getService(request);
        //return promise as required
    },
    webNewsInformationService: request => {
        const url = `${request.url}/ISteamNews/GetNewsForApp/v0002/`;
        request.url = url;
        return RequestService.getService(request);
    },
    supportedAPIService: request => {
        const url = `${request.url}/ISteamWebAPIUtil/GetSupportedAPIList/v0001/`;
        request.url = url;
        return RequestService.getService(request);
    },
    playerInformationService: request => {
        const url = `${request.url}/IPlayerService/${request.endpoint}/`
        request.url = url;
        return RequestService.postService(request); 
    },
    playerOwnedGameService: request => {
        const url = `${request.url}/IPlayerService/GetOwnedGames/v0001/`;
        request.url = url;
        return RequestService.getService(request);
    }
}

export default SteamService;