let commentIcon = document.getElementById('add-comment-icon');

let flag=false
commentIcon.addEventListener('click',function(){
    if(!flag){
        var textArea = document.createElement('textarea');
        textArea.className='review-comment';
        textArea.rows="3";
        textArea.placeholder="Write your review here..."
        document.getElementById("comment-textbox").appendChild(textArea);

        var btn=document.createElement('input');
        btn.type="submit"
        btn.value="POST"
        btn.id="post-comment"
        document.getElementById("comment-textbox").appendChild(btn);
        
        var cancelbtn=document.createElement('input');
        cancelbtn.type="submit"
        cancelbtn.value="CANCEL"
        cancelbtn.id="cancel-comment"
        cancelbtn.addEventListener('click',function(){
            document.querySelector('.review-comment').remove();
            cancelbtn.remove();
            btn.remove();
            flag=false;
        })
        document.getElementById("comment-textbox").appendChild(cancelbtn);
        flag=true; 
    }
})

let viewComments=document.getElementById('view-comments');

viewComments.addEventListener('click',function(){
    let commentsContainer = document.querySelector('.comments-container');
    commentsContainer.classList.toggle('active');
})





