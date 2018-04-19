import fetch from './fetch'
import { physics } from './config'
export function getTest(
    code
) {
    return fetch({ method: 'GET', url: `${physics}/data-platform-2/infocode/query_property?type=${code}` })
}