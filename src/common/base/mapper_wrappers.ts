export type TMappers<TDom, TApi> = {
    apiToDom: (item: TApi) => TDom;
    domToApi: (item: TDom) => TApi;
};

export type TWrappers<TDom, TDAL> = {
    dalToDom: (item: TDAL) => TDom;
    domToDal: (item: TDom) => TDAL;
};
