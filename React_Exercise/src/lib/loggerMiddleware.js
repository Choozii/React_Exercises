const loggerMiddleWare = store => next => action => {

    //next 파라미터는 함수 형태
    //next(action)을 호출했을 때 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고
    //만약 그 다음 미들웨어가 없으면 리듀서에게 액션을 넘겨줌

    console.group(action && action.type);
    console.log("이전 상태", store.getState());
    console.log("액션", action);
    next(action);
    console.log("다음 상태", store.getState());
    console.groupEnd();
}

export default loggerMiddleWare;