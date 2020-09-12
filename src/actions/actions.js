export function UPasn()
{
    return {type:"INCREMENT"}
}
export function UP(){
    return dispatch=>dispatch(UPasn())
}