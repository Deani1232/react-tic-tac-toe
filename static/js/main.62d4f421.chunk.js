(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,function(e,a,t){e.exports={GameSquare:"GameSquare_GameSquare__3-nf9",Win:"GameSquare_Win__2cmH4",Content:"GameSquare_Content__Y5dfi",Table:"GameSquare_Table__TS1vT",TableCell:"GameSquare_TableCell__3SP1Q"}},,,,,,,,function(e,a,t){e.exports={CurrentTurn:"CurrentTurn_CurrentTurn__1yRpg",Label:"CurrentTurn_Label__3m1qJ",Value:"CurrentTurn_Value__3XxvD"}},function(e,a,t){e.exports={Button:"Button_Button__3KO29",Success:"Button_Success__3gMk1",Danger:"Button_Danger__fXxW0"}},,,function(e,a,t){e.exports={GameBoard:"GameBoard_GameBoard__WKpaQ"}},function(e,a,t){e.exports={ComponentBarItem:"ComponentBarItem_ComponentBarItem__3cYLm"}},function(e,a,t){e.exports={ComponentBar:"ComponentBar_ComponentBar__1656p"}},function(e,a,t){e.exports={ResetGame:"ResetGame_ResetGame__1smCu"}},function(e,a,t){e.exports={WinnerMessageBlock:"PlayerWinMessage_WinnerMessageBlock__1YHGZ"}},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),u=(t(23),t(5)),i=t(6),s=t(9),o=t(8),m=function(e){return e.children},d=function(e){return r.a.createElement(m,null,r.a.createElement("main",null,e.children))},f=t(3),v=t(1),y=t(14),h=t.n(y),E=t(2),_=t.n(E),p=function(e){var a=[];return!0===e.win?(a.push(_.a.GameSquare),a.push(_.a.Win)):a.push(_.a.GameSquare),r.a.createElement("div",{className:a.join(" "),onClick:e.squareClicked},r.a.createElement("div",{className:_.a.Content},r.a.createElement("div",{className:_.a.Table},r.a.createElement("div",{className:_.a.TableCell},r.a.createElement("p",null,e.value)))))},w=function(e){for(var a=[],t=Object(v.a)(e.squares),n=function(n){a.push(r.a.createElement(p,{value:t[n].value,win:t[n].win,squareClicked:function(){return e.squareClick(n)}}))},l=0;l<t;l++)n(l);return r.a.createElement("div",{className:h.a.GameBoard},e.squares.map((function(a){return r.a.createElement(p,{key:a.id+" square",value:a.value,win:a.win,squareClicked:function(){return e.squareClick(a.id)}})})))},C=t(10),g=t.n(C),b=function(e){return r.a.createElement("div",{className:g.a.CurrentTurn},r.a.createElement("p",{className:g.a.Label},"Current Turn:"),r.a.createElement("p",{className:g.a.Value},e.currentPlayer))},q=t(15),G=t.n(q),P=function(e){return r.a.createElement("div",{className:G.a.ComponentBarItem,style:{width:e.width+"%",backgroundColor:e.color}},e.children)},k=t(16),O=t.n(k),B=function(e){return r.a.createElement("div",{className:O.a.ComponentBar,style:{height:e.height}},e.children)},S=t(17),T=t.n(S),j=t(11),N=t.n(j),W=function(e){return r.a.createElement("button",{onClick:e.onClick,className:[N.a.Button,N.a[e.buttonType]].join(" ")},e.children)},x=function(e){return r.a.createElement("div",{className:T.a.ResetGame},r.a.createElement(W,{buttonType:"Success",onClick:e.resetGame},"Reset Game"))},F=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Tic-Tac-Toe"),r.a.createElement("p",null,"Games Played: ",e.gamesPlayed))},M=function(e){return r.a.createElement(B,{height:"130px",alignVertically:!0},r.a.createElement(P,{color:"#ffa83e",width:100/3},r.a.createElement(F,{gamesPlayed:e.gamesPlayed})),r.a.createElement(P,{color:"#ffa83e",width:100/3},r.a.createElement(B,null,r.a.createElement(x,{resetGame:e.resetGame}))),r.a.createElement(P,{color:"#ffa83e",width:100/3},r.a.createElement(b,{currentPlayer:e.currentPlayer})))},I=t(18),R=t.n(I),H=function(e){return r.a.createElement("div",{className:R.a.WinnerMessageBlock},r.a.createElement("p",null,"WINNER: ",e.winner))},L=function(e){return r.a.createElement(B,{height:"130px",alignVertically:!0},r.a.createElement(P,{color:"#74ff99",width:30},r.a.createElement(F,{gamesPlayed:e.gamesPlayed})),r.a.createElement(P,{color:"#74ff99",width:40},r.a.createElement(H,{winner:e.winner})),r.a.createElement(P,{color:"#74ff99",width:30},r.a.createElement(W,{onClick:e.resetGame},"New Game")))},X=function(e){return r.a.createElement("div",null,""!==e.winner?r.a.createElement(L,{winner:e.winner,resetGame:e.resetGame,gamesPlayed:e.gamesPlayed}):r.a.createElement(M,{currentPlayer:e.currentPlayer,resetGame:e.resetGame,gamesPlayed:e.gamesPlayed}))},D=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={currentPlayer:"X",winner:"",squares:[{id:0,value:"",win:!1},{id:1,value:"",win:!1},{id:2,value:"",win:!1},{id:3,value:"",win:!1},{id:4,value:"",win:!1},{id:5,value:"",win:!1},{id:6,value:"",win:!1},{id:7,value:"",win:!1},{id:8,value:"",win:!1}],gamesPlayed:0},e.squareClickHandler=function(a){if(""===e.state.winner){var t=Object(v.a)(e.state.squares),n=e.state.currentPlayer,r=e.state.currentPlayer;""===t[a].value&&(t[a].value=n,n="X"===n?"O":"X",e.setState({squares:t,currentPlayer:n})),e.checkForWin(r)&&e.setState({winner:r})}},e.possibleWins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],e.checkForWin=function(a){var t,n=Object(v.a)(e.state.squares),r=Object(f.a)(e.possibleWins);try{for(r.s();!(t=r.n()).done;){var l,c=t.value,u=!0,i=Object(f.a)(c);try{for(i.s();!(l=i.n()).done;){n[l.value].value!==a&&(u=!1)}}catch(m){i.e(m)}finally{i.f()}if(u){var s,o=Object(f.a)(c);try{for(o.s();!(s=o.n()).done;){n[s.value].win=!0}}catch(m){o.e(m)}finally{o.f()}return e.setState({squares:n}),!0}}}catch(m){r.e(m)}finally{r.f()}return!1},e.checkForDraw=function(){},e.resetGameHandler=function(){var a=Object(v.a)(e.state.squares);if(e.isOneSquareOrMoreFilled()){var t=e.state.gamesPlayed;e.setState({gamesPlayed:t+=1})}var n,r=Object(f.a)(a);try{for(r.s();!(n=r.n()).done;){var l=n.value;l.value="",l.win=!1}}catch(c){r.e(c)}finally{r.f()}e.setState({squares:a,currentPlayer:"X",winner:""})},e}return Object(i.a)(t,[{key:"isOneSquareOrMoreFilled",value:function(){var e,a=Object(v.a)(this.state.squares),t=Object(f.a)(a);try{for(t.s();!(e=t.n()).done;){if(""!==e.value.value)return!0}}catch(n){t.e(n)}finally{t.f()}return!1}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(X,{currentPlayer:this.state.currentPlayer,resetGame:this.resetGameHandler,winner:this.state.winner,gamesPlayed:this.state.gamesPlayed}),r.a.createElement("div",{style:{height:"40px"}}),r.a.createElement(w,{squareClick:this.squareClickHandler,squares:this.state.squares}))}}]),t}(n.Component),V=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(D,null)))}}]),t}(n.Component),J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),J()}],[[24,1,2]]]);
//# sourceMappingURL=main.62d4f421.chunk.js.map