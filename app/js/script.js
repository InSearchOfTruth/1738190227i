class Comment extends React.Component{
            
    render(){
        
        return(
         <div className="comment">
             <div className="comment-head">
               <h6>{this.props.children[0].author}</h6>
               <span>{this.props.children[0].date}</span>  
             </div>
             <div className="comment-content">
                 <p>{this.props.children[0].text}</p>
                 <div className="comment-content-tail"></div>
             </div>
         </div>
        );
    }

 }

 class CommentField extends React.Component{
     constructor(props) {
         super(props);
         var month=[
     'Января',
     'Февраля',
     'Марта',
     'Апреля',
     'Мая',
     'Июня',
     'Июля',
     'Августа',
     'Сентября',
     'Ноября',
     'Декабря',
  ];
 var today = new Date(),
 date = today.getDate() + ' '+ month[today.getMonth()-1] + ' ' + today.getHours() + ':' + today.getMinutes();
         this.state = {
         comments:[
             {author: 'Самуил',date:'13 октября 2011',text:'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'},
             {author: 'Лилия Семёновна',date:'11 октября 2011',text:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирной известный центр огранки алмазов и торговли браллианами?'},
             {author: 'Лилия Семёновна',date:'11 октября 2011',text:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'},
             {author: 'Самуил',date:'9 октября 2011',text:'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'}
         ],
         date: date
         };
     };
     eachComment = (item,i) =>{
         
         return(
             <Comment>{item} </Comment>
         )
     }
     addComment = (text) =>{
         if(this.commentInput.value && this.authorInput.value){
             
             let comment = {
                 author: this.authorInput.value,
                 date: this.state.date,
                 text: this.commentInput.value
             }
             let arr = this.state.comments;
             arr.unshift(comment)
             this.setState({comments: arr})
         }
     }
     keyPress = () =>{
        if(event.ctrlKey && (event.keyCode==13 || event.keyCode==10) ){
            this.addComment()
        }
         
         
     }
     render(){
         return(
             <div>
                     <div className="comments-list">
                         <div className="comments-list-overflow">
                         {this.state.comments.map (this.eachComment)}
                         </div>
                     </div>
                     <div className="comments-inputs">
                         <textarea type="text" onKeyDown={this.keyPress} placeholder="Введите комментарий" className="input-comment" ref={(input) => { this.commentInput = input; }}/> 
                         <input type="text" placeholder="Введите свое имя" className="input-author" ref={(input) => { this.authorInput = input; }}/>
                         <button onClick={this.addComment.bind(null,)} class="input-btn">Написать консультанту</button>  
                     </div>
             </div>
         )
     }
 }
 const place = document.getElementById('comments-field')
 ReactDOM.render(<CommentField/>, place)