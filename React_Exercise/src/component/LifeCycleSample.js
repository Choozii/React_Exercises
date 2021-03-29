import React, { Component } from 'react';

class LifeCycleSample extends Component {
   state = {
       number : 0,
       color : null,
   }
   
   myRef = null;

   constructor(props){
       super(props);
       console.log("constructor");
   }

   //props로 받아온 값을 state에 동기화
   //컴포넌트가 마운트 될 때, 업데이트 될 때 호출
   static getDerivedStateFromProps(nextProps, prevState){
       console.log('getDerivedStateFromProps');
       if(nextProps.color !== prevState.color){
           return { color : nextProps.color };
       }
       return null;
   }
   
   //첫 렌더링을 다 마친 후 실행
   componentDidMount(){
       console.log('componentDidMount');
   }
   
   //props, sate를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메소드
   shouldComponentUpdate(nextProps, nextState){
       console.log('shouldComponentUpdate', nextProps, nextState);
       return nextState.number % 10 !== 4;
   }

   componentWillMount(){
       console.log('componentWillMount');
   }
   
   handleClick = () =>{
       this.setState({
           number : this.state.number + 1
       })
   }

   //render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
   getSnapshotBeforeUpdate(prevProps, prevState){
       console.log('getSnapshotBeforeUpdate');
       if(prevProps.color !== this.props.color){
           //DOM에 변화가 일어나기 직전의 속성을 snapshot으로 반환
           return this.myRef.style.color;
       }
       return null;
   }

   //리렌더링을 완료 후 실행
   componentDidUpdate(prevProps, prevState, snapshot){
       console.log('componentDidUpdate', prevProps, prevState);
       if(snapshot){
           console.log('업데이트 되기 직전 색상 : ', snapshot);
           //getSnapshotBeforeUpdate에서 반환한 값이 있다면 전달받을 수 있음
       }
   }

    render() {
    
        console.log("render");
    
        const style = {
            color : this.props.color
        }

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>        
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}


export default LifeCycleSample;

/*
function getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  class App extends Component {
   
    state = {
      color : '#000000'
    }
  
    handleClick = () =>{
      this.setState({color:getRandomColor()});
    }
    render(){
      return (
      <>
      <button onClick={this.handleClick}>랜덤 색상</button>
      <ErrorBoundary>
        <LifeCycleSample color={this.state.color}/>
      </ErrorBoundary>
      </>
        )
    }
    
  }*/