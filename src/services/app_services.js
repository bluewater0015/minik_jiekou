
import RequestService from './base_services';

import serverConfig from '../config';
const serviceUrl = serverConfig.server.main_url;
console.log('serviceUrl',serviceUrl);

function makeUrl(url) {
    if(url){
        return serviceUrl + url;
    }
    return serviceUrl;

}
export default function getList(options) {
    return RequestService.get(
        //makeUrl('api/vod/song/suggest?'),
        //makeUrl('task/getTaskSubjectList?'),
        makeUrl('Xb4JaRN2399c52479960e047e9f2ba729d77c3c2ba747cf?'),
        options
    )
}